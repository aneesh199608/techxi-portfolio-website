import { Mail, Phone } from "lucide-react";
import Logo from "../Logo";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-background/80 backdrop-blur py-8 px-4">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo & Copyright */}
        <div className="flex items-center gap-3">
          <Logo
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="text-base font-semibold">
            © {new Date().getFullYear()} TechXi. All rights reserved.
          </span>
        </div>

        {/* Contact */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center text-muted-foreground text-sm">
          <a
            href="mailto:sales@techxi.in"
            className="flex items-center gap-1 hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
            sales@techxi.in
          </a>
          <a
            href="tel:+916378451341"
            className="flex items-center gap-1 hover:text-primary transition-colors"
          >
            <Phone className="w-5 h-5" />
            +91 63784 51341
          </a>
        </div>
      </div>
    </footer>
  );
}
