import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
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

const signInFormSchema = z.object({
  username: z.string().min(1, "Input your username or email."),
  password: z.string().min(6, "Input your password."),
});

export type SignInData = z.infer<typeof signInFormSchema>;

interface Props {
  onSubmit: (values: SignInData) => void;
  onClickCreateAccount: () => void;
}

export default function SignInForm({ onSubmit, onClickCreateAccount }: Props) {
  const signInForm = useForm<SignInData>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const { t } = useTranslation("signin");

  return (
    <div className="flex flex-col gap-4">
      <Form {...signInForm}>
        <form
          onSubmit={signInForm.handleSubmit(onSubmit)}
          className="flex flex-col gap-y-4"
        >
          <FormField
            control={signInForm.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("usernameOrEmail")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("username")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={signInForm.control}
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

          <Button type="submit">{t("signIn.action")}</Button>
        </form>
      </Form>
      <Button variant="link" onClick={() => onClickCreateAccount()}>
        {t("dontHaveAnAccount")}
      </Button>
    </div>
  );
}
