import { motion } from "motion/react";
import { MessageCircle, BookOpen, Target, Sparkles, Play } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Chat",
    description: "Always-on emotional support with an AI that understands nuance.",
  },
  {
    icon: BookOpen,
    title: "Journal",
    description: "Guided reflection and intelligent reframes for personal growth.",
  },
  {
    icon: Target,
    title: "Goals",
    description: "Smart nudges and progress tracking — accountability without pressure.",
  },
  {
    icon: Sparkles,
    title: "Tools",
    description: "On-demand exercises for calm, clarity, and empowerment.",
  },
];

export function LumaSection() {
  return (
    <section id="luma" className="px-6 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4 text-foreground">
            Meet Luma
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your Intelligent AI Companion for Growth and Clarity
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-xl bg-secondary hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative aspect-video rounded-xl bg-secondary overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg"
              >
                <Play className="w-7 h-7 text-white fill-white ml-1" />
              </motion.div>
            </div>
            <div className="absolute bottom-6 left-6">
              <p className="text-sm text-muted-foreground">Demo Video (30-60s)</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-12 rounded-xl bg-secondary text-center"
        >
          <h3 className="mb-3 text-foreground">Test Luma</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Luma is currently in its testing phase — we'd love for you to be among our first users and help us make it even better.
          </p>
          <button className="px-7 py-3.5 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all">
            Join the Beta
          </button>
        </motion.div>
      </div>
    </section>
  );
}
