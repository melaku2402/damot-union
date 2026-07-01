// // export default function Hero() {
// //   return (
// //     <section id="home" className="bg-zinc-50">
// //       <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
// //         <div>
// //           <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
// //             Damot Farmers Cooperative Union
// //           </p>
// //           <h1 className="mt-4 max-w-3xl text-4xl font-bold text-zinc-950 md:text-6xl">
// //             Empowering farmers through shared growth.
// //           </h1>
// //           <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
// //             Building prosperity through cooperative services, market access,
// //             agricultural training, and reliable support for member communities.
// //           </p>
// //           <div className="mt-8 flex flex-col gap-3 sm:flex-row">
// //             <a
// //               href="#projects"
// //               className="inline-flex h-11 items-center justify-center rounded-md bg-emerald-700 px-5 text-sm font-semibold text-white transition hover:bg-emerald-800"
// //             >
// //               View projects
// //             </a>
// //             <a
// //               href="#membership"
// //               className="inline-flex h-11 items-center justify-center rounded-md border border-zinc-300 px-5 text-sm font-semibold text-zinc-900 transition hover:border-zinc-400 hover:bg-white"
// //             >
// //               Become a member
// //             </a>
// //           </div>
// //         </div>

// //         <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
// //           <div className="grid gap-4 sm:grid-cols-2">
// //             {[
// //               ["12+", "Primary cooperatives"],
// //               ["8k+", "Farmers served"],
// //               ["30%", "Market reach growth"],
// //               ["24/7", "Member support focus"],
// //             ].map(([value, label]) => (
// //               <div key={label} className="rounded-md bg-zinc-50 p-5">
// //                 <div className="text-3xl font-bold text-emerald-700">{value}</div>
// //                 <div className="mt-2 text-sm text-zinc-600">{label}</div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const Hero: React.FC = () => {
//   return (
//     <section className="relative bg-gradient-to-r from-green-800 to-green-600 text-white py-16 md:py-24 overflow-hidden">
//       {/* Background image using Next.js Image with fill */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/images/home/hero_bg.jpg"
//           alt="Hero background"
//           fill
//           priority
//           className="object-cover opacity-30"
//         />
//       </div>

//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left content */}
//           <div>
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
//               EMPOWERING FARMERS
//               <br />
//               BUILDING PROSPERITY
//             </h1>
//             <p className="text-lg md:text-xl mb-8 max-w-lg">
//               Together we create sustainable agriculture, strong communities and a better future.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <Link
//                 href="/services"
//                 className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-green-800 transition hover:bg-green-50"
//               >
//                 Explore Our Services
//               </Link>
//               <Link
//                 href="/projects"
//                 className="inline-flex items-center justify-center rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
//               >
//                 View Our Projects
//               </Link>
//             </div>
//           </div>

//           {/* Right content – Stats grid */}
//           <div className="grid grid-cols-2 gap-4 sm:gap-6">
//             <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg text-center border border-white/20">
//               <div className="text-3xl sm:text-4xl font-bold">183,756+</div>
//               <div className="text-sm sm:text-base mt-1">Members</div>
//             </div>
//             <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg text-center border border-white/20">
//               <div className="text-3xl sm:text-4xl font-bold">83</div>
//               <div className="text-sm sm:text-base mt-1">Primary Cooperatives</div>
//             </div>
//             <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg text-center border border-white/20">
//               <div className="text-3xl sm:text-4xl font-bold">433.8M</div>
//               <div className="text-sm sm:text-base mt-1">Total Assets (Birr)</div>
//             </div>
//             <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg text-center border border-white/20">
//               <div className="text-3xl sm:text-4xl font-bold">102</div>
//               <div className="text-sm sm:text-base mt-1">Employees</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/home/hero_bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45"></div>
      </div>


      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 min-h-[80vh] flex items-center">
        <div className="grid lg:grid-cols-2 gap-10 items-center w-full">
          {/* Left */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              EMPOWERING FARMERS
              <br />
              BUILDING{" "}
              <span className="text-green-400">PROSPERITY</span>
            </h1>

            <p className="mt-6 text-lg text-gray-200 max-w-xl">
              Together we create sustainable agriculture, strong communities,
              and a better future.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-green-600 px-6 py-4 rounded-xl font-semibold hover:bg-green-700">
                Explore Our Services
              </button>

              <button className="border border-white px-6 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition">
                View Our Projects
              </button>
            </div>
          </div>

          {/* Right Stats */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-green-900/70 backdrop-blur-md rounded-3xl p-8 space-y-6 w-[320px]">
              <Stat title="Members" value="183,756+" />
              <Stat title="Primary Cooperatives" value="83" />
              <Stat title="Total Assets (Birr)" value="433.8M" />
              <Stat title="Employees" value="102" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="border-b border-green-700 pb-4 last:border-none">
      <h2 className="text-3xl font-bold text-white">{value}</h2>
      <p className="text-green-200">{title}</p>
    </div>
  );
}