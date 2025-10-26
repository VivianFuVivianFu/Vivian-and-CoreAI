import { motion } from "motion/react";

const services = [
  {
    title: "AI Strategy Sprint",
    duration: "2 Weeks",
    description: "Define outcomes, assess risks, and map your clearest path to validation.",
    popular: false,
  },
  {
    title: "MVP Co-Build",
    duration: "4–6 Weeks",
    description: "Design, develop, and deploy a testable AI product with metrics that matter.",
    popular: true,
  },
  {
    title: "AI Advisory",
    duration: "Ongoing",
    description: "Long-term guidance for strategy, ethics, and growth.",
    popular: false,
  },
];

export function WorkWithVivian() {
  return (
    <section className="px-6 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4 text-foreground">
            Work with Vivian
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic AI Partnership for Visionary Teams
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${service.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-4 py-1 rounded-full bg-primary text-white text-xs">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <div className={`h-full p-8 rounded-xl transition-all ${
                service.popular
                  ? 'bg-secondary border-2 border-primary shadow-lg'
                  : 'bg-secondary border border-border hover:shadow-md'
              }`}>
                <div className="text-center">
                  <h3 className="mb-2 text-foreground">{service.title}</h3>
                  <div className="inline-block px-3 py-1 rounded-full bg-white border border-border text-sm text-muted-foreground mb-6">
                    {service.duration}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <button className="px-7 py-3.5 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all">
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
