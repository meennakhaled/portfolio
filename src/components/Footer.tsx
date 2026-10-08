import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <p className="text-sm text-mute">© 2026 Menna Khaled Gamal. All rights reserved.</p>
        <SocialLinks />
      </div>
    </footer>
  );
}
