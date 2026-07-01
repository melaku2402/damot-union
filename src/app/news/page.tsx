const newsSections = [
  {
    id: "latest",
    title: "Latest News",
    text: "Read updates from Damot Union, member cooperatives, farmer services, and agricultural development activities.",
  },
  {
    id: "announcements",
    title: "Announcements",
    text: "Important notices for members, partners, and communities will be shared here.",
  },
  {
    id: "events",
    title: "Events",
    text: "Upcoming meetings, trainings, cooperative events, and field activities will appear in this section.",
  },
] as const;

export default function News() {
  return (
    <main className="bg-white">
      <section className="bg-[#073f1d] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-wide text-amber-300">News</p>
          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">News, announcements, and events.</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-6 py-16 md:grid-cols-3">
        {newsSections.map((section) => (
          <article id={section.id} key={section.id} className="scroll-mt-32 rounded-lg border border-zinc-200 bg-zinc-50 p-7">
            <h2 className="text-xl font-bold text-zinc-950">{section.title}</h2>
            <p className="mt-3 leading-7 text-zinc-600">{section.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
