import Image from "next/image";

export default function PartnerStrip() {
  const partners = [
    {
      name: "Cooperative Commission",
      logo: "/partners/partner1.jpg",
    },
    {
      name: "Amhara Region Government",
      logo: "/partners/partner2.jpg",
    },
    {
      name: "ATI Transforming Ethiopia",
      logo: "/partners/partner3.jpg",
    },
    {
      name: "Development Partners",
      logo: "/partners/partner4.jpg",
    },
    {
      name: "Financial Institutions",
      logo: "/partners/partner5.png",
    },
  ];

  return (
    <section className="relative z-20 -mt-10 px-4 md:px-6">
      <div className="mx-auto max-w-7xl rounded-2xl bg-white px-8 py-6 shadow-lg">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center gap-3">
              <div className="relative h-12 w-12">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>

              <p className="text-xs font-medium text-gray-700 md:text-sm">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}