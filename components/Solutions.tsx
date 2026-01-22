export function Solutions() {
    return (
        <section id="solutions" className="py-24 bg-white text-black">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-3xl font-semibold">Solutions by Industry</h2>
                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    {["Hospitality", "Home Service", "UMKM & Retail"].map((s) => (
                        <div key={s} className="rounded-2xl border p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/10">
                            <h3 className="text-lg font-medium">{s}</h3>
                            <p className="mt-3 text-sm text-gray-600">
                                 Sistem digital terintegrasi yang disesuaikan untuk {s.toLowerCase()}.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}