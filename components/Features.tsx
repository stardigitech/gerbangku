export function Features() {
    const items = [
        { title: "Booking Engine", desc: "Reservasi real-time untuk villa, homestay, dan jasa." },
        { title: "Website Builder", desc: "Website SEO-ready tanpa ribet teknis." },
        { title: "Operational Dashboard", desc: "Pantau booking, revenue, dan aktivitas." }
    ];

    return (
        <section id="features" className="py-24 border-t border-white/10">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-3xl font-semibold">Core Features</h2>
                <p className="mt-3 text-gray-400 max-w-2xl">
                    Modular, scalable, dan dirancang untuk pertumbuhan bisnis nyata.
                </p>
                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    {items.map((item, i) => (
                        <div key={i} className="glow-card rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl">
                            <h3 className="text-lg font-medium">{item.title}</h3>
                            <p className="mt-3 text-sm text-gray-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}