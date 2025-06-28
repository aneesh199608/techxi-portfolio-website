import { useEffect, useState, type ReactNode } from "react";

type Slide = {
  id: string;
  icon?: ReactNode;
  content: ReactNode;
};

type SlideshowProps = {
  slides: Slide[];
  intervalMs?: number;
  height?: string; // e.g. "h-64"
};

export function Slideshow({
  slides,
  intervalMs = 5000,
  height = "h-128",
}: SlideshowProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.innerWidth < 768) return;
    const timer = setInterval(() => setActive((prev) => (prev + 1) % slides.length), intervalMs);
    return () => clearInterval(timer);
  }, [slides.length, intervalMs, paused]);

  const [, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Check if mobile view
  const isMobile = typeof window !== "undefined" ? window.innerWidth < 768 : false;
  const mobileHeight = "h-64";

  return (
    <div className={`relative
        ${isMobile ? "flex flex-col gap-6 ${mobileHeight}" : `flex overflow-hidden rounded-xl gap-8 ${height}`}
      `}>
      {slides.map((slide, idx) => {
        const isActive = isMobile ? true : idx === active;
        return (
          <div
            key={slide.id}
            className={`
              transition-all duration-500 ease-in-out flex
              ${isMobile ? "w-full" : isActive ? "flex-[3]" : "flex-[1] min-w-0"}
              ${isMobile ? mobileHeight : ""}
            `}
            onMouseEnter={() => !isMobile && (setPaused(true), setActive(idx))}
            onMouseLeave={() => !isMobile && setPaused(false)}
          >
            <div
              className={`
                relative flex-1 h-full 
                rounded-lg 
                ${isActive
                  ? "bg-gradient-to-r from-blue-400 to-blue-700"
                  : "bg-gradient-to-r from-blue-700 to-blue-900"}
                flex items-center justify-center
                overflow-hidden
                ${isMobile ? mobileHeight : ""}
              `}
            >
              {isActive ? (
                <div className={`
                  relative z-10 p-6 flex flex-col items-center text-white
                  ${isMobile ? "py-8" : ""}
                `}>
                  <div className={isMobile ? "text-2xl" : "text-3xl"}>
                    {slide.content}
                  </div>
                </div>
              ) : (
                slide.icon && (
                <div className={`text-white opacity-70 ${isMobile ? "hidden" : ""}`}>
                    {slide.icon}
                  </div>
                  )
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
