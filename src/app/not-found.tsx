import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto grid max-w-3xl place-items-center px-4 py-16 md:py-24">
      <div className="w-full rounded-[2rem] border bg-muted/20 p-8 text-center md:p-12">
        <div className="text-xs font-semibold text-muted-foreground">404</div>
        <h1 className="mt-2 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Page not found
        </h1>
        <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
          The page you’re looking for doesn’t exist. Use the navigation, or go
          back to the homepage.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-2 sm:flex-row">
          <Button asChild className="rounded-full">
            <Link href="/">Go home</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

