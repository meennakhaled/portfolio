import { Terminal } from "lucide-react";
import Section from "./Section";
import { toolkit } from "../data/content";

export default function Toolkit() {
  return (
    <Section id="toolkit" title="Security Toolkit" intro="Tools from my CV that I've used in labs, internships, and training.">
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {toolkit.map((t) => (
          <li key={t} className="glass reveal flex items-center gap-2 px-4 py-3 text-sm text-slate-200 transition-colors hover:border-cyan/40">
            <Terminal className="h-4 w-4 shrink-0 text-mint" aria-hidden /> {t}
          </li>
        ))}
      </ul>
    </Section>
  );
}
