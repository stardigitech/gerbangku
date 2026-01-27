export function WhyGerbangku() {
    const reasons = [
        {
            problem: "Too many disconnected tools",
            solution: "Gerbangku centralizes website, operations, and workflows into one unified platform."
        },
        {
            problem: "Messy processes as the business grows",
            solution: "A structured system that grows with your business, without rebuilding everything."
        },
        {
            problem: "Tools that don’t adapt to your business model",
            solution: "Flexible modules that can be configured for different industries and workflows."
        }
    ];


    return (
        <section id="why" className="py-28 bg-[#0B0F14] text-white border-t border-white/10">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-3xl font-semibold">Why Gerbangku</h2>
                <p className="mt-3 text-gray-400 max-w-2xl">
                    Most businesses struggle not because of lack of tools, but because their systems don’t work together.
                </p>


                <div className="mt-14 grid md:grid-cols-3 gap-8">
                    {reasons.map((item, i) => (
                        <div
                            key={i}
                            className="
                                rounded-2xl
                                bg-white/5 backdrop-blur
                                border border-white/10
                                p-8
                                transition-all duration-300 ease-out
                                hover:-translate-y-1 hover:shadow-2xl
                            "
                        >
                        <h3 className="text-sm uppercase tracking-wide text-gray-400">
                            The Problem
                        </h3>
                        <p className="mt-2 text-lg font-medium">
                            {item.problem}
                        </p>
                        <div className="mt-4 h-px w-full bg-white/10" />
                            <h4 className="mt-4 text-sm uppercase tracking-wide text-gray-400">
                                Our Solution
                            </h4>
                            <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                                {item.solution}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}