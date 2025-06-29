import orbiting from "../../assets/product-logos/orbiting.png"
import ebunch from "../../assets/product-logos/ebunch.png"
import fitbox from "../../assets/product-logos/fitbox.png"
import hannover from "../../assets/product-logos/hanoverresearch.png"
import kaitutu from "../../assets/product-logos/kaituttu.png"
import cliniq from "../../assets/product-logos/cliniq.png"
import softcontrol from "../../assets/product-logos/softcontrol.png"


const logos = [
  { src: orbiting },
  {src: ebunch },
  {src: fitbox },
  {src: hannover},
  {src: kaitutu},
  {src: cliniq },
  {src: softcontrol}
];

export default function LogoCloud() {
  return (
    <div className="my-16 w-full text-center">
        <h2 className="text-2xl font-semibold mb-4">
            Trusted Technology Partners
        </h2>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground">
            We've built long-standing relationships with top-tier technology providers to bring you best‑in‑class solutions. 
            Interested in joining our network?
        </p>
      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="group relative mt-12 flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 100%)",
          }}
        >
          {Array(5).fill(null).map((_, idx) => (
            <div
              key={idx}
              className="flex shrink-0 animate-[var(--animate-logo-cloud)] flex-row justify-around gap-12"
            >
              {logos.map((logo) => (
                <img
                  key={logo.src}
                  src={logo.src}
                  className="h-10 w-auto px-2 "
                  alt={logo.src}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
