import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { Children } from "react";

const items = [
  {
    id: "online_course",
    label: "Create an online course",
  },
  {
    id: "coaching",
    label: "Create a coaching problem",
  },
  {
    id: "digital_download",
    label:
      "Create a digital download(ebook, article, template, worksheet,etc..)",
  },
  {
    id: "community_forum",
    label: "Create a community or forum",
  },
  {
    id: "pre_sell",
    label: "Create a pre-sell",
  },
  {
    id: "not_sure",
    label: "I'm not sure yet",
  },
  {
    id: "something_else",
    label: "Something else (please tell us more)",
  },
];

const FormSchema = z.object({
  ownBusiness: z.string({
    required_error: "Please select an answer to proceed.",
  }),
  identification: z.string({
    required_error: "Please select an answer to proceed.",
  }),
  content: z.string({
    required_error: "Please select an answer to proceed.",
  }),
  audienceCount: z.string({
    required_error: "Please select an answer to proceed.",
  }),
  relevantContent: z.string({
    required_error: "Please select an answer to proceed.",
  }),
  charge: z.string({
    required_error: "Please select an answer to proceed.",
  }),
  items: z
    .array(z.string())
    .max(3, { message: "You can select upto 3 options" }),
});

const DetailForm = (props) => {
  const { setValue } = props;
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [],
    },
  });

  const { toast } = useToast();

  function onSubmit(values) {
    toast("Your form is submitted");
    setValue(100);
    console.log(values);
  }

  return (
    <div className="min-w-full flex justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" w-3/5 space-y-6 "
        >
          <FormField
            control={form.control}
            name="ownBusiness"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Do you currently run an online business?</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Please choose an option.." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="option_one">
                      No, just exploring!
                    </SelectItem>
                    <SelectItem value="option_two">
                      Lorem ipsum dolor
                    </SelectItem>
                    <SelectItem value="option_three">
                      Lorem ipsum dolor
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="identification"
            render={({ field }) => (
              <FormItem>
                <FormLabel>I primarily identify as a:</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Please choose an option.." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="option_one">
                      Freelancer or Consultant (project based work)
                    </SelectItem>
                    <SelectItem value="option_two">
                      Lorem ipsum dolor
                    </SelectItem>
                    <SelectItem value="option_three">
                      Lorem ipsum dolor
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Are you already teaching or offering content online?
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Please choose an option.." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="option_one">
                      No, I'm just getting started my knowledge
                    </SelectItem>
                    <SelectItem value="option_two">
                      Lorem ipsum dolor
                    </SelectItem>
                    <SelectItem value="option_three">
                      Lorem ipsum dolor
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="audienceCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  How big is your current audience(email list, social media
                  followers, subscribers, etc..)?
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Please choose an option.." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="option_one">1 - 1,000 people</SelectItem>
                    <SelectItem value="option_two">
                      Lorem ipsum dolor
                    </SelectItem>
                    <SelectItem value="option_three">
                      Lorem ipsum dolor
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="relevantContent"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Which topic is most relevant to your business or content?
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Please choose an option.." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="option_one">Photo & Video</SelectItem>
                    <SelectItem value="option_two">
                      Lorem ipsum dolor
                    </SelectItem>
                    <SelectItem value="option_three">
                      Lorem ipsum dolor
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="charge"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Approximately how much money do you make charging for your
                  knowledge today(in courses, consulting, books, speaking,
                  etc..)? We ask this so that we can provide you with relevant
                  resources for the size and stage of your business.
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Please choose an option.." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="option_one">
                      I prefer not to answer
                    </SelectItem>
                    <SelectItem value="option_two">
                      Lorem ipsum dolor
                    </SelectItem>
                    <SelectItem value="option_three">
                      Lorem ipsum dolor
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormItem>
            <div className="mb-4">
              <FormLabel className="text-base">
                What are you hoping to do first on Teachable? (Select up to 3 to
                get started as quickly as possible)
              </FormLabel>
            </div>
            {items.map((item) => (
              <FormField
                key={item.id}
                control={form.control}
                name="items"
                render={({ field }) => {
                  return (
                    <FormItem
                      key={item.id}
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(item.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, item.id])
                              : field.onChange(
                                  field.value?.filter(
                                    (value) => value !== item.id
                                  )
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {item.label}
                      </FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))}
            {form.formState.errors.items && (
              <FormMessage>{form.formState.errors.items.message}</FormMessage>
            )}
          </FormItem>
          <FormField
            control={form.control}
            name="charge"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  How much content or training material(videos, worksheets,
                  downloads, ets..)have you already prepared?
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Please choose an option.." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="option_one">
                      None, I'm just getting started
                    </SelectItem>
                    <SelectItem value="option_two">
                      Lorem ipsum dolor
                    </SelectItem>
                    <SelectItem value="option_three">
                      Lorem ipsum dolor
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button
              type="submit"
              className="px-10 py-3 ring-1 ring-black"
              variant="outline"
            >
              Next
            </Button>
          </div>
        </form>
      </Form>
      <Button className="absolute right-0 top-full p-5" type="button">
        <QuestionMarkCircledIcon className="mr-2" />
        Help
      </Button>
    </div>
  );
};
export default DetailForm;
