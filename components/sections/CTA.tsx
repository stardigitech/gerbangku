import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="bg-gray-50 py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">
          Siap Digitalisasi Bisnis Anda?
        </h2>
        <p className="mt-4 text-gray-600">
          Mulai gratis dan kembangkan sesuai kebutuhan bisnis Anda.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="rounded-xl bg-brand px-6 py-3 text-white">
            Mulai Gratis
          </button>
          <button className="rounded-xl border border-gray-300 px-6 py-3">
            Konsultasi
          </button>
        </div>
      </div>
    </section>
  );
}
