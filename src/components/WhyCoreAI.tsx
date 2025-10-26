import { motion } from "motion/react";
import { Network, Search, Zap } from "lucide-react";

const principles = [
  {
    icon: Network,
    title: "Systems Thinking",
    description: "Designing solutions that compound value by connecting the whole system.",
  },
  {
    icon: Search,
    title: "Evidence Over Hype",
    description: "Focusing on clarity, impact, and lasting value — not noise.",
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description: "From idea to pilot in weeks, not quarters. Speed with precision creates real progress.",
  },
];

export function WhyCoreAI() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4 text-foreground">
            Why Core AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building with Intelligence, Integrity, and Speed
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <principle.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-foreground">{principle.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
