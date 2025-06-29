import {
  Code,
  Palette,
  LineChart,
  Globe,
  MessageSquare,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Tilt from 'react-parallax-tilt'

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Modern, responsive websites & web apps built with React, Next.js & Tailwind.",
    icon: <Code className="h-6 w-6 text-blue-500" />,
  },
  {
    id: 2,
    title: "UI / UX Design",
    description: "User-centric design that delights and converts.",
    icon: <Palette className="h-6 w-6 text-pink-500" />,
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Data-driven strategies that fuel growth.",
    icon: <LineChart className="h-6 w-6 text-green-500" />,
  },
  {
    id: 4,
    title: "SEO Optimization",
    description: "Boost rankings and organic visibility.",
    icon: <Globe className="h-6 w-6 text-indigo-500" />,
  },
  {
    id: 5,
    title: "Content Creation",
    description: "Engaging content that resonates with your audience.",
    icon: <MessageSquare className="h-6 w-6 text-yellow-500" />,
  },
  {
    id: 6,
    title: "Performance Optimization",
    description: "Speed up digital products for better results.",
    icon: <Zap className="h-6 w-6 text-purple-500" />,
  },
];

export default function HomeServicesSection() {
  return (
    <section className="bg-background px-4 py-12 sm:px-24 md:py-20 text-foreground">
      <div className="max-w-4xl mx-auto text-center mb-12 space-y-3">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Our Services
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground">
          Specialized expertise to help your business succeed in the digital landscape.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((svc) => (
          <Tilt
            key={svc.title}
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareColor="#284EFA"
            glareBorderRadius="2rem"
            scale={1.2}
            className="rounded-lg"
          >
          <Card key={svc.id} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex items-center space-x-3 px-6 pt-6">
              <div className="bg-primary/10 rounded-full p-3">
                {svc.icon}
              </div>
              <h3 className="text-lg font-semibold">{svc.title}</h3>
            </CardHeader>

            <CardContent className="px-6 pb-6 pt-2 flex-grow">
              <p className="text-muted-foreground text-sm">
                {svc.description}
              </p>
            </CardContent>
          </Card>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
