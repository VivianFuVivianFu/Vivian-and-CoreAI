import { motion } from "motion/react";

export function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-primary">
          Core AI
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Home
          </a>
          <a href="#luma" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Luma
          </a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <button className="px-5 py-2 rounded-lg bg-primary text-white text-sm hover:bg-primary/90 transition-colors">
            Contact
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
