import Section from "./Section";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative ml-3 border-l border-line">
        {experience.map((e) => (
          <li key={e.org} className="reveal relative pb-10 pl-8 last:pb-0">
            <span aria-hidden className={`absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-ink ${e.current ? "bg-mint" : "bg-cyan"}`} />
            <div className="glass p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold text-white">{e.org}{e.place ? `, ${e.place}` : ""}</h3>
                <p className="font-mono text-sm text-cyan">{e.period}</p>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300 marker:text-cyan/60">
                {e.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
