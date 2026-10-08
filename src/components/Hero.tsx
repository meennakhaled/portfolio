import { useState } from "react";
import { Download } from "lucide-react";
import { profile } from "../data/content";
import SocialLinks from "./SocialLinks";

function Terminal() {
  const lines = ["detect", "analyze", "contain", "recover"];
  return (
    <div className="glass mt-8 max-w-md p-4 font-mono text-sm" aria-hidden>
      <div className="mb-3 flex gap-1.5">{[0, 1, 2].map((i) => <span key={i} className="h-2.5 w-2.5 rounded-full bg-white/15" />)}</div>
      <p className="text-mute">$ incident-response --lifecycle</p>
      {lines.map((l) => (<p key={l} className="text-slate-300"><span className="text-mint">✓</span> {l}</p>))}
      <p className="text-cyan">$<span className="caret"> ▍</span></p>
    </div>
  );
}

function Photo() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="relative mx-auto w-64 sm:w-80 lg:w-96">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-cyan/20 via-transparent to-mint/20 blur-2xl" aria-hidden />
      <div className="glass float relative rounded-[2rem] p-3">
        <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-cyan/40 bg-panel">
          {failed ? (
            <div className="grid h-full place-items-center text-center">
              <div><p className="font-display text-6xl text-cyan">MK</p><p className="mt-3 px-4 text-xs text-mute">Add your photo at public{profile.photo}</p></div>
            </div>
          ) : (
            <img src={profile.photo} alt={`Portrait of ${profile.name}`} width={800} height={1000} fetchPriority="high" onError={() => setFailed(true)} className="h-full w-full object-cover" />
          )}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="mb-3 font-mono text-sm text-mint">{profile.location}</p>
          <h1 id="hero-title" className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">Hi, I'm {profile.shortName}</h1>
          <p className="mt-3 font-display text-xl text-cyan sm:text-2xl">{profile.title}</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href={profile.cv} download="Menna-Khaled-CV.pdf" className="btn btn-ghost"><Download className="h-4 w-4" aria-hidden /> Download CV</a>
          </div>
          <SocialLinks className="mt-6" />
          <Terminal />
        </div>
        <Photo />
      </div>
    </section>
  );
}
