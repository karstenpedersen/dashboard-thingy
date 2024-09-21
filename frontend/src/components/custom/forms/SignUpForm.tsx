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
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";

const signUpFormSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name must be at least 1 character long.")
    .max(64, "First name should be max 64 characters long."),
  lastName: z.string().max(64, "Last name should be max 64 characters long."),
  email: z
    .string()
    .email("Must be a valid email.")
    .min(5, "Email must be at least 5 characters long.")
    .max(128, "Email should be max 64 characters long."),
  username: z
    .string()
    .min(2, "Username must be at least 2 characters long.")
    .max(64, "Username should be max 64 characters long."),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long.")
    .max(256, "Password should be max 256 characters long."),
});

export type SignUpData = z.infer<typeof signUpFormSchema>;

interface Props {
  onSubmit: (values: SignUpData) => void;
  onClickAlreadyHaveAnAccount: () => void;
}

export default function signUpForm({
  onSubmit,
  onClickAlreadyHaveAnAccount,
}: Props) {
  const signUpForm = useForm<SignUpData>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
    },
  });
  const { t } = useTranslation("signin");

  return (
    <div className="flex flex-col gap-4">
      <Form {...signUpForm}>
        <form
          onSubmit={signUpForm.handleSubmit(onSubmit)}
          className="flex flex-col gap-y-4"
        >
          <div className="flex gap-4">
            <FormField
              control={signUpForm.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("firstName")}</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={signUpForm.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("lastName")}</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={signUpForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("email")}</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@doe.co" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={signUpForm.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("username")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("username")} {...field} />
                </FormControl>
                <FormDescription>{t("usernameDescription")}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={signUpForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("password")}</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder={t("password")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">{t("signUp.action")}</Button>
        </form>
      </Form>

      <Button variant="link" onClick={() => onClickAlreadyHaveAnAccount()}>
        {t("alreadyHaveAccount")}
      </Button>
    </div>
  );
}
