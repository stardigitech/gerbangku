export default function LoginPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black text-white">

      {/* Soft Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.05),transparent_40%)]" />

      {/* Card */}
      <div className="relative w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 shadow-[0_0_60px_rgba(255,255,255,0.05)]">

        {/* Branding */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold tracking-tight">
            Welcome Back
          </h1>
          <p className="text-gray-400 mt-3 text-sm">
            Secure access to your Gerbangku workspace
          </p>
        </div>

        <form className="space-y-6">

          <div className="space-y-2">
            <label className="text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-200"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-400">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-200"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-white text-black font-medium py-3 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg"
          >
            Sign In
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-1 h-px bg-white/10" />
          <span className="px-4 text-xs text-gray-500">OR</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Secondary Action */}
        <button className="w-full bg-transparent border border-white/15 text-white py-3 rounded-xl hover:bg-white/5 transition-all duration-200">
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 mt-10">
          Don’t have an account?{" "}
          <span className="text-white hover:underline cursor-pointer">
            Create account
          </span>
        </p>

      </div>
    </div>
  );
}