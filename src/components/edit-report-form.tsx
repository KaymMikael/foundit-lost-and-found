import "leaflet/dist/leaflet.css";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Calendar } from "./ui/calendar";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { fetchAddress } from "@/utils/address";
import { editReportSchema } from "@/form-schemas/form-schema";
import { UserPost } from "@/types/index.type";
import useReports from "@/hooks/useReports";
import { toast } from "sonner";
import { useNavigate } from "react-router";

interface EditReportFormProps {
  userPost: UserPost;
}

const EditReportForm = ({ userPost }: EditReportFormProps) => {
  const { post } = userPost;
  const navigate = useNavigate();
  const { setPosts, posts } = useReports();
  const form = useForm<z.infer<typeof editReportSchema>>({
    resolver: zodResolver(editReportSchema),
    defaultValues: {
      title: post.title,
      type: post.type,
      description: post.description,
      category: post.category,
      location: {
        latitude: post.location.latitude,
        longitude: post.location.longitude,
        place: post.location.place,
      },
      dateLostFound: new Date(post.dateLostFound),
    },
  });

  const onSubmit = (values: z.infer<typeof editReportSchema>) => {
    // Map through the existing posts and update the relevant post
    const updatedPosts = posts.map((p) =>
      p.post.id === post.id
        ? {
            ...p,
            post: {
              ...p.post,
              ...values,
              dateLostFound: values.dateLostFound.toISOString(),
            },
          }
        : p
    );

    // Update the state with the new posts array
    setPosts(updatedPosts);

    // Optional: Show a success toast message
    toast.success("Report Updated", {
      description: "Your report has been successfully updated.",
    });
    navigate('/dashboard')
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-[500px]"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Report title" {...field} />
              </FormControl>
              <FormDescription>
                Enter a clear title for the report.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Report description"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Provide details about the report.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select report type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="lost">Lost</SelectItem>
                  <SelectItem value="found">Found</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Select whether it's lost or found.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Caregory" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="item">Item</SelectItem>
                  <SelectItem value="pet">Pet</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>Choose item or pet.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dateLostFound"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of Lost or Found</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      type="button"
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>Pick the date of the event.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <MapContainer
                  center={[field.value.latitude, field.value.longitude]}
                  zoom={12.5}
                  className="h-80"
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker
                    draggable
                    position={[field.value.latitude, field.value.longitude]}
                    eventHandlers={{
                      dragend: async (e) => {
                        const marker = e.target;
                        const position = marker.getLatLng();
                        const address = await fetchAddress(
                          position.lat,
                          position.lng
                        );
                        field.onChange({
                          latitude: position.lat,
                          longitude: position.lng,
                          place: address,
                        });
                      },
                    }}
                  >
                    <Popup>Drag me to the correct location!</Popup>
                  </Marker>
                </MapContainer>
              </FormControl>
              <FormDescription>
                Drag the marker to specify the location.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="cursor-pointer w-full">
          Save
        </Button>
      </form>
    </Form>
  );
};

export default EditReportForm;
