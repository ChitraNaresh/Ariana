export default function Hero() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center bg-gradient-to-br from-amber-50 via-white to-stone-100">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 w-full">
        <div className="max-w-4xl text-center mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif tracking-tight leading-tight mb-6">
            Ariana: Global Quality.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Distinctive Living & Commerce.
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-zinc-600 leading-relaxed mb-10">
            Precision Engineering Meets Visionary Design.
            <br />
            <span className="font-medium text-zinc-900">
              Powered by Donayang India.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/brand"
              className="rounded-full bg-zinc-900 px-8 py-4 text-sm sm:text-base font-medium text-white transition hover:bg-zinc-800"
            >
              Explore The ARIANA
            </a>

            <a
              href="/contact"
              className="rounded-full border border-zinc-300 px-8 py-4 text-sm sm:text-base font-medium text-zinc-900 transition hover:bg-zinc-100"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
