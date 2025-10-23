import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import heroVideo from "../../ai.mp4.mp4";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-background">
      <div className="hero-video-container absolute top-0 left-1/2 bottom-0 -z-10 overflow-hidden flex items-center justify-center">
        <video
          className="hero-video pointer-events-none"
          src={heroVideo}
          autoPlay
          playsInline
          muted
          loop
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center pt-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl mb-6 tracking-tight text-foreground leading-tight"
        >
          We build intelligent systems that empower human potential
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-foreground mb-10 max-w-2xl mx-auto"
        >
          Engineering AI with Human-Centered Design
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="group px-7 py-3.5 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all">
            <span className="flex items-center gap-2 justify-center">
              Request Luma Demo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          <button className="px-7 py-3.5 rounded-lg bg-white border border-border text-foreground hover:bg-secondary transition-all">
            Work with Vivian
          </button>
        </motion.div>
      </div>
    </section>
  );
}
