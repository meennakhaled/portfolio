import Section from "./Section";
import { about } from "../data/content";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="reveal max-w-3xl space-y-4 text-lg leading-relaxed text-slate-300">
        {about.map((p) => <p key={p}>{p}</p>)}
      </div>
    </Section>
  );
}
