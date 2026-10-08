import { Github, ExternalLink } from "lucide-react";
import Section from "./Section";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" intro="Only work supported by my CV is listed. Dashed cards are placeholders to edit in src/data/content.ts.">
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((p, i) => (
          <article key={i} className={`glass reveal flex flex-col p-6 transition-all hover:-translate-y-1 hover:border-cyan/40 ${p.placeholder ? "border-dashed" : ""}`}>
            <h3 className="font-display text-lg font-semibold text-white">{p.name}</h3>
            <p className="mt-3 text-slate-300">{p.description}</p>
            <h4 className="mt-5 text-sm font-semibold text-mint">Security concepts</h4>
            <ul className="mt-2 flex flex-wrap gap-2">{p.concepts.map((c) => <li key={c} className="tag">{c}</li>)}</ul>
            <h4 className="mt-4 text-sm font-semibold text-mint">Technologies</h4>
            <ul className="mt-2 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="tag font-mono">{t}</li>)}</ul>
            <h4 className="mt-4 text-sm font-semibold text-mint">Key contributions</h4>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">{p.contributions.map((c) => <li key={c}>{c}</li>)}</ul>
            <div className="mt-auto flex gap-3 pt-6">
              {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-4 !py-2"><Github className="h-4 w-4" aria-hidden /> GitHub</a>}
              {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-4 !py-2"><ExternalLink className="h-4 w-4" aria-hidden /> Live demo</a>}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
