import Link from "next/link";
import { ArrowRight, Award, TrendingUp, Users } from "lucide-react";

const cards = [
  {
    title: "Score improvements",
    icon: TrendingUp,
    desc: "Showcase before/after score jumps and subject-wise improvement.",
  },
  {
    title: "Toppers",
    icon: Award,
    desc: "Highlight top ranks and high scorers with photos (optional).",
  },
  {
    title: "Success stories",
    icon: Users,
    desc: "Short testimonials from students and parents build trust fast.",
  },
];

export default function ResultsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="space-y-3">
        <div className="text-xs font-semibold text-muted-foreground">Results</div>
        <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Achievements & outcomes
        </h1>
        <p className="max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
          Replace the examples below with your real results. Keep it simple:
          score improvements, toppers, and a few testimonials.
        </p>
        <Link
          href="/contact"
          className="inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-700"
        >
          Enquire for batches <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {cards.map((c) => (
          <div key={c.title} className="rounded-3xl border bg-background p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-600/10 text-indigo-700">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="text-base font-semibold">{c.title}</div>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-[2rem] border bg-muted/20 p-8 md:p-10">
        <div className="text-base font-semibold">Tip</div>
        <p className="mt-2 text-sm leading-7 text-muted-foreground">
          Add 6–12 student result cards with: name, class, score, and a short
          one-line quote. That’s usually enough for credibility.
        </p>
      </div>
    </div>
  );
}

