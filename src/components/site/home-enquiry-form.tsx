"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type FormState = {
  name: string;
  phone: string;
  message: string;
};

const initialState: FormState = { name: "", phone: "", message: "" };

export function HomeEnquiryForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [error, setError] = useState<string>("");

  const canSubmit = useMemo(
    () => form.name.trim().length > 1 && form.phone.trim().length >= 8,
    [form.name, form.phone]
  );

  return (
    <div className="rounded-[2rem] border bg-background p-6 md:p-8">
      <div className="text-sm font-semibold">Enquiry form</div>
      <p className="mt-1 text-sm text-muted-foreground">
        Fill your details and we’ll contact you shortly.
      </p>

      {status === "sent" ? (
        <div className="mt-5 rounded-2xl border bg-muted/20 p-5">
          <div className="text-sm font-semibold">Thanks! We received it.</div>
          <div className="mt-1 text-sm text-muted-foreground">
            We’ll contact you soon.
          </div>
          <div className="mt-4">
            <Button
              variant="outline"
              className="rounded-full"
              onClick={() => {
                setForm(initialState);
                setStatus("idle");
                setError("");
              }}
            >
              Send another
            </Button>
          </div>
        </div>
      ) : (
        <form
          className="mt-5 grid gap-4"
          onSubmit={async (e) => {
            e.preventDefault();
            if (!canSubmit) return;
            setStatus("sending");
            setError("");
            try {
              const res = await fetch("/api/enquiry", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ ...form, city: "", message: form.message }),
              });
              const data = (await res.json()) as
                | { ok: true }
                | { ok: false; error?: string };
              if (!res.ok || !data.ok) {
                setStatus("error");
                setError("Could not submit. Please try again.");
                return;
              }
              setStatus("sent");
            } catch {
              setStatus("error");
              setError("Network error. Please try again.");
            }
          }}
        >
          {status === "error" && (
            <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-4 text-sm">
              {error}
            </div>
          )}

          <div className="grid gap-2">
            <Label htmlFor="home-name">Name</Label>
            <Input
              id="home-name"
              value={form.name}
              placeholder="Your name"
              onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="home-phone">Phone</Label>
            <Input
              id="home-phone"
              value={form.phone}
              placeholder="Your phone number"
              onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="home-message">Message</Label>
            <Textarea
              id="home-message"
              value={form.message}
              placeholder="Std / subject / any question"
              className="min-h-[110px]"
              onChange={(e) =>
                setForm((s) => ({ ...s, message: e.target.value }))
              }
            />
          </div>
          <Button
            type="submit"
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={!canSubmit || status === "sending"}
          >
            {status === "sending" ? "Submitting..." : "Submit"}
          </Button>
          <div className="text-xs text-muted-foreground">
            By submitting, you agree to be contacted regarding your enquiry.
          </div>
        </form>
      )}
    </div>
  );
}

