function Gallery() {
  const images = [
    "https://source.unsplash.com/random/400x300?tech",
    "https://source.unsplash.com/random/400x300?nature",
    "https://source.unsplash.com/random/400x300?people",
    "https://source.unsplash.com/random/400x300?city",
    "https://source.unsplash.com/random/400x300?design",
    "https://source.unsplash.com/random/400x300?abstract",
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt="Gallery"
            className="rounded-xl shadow-md hover:scale-105 transition"
          />
        ))}
      </div>
    </section>
  );
}
export default Gallery;
