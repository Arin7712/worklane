"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldGroup,
  FieldLabel,
  fieldVariants,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import { useState } from "react";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  return (
    <main className="flex h-screen justify-center items-center">
      <Card className="md:max-w-xl w-[90%]">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Enter your information below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignUp.Root>
            <SignUp.Step name="start">
              <FieldGroup>
                <Clerk.Field
                  name="username"
                  className={fieldVariants({ orientation: "vertical" })}
                >
                  <FieldLabel>
                    <Clerk.Label>Username</Clerk.Label>
                  </FieldLabel>
                  <Clerk.Input asChild>
                  <Input
                    placeholder="John Doe"
                    required
                  />
                  </Clerk.Input>
                  <Clerk.FieldError />
                </Clerk.Field>

                <Clerk.Field
                  name="emailAddress"
                  className={fieldVariants({ orientation: "vertical" })}
                >
                  <FieldLabel>
                    <Clerk.Label>Email</Clerk.Label>
                  </FieldLabel>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="abc@example.com"
                    required
                  />
                  <Clerk.Input value={email} hidden />
                  <Clerk.FieldError />
                </Clerk.Field>

                <Clerk.Field
                  name="password"
                  className={fieldVariants({ orientation: "vertical" })}
                >
                  <FieldLabel>
                    <Clerk.Label>Password</Clerk.Label>
                  </FieldLabel>
                  <Input
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Clerk.Input value={password} hidden />
                  <Clerk.FieldError />
                </Clerk.Field>

                <SignUp.Captcha />
                <SignUp.Action className={buttonVariants()} submit>
                  Create Account
                </SignUp.Action>

                <Clerk.Connection name="google" asChild>
                  <button
                    onClick={() => setIsGoogleLoading(true)}
                    className={buttonVariants({ variant: "outline" })}
                  >
                    {isGoogleLoading ? "Loading..." : "Sign up with Google"}
                  </button>
                </Clerk.Connection>
              </FieldGroup>
            </SignUp.Step>
          </SignUp.Root>
        </CardContent>
      </Card>
    </main>
  );
}
