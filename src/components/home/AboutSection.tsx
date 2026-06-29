export default function AboutSection() {
  const values = [
    "Member-owned cooperative leadership",
    "Practical agricultural support and training",
    "Fair market access for local producers",
  ];

  return (
    <section id="about" className="border-t border-zinc-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            About Damot Union
          </p>
          <h2 className="mt-3 text-3xl font-bold text-zinc-950 md:text-4xl">
            A cooperative built around stronger farmers and stronger communities.
          </h2>
        </div>

        <div className="space-y-6 text-base leading-7 text-zinc-600">
          <p>
            Damot Union supports farmers with coordinated services, reliable
            market connections, and shared resources that help members improve
            productivity and income.
          </p>
          <ul className="grid gap-3 sm:grid-cols-3">
            {values.map((value) => (
              <li
                key={value}
                className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm font-medium text-zinc-800"
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
