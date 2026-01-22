export function Pricing() {
    return (
        <section id="pricing" className="py-24 border-t border-white/10">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-3xl font-semibold">Simple Pricing</h2>
                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    {["Starter", "Business", "Enterprise"].map((tier) => (
                        <div key={tier} className="glow-card rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/10">
                            <h3 className="text-lg font-medium">{tier}</h3>
                            <p className="mt-4 text-sm text-gray-400">Pricing disesuaikan dengan kebutuhan.</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}