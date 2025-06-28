import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Smartphone,
  Code,
  MapPin,
  UserCheck,
  Users,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Website Development",
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      description:
        "Fast, responsive websites built with React, Next.js & Tailwind.",
    },
    {
      title: "Mobile Applications",
      icon: <Smartphone className="w-8 h-8 text-green-400" />,
      description:
        "Cross‑platform mobile apps using React Native or Flutter.",
    },
    {
      title: "Custom Software",
      icon: <Code className="w-8 h-8 text-purple-400" />,
      description:
        "Tailored automation, workflow systems & API solutions.",
    },
    {
      title: "IT & GIS Solutions",
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      description:
        "GIS tools, security audits, analytics & RPA services.",
    },
    {
      title: "Salesforce Services",
      icon: <UserCheck className="w-8 h-8 text-indigo-500" />,
      description:
        "Custom Salesforce development, integrations & support.",
    },
    {
      title: "Staff Hiring",
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      description:
        "Contract PHP, .NET, JS devs, PMs & QA — on-demand.",
    },
  ];

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col items-center px-4 py-8 sm:px-24 md:py-24">
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 flex flex-col text-center gap-4">
        <h1 className="text-3xl sm:text-5xl font-bold">
          Our Services
        </h1>
        <p className="text-lg sm:text-xl font-medium">
          Discover how TechXi empowers businesses with end-to-end solutions.
        </p>
      </div>

      <div className="max-w-5xl w-full grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((svc) => (
          <Card
            key={svc.title}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="flex items-center space-x-4 px-6 pt-6">
              {svc.icon}
              <h3 className="text-xl font-semibold">{svc.title}</h3>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-2">
              <p className="text-muted-foreground">{svc.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <Badge variant="outline" className="px-6 py-3 text-lg">
          Want something unique? Get in touch!
        </Badge>
      </div>
    </section>
  );
}
