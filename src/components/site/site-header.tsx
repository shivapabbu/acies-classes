import Link from "next/link";
import { Menu, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LogoMark } from "@/components/site/logo-mark";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
  { href: "/results", label: "Results" },
  { href: "/contact", label: "Contact" },
];

const primaryPhone = "+918082183378";
const secondaryPhone = "+917738588278";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top contact strip (dense, reference-like) */}
      <div className="border-b bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-xs">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a className="inline-flex items-center gap-2 hover:opacity-90" href={`tel:${primaryPhone}`}>
              <PhoneCall className="h-3.5 w-3.5" />
              {primaryPhone.replace("+91", "+91 ")}
            </a>
            <a className="inline-flex items-center gap-2 hover:opacity-90" href={`tel:${secondaryPhone}`}>
              <PhoneCall className="h-3.5 w-3.5" />
              {secondaryPhone.replace("+91", "+91 ")}
            </a>
          </div>
          <div className="hidden sm:block opacity-90">Enhancing Knowledge Since 2010</div>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="rounded-xl shadow-sm ring-1 ring-black/5">
              <LogoMark className="h-10 w-10" />
            </div>
            <div className="hidden sm:block text-sm font-semibold tracking-tight">
              ACIES Classes
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 transition hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Button asChild variant="outline" className="rounded-full">
              <a href={`tel:${primaryPhone}`} aria-label="Call ACIES Classes">
                <PhoneCall className="mr-2 h-4 w-4" />
                Call
              </a>
            </Button>
            <Button
              asChild
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">Enquire</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger
                render={
                  <Button variant="outline" size="icon" aria-label="Open menu" />
                }
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px]">
                <SheetHeader>
                  <SheetTitle>ACIES Classes</SheetTitle>
                </SheetHeader>
                <div className="mt-6 flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Button
                      key={item.href}
                      asChild
                      variant="ghost"
                      className="justify-start"
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </Button>
                  ))}
                </div>
                <div className="mt-6 grid gap-2">
                  <Button
                    asChild
                    className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Link href="/contact">Enquire Now</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full">
                    <a href={`tel:${primaryPhone}`}>
                      <PhoneCall className="mr-2 h-4 w-4" />
                      Call
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

