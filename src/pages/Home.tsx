import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import LogoCloud from "@/components/sections/LogoCloud";
import ServicesSlide from "@/components/sections/ServicesSlide";

export default function Home() {
    return (
        <div className="px-4 py-8 sm:px-24 md:py-24">
            <Hero />
            <LogoCloud />
            <ServicesSlide />
            <Footer />
        </div>
    )
}