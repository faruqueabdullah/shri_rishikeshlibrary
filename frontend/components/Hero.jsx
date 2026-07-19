import Link from "next/link";

function Hero() {
  return (
    <section
      id="home"
      className="pt-16 min-h-[90vh]"
    >
      <div
      className="relative flex items-center bg-cover bg-center m-5 rounded-4xl overflow-hidden"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1920&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/85 via-slate-900/60 to-slate-900/30" />
        <div className="border relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Chase your dream in a{" "}
              <span className="block">Modern Learning Space</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl">
              Indulge in the adventure of learning as you discover the
              breathtaking collection and unparalleled facilities of our modern
              library.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
              >
                Contact Us
              </Link>
              <Link
                href="#gallery"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-white/70 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
