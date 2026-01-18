import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
          Satu Gerbang Digital
          <br className="hidden md:block" />
          untuk Semua Bisnis
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Gerbangku membantu bisnis tradisional, UMKM, hingga
          hospitality mengelola operasional secara modern,
          sederhana, dan terintegrasi.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button>Mulai Gratis</Button>
          <Button variant="secondary">Konsultasi</Button>
        </div>
      </div>
    </section>
  );
}
