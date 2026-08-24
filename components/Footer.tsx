import { footer } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative z-[2] py-[34px] text-center font-mono text-[12.5px] text-muted">
      {footer.name} · {footer.location} · © {new Date().getFullYear()}
    </footer>
  );
}
