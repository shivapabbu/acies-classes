import Link from "next/link";
import { ArrowRight, BadgeCheck, GraduationCap, LineChart } from "lucide-react";

const highlights = [
  {
    title: "Clear teaching",
    desc: "We focus on fundamentals first, then speed and exam strategy.",
    icon: GraduationCap,
  },
  {
    title: "Accountability",
    desc: "Weekly tests, analysis, and revision plans keep you on track.",
    icon: LineChart,
  },
  {
    title: "Personal attention",
    desc: "Small-batch approach with regular doubt solving.",
    icon: BadgeCheck,
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-3">
          <div className="text-xs font-semibold text-muted-foreground">
            About
          </div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            A coaching institute built around outcomes
          </h1>
          <p className="text-sm leading-7 text-muted-foreground md:text-base">
            ACIES Classes is focused on structured learning and measurable
            improvement. Our approach blends concept clarity, regular testing,
            revision discipline, and personal mentoring.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background hover:bg-foreground/90"
            >
              Talk to us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((h) => (
            <div key={h.title} className="rounded-3xl border bg-background p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-600/10 text-indigo-700">
                  <h.icon className="h-5 w-5" />
                </div>
                <div className="text-sm font-semibold">{h.title}</div>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {h.desc}
              </p>
            </div>
          ))}
          <div className="rounded-3xl border bg-gradient-to-br from-indigo-600/10 via-cyan-500/10 to-emerald-500/10 p-6 sm:col-span-2">
            <div className="text-sm font-semibold">What you can expect</div>
            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              <li>Daily practice guidance</li>
              <li>Weekly tests & reports</li>
              <li>Revision notes</li>
              <li>Parent updates (optional)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

