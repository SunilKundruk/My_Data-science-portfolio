import { motion } from "framer-motion";

const skills = [
  { category: "Languages", items: ["Python", "R", "SQL", "JavaScript"], color: "purple" },
  { category: "ML / DL", items: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost"], color: "pink" },
  { category: "Data", items: ["Pandas", "NumPy", "Spark", "Airflow"], color: "cyan" },
  { category: "Tools", items: ["Docker", "Git", "AWS", "Tableau"], color: "orange" },
];

const colorMap: Record<string, { border: string; bg: string; text: string; dot: string }> = {
  purple: {
    border: "hover:border-[hsl(var(--color-purple)/0.5)]",
    bg: "bg-[hsl(var(--color-purple)/0.08)]",
    text: "text-[hsl(var(--color-purple))]",
    dot: "bg-[hsl(var(--color-purple))]",
  },
  pink: {
    border: "hover:border-[hsl(var(--color-pink)/0.5)]",
    bg: "bg-[hsl(var(--color-pink)/0.08)]",
    text: "text-[hsl(var(--color-pink))]",
    dot: "bg-[hsl(var(--color-pink))]",
  },
  cyan: {
    border: "hover:border-[hsl(var(--color-cyan)/0.5)]",
    bg: "bg-[hsl(var(--color-cyan)/0.08)]",
    text: "text-[hsl(var(--color-cyan))]",
    dot: "bg-[hsl(var(--color-cyan))]",
  },
  orange: {
    border: "hover:border-[hsl(var(--color-orange)/0.5)]",
    bg: "bg-[hsl(var(--color-orange)/0.08)]",
    text: "text-[hsl(var(--color-orange))]",
    dot: "bg-[hsl(var(--color-orange))]",
  },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[hsl(var(--color-cyan))] glow-orb" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="section-line mb-12" />
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display text-[hsl(var(--color-cyan))] text-sm tracking-widest uppercase mb-2"
        >
          About
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-8"
        >
          Turning data into{" "}
          <span className="text-gradient-cool">decisions</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mb-16 leading-relaxed text-lg"
        >
          I'm a Data Science Engineer with a Master of Science in Data Science. I specialize in building end-to-end machine learning pipelines, statistical modeling, and deploying scalable data solutions. Passionate about extracting actionable insights from complex datasets.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, i) => {
            const colors = colorMap[group.color];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-xl border border-border bg-card p-5 transition-all duration-300 ${colors.border}`}
              >
                <div className={`inline-block px-3 py-1 rounded-full ${colors.bg} mb-4`}>
                  <h3 className={`font-display text-xs tracking-widest uppercase ${colors.text}`}>
                    {group.category}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-secondary-foreground flex items-center gap-2.5">
                      <span className={`h-1.5 w-1.5 rounded-full ${colors.dot}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
