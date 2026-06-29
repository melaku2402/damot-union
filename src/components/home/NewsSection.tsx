export default function NewsSection() {
  const updates = [
    "Seasonal training calendar released for member cooperatives",
    "New aggregation center improves produce handling capacity",
    "Union leaders meet partners to expand market opportunities",
  ];

  return (
    <section id="news" className="bg-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              News
            </p>
            <h2 className="mt-3 text-3xl font-bold text-zinc-950 md:text-4xl">
              Latest updates from the union.
            </h2>
          </div>
          <a
            href="/news"
            className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
          >
            Read all news
          </a>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {updates.map((title) => (
            <article
              key={title}
              className="rounded-lg border border-zinc-200 bg-white p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Union update
              </p>
              <h3 className="mt-3 text-base font-semibold leading-6 text-zinc-950">
                {title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
