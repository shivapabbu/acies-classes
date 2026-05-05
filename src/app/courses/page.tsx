import Link from "next/link";
import { ArrowRight, BookOpen, LineChart, Users } from "lucide-react";

const courses = [
  {
    title: "School (8–10)",
    icon: Users,
    points: ["Concept clarity", "Regular tests", "Homework support"],
  },
  {
    title: "Junior College (11–12)",
    icon: BookOpen,
    points: ["Board pattern prep", "Revision batches", "Paper solving"],
  },
  {
    title: "Competitive Prep",
    icon: LineChart,
    points: ["Topic drills", "Mock tests", "Performance analysis"],
  },
];

export default function CoursesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <div className="text-xs font-semibold text-muted-foreground">
            Courses
          </div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Find the right batch for your goal
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            We offer structured coaching with clear milestones, weekly testing,
            and personalised feedback. Choose a track below and enquire for the
            latest timetable and fees.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background hover:bg-foreground/90"
        >
          Enquire Now <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {courses.map((c) => (
          <div key={c.title} className="rounded-3xl border bg-background p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-600/10 text-indigo-700">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="text-base font-semibold">{c.title}</div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {c.points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-indigo-600/70" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Ask for details <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-[2rem] border bg-muted/20 p-8 md:p-10">
        <h2 className="text-xl font-semibold tracking-tight">
          Not sure what to choose?
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
          Share your class, target exam, and last score. We’ll suggest the
          fastest improvement plan.
        </p>
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background hover:bg-foreground/90"
          >
            Get a free plan <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

