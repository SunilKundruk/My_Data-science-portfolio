import { Mail, Linkedin, Github, Heart } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { href: "mailto:your@email.com", icon: Mail, label: "Email", color: "purple" },
  { href: "#", icon: Linkedin, label: "LinkedIn", color: "cyan" },
  { href: "#", icon: Github, label: "GitHub", color: "pink" },
];

const colorMap: Record<string, string> = {
  purple: "hover:border-[hsl(var(--color-purple))] hover:text-[hsl(var(--color-purple))] hover:bg-[hsl(var(--color-purple)/0.1)] hover:shadow-[0_0_20px_hsl(var(--color-purple)/0.2)]",
  cyan: "hover:border-[hsl(var(--color-cyan))] hover:text-[hsl(var(--color-cyan))] hover:bg-[hsl(var(--color-cyan)/0.1)] hover:shadow-[0_0_20px_hsl(var(--color-cyan)/0.2)]",
  pink: "hover:border-[hsl(var(--color-pink))] hover:text-[hsl(var(--color-pink))] hover:bg-[hsl(var(--color-pink)/0.1)] hover:shadow-[0_0_20px_hsl(var(--color-pink)/0.2)]",
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(var(--color-purple))] glow-orb opacity-20" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="section-line mb-12" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[hsl(var(--color-purple))] text-sm tracking-widest uppercase mb-2"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Let's <span className="text-gradient-vivid">connect</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mb-10 text-lg"
        >
          Open to opportunities in data science, machine learning engineering, and analytics roles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`flex items-center gap-2 px-6 py-3.5 rounded-full border border-border text-foreground font-display text-sm transition-all duration-300 ${colorMap[link.color]}`}
            >
              <link.icon size={16} /> {link.label}
            </a>
          ))}
        </motion.div>
      </div>

      <footer className="mt-24 text-center text-xs text-muted-foreground font-display relative z-10">
        <p className="flex items-center justify-center gap-1">
          © {new Date().getFullYear()} · Built with <Heart size={12} className="text-[hsl(var(--color-pink))]" /> for data
        </p>
      </footer>
    </section>
  );
};

export default ContactSection;
