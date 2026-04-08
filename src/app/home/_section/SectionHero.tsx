import Link from "next/link";

export default function SectionHero() {
  return (
    <section className="w-full bg-red-300 flex justify-between items-center">
      <h1 className="max-w-4xl text-5xl leading-[1.08] font-medium tracking-tight text-text-primary md:text-7xl md:leading-[1.06]">
        The product development system for teams and agents
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-tertiary md:text-xl">
        Purpose-built for planning and building products. Designed for the AI
        era.
      </p>

      {/* <Link
        href="#"
        className="mb-8 inline-flex items-center gap-1.5 rounded-full border border-border-secondary bg-bg-secondary px-4 py-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
      >
        Issue tracking is dead
        <span className="text-text-tertiary">linear.app/next →</span>
      </Link> */}
    </section>
  );
}
