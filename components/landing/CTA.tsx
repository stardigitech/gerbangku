import Link from "next/link";


export function CTA() {
    return (
        <section
            id="contact"
            className="relative py-28 overflow-hidden bg-gradient-to-b from-[#0B0F14] to-[#111827]"
        >
            {/* soft glow background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-white/10 blur-[140px]" />
            </div>


            <div className="relative mx-auto max-w-4xl px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                    Ready to Simplify Your Business?
                </h2>
                <p className="mt-4 text-gray-400 leading-relaxed">
                    Start with a demo and see how Gerbangku adapts to your business —
                    no matter the industry.
                </p>


                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/demo"
                        className="
                        rounded-xl bg-white text-black
                        px-8 py-3 text-sm font-medium
                        hover:bg-gray-200 transition    
                        "
                    >
                        Request Demo
                    </Link>


                    <Link
                        href="mailto:hello@gerbangku.com"
                        className="
                            rounded-xl border border-white/20
                            px-8 py-3 text-sm text-gray-300
                            hover:bg-white/5 transition
                        "
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}