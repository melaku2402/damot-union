export default function ProjectsSection() {
  const projects = [
    {
      title: "Market Linkage",
      description:
        "Connecting member cooperatives with better buyers, price information, and organized sales channels.",
    },
    {
      title: "Farmer Training",
      description:
        "Hands-on support for productivity, post-harvest handling, and sustainable farm management.",
    },
    {
      title: "Input Access",
      description:
        "Coordinating access to agricultural inputs and shared services when members need them most.",
    },
  ];

  return (
    <section id="projects" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-bold text-zinc-950 md:text-4xl">
            Practical programs that improve farm livelihoods.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-lg border border-zinc-200 bg-zinc-50 p-6"
            >
              <h3 className="text-lg font-semibold text-zinc-950">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
