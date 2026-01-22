import Link from "next/link";


export function Navbar() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl bg-[rgba(11,15,20,0.6)] border-b border-white/10">
            <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
                <div className="text-lg font-semibold tracking-wide">Gerbangku</div>
                <nav className="hidden md:flex gap-8 text-sm text-gray-300">
                    <Link href="#features">Features</Link>
                    <Link href="#solutions">Solutions</Link>
                    <Link href="#pricing">Pricing</Link>
                    <Link href="#contact">Contact</Link>
                </nav>
                <Link
                    href="#contact"
                    className="rounded-xl bg-white text-black px-4 py-2 text-sm font-medium hover:bg-gray-200"
                >
                Request Demo
                </Link>
            </div>
        </header>
    );
}