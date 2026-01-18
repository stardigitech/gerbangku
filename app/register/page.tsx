import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
      <h1 className="text-2xl font-semibold text-white">
        Buat Akun Gerbangku
      </h1>

      <p className="mt-2 text-sm text-neutral-400">
        Mulai kelola bisnis Anda secara digital.
      </p>

      <form className="mt-8 space-y-4">
        <input
          type="text"
          placeholder="Nama Bisnis"
          className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="mt-2 w-full rounded-lg bg-blue-600 py-3 text-sm font-medium text-white hover:bg-blue-500 transition"
        >
          Daftar
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-neutral-400">
        Sudah punya akun?{" "}
        <Link href="/login" className="text-white hover:underline">
          Masuk
        </Link>
      </p>
    </div>
  );
}
