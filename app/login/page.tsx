import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
      <h1 className="text-2xl font-semibold text-white">
        Masuk ke Gerbangku
      </h1>

      <p className="mt-2 text-sm text-neutral-400">
        Kelola bisnis Anda dalam satu platform.
      </p>

      <form className="mt-8 space-y-4">
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
          Masuk
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-neutral-400">
        Belum punya akun?{" "}
        <Link href="/daftar" className="text-white hover:underline">
          Daftar
        </Link>
      </p>
    </div>
  );
}
