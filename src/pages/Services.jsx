function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Modern and responsive websites tailored to your needs.",
    },
    {
      title: "UI/UX Design",
      desc: "Beautiful and user-friendly designs for all platforms.",
    },
    {
      title: "Digital Strategy",
      desc: "Helping you grow your online presence and brand.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-3 text-indigo-600">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Services;
