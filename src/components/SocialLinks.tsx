import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/content";

export default function SocialLinks({ className = "" }: { className?: string }) {
  const items = [
    { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin, external: true },
    { label: "GitHub", href: profile.github, Icon: Github, external: true },
    { label: "Email", href: `mailto:${profile.email}`, Icon: Mail, external: false },
  ];
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {items.map(({ label, href, Icon, external }) => (
        <li key={label}>
          <a href={href} aria-label={label} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-cyan/60 hover:text-cyan">
            <Icon className="h-5 w-5" aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  );
}
