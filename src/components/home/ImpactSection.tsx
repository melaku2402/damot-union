export default function ImpactSection() {
  const metrics = [
    ["8,000+", "farmers connected to cooperative services"],
    ["1,200+", "training participants reached each year"],
    ["18", "community initiatives supported"],
  ];

  return (
    <section id="impact" className="bg-emerald-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {metrics.map(([value, label]) => (
            <div key={label}>
              <div className="text-4xl font-bold">{value}</div>
              <p className="mt-3 max-w-xs text-sm leading-6 text-emerald-50">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
