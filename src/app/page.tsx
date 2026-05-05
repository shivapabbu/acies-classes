import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Sparkles,
  PhoneCall,
  BookOpen,
  CalendarDays,
  MapPin,
} from "lucide-react";
import { HomeEnquiryForm } from "@/components/site/home-enquiry-form";

export default function Home() {
  const primaryPhone = "+918082183378";
  const whatsappHref =
    "https://wa.me/918082183378?text=Hello%20ACIES%20Classes%2C%20I%20want%20to%20enquire%20about%20admission%20and%20batches.";
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs font-medium text-foreground/80">
                <Sparkles className="h-4 w-4 text-primary" />
                Enhancing Knowledge Since 2010
              </div>
              <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
                ACIES Classes
                <span className="block text-primary">Std. V to X</span>
              </h1>
              <p className="max-w-xl text-pretty text-base leading-7 text-muted-foreground md:text-lg">
                Structured teaching, regular tests, and personal attention to help
                students improve scores and confidence.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  Enquire now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a
                  href={`tel:${primaryPhone}`}
                  className="inline-flex h-12 items-center justify-center rounded-full border bg-background px-7 text-sm font-semibold hover:bg-muted"
                >
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Call
                </a>
              </div>
              <div className="grid gap-2 text-xs text-muted-foreground sm:grid-cols-2">
                <div className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Worli, Mumbai
                </div>
                <div className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-primary" />
                  Mon–Sat: 8am–8pm • Sun: 10am–5pm
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border bg-muted/15 p-6 md:p-8">
              <div className="grid gap-4">
                <div className="text-sm font-semibold">Why ACIES</div>
                <div className="grid gap-3">
                  {[
                    {
                      title: "Clear concepts",
                      desc: "Strong fundamentals and exam-focused practice.",
                    },
                    {
                      title: "Weekly tests",
                      desc: "Regular evaluation with guidance to improve.",
                    },
                    {
                      title: "Personal attention",
                      desc: "Doubt solving and progress tracking.",
                    },
                  ].map((i) => (
                    <div key={i.title} className="rounded-2xl border bg-background p-4">
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <BadgeCheck className="h-4 w-4 text-primary" />
                        {i.title}
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        {i.desc}
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/courses"
                  className="inline-flex text-sm font-semibold text-primary hover:text-primary/80"
                >
                  View courses <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses overview (Agrawal-like) */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs font-semibold text-muted-foreground">
              Courses
            </div>
            <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight md:text-3xl">
              Dive into our courses today
            </h2>
          </div>
          <Link
            href="/courses"
            className="hidden text-sm font-semibold text-primary hover:text-primary/80 md:inline-flex"
          >
            View more <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Std V",
              desc: "Foundation building + discipline",
            },
            {
              title: "Std VI–VIII",
              desc: "Concept clarity + practice",
            },
            {
              title: "Std IX–X",
              desc: "Board-focused prep + tests",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-3xl border bg-background p-5 transition hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div className="text-base font-semibold">{c.title}</div>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {c.desc}
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex text-sm font-semibold text-primary hover:text-primary/80"
              >
                Enquire <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Key highlights counters */}
      <section className="border-y bg-muted/15">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { value: "2010", label: "Established" },
              { value: "Weekly", label: "Tests & feedback" },
              { value: "Std V–X", label: "School section" },
              { value: "Worli", label: "Mumbai" },
            ].map((s) => (
              <div key={s.label} className="rounded-3xl border bg-background p-5">
                <div className="text-2xl font-semibold text-primary">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shining stars (placeholder blocks) */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs font-semibold text-muted-foreground">
              Our Shining Stars
            </div>
            <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight md:text-3xl">
              Student achievements
            </h2>
          </div>
          <Link
            href="/results"
            className="hidden text-sm font-semibold text-primary hover:text-primary/80 md:inline-flex"
          >
            View all <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div
              key={idx}
              className="aspect-[4/3] rounded-3xl border bg-gradient-to-br from-primary/10 via-sky-500/10 to-cyan-500/10"
            />
          ))}
        </div>
        <div className="mt-4 text-xs text-muted-foreground">
          Upload your result photos here and I’ll replace these blocks with real
          images.
        </div>
      </section>

      {/* Results / achievements */}
      <section className="border-y bg-muted/15">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-xs font-semibold text-muted-foreground">
                Results
              </div>
              <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Real progress you can measure
              </h2>
              <p className="mt-3 text-base leading-7 text-muted-foreground md:text-lg">
                Add your toppers, score improvements, and testimonials for trust.
              </p>
              <Link
                href="/results"
                className="mt-5 inline-flex text-sm font-semibold text-primary hover:text-primary/80"
              >
                View results <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-3">
              {[
                "Weekly tests with guidance",
                "Concept clarity + exam practice",
                "Personal attention & doubt solving",
                "Consistent revision planning",
              ].map((t) => (
                <div key={t} className="rounded-3xl border bg-background p-5">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <BadgeCheck className="h-4 w-4 text-primary" />
                    {t}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry section with form (Agrawal-like) */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <div className="rounded-[2rem] border bg-gradient-to-br from-primary/10 via-sky-500/10 to-cyan-500/10 p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <div className="text-xs font-semibold text-muted-foreground">
                Start your journey
              </div>
              <h3 className="mt-2 text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                Please fill the form, our team will contact you shortly
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground md:text-base">
                Office: Beside B.D.D. Chawl No. 110, S.S. Amrutwar Marg, Worli,
                Mumbai – 400018
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${primaryPhone}`}
                  className="inline-flex h-11 items-center justify-center rounded-full border bg-background px-6 text-sm font-semibold hover:bg-muted"
                >
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Call 8082183378
                </a>
                <a
                  href="tel:+917738588278"
                  className="inline-flex h-11 items-center justify-center rounded-full border bg-background px-6 text-sm font-semibold hover:bg-muted"
                >
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Call 7738588278
                </a>
              </div>
            </div>
            <HomeEnquiryForm />
          </div>
        </div>
      </section>

      {/* WhatsApp quick action */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:bg-[#20bd59] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label="WhatsApp enquiry"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 32 32"
          className="h-5 w-5"
          fill="currentColor"
        >
          <path d="M19.11 17.66c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.84 1.05-.15.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.32-1.57-1.48-1.83-.15-.27-.02-.41.12-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.6-1.45-.82-1.99-.22-.53-.44-.46-.6-.47l-.51-.01c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.22 0 1.31.95 2.58 1.08 2.76.13.18 1.86 2.84 4.51 3.98.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.07 1.58-.65 1.8-1.28.22-.63.22-1.17.15-1.28-.06-.11-.24-.18-.51-.31zM16.04 5.33c-5.88 0-10.67 4.78-10.67 10.67 0 1.88.5 3.71 1.44 5.31L5.28 26.67l5.51-1.45c1.54.84 3.26 1.28 5.25 1.28 5.88 0 10.67-4.78 10.67-10.67S21.92 5.33 16.04 5.33zm0 19.33c-1.79 0-3.42-.49-4.86-1.34l-.35-.2-3.27.86.87-3.19-.23-.38a8.62 8.62 0 0 1-1.33-4.58c0-4.77 3.88-8.67 8.67-8.67s8.67 3.88 8.67 8.67-3.9 8.67-8.67 8.67z" />
        </svg>
        WhatsApp
      </a>
    </div>
  );
}
