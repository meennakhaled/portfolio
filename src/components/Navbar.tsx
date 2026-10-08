import { useEffect, useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import { navLinks, profile } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const href = (l: string) => `#${l.toLowerCase()}`;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b border-white/10 bg-ink/85 backdrop-blur-md" : "bg-transparent"}`}>
      <nav aria-label="Main" className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300 ${scrolled ? "h-14" : "h-20"}`}>
        <a href="#home" className="flex items-center gap-2 font-display font-semibold text-white">
          <ShieldCheck className="h-5 w-5 text-cyan" aria-hidden /> {profile.shortName}
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <li key={l}><a href={href(l)} className="text-sm text-slate-300 transition-colors hover:text-cyan">{l}</a></li>
          ))}
        </ul>
        <button className="rounded-md p-2 text-slate-200 md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((o) => !o)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="mx-auto max-w-6xl space-y-1 px-5 pb-5 md:hidden">
          {navLinks.map((l) => (
            <li key={l}><a href={href(l)} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-slate-200 hover:bg-white/5 hover:text-cyan">{l}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
