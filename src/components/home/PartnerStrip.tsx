export default function PartnerStrip() {
  const partners = [
    "Cooperatives",
    "Local Markets",
    "Agriculture Offices",
    "Development Partners",
  ];

  return (
    <section className="border-y border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <p className="font-medium text-zinc-700">Working with trusted partners</p>
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {partners.map((partner) => (
            <span key={partner}>{partner}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
