import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const principles = [
  "Clarity",
  "Evidence over Hype",
  "Human-centered design",
  "Iterate in Weeks",
];

export function FounderVision() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4 text-foreground">
            Founder's Vision
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16"
        >
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
            <div className="w-[11.56rem] h-[11.56rem] rounded-full overflow-hidden border-4 border-secondary mb-6">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
                alt="Vivian Fu"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center lg:text-left">
              <h3 className="mb-1 text-foreground">Vivian Fu</h3>
              <p className="text-sm text-muted-foreground">Founder of Core AI Limited</p>
            </div>
          </div>
          
          <div className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I build <span className="text-foreground">intelligent, safety-first, and human-centered AI</span>. My work fuses neuroscience-informed design with systems thinking — integrating cognitive science, product architecture, and ethical AI practice.
            </p>
            <p>
              We ship with purpose, measure with integrity, and protect user dignity by design.
            </p>
            <p>
              Core AI exists to prove that powerful AI can be strategically leveraged for personal empowerment — showing that when technology is built with empathy and intelligence, it helps people think more clearly and live more powerfully.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-10 rounded-xl bg-white border border-border"
        >
          <h3 className="mb-8 text-center text-foreground">Our Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {principles.map((principle, index) => (
              <motion.div
                key={principle}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-5 rounded-lg bg-secondary text-center hover:shadow-sm transition-all"
              >
                <p className="text-sm text-foreground">{principle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
