import { GraduationCap } from "lucide-react";
import Section from "./Section";
import { education as e } from "../data/content";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <article className="glass reveal flex items-start gap-4 p-6">
        <GraduationCap className="mt-1 h-7 w-7 shrink-0 text-cyan" aria-hidden />
        <div>
          <h3 className="font-display text-xl font-semibold text-white">{e.degree}</h3>
          <p className="mt-1 text-slate-300">{e.school}</p>
          <p className="text-slate-300">{e.university}</p>
          <p className="mt-2 font-mono text-sm text-cyan">Graduated: {e.graduated}</p>
        </div>
      </article>
    </Section>
  );
}
