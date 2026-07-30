/**
 * Phase 1 placeholder.
 *
 * This is intentionally minimal — the cinematic boot sequence, hero,
 * and navigation are built in Phase 3. This page exists only to confirm
 * the application shell, routing, and dark theme foundation are wired
 * up correctly before later phases build on top of it.
 */
export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
      <p className="font-mono text-xs tracking-[0.3em] text-foreground/50 uppercase">
        Phase 1 — Core Application
      </p>
      <h1 className="text-2xl font-medium tracking-tight sm:text-3xl">
        LUCAS <span className="text-foreground/40">{"//"}</span> INTELLIGENCE LAB
      </h1>
      <p className="max-w-md text-sm text-foreground/50">
        Application shell online. Design system, navigation, and the five
        flagship experiences arrive in later phases.
      </p>
    </main>
  );
}
