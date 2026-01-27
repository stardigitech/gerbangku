export function Solutions() {
  const solutions = [
    {
      title: "Transaction-Based Businesses",
      desc: "Manage bookings, orders, or sales transactions in a structured and reliable system."
    },
    {
      title: "Service & Appointment Businesses",
      desc: "Organize schedules, client requests, and service workflows with ease."
    },
    {
      title: "Multi-Channel Businesses",
      desc: "Run your website, online presence, and internal operations from one unified platform."
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-white text-black">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-semibold">Solutions</h2>
        <p className="mt-3 text-gray-600 max-w-2xl">
          Flexible solutions designed to adapt to different business models.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {solutions.map((item) => (
            <div
              key={item.title}
              className="
                rounded-2xl border border-gray-200
                p-8
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-xl
              "
            >
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}