import { createFileRoute } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { ClosingCta, Eyebrow, PageIntro } from "@/components/site/Layout";
import { pageHead, SITE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "/about",
      "About | Samuel Massari",
      "From software engineer at Rockwell Automation to Chief of Staff and Engineering Manager: Samuel Massari's path into engineering leadership.",
    ),
  component: About,
});

const TIMELINE = [
  {
    org: "Rockwell Automation",
    role: "Senior Software Engineer",
    body: [
      "I started my career as a Senior Software Engineer at Rockwell Automation, working across a large engineering organization.",
      "My work spanned application development, rebuilding CI/CD capabilities and improving virtual machine environments. I eventually joined an internal incubator team developing an AI controller for industrial applications, contributing to technology that resulted in a patent.",
      "It was an environment that encouraged curiosity and experimentation, and gave me exposure to very different areas of engineering.",
      "After leaving Rockwell, I took a year to travel before returning to software engineering.",
    ],
  },
  {
    org: "Rev",
    role: "Senior Software Engineer → Chief of Staff to the VP of Engineering",
    body: [
      "I joined Rev as a Senior Software Engineer. I had moved to Texas on my own, and then COVID hit, so I found myself spending considerable time working, reading and thinking about how the company and its engineering teams could improve.",
      "I was increasingly interested in problems beyond my immediate role, but many of the changes I was considering required a broader level of influence.",
      "My manager introduced me to the VP of Engineering, David Dettmer, who was considering creating a Chief of Staff position. He invited me to take on the role.",
      "David, author of Raising Engineers, had built and led several successful engineering organizations. Working closely with him over almost two years was one of the most formative experiences of my career.",
      "I learned far more than how engineering organizations operate. I developed a deeper understanding of how personality, psychology, trust and relationships influence the way people work together.",
      "I saw how creating the right environment, understanding what motivates people and building genuine trust could lead to significant improvements in both performance and people's enjoyment of their work.",
      "I also worked on a variety of organizational initiatives, developing my ability to influence without authority, build teams and turn ideas into meaningful change.",
      "Rather than pursue another role within executive leadership, I made a deliberate decision to move into Engineering Management. I wanted to understand the realities of managing people and leading teams before taking responsibility for leading those who do.",
    ],
  },
  {
    org: "Phorest Salon Software",
    role: "Engineering Manager",
    body: [
      "After relocating to Italy, I joined Phorest Salon Software as an Engineering Manager, taking responsibility for engineering teams and their delivery, development and overall effectiveness.",
      "My focus was on building effective teams, creating clarity around priorities and direction, and establishing an environment where engineers could take ownership, collaborate effectively and continuously improve how they worked.",
      "I worked closely with Product Management and other stakeholders to improve how teams understood problems, evaluated opportunities and delivered meaningful outcomes for the business and its customers.",
      "The role brought together the different perspectives I'd developed throughout my career: the technical foundation of an engineer, the organizational perspective of a Chief of Staff and the practical experience of leading and developing engineering teams.",
    ],
  },
];

function About() {
  return (
    <>
      <PageIntro eyebrow="About" title="I've always enjoyed finding ways to make things better.">
        <p>
          I'm Samuel Massari. I've spent my career in and around software engineering, gradually
          moving from building software to building teams, developing leaders and helping
          organizations work more effectively.
        </p>
        <p>
          I've always been curious about how things work and, perhaps more importantly, how they
          could work better.
        </p>
        <p>
          As an engineer, I enjoyed experimenting, exploring different approaches and finding ways
          to improve the people and systems around me. That interest eventually took me beyond my
          immediate responsibilities and into engineering leadership.
        </p>
        <p>Today, it's at the heart of how I work.</p>
      </PageIntro>

      {/* Best passer */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <svg
          className="pointer-events-none absolute -right-24 top-1/2 h-[520px] w-[520px] -translate-y-1/2 opacity-15"
          viewBox="0 0 200 200"
          aria-hidden
        >
          <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" />
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="currentColor"
            strokeDasharray="3 5"
          />
          <path
            d="M20 160 Q100 20 180 60"
            fill="none"
            stroke="currentColor"
            strokeDasharray="6 6"
          />
          <circle cx="180" cy="60" r="5" fill="currentColor" />
        </svg>
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow !text-primary-foreground/70">A philosophy</p>
            <h2 className="mt-6 text-5xl md:text-6xl">
              The best passer <em>on the team.</em>
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed opacity-90 md:col-span-5 md:col-start-8">
            <p>I've always joked that I was the best passer on the team.</p>
            <p>
              I was never particularly interested in being the person who scored all the points. I
              got more satisfaction from helping the people around me succeed, creating
              opportunities and making the team better as a whole.
            </p>
            <p>
              We all know that the best team isn't necessarily the one with all the best scorers,
              but the one that allows each of its members to perform their role to the best of their
              abilities.
            </p>
            <p>I've always believed the same applies to engineering organizations.</p>
            <p>
              The best teams aren't built around a handful of people who have all the answers.
              They're built around people who understand their roles, trust one another and have the
              confidence and autonomy to do their best work.
            </p>
            <p>That philosophy has followed me throughout my career.</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Eyebrow n="01">Career</Eyebrow>
        <h2 className="mt-6 max-w-3xl text-4xl md:text-5xl">
          From software engineering to organizational leadership
        </h2>
        <ol className="mt-16 space-y-0">
          {TIMELINE.map((t, i) => (
            <li key={t.org} className="grid gap-6 border-t py-12 md:grid-cols-12">
              <div className="md:col-span-4">
                <p className="font-mono text-xs text-terracotta">Chapter 0{i + 1}</p>
                <h3 className="mt-2 text-3xl">{t.org}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.role}</p>
              </div>
              <div className="prose-body md:col-span-7 md:col-start-6">
                {t.body.map((p) => (
                  <p key={p.slice(0, 20)}>{p}</p>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Phorest case study */}
      <section className="border-y bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Eyebrow n="02">In practice</Eyebrow>
          <h2 className="mt-6 text-4xl md:text-5xl">Putting it into practice</h2>
          <p className="prose-body mt-6 max-w-2xl">
            After relocating to Italy, I joined Phorest Salon Software as an Engineering Manager.
          </p>
          <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
            <article className="bg-background p-8">
              <p className="eyebrow">The challenge</p>
              <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  One of the teams I took responsibility for was among the company's busiest, but
                  was also considered one of its least performant.
                </p>
                <p>
                  The team was made up of highly skilled, experienced engineers. The challenge
                  wasn't a lack of ability, but a lack of shared direction, clear priorities and an
                  environment that allowed them to focus on the work that mattered most.
                </p>
              </div>
            </article>
            <article className="bg-background p-8">
              <p className="eyebrow">The approach</p>
              <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Working closely with a new Product Manager and the team, I focused on creating
                  greater clarity, removing unnecessary friction and building an environment where
                  people felt heard and empowered to improve things.
                </p>
                <p>
                  We started by understanding what was getting in the team's way, listening to the
                  people closest to the problems and making practical improvements that built trust
                  and momentum.
                </p>
              </div>
            </article>
            <article className="bg-background p-8">
              <p className="eyebrow">The outcome</p>
              <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
                <p className="font-serif text-xl leading-snug text-foreground">
                  Over approximately six months, the team transformed from one of the company's
                  least performant to one of its strongest-performing teams.
                </p>
                <p>
                  More importantly, we built a team that could operate reliably, deliver
                  high-quality work and continue improving itself.
                </p>
              </div>
            </article>
          </div>
          <p className="mt-10 max-w-2xl font-serif text-2xl text-primary">
            It was a great example of the approach I'd been developing throughout my career.
          </p>
        </div>
      </section>

      {/* Beyond work */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="max-w-3xl text-4xl md:text-5xl">Beyond work</h2>
        <div className="prose-body mt-8 max-w-3xl">
          <p>
            Sport has always been a big part of my life. From baseball and basketball growing up to
            boxing and competitive beach volleyball today, I've always enjoyed the process of
            learning, improving and working as part of a team.
          </p>
          <p>
            I've been fortunate enough to represent the US in beach volleyball twice and now help
            coach members of the Italian National Team.
          </p>
          <p>
            Many of the lessons I've learned through sport have shaped how I think about teamwork,
            trust, coaching and continuous improvement.
          </p>
        </div>
      </section>

      {/* What I'm interested in now */}
      <section className="mx-auto max-w-6xl border-t px-6 py-24">
        <h2 className="max-w-3xl text-4xl md:text-5xl">What I'm interested in now</h2>
        <div className="prose-body mt-8 max-w-3xl">
          <p>
            I've spent years learning how to identify organizational problems, help teams navigate
            change and develop the people responsible for making things better.
          </p>
          <p>I'd like to share those experiences with more organizations and individuals.</p>
          <p>
            I enjoy working with people who are curious, open to challenging how things are done and
            interested in making meaningful improvements.
          </p>
          <p>
            Sometimes that means helping an organization understand why things aren't working.
            Sometimes it's supporting an experienced leader through a difficult challenge. And
            sometimes it's helping an engineer discover what it means to become a manager.
          </p>
          <p>Whatever the challenge, I enjoy helping people find a better way forward.</p>
        </div>
      </section>

      {/* LinkedIn */}
      <ClosingCta
        center
        title="If there's something you're working through, I'd love to hear about it."
        action={
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Samuel Massari on LinkedIn (opens in a new tab)"
            className="link-underline inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" aria-hidden />
            Connect on LinkedIn
          </a>
        }
      />
    </>
  );
}
