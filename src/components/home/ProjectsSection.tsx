import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Wheat Flour Factory",
      capacity: "Capacity: 420 Quintals / Day",
      description:
        "Modern flour processing plant serving the community with high quality products.",
      progress: "85%",
      image: "/projects/project1.jpg",
    },
    {
      title: "Corn Processing Plant",
      capacity: "Capacity: 2,000 Quintals / Day",
      description:
        "Advanced corn processing facility for animal feed and human consumption.",
      progress: "90%",
      image: "/projects/project2.jpg",
    },
    {
      title: "Mechanization Center",
      capacity: "12 Tractors • 2 Combines",
      description:
        "Providing mechanization services to increase productivity and efficiency.",
      progress: "75%",
      image: "/projects/project3.jpg",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <p className="uppercase text-green-700 font-semibold tracking-wider mb-2">
              Our Major Projects
            </p>

            <h2 className="text-4xl font-bold text-gray-900">
              Investing in Our Future
            </h2>
          </div>

          <button className="mt-4 md:mt-0 flex items-center gap-2 text-green-700 font-semibold">
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl shadow-md overflow-hidden border hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative h-[220px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {project.title}
                </h3>

                <p className="text-green-700 font-semibold text-sm mb-3">
                  {project.capacity}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Progress */}
                <div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: project.progress }}
                    ></div>
                  </div>

                  <p className="text-sm text-gray-500 mt-2">
                    {project.progress} Completed
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}