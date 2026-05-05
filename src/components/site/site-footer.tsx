import Link from "next/link";
import { Mail, MapPin, PhoneCall } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { LogoMark } from "@/components/site/logo-mark";

const phones = ["+918082183378", "+917738588278"];
const addressLines = [
  "Beside B.D.D. Chawl No. 110, S.S. Amrutwar Marg,",
  "Worli, Mumbai – 400018",
];

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="rounded-xl shadow-sm ring-1 ring-black/5">
                <LogoMark className="h-11 w-11" />
              </div>
              <div>
                <div className="text-base font-semibold">ACIES Classes</div>
                <div className="text-xs text-muted-foreground">
                  Enhancing Knowledge Since 2010
                </div>
              </div>
            </div>
            <p className="text-sm leading-6 text-muted-foreground">
              Excellent coaching for school section (Std. V to X) with structured
              teaching, regular tests, and personal attention.
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold">Institute</div>
            <div className="grid gap-2 text-sm">
              <Link className="text-foreground/80 hover:text-foreground" href="/about">
                About
              </Link>
              <Link className="text-foreground/80 hover:text-foreground" href="/results">
                Results
              </Link>
              <Link className="text-foreground/80 hover:text-foreground" href="/courses">
                Courses
              </Link>
              <Link className="text-foreground/80 hover:text-foreground" href="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold">Contact</div>
            <div className="grid gap-2 text-sm text-foreground/80">
              {phones.map((p) => (
                <a
                  key={p}
                  className="inline-flex items-center gap-2 hover:text-foreground"
                  href={`tel:${p}`}
                >
                  <PhoneCall className="h-4 w-4" />
                  {p.replace("+91", "+91 ")}
                </a>
              ))}
              <a
                className="inline-flex items-center gap-2 hover:text-foreground"
                href="mailto:info@aciesclasses.com"
              >
                <Mail className="h-4 w-4" />
                info@aciesclasses.com
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold">Address</div>
            <div className="text-sm text-foreground/80">
              <div className="inline-flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4" />
                <span>
                  {addressLines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-2 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} ACIES Classes. All rights reserved.</div>
          <div className="flex gap-4">
            <Link className="hover:text-foreground" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-foreground" href="/terms">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

