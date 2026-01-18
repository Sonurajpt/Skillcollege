// components/Services.tsx
const services = [
  { icon: "🔍", title: "Seo/Sem", desc: "Boost your visibility with expert SEO & SEM strategies" },
  { icon: "📈", title: "Marketing", desc: "Grow your brand with data-driven marketing campaigns" },
  { icon: "📧", title: "Viral Campaign", desc: "Create campaigns that spread like wildfire" },
  { icon: "🎯", title: "Others", desc: "Custom solutions tailored to your unique needs" },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">We Provide The Best Services</h2>
        <p className="text-gray-600 mb-16">Trusted by over 10,000+ clients worldwide</p>

        <div className="grid md:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
