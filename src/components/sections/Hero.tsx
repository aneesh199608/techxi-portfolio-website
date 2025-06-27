import { Button } from "../ui/button";
// import app1 from "../../assets/callbot.png"
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Glow from "../ui/glow";
import { Link } from "react-router-dom";

const ANIMATION_SRC = "https://lottie.host/80615054-9009-4227-86e9-af242304f064/PKE9pEK6SI.lottie";

export default function Hero() {
    return (
        <div className="px-4 py-16 sm:py-24 md:py-24">
            <div className="max-w-2xl mx-auto flex flex-col items-center gap-4 sm:gap-6 pt-16 text-center">
            <h1 className="text-4xl font-bold sm:text-6xl md:text-7xl leading-tight">
            Build, Launch, and Grow with <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent dark:from-indigo-300 dark:via-teal-300 dark:to-pink-400">
            TechXi
            </span>
            </h1>
            <p className="text-lg text-muted-foreground font-medium max-w-2xl">
            We deliver innovative web, mobile, and custom software solutions that help businesses grow, automate, and lead in a fast-changing world.
            </p>
            <div className="flex gap-4 mt-4">
                <Button size="lg" asChild>
                    <Link to="projects"
                    className="block                           
                            dark:from-indigo-600 dark:via-teal-300 dark:to-pink-400
                            animate-pulse-border
                            transition-transform
                            hover:scale-102">Read Our Case Studies</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                    <Link to="contact">Contact Us</Link>
                </Button>
            </div>
            </div>

            <div className="relative w-full max-w-4xl pt-16 mx-auto flex justify-center">
                <div className="relative overflow-hidden relative z-10">
                    <div className="animate-fade-slide">
                        <DotLottieReact
                        src={ANIMATION_SRC}
                        loop
                        autoplay
                        className="w-full h-auto transform scale-100 sm:scale-100"
                        />
                    </div>
                </div>
                {/* --- Animated Glow below --- */}
                <Glow variant="top" className="absolute -z-10 inset-x-0 animate-glow" />
            </div>

            
      </div>
    )
}