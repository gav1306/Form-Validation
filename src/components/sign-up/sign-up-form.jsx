import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "../../lib/utils";

const formSchema = z
  .object({
    fullName: z
      .string()
      .min(2, { message: "Too short" })
      .max(50, { message: "Too Long" }),
    email: z.string().email("Not valid"),
    password: z
      .string()
      .min(8, { message: "Too short" })
      .max(20, { message: "Too Long" }),
    confirmPassword: z.string(),
    termsAccepted: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const SignUpForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsAccepted: false,
    },
  });
  console.log(form.formState.errors);

  const navigate = useNavigate();

  function onSubmit(values) {
    console.log(values);
    navigate("/detail-form");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="min-w-[340px] flex flex-col gap-6 "
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input
                    className={cn(
                      form.formState.errors.fullName &&
                        "focus-visible:ring-red-400"
                    )}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address</FormLabel>
              <FormControl>
                <Input
                  className={cn(
                    form.formState.errors.email && "focus-visible:ring-red-400"
                  )}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  className={cn(
                    form.formState.errors.password &&
                      "focus-visible:ring-red-400"
                  )}
                  {...field}
                  type="password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  className={cn(
                    form.formState.errors.confirmPassword &&
                      "focus-visible:ring-red-400"
                  )}
                  {...field}
                  type="password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="termsAccepted"
          render={({ field }) => {
            const checkboxFields = {
              ...field,
              checked: field.value,
              onCheckedChange: field.onChange,
            };
            return (
              <FormItem className="flex items-center gap-2">
                <FormControl>
                  <Checkbox {...checkboxFields} />
                </FormControl>
                <FormLabel className="margin-top-0">
                  I agree to Terms Of Use and Privacy Policy
                </FormLabel>
              </FormItem>
            );
          }}
        />
        <Button type="submit" className="self-center px-8">
          Create Account
        </Button>
      </form>
    </Form>
  );
};
export default SignUpForm;
