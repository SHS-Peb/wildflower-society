const links = [
    { label: "Home", href: "#home" },
    { label: "Events", href: "#events" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    return (
        <header className="fixed top-0 inset-x-0 z-50 pointer-events-none">
            <nav className="pointer-events-auto mx-auto max-w-6xl px-6 pt-6">
                <div className="flex justify-center gap-16">
                    {links.map((l) => (
                        <a key={l.href} href={l.href} className="nav-pill px-8 py-2 rounded-lg text-lgleading-noneselect-none">
                            {l.label}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
}
