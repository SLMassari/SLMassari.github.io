import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/site/Layout";
import { pageHead, SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "/contact",
      "Contact | Samuel Massari",
      "Get in touch with Samuel Massari. No elaborate pitch or obligation, just an honest conversation about what you're working through.",
    ),
  component: Contact,
});

function Contact() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="grid-paper pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-7">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-8 text-5xl md:text-7xl">Let's have a conversation.</h1>
          <div className="prose-body mt-10 max-w-xl">
            <p>
              Whether you're looking to improve an engineering organization, working through a
              leadership challenge or considering your first steps into management, I'd be happy to
              hear from you.
            </p>
            <p>You don't need to have everything figured out before getting in touch.</p>
            <p>
              Tell me a little about what you're working through, and we can take it from there.
            </p>
            <p className="font-serif text-2xl text-primary">
              No elaborate pitch or obligation. Just an honest conversation.
            </p>
          </div>
        </div>
        <aside className="md:col-span-5 md:pt-24">
          <div className="border border-foreground bg-background p-8">
            <p className="eyebrow">Email</p>
            <a
              href={`mailto:${SITE.email}`}
              className="group mt-4 flex items-center justify-between gap-4 break-all font-serif text-2xl hover:text-primary md:text-[1.7rem]"
            >
              {SITE.email}
              <ArrowUpRight
                className="h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
            <p className="mt-6 border-t pt-6 text-sm leading-relaxed text-muted-foreground">
              A few lines about your situation is plenty to get started.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
