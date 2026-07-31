import { notFound } from "next/navigation";
import { Button, Eyebrow, Panel, StatusDot, TelemetryRule } from "@/components/ui";

/**
 * Internal, dev-only style guide for the design-system tokens and ui/
 * primitives. Not part of the public site (no nav links to it) and
 * hard-404s outside development, so it never ships. Exists purely so
 * this and future phases can eyeball the system in one place instead
 * of hunting through pages that use it incidentally.
 */
export default function DesignSystemPage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-16">
      <header className="flex flex-col gap-3">
        <Eyebrow tone="signal">Internal — Phase 2</Eyebrow>
        <h1 className="font-display text-4xl font-semibold tracking-tight">
          Design System
        </h1>
        <p className="max-w-xl text-sm text-ink-muted">
          Token and primitive reference for LUCAS // INTELLIGENCE LAB. Not
          linked in navigation, not built in production.
        </p>
      </header>

      <TelemetryRule label="Color" readout="6 tokens" />
      <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {[
          ["void", "bg-void border border-line"],
          ["surface", "bg-surface"],
          ["surface-2", "bg-surface-2"],
          ["signal", "bg-signal"],
          ["flag", "bg-flag"],
          ["ink", "bg-ink"],
        ].map(([name, cls]) => (
          <div key={name} className="flex flex-col gap-2">
            <div className={`h-16 rounded-md ${cls}`} />
            <Eyebrow>{name}</Eyebrow>
          </div>
        ))}
      </section>

      <TelemetryRule label="Type" readout="display / body / mono" />
      <section className="flex flex-col gap-6">
        <div>
          <Eyebrow tone="flag">Display — Bricolage Grotesque</Eyebrow>
          <p className="font-display text-5xl font-semibold tracking-tight">
            Intelligence, instrumented.
          </p>
        </div>
        <div>
          <Eyebrow tone="flag">Body — IBM Plex Sans</Eyebrow>
          <p className="max-w-xl font-body text-base text-ink">
            The lab connects five flagship experiences into one cohesive
            operating system — every panel, agent, and interaction speaks
            the same visual language.
          </p>
        </div>
        <div>
          <Eyebrow tone="flag">Mono — IBM Plex Mono</Eyebrow>
          <p className="font-mono text-sm text-ink">
            AGENT_NETWORK::STATUS = ONLINE — 0x2f4a
          </p>
        </div>
      </section>

      <TelemetryRule label="Components" readout="5" />
      <section className="flex flex-col gap-10">
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">Enter The Lab</Button>
          <Button variant="signal">Talk To Lucas AI</Button>
          <Button variant="ghost">Explore Projects</Button>
          <Button variant="ghost" disabled>
            Disabled
          </Button>
        </div>

        <div className="flex flex-wrap gap-4">
          <StatusDot tone="ok" pulse label="System status nominal" />
          <StatusDot tone="warn" label="Growth agent — attention" />
          <StatusDot tone="error" label="Sync failed" />
          <StatusDot tone="idle" label="Idle" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Panel interactive className="p-6">
            <Eyebrow tone="signal">Research Agent</Eyebrow>
            <p className="mt-2 font-display text-lg">
              Market opportunity discovered.
            </p>
            <p className="mt-2 text-sm text-ink-muted">
              Interactive panel — hover to see the border respond.
            </p>
          </Panel>
          <Panel className="p-6">
            <Eyebrow>Static panel</Eyebrow>
            <p className="mt-2 font-display text-lg">Glass surface</p>
            <p className="mt-2 text-sm text-ink-muted">
              Base panel, no interaction affordance.
            </p>
          </Panel>
        </div>
      </section>
    </main>
  );
}
