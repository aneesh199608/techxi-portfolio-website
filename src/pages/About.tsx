import { Button } from "@/components/ui/button"
import { ShieldCheck, User, Goal } from "lucide-react";
import { Link } from "react-router-dom";
// import svgBG from "../assets/blurry-gradient-haikei.svg"
import Footer from "@/components/sections/Footer";

export default function About() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col items-center px-4 py-8 sm:px-24 md:py-24">

      {/* <img
        src={svgBG}
        alt=""
        className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover opacity-80"
        aria-hidden
      /> */}

      
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 flex flex-col gap-14">
   
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl font-bold mb-2">About <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent dark:from-indigo-300 dark:via-teal-300 dark:to-pink-400">
            TechXi
            </span></h1>
          <div className="text-lg sm:text-xl font-medium flex-col gap-4 flex">
          <p>
            TechXi is a Bangalore-based software company specializing in high-impact web, mobile, and automation solutions for startups and mid-size businesses.
          </p>
          <p>Our mission: Enable people and companies to adopt the best tech stack for their needs, with the help of a collaborative, learning-focused team.</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 py-8">
          <Stat number="10+" label="Years Experience" />
          <Stat number="20+" label="Projects Delivered" />
          <Stat number="12" label="Tech Stacks" />
          <Stat number="97%" label="Client Retention" />
        </div>

        {/* Our Values */}
        <div className="flex flex-col gap-8 items-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <ValueCard
              title="Scrum First"
              icon={<ShieldCheck className="w-8 h-auto" />}
              description="We adopt Scrum as our primary development framework to ensure transparency, flexibility, and efficient teamwork."
            />
            <ValueCard
              title="Positive Collaboration"
              icon={<User className="w-8 h-auto" />}
              description="We believe that a positive attitude and politeness foster stronger partnerships, both within our team and with our clients."
            />
            <ValueCard
              title="Service-Driven Mindset"
              icon={<Goal className="w-8 h-auto" />}
              description="Every interaction and deliverable reflects our commitment to quality, reliability, and building lasting relationships with clients."
            />
          </div>
        </div>

        {/* Join Us Section */}
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Join Our Team!</h2>
          <p className="text-base sm:text-lg mb-2 text-center">
            If you’re passionate about learning, collaboration, and building products that make a difference, we’d love to hear from you. And if everything works out, we can make a position available for you!
          </p>
          <Button asChild size="lg">
            <Link to="contact">Become a TechXi Partner</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </section>
    
  )
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[120px]">
      <span className="text-5xl font-extrabold bg-gradient-to-br from-blue-400 via-cyan-300 to-pink-300 bg-clip-text text-transparent drop-shadow">{number}</span>
      <span className="text-base font-medium text-muted-foreground mt-1">{label}</span>
    </div>
  )
}

function ValueCard({ title, icon, description }: { title: string, icon: React.ReactNode, description: string }) {
  return (
    <div className="flex flex-col items-center text-center rounded-xl bg-white/5 backdrop-blur p-6 shadow border border-white/10 min-h-[180px]">
      <span className="text-3xl mb-2">{icon}</span>
      <h4 className="font-semibold text-lg mb-1">{title}</h4>
      <p className="text-base text-muted-foreground">{description}</p>
    </div>
  )
}
