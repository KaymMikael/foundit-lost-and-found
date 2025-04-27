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
import { submitReportSchema } from "@/form-schemas/form-schema";
import useReports from "@/hooks/useReports";
import useUser from "@/hooks/useUser";
import { Post, UserPost } from "@/types/index.type";
import { v4 } from "uuid";
import { toast } from "sonner";

const SubmitReportForm = () => {
  const { user } = useUser();
  const { setPosts } = useReports();
  const form = useForm<z.infer<typeof submitReportSchema>>({
    resolver: zodResolver(submitReportSchema),
    defaultValues: {
      title: "",
      description: "",
      location: {
        latitude: 13.980166,
        longitude: 121.102111,
        place: "bayorbor, mataas na kahoy, batangas",
      },
    },
  });

  const onSubmit = (values: z.infer<typeof submitReportSchema>) => {
    console.log("Form submitted with values:", values);
    // Extract only the desired fields from values
    const { title, description, type, category, dateLostFound, location } =
      values;

    // Construct a new post without the reportImage field
    const newReport: Post = {
      id: v4(),
      status: "active",
      title,
      description,
      type,
      category,
      dateLostFound: dateLostFound.toISOString(),
      location,
      createdAt: new Date().toISOString(),
    };

    const newUserPost: UserPost = { user, post: newReport };

    setPosts((prev) => [...prev, newUserPost]); // Include user details and new report fields
    toast.success("Success! Report Submitted", {
      description:
        "Your report has been successfully submitted. Thank you for taking the time to share your details.",
    });
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
              <Select onValueChange={field.onChange}>
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
              <Select onValueChange={field.onChange}>
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
          name="reportImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Upload Image</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => field.onChange(e.target.files?.[0])}
                />
              </FormControl>
              <FormDescription>
                Upload an image related to the report.
              </FormDescription>
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
          Report
        </Button>
      </form>
    </Form>
  );
};

export default SubmitReportForm;
