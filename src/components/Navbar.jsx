import { useEffect, useState } from "react";

const navLinks = [
    { label: "About",href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
    const onScroll = () => {
        setIsScrolled(window.scrollY > 24);
    }

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
    },[]);

    return(
    <header className="fixed top-0 z-50 w-full">
        <div className={`mx-auto transition-all duration-300 ${isScrolled 
            ? "mt-3 w-[min(540px,calc(100%-24px))]" 
            : "w-[min(1180px,calc(100%-48px))]"}
        `}>
                
        <div className={`relative flex items-center transition-all duration-300 ${isScrolled
            ? "min-h-[62px] justify-between rounded-full border border-violet-300/20 bg-white/90 px-4 shadow-2xl backdrop-blur-md md:justify-center"
            : "min-h-[78px] justify-between border-b border-white/10"
        }`}>
            {!isScrolled && 
            (<a href="#about" className="text-lg font-bold tracking-wide text-white">
                <span className="text-violet-400">Yadri</span> Amtsal
            </a>)}
            {isScrolled && (
                <a href="#about" className="text-base font-bold tracking-wide text-slate-900 md:hidden">
                    <span className="text-violet-500">Yadri</span> Amtsal
                </a>
            )}
            <button onClick={() => setIsOpen((prev) => !prev)} className="flex h-10 w-10 items-center justify-center md:hidden" aria-label="Toggle menu">
                <div className="relative h-5 w-6">
                    <span className={`absolute left-0 top-0 h-0.5 w-full rounded bg-gradient-to-r from-cyan-400 to-violet-500 transition ${isOpen ? "translate-y-[9px] rotate-45": ""}`}/>
                    <span className={`absolute left-0 top-[9px] h-0.5 w-full rounded bg-gradient-to-r from-cyan-400 to-violet-500 transition ${isOpen ? "opacity-0" : ""}`}/>
                    <span className={`absolute left-0 top-[18px] h-0.5 w-full rounded bg-gradient-to-r from-cyan-400 to-violet-500 transition ${isOpen ? "-translate-y-[9px] -rotate-45" : ""}`}/>
                </div>
            </button>
             <nav className="hidden md:flex md:items-center md:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition ${
                  isScrolled
                    ? "text-slate-600 hover:text-slate-950"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {isOpen && (
            <div
              className={`absolute left-0 right-0 top-[110%] rounded-2xl border p-4 md:hidden ${
                isScrolled
                  ? "border-violet-300/30 bg-white/95 backdrop-blur-md"
                  : "border-white/10 bg-slate-900/95 backdrop-blur-md"
              }`}
            >
              <nav className="flex flex-col">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`border-b py-3 text-sm font-medium last:border-b-0 ${
                      isScrolled
                        ? "border-slate-200 text-slate-700 hover:text-slate-950"
                        : "border-white/10 text-slate-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
        </div>
    </header>
    );
}
