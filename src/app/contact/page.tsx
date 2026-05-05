"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const phones = ["+918082183378", "+917738588278"];
const address = "Beside B.D.D. Chawl No. 110, S.S. Amrutwar Marg, Worli, Mumbai – 400018";

type FormState = {
  name: string;
  phone: string;
  city: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  city: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [error, setError] = useState<string>("");

  const canSubmit = useMemo(() => {
    return form.name.trim().length > 1 && form.phone.trim().length >= 8;
  }, [form.name, form.phone]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div className="space-y-3">
          <div className="text-xs font-semibold text-muted-foreground">
            Contact
          </div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Enquire for batches, fees, and timetable
          </h1>
          <p className="text-sm leading-7 text-muted-foreground md:text-base">
            Fill the form and we’ll contact you shortly. You can also call us
            directly.
          </p>

          <div className="mt-6 grid gap-3 rounded-3xl border bg-muted/20 p-6">
            <div className="text-sm font-semibold">Quick contact</div>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
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
              <div>{address}</div>
            </div>
            <div className="flex flex-col gap-2 pt-2 sm:flex-row">
              <Button asChild className="rounded-full">
                <a href={`tel:${phones[0]}`}>
                  Call now <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/courses">See courses</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border bg-background p-6 md:p-8">
          <div className="text-base font-semibold">Enquiry form</div>
          <p className="mt-1 text-sm text-muted-foreground">
            We only use your details to respond to your enquiry.
          </p>

          {status === "sent" ? (
            <div className="mt-6 rounded-2xl border bg-muted/20 p-5">
              <div className="text-sm font-semibold">Thanks! We got it.</div>
              <div className="mt-1 text-sm text-muted-foreground">
                We’ll contact you shortly. If it’s urgent, call us now.
              </div>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <Button asChild className="rounded-full">
                  <a href={`tel:${phones[0]}`}>Call now</a>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full"
                  onClick={() => {
                    setStatus("idle");
                    setForm(initialState);
                    setError("");
                  }}
                >
                  Send another
                </Button>
              </div>
            </div>
          ) : (
            <form
              className="mt-6 grid gap-4"
              onSubmit={async (e) => {
                e.preventDefault();
                if (!canSubmit) return;
                setStatus("sending");
                setError("");
                try {
                  const res = await fetch("/api/enquiry", {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(form),
                  });
                  const data = (await res.json()) as
                    | { ok: true }
                    | { ok: false; error?: string };
                  if (!res.ok || !data.ok) {
                    setStatus("error");
                    setError(
                      "Could not submit. Please try again or call us directly."
                    );
                    return;
                  }
                  setStatus("sent");
                } catch {
                  setStatus("error");
                  setError(
                    "Network error. Please try again or call us directly."
                  );
                }
              }}
            >
              {status === "error" && (
                <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-foreground/90">
                  {error}
                </div>
              )}
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  placeholder="Your phone number"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, phone: e.target.value }))
                  }
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="city">City (optional)</Label>
                <Input
                  id="city"
                  placeholder="City"
                  value={form.city}
                  onChange={(e) => setForm((s) => ({ ...s, city: e.target.value }))}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Which class/course are you looking for?"
                  className="min-h-[120px]"
                  value={form.message}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, message: e.target.value }))
                  }
                />
              </div>

              <Button type="submit" className="rounded-full" disabled={!canSubmit}>
                {status === "sending" ? "Submitting..." : "Submit enquiry"}
              </Button>
              <div className="text-xs text-muted-foreground">
                By submitting, you agree to be contacted regarding your enquiry.
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

