export function Footer() {
    return (
        <footer id="contact" className="py-16 border-t border-white/10">
            <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between gap-8">
                <div>
                    <div className="text-lg font-semibold">Gerbangku</div>
                    <p className="mt-3 text-sm text-gray-400 max-w-sm">
                        Unified digital platform untuk bisnis hospitality dan service modern.
                    </p>
                </div>
                <div className="text-sm text-gray-400">© {new Date().getFullYear()} Gerbangku</div>
            </div>
        </footer>
    );
}