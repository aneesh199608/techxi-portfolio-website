import { Button } from "@/components/ui/button";
import { Mail, Phone, Copy, BadgeCheckIcon } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/sections/Footer";

const CONTACT = {
  email: "sales@techxi.in",
  phone: "+91 63784 51341",
  // address: "Koramangala, Bangalore, Karnataka, India"
};

export default function Contact() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col items-center px-4 py-8 sm:px-24 md:py-24">
      <div className="relative z-10 max-w-3xl mx-auto px-4 py-16 flex flex-col gap-12 items-center">
        <div className="text-center flex flex-col gap-3 items-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-2">
            Contact
          </h1>
          <Badge
            variant="secondary"
            className="bg-blue-500 text-white dark:bg-blue-600"
          >
            <BadgeCheckIcon className="w-6 h-6 mr-1" />
            We typically reply in less than 2 hours
          </Badge>
          <p className="text-lg sm:text-xl font-medium">
            Let's connect! Reach out to TechXi for any queries, collaborations, or just to say hello. We’re happy to help you grow your business with innovative solutions.
          </p>
        </div>

        {/* Responsive stack: column on mobile, row on desktop */}
        <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8 mt-4 items-center justify-center">
          <ContactCard
            icon={<Mail className="w-16 h-16 mx-auto mb-3 text-blue-500" />}
            label="Email"
            value={CONTACT.email}
          />
          <ContactCard
            icon={<Phone className="w-16 h-16 mx-auto mb-3 text-green-500" />}
            label="Phone"
            value={CONTACT.phone}
          />
          {/* 
          <ContactCard
            icon={<MapPin className="w-16 h-16 mx-auto mb-3 text-purple-500" />}
            label="Address"
            value={CONTACT.address}
          /> */}
        </div>
      </div>
      <Footer />
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
  try {
    // Try modern Clipboard API first
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  } catch (err) {
    // Fallback for some mobile browsers
    try {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (fallbackErr) {
      alert("Copy failed! Please copy manually.");
    }
  }
};


  return (
    <div
      className="
        flex flex-col items-center text-center 
        rounded-xl bg-white/5 backdrop-blur 
        p-8 shadow border border-white/10
        w-full max-w-xs min-w-[18rem] 
        min-h-[220px]
      "
    >
      {icon}
      <h4 className="font-semibold text-lg mb-2">{label}</h4>
      <p className="text-base mb-4 break-all">{value}</p>
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
        onClick={handleCopy}
        aria-label={`Copy ${label.toLowerCase()}`}
      >
        <Copy className="w-4 h-4" />
        {copied ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
}
