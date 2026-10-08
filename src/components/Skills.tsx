import Section from "./Section";
import { skillGroups } from "../data/content";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" intro="Grouped by area, as listed on my CV.">
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((g) => (
          <article key={g.title} className="glass reveal p-6 transition-colors hover:border-cyan/40">
            <h3 className="font-display text-lg font-semibold text-white">{g.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => <li key={s} className="tag">{s}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
