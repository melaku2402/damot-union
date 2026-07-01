const projectSections = [
  {
    id: "current",
    title: "Current Projects",
    text: "Ongoing activities focus on input access, cooperative capacity, market linkage, and service expansion.",
  },
  {
    id: "completed",
    title: "Completed Projects",
    text: "Completed initiatives have strengthened farmer services, local market systems, and cooperative operations.",
  },
  {
    id: "impact",
    title: "Impact & Results",
    text: "Project results are measured through farmer reach, service coverage, income opportunity, and cooperative performance.",
  },
] as const;

export default function Projects() {
  return (
    <main className="bg-zinc-50">
      <section className="bg-[#073f1d] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-wide text-amber-300">Projects</p>
          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">Union projects and results.</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-6 py-16 md:grid-cols-3">
        {projectSections.map((section) => (
          <article id={section.id} key={section.id} className="scroll-mt-32 rounded-lg border border-zinc-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-bold text-zinc-950">{section.title}</h2>
            <p className="mt-3 leading-7 text-zinc-600">{section.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
