export default function MembershipCTA() {
  return (
    <section id="membership" className="bg-zinc-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 px-6 py-16 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
            Membership
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Join a union focused on practical support and shared opportunity.
          </h2>
          <p className="mt-4 text-zinc-300">
            Work with a cooperative network that helps farmers access services,
            knowledge, and markets together.
          </p>
        </div>
        <a
          href="/contact"
          className="inline-flex h-11 items-center justify-center rounded-md bg-white px-5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100"
        >
          Contact us
        </a>
      </div>
    </section>
  );
}
