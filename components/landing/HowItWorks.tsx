export function HowItWorks() {
    const steps = [
        {
            step: "01",
            title: "Set Up Your Business",
            desc: "Create your account, define your business structure, and choose the modules you need."
        },
        {
            step: "02",
            title: "Run Daily Operations",
            desc: "Manage workflows, transactions, and activities from a single, organized system."
        },
        {
            step: "03",
            title: "Grow with Confidence",
            desc: "Scale your business using flexible tools that adapt as your needs evolve."
        }
    ];


    return (
        <section id="how-it-works" className="py-28 bg-white text-gray-900">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-3xl font-semibold">How It Works</h2>
                <p className="mt-3 text-gray-600 max-w-2xl">
                    Get started quickly without complex setup or technical overhead.
                </p>


                <div className="mt-14 grid md:grid-cols-3 gap-10">
                    {steps.map((item) => (
                        <div
                            key={item.step}
                            className="
                                rounded-2xl border border-gray-200
                                bg-white p-8
                                transition-all duration-300 ease-out
                                hover:-translate-y-1 hover:shadow-xl
                            "
                            >
                            <span className="text-sm font-semibold text-gray-400">
                                {item.step}
                            </span>
                            <h3 className="mt-2 text-lg font-medium">
                                {item.title}
                            </h3>
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