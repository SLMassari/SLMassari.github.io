import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ClosingCta, CtaLink, Eyebrow } from "@/components/site/Layout";
import { pageHead, SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "/",
      "Samuel Massari | Engineering Leadership & Consulting",
      "Helping engineering organizations build better ways of working. Organizational reviews, targeted improvements, leadership coaching and engineering management mentorship.",
    ),
  component: Home,
});

const OFFERINGS = [
  {
    n: "01",
    title: "Engineering Organizational Reviews",
    body: "A fresh perspective on how your engineering organization operates. I'll work with your people to understand the underlying challenges, identify opportunities for improvement and build a practical roadmap for moving forward.",
    to: "/consulting" as const,
  },
  {
    n: "02",
    title: "Targeted Improvements",
    body: "Sometimes you know what needs fixing, you just need someone to help you get it over the line. I work with teams and leaders to address specific challenges, experiment with improvements and put better ways of working into practice.",
    to: "/consulting" as const,
  },
  {
    n: "03",
    title: "Leadership Consulting & Coaching",
    body: "Being responsible for an engineering organization comes with challenges that aren't always easy to navigate alone. I work with engineering leaders as an experienced sounding board, helping them diagnose problems, make better decisions and develop the confidence to drive meaningful improvements.",
    to: "/consulting" as const,
  },
  {
    n: "04",
    title: "Engineering Management Mentorship",
    body: "Making the transition from engineer to manager is a significant change. I mentor engineers moving into management and newer Engineering Managers, helping them navigate the challenges and develop their own approach to leadership.",
    to: "/mentorship" as const,
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div
          className="grid-paper pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>{SITE.descriptor}</Eyebrow>
            <h1 className="mt-8 text-5xl md:text-6xl lg:text-[4.4rem]">
              Helping engineering organizations build <em className="text-primary">better ways</em>{" "}
              of working.
            </h1>
            <div className="prose-body mt-8 max-w-xl">
              <p>
                I'm Samuel, an engineering leader with a background in software engineering,
                organizational improvement and developing effective teams.
              </p>
              <p>
                I work with engineering organizations and their leaders to understand what's holding
                them back, identify opportunities for improvement and build more effective ways of
                working.
              </p>
              <p>
                Whether that's taking a fresh look at an entire engineering department, tackling a
                specific challenge or helping a new engineering manager find their feet, I enjoy
                working with people to make things better.
              </p>
            </div>
            <div className="mt-10">
              <CtaLink />
            </div>
          </div>
          <figure className="relative lg:col-span-5">
            <div
              className="absolute -left-4 -top-4 h-24 w-24 border-l border-t border-terracotta"
              aria-hidden
            />
            <div
              className="absolute -bottom-4 -right-4 h-24 w-24 border-b border-r border-primary"
              aria-hidden
            />
            <img
              src={SITE.photo}
              alt="Samuel Massari speaking on stage at an engineering conference"
              width={1024}
              height={1280}
              fetchPriority="high"
              className="relative aspect-[4/5] w-full object-cover object-top"
            />
            <figcaption className="eyebrow mt-4 !text-muted-foreground">
              On stage, sharing lessons from engineering leadership
            </figcaption>
          </figure>
        </div>
      </section>

      {/* What I can help with */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow n="01">Services</Eyebrow>
            <h2 className="mt-6 text-4xl md:text-5xl">What I can help with</h2>
          </div>
          <div className="prose-body md:col-span-6 md:col-start-7">
            <p>
              Every engineering organization has its own challenges. Sometimes the problem is
              obvious; sometimes the symptoms have been there for years without anyone quite
              understanding what's causing them.
            </p>
            <p>I work with organizations and individuals in a few different ways.</p>
          </div>
        </div>
        <ul className="mt-16 border-t">
          {OFFERINGS.map((o) => (
            <li key={o.n} className="border-b">
              <Link
                to={o.to}
                className="group grid gap-4 py-10 transition-colors hover:bg-card md:grid-cols-12 md:px-4"
              >
                <h3 className="text-2xl md:col-span-4 md:text-3xl">{o.title}</h3>
                <p className="leading-relaxed text-muted-foreground md:col-span-7">{o.body}</p>
                <ArrowUpRight
                  className="h-5 w-5 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:col-span-1 md:justify-self-end"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Not sure */}
      <section className="bg-accent">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-12 md:items-center">
          <h2 className="text-4xl md:col-span-5 md:text-5xl">Not sure what you need?</h2>
          <div className="md:col-span-6 md:col-start-7">
            <div className="prose-body">
              <p>
                That's absolutely fine. Sometimes you need a combination of these things, and I'm
                happy to shape an engagement around what will actually be most useful.
              </p>
              <p>
                We can start with a conversation, understand what you're working through and figure
                out what makes sense together.
              </p>
            </div>
            <div className="mt-8">
              <CtaLink variant="outline">Start a conversation</CtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Eyebrow n="02">Approach</Eyebrow>
        <h2 className="mt-6 max-w-3xl text-4xl md:text-5xl">A little about how I work</h2>
        <blockquote className="mt-14 max-w-4xl border-l-2 border-terracotta pl-6 font-serif text-3xl leading-snug md:pl-10 md:text-4xl">
          I believe most engineering problems are more complicated than they first appear.
        </blockquote>
        <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
          {[
            {
              k: "Diagnose",
              t: "Unpredictable delivery, frustrated teams and ineffective processes are often symptoms of something deeper. Finding the actual problem is the first step towards making meaningful improvements.",
            },
            {
              k: "Collaborate",
              t: "My approach is practical and collaborative. I like to understand how things work today, involve the people closest to the problems and build a path towards something better.",
            },
            {
              k: "Experiment",
              t: "That doesn't mean introducing sweeping changes or imposing processes for the sake of it. Often, the best place to start is by identifying a few achievable improvements, getting some early wins and building momentum through experimentation.",
            },
          ].map((s, i) => (
            <div key={s.k} className="bg-background p-8">
              <p className="font-mono text-xs text-muted-foreground">0{i + 1} /</p>
              <h3 className="mt-3 text-2xl">{s.k}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{s.t}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-12">
          <p className="prose-body md:col-span-6">
            Those early wins are important for more than just the immediate results. They help
            create a culture where people feel empowered to challenge existing ways of working,
            raise problems and take ownership of making things better.
          </p>
          <p className="font-serif text-2xl leading-snug text-primary md:col-span-5 md:col-start-8">
            The ultimate goal isn't just to solve today's problems. It's to create an environment
            where continuous improvement becomes part of how the team operates, long after I've
            left.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow !text-ink-foreground/60">03 · Background</p>
            <h2 className="mt-6 text-4xl md:text-5xl">
              Experience matters, but so does <em>perspective.</em>
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <div className="space-y-5 text-lg leading-relaxed opacity-85">
              <p>
                My career has taken me from software engineering and industrial AI to engineering
                management and working alongside executive leadership.
              </p>
              <p>
                I've experienced engineering organizations from several perspectives: as an
                individual contributor, as a manager and as a partner to senior engineering
                leadership.
              </p>
              <p>
                That combination has shaped how I approach organizational challenges and how I work
                with the people facing them.
              </p>
            </div>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 border-b border-ink-foreground/40 pb-1 text-sm hover:border-ink-foreground"
            >
              More about my story
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <ClosingCta title="Let's have a conversation.">
        <p>
          Whether you're trying to improve an engineering organization, navigating a challenge as a
          leader or considering your first steps into management, I'd be happy to hear what you're
          working on.
        </p>
        <p>
          I believe in working with people and organizations where there's a genuine opportunity for
          me to bring value, and where there's mutual confidence that we can make a difference
          together. If that isn't there on both sides, it's probably not the right fit, and that's
          absolutely fine.
        </p>
        <p>No elaborate pitch or obligation. Just an honest conversation.</p>
      </ClosingCta>
    </>
  );
}
