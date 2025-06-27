import { Button } from "../ui/button";
import app1 from "../../assets/callbot.png"
import Glow from "../ui/glow";

export default function Hero() {
    return (
        <div className="px-4 py-12 sm:py-24 md:py-32">
            <div className="max-w-2xl mx-auto flex flex-col items-center gap-6 pt-16 text-center">
            <h1 className="text-4xl font-bold sm:text-6xl md:text-7xl leading-tight">
            Build, Launch, and Grow with TechXi
            </h1>
            <p className="text-lg text-muted-foreground font-medium max-w-2xl">
            We deliver innovative web, mobile, and custom software solutions that help businesses grow, automate, and lead in a fast-changing world.
            </p>
            <div className="flex gap-4 mt-4">
                <Button size="lg" asChild>
                    <a href="#services">See what we offer</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                    <a href="#contact">Contact Us</a>
                </Button>
            </div>
            </div>

            <div className="relative w-full max-w-4xl pt-16 mx-auto flex justify-center">
            <div className="relative w-[90%] max-w-2xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden relative z-10 bg-black">
                <img
                src={app1}
                alt="App screenshot"
                className="w-full h-auto object-cover"
                />
            </div>
            {/* --- Animated Glow below --- */}
            <Glow variant="top" className="absolute -z-10 left-0 right-0 animate-glow" />
            </div>

            
      </div>
    )
}