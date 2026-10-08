import Section from "./Section";
import { credentials } from "../data/content";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications & Training" intro="Each item is labeled as listed on my CV: certificate, course, training, or learning path.">
      <div className="grid gap-5 md:grid-cols-2">
        {credentials.map((c) => (
          <article key={c.name + c.issuer} className="glass reveal p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-lg font-semibold text-white">{c.issuer ? `${c.issuer} – ${c.name}` : c.name}</h3>
                {c.period && <p className="mt-1 font-mono text-sm text-cyan">{c.period}</p>}
              </div>
              <span className="shrink-0 rounded-md border border-mint/40 px-2 py-0.5 text-xs text-mint">{c.kind}</span>
            </div>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-300 marker:text-cyan/60">{c.topics.map((t) => <li key={t}>{t}</li>)}</ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
