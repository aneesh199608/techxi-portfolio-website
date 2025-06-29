import { Button } from "@/components/ui/button";
import Glow from "@/components/ui/glow";

export default function CTA() {
  return (
    <section className="relative overflow-hidden flex items-center justify-center py-32 bg-background text-center">
      <div className="relative z-10 space-y-6">
        <h1 className="text-4xl font-bold">Let’s create something amazing together</h1>
        <Button size="lg">
          <a href="/contact">Get in Touch</a>
        </Button>
      </div>

      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 inset-0 opacity-60 transition-transform duration-500 ease-in-out hover:translate-y-[-2rem] hover:opacity-100">
        <Glow variant="bottom" />
      </div>
    </section>
  );
}
