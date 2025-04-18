import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { id, User } from "@instantdb/react";
import { toast } from "sonner";
import db from "@/instantdb/database";
import { useNavigate } from "react-router";
import fileServiceInstance from "@/services/FileService";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().nonempty("First name is required"),
  lastName: z.string().nonempty("Last name is required"),
  age: z.coerce
    .number()
    .min(1, "Age must be at least 1")
    .max(120, "Age must be less than or equal to 120")
    .int("Age must be an integer"),
  gender: z.string().nonempty("Gender is required"),
  picture: z.any().optional(),
});

interface NewProfileFormProps {
  user: User;
}

const NewProfileForm = ({ user }: NewProfileFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      age: 1,
      gender: "",
    },
  });
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    const createdAt = new Date().toISOString();
    const pictureFile = values.picture;
    const { firstName, lastName, gender, age } = values;

    // check if the selected file is not an image
    if (pictureFile && !pictureFile.type.startsWith("image/")) {
      form.setError("picture", {
        message: "Invalid file type, please upload an image",
      });
      return;
    }

    try {
      const profileId = id();

      // upload the file
      const fileId = await fileServiceInstance.uploadFile(
        `${user.id}/avatar`,
        pictureFile
      );

      // link the file
      await db.transact(db.tx.profiles[profileId].link({ avatar: fileId }));

      // create a new profile and link it to user
      await db.transact([
        db.tx.profiles[profileId].update({
          firstName,
          lastName,
          gender,
          age,
          createdAt,
        }),
        db.tx.$users[user.id].link({ profile: profileId }),
      ]);

      toast.success("Profile Created", {
        description: "Profile successfully created",
      });
      navigate("/dashboard");
    } catch (e) {
      console.log(e);
      toast.error("Profile Creating Error", {
        description: "An error occurred while creating a new profile",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>Enter your first name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>Enter your last name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              <FormDescription>Enter your age.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your gender." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>Enter your gender.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="picture"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Picture</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => field.onChange(e.target.files?.[0])}
                />
              </FormControl>
              <FormDescription>Upload profile picture.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="cursor-pointer w-full"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin" />
              Please wait
            </>
          ) : (
            "Register"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default NewProfileForm;
