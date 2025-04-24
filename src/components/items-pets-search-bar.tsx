import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { itemsPetsSearchSchema } from "@/form-schemas/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

interface ItemsPetsSearchBarProps {
  onSearch: (filters: { searchQuery: string; sortOrder: string }) => void;
}

const ItemsPetsSearchBar = ({ onSearch }: ItemsPetsSearchBarProps) => {
  const form = useForm<z.infer<typeof itemsPetsSearchSchema>>({
    resolver: zodResolver(itemsPetsSearchSchema),
    defaultValues: {
      searchQuery: "",
      sortOrder: "",
    },
  });

  const onSubmit = (values: z.infer<typeof itemsPetsSearchSchema>) => {
    onSearch(values); // Send data to parent
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col-reverse gap-4 sm:flex-row"
      >
        <div className="flex gap-2 flex-1">
          <FormField
            control={form.control}
            name="searchQuery"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input type="search" placeholder="Search..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant="outline"
            size="icon"
            className="cursor-pointer"
          >
            <Search />
          </Button>
        </div>

        <FormField
          control={form.control}
          name="sortOrder"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Select order" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default ItemsPetsSearchBar;
