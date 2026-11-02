import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ClosingCta, Eyebrow, PageIntro } from "@/components/site/Layout";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/consulting")({
  head: () =>
    pageHead(
      "/consulting",
      "Consulting | Samuel Massari",
      "Engineering organizational reviews, targeted improvements and leadership consulting for engineering leaders and their teams.",
    ),
  component: Consulting,
});

function Offering({
  n,
  name,
  headline,
  children,
  aside,
}: {
  n: string;
  name: string;
  headline: string;
  children: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="border-b">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="font-mono text-sm text-terracotta">{n}</p>
          <h2 className="mt-3 text-4xl md:text-5xl">{name}</h2>
          <p className="mt-5 max-w-lg text-2xl leading-snug text-muted-foreground md:text-[1.65rem]">
            {headline}
          </p>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <div className="prose-body">{children}</div>
        </div>
        {aside && <div className="md:col-span-12">{aside}</div>}
      </div>
    </section>
  );
}

const AREAS = [
  "Team structure and responsibilities",
  "Leadership and decision-making",
  "Communication and collaboration",
  "Planning and prioritization",
  "Engineering processes and ways of working",
  "Delivery predictability and execution",
  "Team autonomy, ownership and culture",
  "Alignment between engineering and the wider business",
];

const STEPS = [
  "Understand the organization and its context.",
  "Speak with relevant leaders and team members.",
  "Identify recurring challenges and underlying causes.",
  "Develop practical recommendations.",
  "Present a prioritized roadmap for improvement.",
];

const MODELS = [
  {
    t: "Review and roadmap",
    d: "I independently review the organization, identify opportunities for improvement and provide a practical roadmap. Your team takes ownership of implementation.",
  },
  {
    t: "Review and leadership coaching",
    d: "I conduct the review and then work with the relevant leader to help them implement the recommendations, navigate challenges and build momentum.",
  },
  {
    t: "Review and hands-on implementation",
    d: "I review the organization, agree on priorities with you and then work alongside the team to implement the improvements.",
  },
  {
    t: "Leadership coaching without an initial review",
    d: "Sometimes you already understand the challenges, or simply need an experienced person to help you work through them. We can start there.",
  },
];

function Consulting() {
  return (
    <>
      <PageIntro eyebrow="Consulting" title="Engineering organizations are complex.">
        <p>
          The challenges they face rarely exist in isolation, and the things that appear to be
          causing problems aren't always the things that need fixing.
        </p>
        <p>
          I work with engineering leaders and their teams to understand what's happening, identify
          opportunities for improvement and put practical changes into place.
        </p>
        <p>
          Sometimes that starts with a broader review. Sometimes there's already a clear challenge
          to tackle. And sometimes the most valuable thing I can offer is an experienced perspective
          and someone to work through difficult decisions with.
        </p>
      </PageIntro>

      <Offering
        n="01"
        name="Engineering Organizational Reviews"
        headline="A fresh perspective on how your engineering organization works."
        aside={
          <div className="mt-6 grid gap-12 border-t pt-12 md:grid-cols-2">
            <div>
              <p className="eyebrow">A review can explore</p>
              <ul className="mt-6 divide-y border-y">
                {AREAS.map((a) => (
                  <li key={a} className="flex items-start gap-3 py-3 text-[0.95rem]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" aria-hidden />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">The typical process</p>
              <ol className="mt-6 space-y-0">
                {STEPS.map((s, i) => (
                  <li key={s} className="relative flex gap-5 pb-6 last:pb-0">
                    <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center border border-foreground bg-background font-mono text-xs">
                      {i + 1}
                    </span>
                    {i < STEPS.length - 1 && (
                      <span className="absolute left-4 top-8 h-full w-px bg-border" aria-hidden />
                    )}
                    <span className="pt-1">{s}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-8 border-l-2 border-terracotta pl-4 text-sm leading-relaxed text-muted-foreground">
                This is a collaborative process, not an audit or a performance assessment of
                individuals. The aim is to understand how the organization works, together with the
                people in it.
              </p>
            </div>
          </div>
        }
      >
        <p>
          Sometimes it's difficult to see the bigger picture when you're working inside an
          organization every day.
        </p>
        <p>
          An Engineering Organizational Review provides an independent perspective on how your
          engineering organization operates, what's working well and where there may be
          opportunities to improve.
        </p>
        <p>
          I work with leaders and the people closest to the work to understand the challenges,
          explore their underlying causes and identify practical ways forward.
        </p>
        <p>
          The aim isn't to produce a lengthy report full of generic recommendations. It's to develop
          a clear understanding of what's happening and a prioritized roadmap of improvements that
          make sense for your organization.
        </p>
      </Offering>

      <Offering
        n="02"
        name="Targeted Improvements"
        headline="Sometimes you know what needs fixing. You just need help getting it over the line."
      >
        <p>Not every challenge requires a full organizational review.</p>
        <p>
          Sometimes there's already a clear understanding of what's not working, but finding the
          time, experience or momentum to address it is difficult.
        </p>
        <p>
          I work with engineering leaders and teams to tackle specific challenges, explore potential
          improvements and put better ways of working into practice.
        </p>
        <p>
          This might involve improving planning and prioritization, addressing collaboration
          challenges, introducing clearer ownership or helping a team move away from an ineffective
          process.
        </p>
        <p>The focus is on practical progress, not introducing change for its own sake.</p>
      </Offering>

      <Offering
        n="03"
        name="Leadership Consulting & Coaching"
        headline="A trusted sounding board for engineering leaders."
      >
        <p>
          Leading an engineering organization can be challenging, particularly when you're
          responsible for making decisions that affect people, delivery and the wider business.
        </p>
        <p>
          Sometimes you need someone who understands the realities of engineering leadership and can
          help you work through a situation objectively.
        </p>
        <p>
          I work with engineering leaders as an experienced sounding board, helping them understand
          challenges, explore options, make decisions and develop the confidence to drive meaningful
          improvements.
        </p>
        <p>
          This can include navigating organizational change, developing teams, handling difficult
          situations, improving leadership approaches or simply having someone to challenge your
          thinking.
        </p>
      </Offering>

      <section className="grid-paper border-b">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Eyebrow n="04">Engagements</Eyebrow>
          <h2 className="mt-6 text-4xl md:text-5xl">Different ways of working together</h2>
          <div className="prose-body mt-6 max-w-xl">
            <p>There's no single way to approach these challenges.</p>
            <p>
              Depending on what you're trying to achieve, we might work together in different ways.
            </p>
          </div>
          <div className="mt-14 grid gap-px border bg-border sm:grid-cols-2">
            {MODELS.map((m, i) => (
              <div key={m.t} className="bg-background p-8">
                <p className="font-mono text-xs text-terracotta">{String.fromCharCode(65 + i)}</p>
                <h3 className="mt-3 text-2xl">{m.t}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta title="Not sure which approach makes sense?">
        <p>
          That's completely fine. We can start with a conversation, understand what you're working
          through and decide together what would be most useful.
        </p>
        <p>
          I believe in working with organizations where there's a genuine opportunity to bring value
          and mutual confidence that we can make a difference.
        </p>
      </ClosingCta>
    </>
  );
}
