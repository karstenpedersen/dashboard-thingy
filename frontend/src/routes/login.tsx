import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LuMail } from "react-icons/lu";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SignInForm, { SignInData } from "@/components/custom/forms/SignInForm";
import SignUpForm, { SignUpData } from "@/components/custom/forms/SignUpForm";
import { useTranslation } from "react-i18next";

export default function LoginPage() {
  const [signIn, setSignIn] = useState(false);
  const { t } = useTranslation("signin");

  const handleSignUp = (data: SignUpData) => {
    console.log(data);
  };

  const handleSignIn = (data: SignInData) => {
    console.log(data);
  };

  return (
    <main className="min-h-dvh flex justify-center items-center">
      <Card className="mx-auto w-full max-w-md">
        {!signIn ? (
          <>
            <CardHeader>
              <CardTitle>{t("signUp.title")}</CardTitle>
              <CardDescription>{t("signUp.description")}</CardDescription>
            </CardHeader>
            <CardContent>
              <SignUpForm
                onSubmit={handleSignUp}
                onClickAlreadyHaveAnAccount={() => setSignIn(true)}
              />
            </CardContent>
          </>
        ) : (
          <></>
        )}
        {signIn ? (
          <>
            <CardHeader>
              <CardTitle>{t("signIn.title")}</CardTitle>
              <CardDescription>{t("signIn.description")}</CardDescription>
            </CardHeader>
            <CardContent>
              <SignInForm
                onSubmit={handleSignIn}
                onClickCreateAccount={() => setSignIn(false)}
              />
            </CardContent>
          </>
        ) : (
          <></>
        )}
      </Card>
    </main>
  );
}
