import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import Section from "./Section";
import SocialLinks from "./SocialLinks";
import { profile } from "../data/content";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // No backend: the form opens the visitor's email app with the message prefilled.
  function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const f = new FormData(ev.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${f.get("name")}`);
    const body = encodeURIComponent(`${f.get("message")}\n\nFrom: ${f.get("name")} (${f.get("email")})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const field = "mt-1 w-full rounded-lg border border-white/10 bg-panel px-4 py-3 text-slate-100 placeholder:text-mute focus:border-cyan";

  return (
    <Section id="contact" title="Contact" intro="Open to cybersecurity and SOC opportunities. The best way to reach me is email.">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="reveal">
          <a href={`mailto:${profile.email}`} className="btn btn-primary"><Mail className="h-4 w-4" aria-hidden /> Email me</a>
          <p className="mt-4 text-slate-300">{profile.email}</p>
          <SocialLinks className="mt-6" />
        </div>
        <form onSubmit={onSubmit} className="glass reveal space-y-4 p-6">
          <label className="block text-sm text-slate-300">Name
            <input name="name" required autoComplete="name" className={field} />
          </label>
          <label className="block text-sm text-slate-300">Your email
            <input name="email" type="email" required autoComplete="email" className={field} />
          </label>
          <label className="block text-sm text-slate-300">Message
            <textarea name="message" required rows={4} className={field} />
          </label>
          <button type="submit" className="btn btn-primary">Open in my email app</button>
          <p className="text-xs text-mute" role="status">
            {sent ? "Your email app should have opened. Nothing is stored by this site until you send the email." : "This form doesn't store messages. It opens your email app with the message ready to send."}
          </p>
        </form>
      </div>
    </Section>
  );
}
