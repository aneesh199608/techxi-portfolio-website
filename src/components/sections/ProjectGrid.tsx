import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const projects = [
  {
  id: 1,
  title: "CallBOT – AI-powered Communication Automation",
  description: "An enterprise-grade platform that automates outbound calls, WhatsApp messages, and emails using AI workflows tailored for business outreach.",
  image: "/project-screenshots/callbot.png",
  tags: ["React", "Node.js", "Tailwind", "Vite", "PostgreSQL"],
  url: "callbot",
},
{
    id: 2,
    title: "ClinIQ – Digital Health Platform",
    description: "Unified platform for doctors and patients: video consults, e-prescriptions, records and payments, all in one place.",
    image: "/project-screenshots/cliniq.png",
    tags: ["React", "Firebase", "Stripe", "Redux"],
    url: "cliniq",
  },
  {
    id: 3,
    title: "FreezeBooking – Smart Travel Scheduling",
    description: "A seamless travel booking platform integrating real-time fares, itinerary planning, and easy cancellations.",
    image: "/project-screenshots/freezebooking.jpg",
    tags: ["React", "TypeScript", "Next.js", "MongoDB"],
    url: "freezebooking",
  },
  {
    id: 4,
    title: "Orbiting – SaaS Subscription Analytics",
    description: "Automated dashboard for tracking revenue, churn, and engagement for SaaS businesses.",
    image: "/project-screenshots/orbiting.png",
    tags: ["Next.js", "Recharts", "Express.js"],
    url: "orbiting",
  },
  {
    id: 5,
    title: "E-Bunch – Multi-vendor E-Commerce",
    description: "Custom e-commerce solution with vendor onboarding, product management, and analytics.",
    image: "/project-screenshots/ebunch.png",
    tags: ["React", "Node.js", "Stripe", "Redux"],
    url: "ebunch",
  },
  {
    id: 6,
    title: "Fitbox – Smart Fitness App",
    description: "A fitness coaching app offering routines, progress tracking, and personalized recommendations.",
    image: "/project-screenshots/fitbox.png",
    tags: ["React Native", "Firebase", "Expo"],
    url: "fitbox",
  },
];

export default function ProjectGrid() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col items-center px-4 py-8 sm:px-24 md:py-24">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-16 flex flex-col gap-12 items-center">
        {/* Header */}
        <div className="text-center flex flex-col gap-3 items-center mb-8">
          <h1 className="text-3xl sm:text-5xl font-bold mb-2">Featured Projects</h1>
          <p className="text-lg sm:text-xl font-medium max-w-2xl">
            A selection of our best work—front-end, back-end, and integrated solutions that power businesses.
          </p>
        </div>
        {/* Projects Grid */}
        <div className="w-full grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden pt-0 group gap-4 sm:gap-4 flex flex-col h-full">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader className="">
                <h3 className="sm:text-xl text-full font-bold">{project.title}</h3>
                <p className="text-muted-foreground sm:mt-2 mt-0 line-clamp-2 text-sm sm:text-full">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-muted text-muted-foreground rounded-full px-2.5 py-0.5 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button size="sm" variant="secondary" disabled className="cursor-not-allowed opacity-60">
                  <Link to={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <span className="text-sm font-medium">Coming Soon</span>
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}
