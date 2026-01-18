import Button from "@/components/ui/Button";

const plans = [
  {
    name: "Starter",
    price: "Gratis",
    description: "Untuk bisnis kecil yang baru mulai digital.",
    features: [
      "1 bisnis",
      "Dashboard dasar",
      "Manajemen produk / layanan",
      "Support komunitas",
    ],
    highlight: false,
    cta: "Mulai Gratis",
  },
  {
    name: "Growth",
    price: "Rp149.000",
    description: "Untuk bisnis yang mulai berkembang.",
    features: [
      "3 bisnis",
      "Laporan & analitik",
      "Manajemen customer",
      "WhatsApp notification",
      "Email support",
    ],
    highlight: true,
    cta: "Coba 14 Hari",
  },
  {
    name: "Pro",
    price: "Rp399.000",
    description: "Untuk bisnis serius & hospitality.",
    features: [
      "Bisnis tanpa batas",
      "Multi user & role",
      "Advanced report",
      "Priority support",
      "Custom integration",
    ],
    highlight: false,
    cta: "Hubungi Sales",
  },
];

export default function Pricing() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h1 className="text-3xl font-semibold text-gray-900">
          Harga yang Masuk Akal untuk Semua Bisnis
        </h1>
        <p className="mt-4 text-gray-600">
          Dari usaha tradisional, UMKM, hingga bisnis hospitality —
          Gerbangku tumbuh bersama bisnis Anda.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 ${
                plan.highlight
                  ? "border-teal-600 shadow-lg"
                  : "border-gray-200"
              }`}
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {plan.name}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {plan.description}
              </p>

              <p className="mt-6 text-3xl font-semibold text-gray-900">
                {plan.price}
                {plan.price !== "Gratis" && (
                  <span className="text-sm font-normal text-gray-500">
                    /bulan
                  </span>
                )}
              </p>

              <ul className="mt-6 space-y-3 text-sm text-gray-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-teal-600">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  variant={plan.highlight ? "primary" : "secondary"}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            Tidak yakin plan mana yang cocok?
          </h2>
          <p className="mt-3 text-gray-600">
            Konsultasikan kebutuhan bisnis Anda dengan kami.
          </p>
          <div className="mt-6 flex justify-center">
            <Button variant="secondary">
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
