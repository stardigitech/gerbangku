export function Pricing() {
    const plans = [
        {
            name: "Starter",
            desc: "For individuals and small teams starting their digital journey.",
            features: [
                "Core business modules",
                "Basic workflow & automation",
                "Email support"
            ],
            cta: "Get Started",
            highlight: false
        },
        {
            name: "Business",
            desc: "For growing businesses that need scalability and control.",
            features: [
                "All core modules",
                "Advanced automation",
                "Multi-user access",
                "Priority support"
            ],
            cta: "Request Demo",
            highlight: true
        },
        {
            name: "Enterprise",
            desc: "For organizations with custom workflows and complex needs.",
            features: [
                "Custom modules",
                "Dedicated infrastructure",
                "SLA & onboarding support"
            ],
            cta: "Talk to Sales",
            highlight: false
        }
    ];

    return (
        <section id="pricing" className="py-28 border-t border-white/10">
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-semibold">Flexible Pricing</h2>
                    <p className="mt-4 text-gray-400">
                        Choose a plan that fits your business today — and scales with you tomorrow.
                    </p>
                </div>


                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={
                                "relative rounded-2xl p-8 backdrop-blur transition-all duration-300 " +
                                (plan.highlight
                                    ? "bg-white/10 border border-white/20 shadow-2xl"
                                    : "bg-white/5 border border-white/10")
                            }
                        >
                            {plan.highlight && (
                                <span className="absolute -top-3 left-6 rounded-full bg-white px-3 py-1 text-xs font-medium text-black">
                                    Recommended
                                </span>
                            )}


                            <h3 className="text-xl font-medium">{plan.name}</h3>
                            <p className="mt-3 text-sm text-gray-400">{plan.desc}</p>


                            <ul className="mt-6 space-y-3 text-sm text-gray-300">
                                {plan.features.map((f) => (
                                    <li key={f} className="flex items-start gap-2">
                                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-400" />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>


                            <a
                                href="#contact"
                                className={
                                    "mt-8 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-medium transition " +
                                    (plan.highlight
                                        ? "bg-white text-black hover:bg-gray-200"
                                        : "border border-white/20 text-white hover:bg-white/5")
                                }
                            >
                                {plan.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}