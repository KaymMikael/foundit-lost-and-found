import { z } from "zod";

export const submitReportSchema = z.object({
  title: z
    .string()
    .nonempty("A title is required. Please provide a brief and clear title."),
  description: z
    .string()
    .nonempty(
      "A description is required. Please provide additional details about your report."
    )
    .min(
      20,
      "Description should be at least 20 characters long to provide sufficient details."
    ),
  type: z.string().nonempty("Selecting a report type is required."),
  category: z.string().nonempty("Please select a category for your report."),
  dateLostFound: z.date({
    required_error: "The date of when the item was lost or found is required.",
  }),
  location: z.object({
    latitude: z.number(),
    longitude: z.number(),
    place: z.string(),
  }),
  reportImage: z
    .any()
    .refine((file) => file instanceof File && file.type.startsWith("image/"), {
      message: "Uploading a valid image file is required.",
    }),
});

export const newProfileFormSchema = z
  .object({
    firstName: z.string().nonempty({ message: "First name is required." }),
    lastName: z.string().nonempty({ message: "Last name is required." }),
    age: z.coerce.number().min(7, { message: "Age must be at least 7 years." }),
    gender: z.enum(["male", "female"], {
      message: "Please select a gender.",
    }),
    profilePicture: z
      .any()
      .refine(
        (file) => file instanceof File && file.type.startsWith("image/"),
        {
          message: "Please upload a valid image file.",
        }
      ),
  })
  .refine((data) => data.profilePicture.size <= 5 * 1024 * 1024, {
    message: "File size must not exceed 5 MB.",
  });

export const itemsPetsSearchSchema = z.object({
  searchQuery: z.string(),
  sortOrder: z.string(),
});
