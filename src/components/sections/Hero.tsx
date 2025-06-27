import { Button } from "../ui/button";

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

            
      </div>
    )
}