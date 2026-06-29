export default function Hero() {
  return (
    <section id="home" className="bg-zinc-50">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Damot Farmers Cooperative Union
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold text-zinc-950 md:text-6xl">
            Empowering farmers through shared growth.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
            Building prosperity through cooperative services, market access,
            agricultural training, and reliable support for member communities.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex h-11 items-center justify-center rounded-md bg-emerald-700 px-5 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              View projects
            </a>
            <a
              href="#membership"
              className="inline-flex h-11 items-center justify-center rounded-md border border-zinc-300 px-5 text-sm font-semibold text-zinc-900 transition hover:border-zinc-400 hover:bg-white"
            >
              Become a member
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["12+", "Primary cooperatives"],
              ["8k+", "Farmers served"],
              ["30%", "Market reach growth"],
              ["24/7", "Member support focus"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-md bg-zinc-50 p-5">
                <div className="text-3xl font-bold text-emerald-700">{value}</div>
                <div className="mt-2 text-sm text-zinc-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
