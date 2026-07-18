import Image from "next/image";

function Gallery() {
  const GALLERY = [
    {
      img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
      title: "Reading Area",
      desc: "Quiet and comfortable spaces for focused study",
    },
    {
      img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
      title: "Book Collection",
      desc: "Extensive collection of books and resources",
    },
    {
      img: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&q=80",
      title: "Campus Area",
      desc: "Modern facilities and learning environment",
    },
  ];

  return (
    <section id="gallery" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl py-10 text-center font-bold">Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GALLERY.map((g) => (
            <div
              key={g.title}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow z-10"
            >
              <div className="absolute sm:hidden group-hover:block inset-0 bg-linear-to-t from-slate-900/85 via-slate-900/60 to-slate-900/30 z-20" />
              <div className="relative aspect-4/3.5 overflow-hidden">
                <Image
                  src={g.img}
                  alt={g.title}
                  loading="lazy"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute p-5 bottom-0 sm:-bottom-28 left-0 group-hover:bottom-0 transition-all duration-300 z-30">
                <h3 className="text-xl font-semibold text-white">
                  {g.title}
                </h3>
                <p className="mt-1 text-sm text-slate-300">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
