import { createFileRoute } from "@tanstack/react-router";
import { ClosingCta, Eyebrow, PageIntro } from "@/components/site/Layout";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/mentorship")({
  head: () =>
    pageHead(
      "/mentorship",
      "Engineering Management Mentorship | Samuel Massari",
      "Practical, honest mentorship for engineers moving into management and newer Engineering Managers developing their own approach to leadership.",
    ),
  component: Mentorship,
});

const WHO = [
  {
    t: "Engineers moving into management",
    d: "For people considering or preparing for their first management role, helping them understand what changes, what to expect and how to approach the transition.",
  },
  {
    t: "New Engineering Managers",
    d: "For people navigating their first months or years in management, dealing with the practical challenges of leading people, building trust and developing their management style.",
  },
  {
    t: "Developing Engineering Managers",
    d: "For managers who have some experience but want to become more effective, navigate difficult situations or continue developing as leaders.",
  },
];

const TOPICS = [
  "Transitioning from engineer to manager",
  "Building trust and relationships with your team",
  "Giving feedback and handling difficult conversations",
  "Delegation and developing autonomy",
  "Supporting individual growth and development",
  "Building effective team environments",
  "Working with Product Managers and other stakeholders",
  "Managing priorities and competing demands",
  "Developing confidence in leadership decisions",
  "Understanding your own leadership style",
];

function Mentorship() {
  return (
    <>
      <PageIntro
        eyebrow="Mentorship"
        title="Becoming an Engineering Manager is a significant transition."
      >
        <p>
          Going from being responsible for your own work to helping other people succeed requires a
          very different set of skills. The things that made you successful as an engineer don't
          always translate directly into management.
        </p>
        <p>
          I enjoy helping engineers navigate that transition and develop their own approach to
          leadership.
        </p>
        <p>
          Having worked as an engineer, Chief of Staff to a VP of Engineering and Engineering
          Manager, I can bring perspectives from different parts of an engineering organization.
        </p>
      </PageIntro>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Eyebrow n="01">Who I work with</Eyebrow>
        <div className="mt-12 grid gap-12 md:grid-cols-3">
          {WHO.map((w, i) => (
            <div key={w.t} className="border-t-2 border-foreground pt-6">
              <p className="font-mono text-xs text-terracotta">Stage {i + 1}</p>
              <h2 className="mt-3 text-2xl md:text-3xl">{w.t}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{w.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y bg-card">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow n="02">Topics</Eyebrow>
            <h2 className="mt-6 text-4xl md:text-5xl">What we can work on</h2>
          </div>
          <ul className="grid gap-x-10 sm:grid-cols-2 md:col-span-8">
            {TOPICS.map((t, i) => (
              <li key={t} className="flex gap-4 border-b py-4">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-12">
        <div className="md:col-span-5">
          <Eyebrow n="03">My approach</Eyebrow>
          <p className="mt-8 font-serif text-4xl leading-tight md:text-5xl">
            I don't believe there's one correct way to be an Engineering Manager.
          </p>
        </div>
        <div className="prose-body md:col-span-6 md:col-start-7">
          <p>
            Different people, teams and organizations need different approaches. The goal isn't to
            teach you to manage exactly like someone else. It's to help you understand the
            challenges, explore different approaches and develop a style of leadership that works
            for you.
          </p>
          <p>Mentorship should be practical, honest and grounded in real experiences.</p>
          <p>
            We can work through situations you're currently facing, discuss things that haven't gone
            as planned, prepare for difficult conversations or simply explore how to become a more
            effective manager.
          </p>
          <p className="border-l-2 border-terracotta pl-5 font-serif text-xl text-foreground">
            I want you to leave our conversations with more clarity, confidence and practical ideas
            you can put into action.
          </p>
        </div>
      </section>

      <ClosingCta title="Thinking about moving into management?">
        <p>
          If you're thinking about moving into management or finding your feet as an Engineering
          Manager, I'd be happy to have a conversation.
        </p>
        <p>
          Let's talk about what you're working through and see whether mentorship would be useful.
        </p>
      </ClosingCta>
    </>
  );
}
