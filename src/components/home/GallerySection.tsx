export default function GallerySection() {
  const images = ["Training", "Harvest", "Members", "Market"];

  return (
    <section id="gallery" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Gallery
          </p>
          <h2 className="mt-3 text-3xl font-bold text-zinc-950 md:text-4xl">
            Moments from our cooperative work.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((label, index) => (
            <div
              key={label}
              className="flex aspect-[4/3] items-end rounded-lg bg-gradient-to-br from-emerald-700 via-lime-700 to-zinc-900 p-4"
            >
              <span className="rounded-md bg-white/90 px-3 py-1 text-sm font-semibold text-zinc-900">
                {label} {index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
