import type { ReactNode } from "react";

type Props = { id: string; title: string; intro?: string; children: ReactNode };
export default function Section({ id, title, intro, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <div className="reveal mb-10 max-w-2xl">
        <h2 id={`${id}-title`} className="section-title">{title}</h2>
        {intro && <p className="mt-3 text-mute">{intro}</p>}
      </div>
      {children}
    </section>
  );
}
