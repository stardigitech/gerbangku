export function Features() {
  const items = [
    {
      title: "Business Workflow Management",
      desc: "Manage orders, bookings, requests, or internal workflows in one structured system."
    },
    {
      title: "Website & Digital Presence",
      desc: "Build a professional, SEO-ready website that represents your business across channels."
    },
    {
      title: "Operations & Performance Dashboard",
      desc: "Track activities, transactions, and performance metrics in real time."
    }
  ];

  return (
    <section id="features" className="py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-semibold">Core Capabilities</h2>
        <p className="mt-3 text-gray-400 max-w-2xl">
          Fundamental building blocks designed to support businesses across industries.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="
                glow-card
                rounded-2xl
                bg-white/5 backdrop-blur
                border border-white/10
                p-8
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-2xl
              "
            >
              <span className="text-xs uppercase tracking-wide text-gray-500">
                Core Capability
              </span>

              <h3 className="mt-2 text-lg font-medium">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}