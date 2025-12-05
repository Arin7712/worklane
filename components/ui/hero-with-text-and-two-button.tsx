import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link";

function Hero1() {
  return (
    <div className="w-full">
      <div className="container flex items-center justify-center h-screen lg:mx-auto">
        <div className="flex gap-8 items-center justify-center flex-col md:w-full w-[90%]">
          <div className="flex gap-4 flex-col items-center">
            <h1 className="text-5xl md:text-6xl max-w-lg align-middle tracking-tighter text-center font-regular">
              We streamline your work lane.
            </h1>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Worklane is a platform that helps you manage your work and
              projects. It&apos;s designed to be simple and intuitive, allowing you
              to focus on your work and not the hassle of managing your
              projects.
            </p>
          </div>
          <div className="flex flex-row gap-3">
              <Link href="/sign-up" className={buttonVariants()}>
              Sign up
              </Link>
            <Button size="lg" variant="outline">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero1 };
