"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";

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
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="flex h-screen justify-center items-center">
      <Card className="md:max-w-xl w-[90%]">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignIn.Root>
            {/*Step 1*/}
            <SignIn.Step name="start">
              <FieldGroup>
                <Clerk.Field
                  name="identifier"
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
                  <Clerk.Input hidden value={email} />
                  <Clerk.FieldError />
                </Clerk.Field>

                <SignIn.Action className={buttonVariants()} submit>
                  SignIn
                </SignIn.Action>
                <Clerk.Connection
                  name="google"
                  className={`${buttonVariants({ variant: "outline" })}`}
                >
                  Sign in with Google
                </Clerk.Connection>
              </FieldGroup>
            </SignIn.Step>

            {/*Step 2*/}
            <SignIn.Step name="verifications">
              <FieldGroup>
                <SignIn.Strategy name="email_code">
                  <h1>Check your email</h1>
                  <p>
                    We sent a code to <SignIn.SafeIdentifier />.
                  </p>

                  <Clerk.Field
                    name="code"
                    className={fieldVariants({ orientation: "vertical" })}
                  >
                    <FieldLabel>
                      <Clerk.Label>Email code</Clerk.Label>
                    </FieldLabel>
                    <Input
                      onChange={(e) => setEmailCode(e.target.value)}
                      placeholder="abc@example.com"
                      required
                    />
                    <Clerk.Input hidden value={emailCode} />
                    <Clerk.FieldError />
                  </Clerk.Field>

                  <SignIn.Action submit className={buttonVariants()}>
                    Continue
                  </SignIn.Action>
                </SignIn.Strategy>

                <SignIn.Strategy name="password">
                  <h1>Enter your password</h1>

                  <Clerk.Field name="password" className={fieldVariants()}>
                    <FieldLabel>
                      <Clerk.Label>Password</Clerk.Label>
                    </FieldLabel>
                    <Input
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <Clerk.Input hidden value={password} />
                    <Clerk.FieldError />
                  </Clerk.Field>

                  <SignIn.Action submit className={buttonVariants()}>
                    Continue
                  </SignIn.Action>
                  <SignIn.Action
                    navigate="forgot-password"
                    className={buttonVariants({ variant: "outline" })}
                  >
                    Forgot password?
                  </SignIn.Action>
                </SignIn.Strategy>

                <SignIn.Strategy name="reset_password_email_code">
                  <h1>Check your email</h1>
                  <p>
                    We sent a code to <SignIn.SafeIdentifier />.
                  </p>

                  <Clerk.Field
                    name="code"
                    className={fieldVariants({ orientation: "vertical" })}
                  >
                    <FieldLabel>
                      <Clerk.Label>Email code</Clerk.Label>
                    </FieldLabel>
                    <Input
                      onChange={(e) => setEmailCode(e.target.value)}
                      placeholder="abc@example.com"
                      required
                    />
                    <Clerk.Input hidden value={emailCode} />
                    <Clerk.FieldError />
                  </Clerk.Field>

                  <SignIn.Action submit className={buttonVariants()}>
                    Continue
                  </SignIn.Action>
                </SignIn.Strategy>
              </FieldGroup>
            </SignIn.Step>

            {/*Step 3*/}
            <SignIn.Step name="forgot-password">
              <FieldGroup>
                <h1>Forgot your password?</h1>

                <SignIn.SupportedStrategy name="reset_password_email_code">
                  Reset password
                </SignIn.SupportedStrategy>

                <SignIn.Action navigate="previous" className={buttonVariants()}>
                  Go back
                </SignIn.Action>
              </FieldGroup>
            </SignIn.Step>

            {/*Step 4*/}
            <SignIn.Step name="reset-password">
              <FieldGroup>
                <h1>Reset your password</h1>

                <Clerk.Field
                  name="password"
                  className={fieldVariants({ orientation: "vertical" })}
                >
                  <FieldLabel>
                    <Clerk.Label>New password</Clerk.Label>
                  </FieldLabel>
                  <Input
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Clerk.Input hidden value={password} />
                </Clerk.Field>

                <Clerk.Field
                  name="confirmPassword"
                  className={fieldVariants({ orientation: "vertical" })}
                >
                  <FieldLabel>
                    <Clerk.Label>Confirm password</Clerk.Label>
                  </FieldLabel>
                  <Input
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Clerk.Input hidden value={password} />
                </Clerk.Field>

                <SignIn.Action submit className={buttonVariants()}>
                  Reset password
                </SignIn.Action>
              </FieldGroup>
            </SignIn.Step>
          </SignIn.Root>
        </CardContent>
      </Card>
    </main>
  );
}
