import { Factory, Sprout, Tractor, Truck, Users, Warehouse } from "lucide-react";

const services = [
  {
    id: "mechanization",
    title: "Mechanization Services",
    icon: Tractor,
    text: "Modern machinery support for land preparation, farming operations, and productivity improvement.",
  },
  {
    id: "input-supply",
    title: "Agricultural Input Supply",
    icon: Sprout,
    text: "Reliable supply of fertilizers, improved seeds, chemicals, and other essential agricultural inputs.",
  },
  {
    id: "grain-marketing",
    title: "Grain Marketing Services",
    icon: Warehouse,
    text: "Market linkage, aggregation, storage coordination, and fair-price support for farmers' produce.",
  },
  {
    id: "agro-processing",
    title: "Agro Processing Services",
    icon: Factory,
    text: "Value addition through cleaning, milling, processing, packaging, and preparation for better markets.",
  },
  {
    id: "transportation",
    title: "Transportation Services",
    icon: Truck,
    text: "Safe and efficient movement of agricultural inputs, products, and cooperative supplies.",
  },
  {
    id: "training",
    title: "Training & Capacity Building",
    icon: Users,
    text: "Practical training for farmers and cooperative leaders to improve productivity and management.",
  },
] as const;

export default function Services() {
  return (
    <main className="bg-white">
      <section className="bg-[#073f1d] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-wide text-amber-300">Services</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold md:text-5xl">
            Practical services for productive farmers.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Damot Union supports members through agricultural inputs, mechanization, marketing, processing, transport, and training.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-6 py-16 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article id={service.id} key={service.id} className="scroll-mt-32 rounded-lg border border-zinc-200 bg-zinc-50 p-7">
              <Icon className="size-10 text-[#0b5428]" />
              <h2 className="mt-5 text-xl font-extrabold uppercase text-zinc-950">{service.title}</h2>
              <p className="mt-3 leading-7 text-zinc-600">{service.text}</p>
            </article>
          );
        })}
      </section>
    </main>
  );
}
