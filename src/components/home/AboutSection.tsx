import Image from "next/image";
import { Eye, Target, Gem } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-[#f7f8f7] py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          
          {/* LEFT IMAGE COLLAGE */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/about/main.jpg"
                alt="Factory"
                width={700}
                height={450}
                className="w-full h-[330px] object-cover"
              />

              {/* Since Badge */}
              <div className="absolute bottom-0 left-0 bg-green-800 text-white px-7 py-5 rounded-tr-2xl">
                <p className="text-sm">Since</p>
                <h3 className="text-3xl font-bold">1993 E.C</h3>
              </div>
            </div>

            {/* Bottom Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/about/farmers.jpg"
                  alt="Farmers"
                  width={350}
                  height={220}
                  className="w-full h-[160px] object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/about/tractor.jpg"
                  alt="Tractor"
                  width={350}
                  height={220}
                  className="w-full h-[160px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="text-green-700 font-semibold uppercase tracking-wider mb-3">
              WHO WE ARE
            </p>

            <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-5">
              Damot Multipurpose Farmers Cooperative Union
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg mb-10">
              Established in 1993 E.C with 6 primary cooperatives and 8,902 members,
              Damot Union has grown to become one of the largest and most successful
              cooperative unions in the Amhara Region.
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6">
              
              {/* Vision */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Eye className="text-green-700 w-6 h-6" />
                  <h3 className="font-bold text-xl">Our Vision</h3>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  To be a leading cooperative union that transforms farmers' lives.
                </p>
              </div>

              {/* Mission */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Target className="text-green-700 w-6 h-6" />
                  <h3 className="font-bold text-xl">Our Mission</h3>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  To improve the economic and social well-being of our members.
                </p>
              </div>

              {/* Values */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Gem className="text-green-700 w-6 h-6" />
                  <h3 className="font-bold text-xl">Our Values</h3>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  Integrity, Transparency, Accountability, Solidarity and Innovation.
                </p>
              </div>
            </div>

            {/* Button */}
            <button className="mt-10 bg-green-700 hover:bg-green-800 transition text-white px-8 py-4 rounded-xl font-semibold shadow-md">
              Learn More About Us →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}