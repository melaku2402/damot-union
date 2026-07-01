import {
  Award,
  BarChart3,
  BookOpen,
  Building2,
  Handshake,
  Landmark,
  Map,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

const sections = [
  {
    id: "overview",
    title: "Overview",
    icon: Building2,
    text: "Damot Union is a multipurpose farmers cooperative union serving member cooperatives through market access, input supply, training, and shared agricultural services.",
  },
  {
    id: "history",
    title: "Our History",
    icon: BookOpen,
    text: "Founded to strengthen farmer cooperation, the union has grown into a local institution focused on productivity, fair trade, and community prosperity.",
  },
  {
    id: "vision",
    title: "Vision, Mission & Values",
    icon: ShieldCheck,
    text: "The union works toward prosperous farmers, transparent cooperative leadership, and reliable services that improve household income.",
  },
  {
    id: "objectives",
    title: "Objectives",
    icon: Target,
    text: "Our objectives include improving agricultural productivity, creating stronger markets, expanding services, and building member capacity.",
  },
  {
    id: "core-values",
    title: "Core Values",
    icon: Handshake,
    text: "Cooperation, accountability, fairness, service, and shared growth guide how the union works with members and partners.",
  },
  {
    id: "structure",
    title: "Organizational Structure",
    icon: Landmark,
    text: "The union is organized around elected cooperative governance, operational management, and service teams that support member cooperatives.",
  },
  {
    id: "board",
    title: "Board of Directors",
    icon: Users,
    text: "The board provides strategic direction, oversight, and accountability on behalf of member cooperatives.",
  },
  {
    id: "management",
    title: "Management Team",
    icon: Building2,
    text: "The management team coordinates daily operations, service delivery, finance, administration, and partner relationships.",
  },
  {
    id: "network",
    title: "Cooperatives Network",
    icon: Handshake,
    text: "Damot Union connects primary cooperatives so farmers can access stronger purchasing power, services, and market opportunities.",
  },
  {
    id: "achievements",
    title: "Key Achievements",
    icon: Award,
    text: "The union has supported farmers with input access, marketing services, machinery support, and capacity building for many years.",
  },
  {
    id: "reports",
    title: "Statistics & Reports",
    icon: BarChart3,
    text: "Reports and performance summaries help members, leaders, and partners track service coverage and cooperative impact.",
  },
  {
    id: "partners",
    title: "Partners & Donors",
    icon: Handshake,
    text: "The union collaborates with government offices, development partners, financial institutions, and cooperative stakeholders.",
  },
  {
    id: "coverage",
    title: "Work Area Coverage",
    icon: Map,
    text: "Damot Union serves farming communities around Bure Town and the wider West Gojjam Zone of Amhara Region.",
  },
] as const;

export default function About() {
  return (
    <main className="bg-zinc-50">
      <section className="bg-[#073f1d] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-wide text-amber-300">About Us</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold md:text-5xl">
            About Damot Farmers Cooperative Union
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Empowering farmers, strengthening cooperatives, and supporting sustainable agricultural development.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-6 py-16 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => {
          const Icon = section.icon;

          return (
            <article id={section.id} key={section.id} className="scroll-mt-32 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <Icon className="size-8 text-[#0b5428]" />
              <h2 className="mt-4 text-xl font-bold text-zinc-950">{section.title}</h2>
              <p className="mt-3 leading-7 text-zinc-600">{section.text}</p>
            </article>
          );
        })}
      </section>
    </main>
  );
}
