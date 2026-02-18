import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Customer Churn Prediction",
    description: "Built an end-to-end ML pipeline predicting customer churn with 94% accuracy using XGBoost and feature engineering on 500K+ records.",
    tags: ["Python", "XGBoost", "Pandas", "Scikit-learn"],
    accent: "purple",
  },
  {
    title: "NLP Sentiment Analyzer",
    description: "Developed a deep learning model for real-time sentiment analysis of social media data using transformer architectures.",
    tags: ["PyTorch", "NLP", "Transformers", "FastAPI"],
    accent: "pink",
  },
  {
    title: "Real-Time Data Dashboard",
    description: "Created an interactive analytics dashboard processing streaming data with automated anomaly detection and alerting.",
    tags: ["Python", "Spark", "Plotly", "Kafka"],
    accent: "cyan",
  },
  {
    title: "Image Classification Pipeline",
    description: "Designed a CNN-based image classification system with automated data augmentation and model versioning.",
    tags: ["TensorFlow", "Docker", "AWS", "MLflow"],
    accent: "orange",
  },
];

const accentStyles: Record<string, { glow: string; tag: string; border: string; icon: string }> = {
  purple: {
    glow: "card-glow-purple",
    tag: "bg-[hsl(var(--color-purple)/0.15)] text-[hsl(var(--color-purple))]",
    border: "hover:border-[hsl(var(--color-purple)/0.5)]",
    icon: "text-[hsl(var(--color-purple))]",
  },
  pink: {
    glow: "card-glow-pink",
    tag: "bg-[hsl(var(--color-pink)/0.15)] text-[hsl(var(--color-pink))]",
    border: "hover:border-[hsl(var(--color-pink)/0.5)]",
    icon: "text-[hsl(var(--color-pink))]",
  },
  cyan: {
    glow: "card-glow-cyan",
    tag: "bg-[hsl(var(--color-cyan)/0.15)] text-[hsl(var(--color-cyan))]",
    border: "hover:border-[hsl(var(--color-cyan)/0.5)]",
    icon: "text-[hsl(var(--color-cyan))]",
  },
  orange: {
    glow: "",
    tag: "bg-[hsl(var(--color-orange)/0.15)] text-[hsl(var(--color-orange))]",
    border: "hover:border-[hsl(var(--color-orange)/0.5)]",
    icon: "text-[hsl(var(--color-orange))]",
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[hsl(var(--color-pink))] glow-orb" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="section-line mb-12" />
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display text-[hsl(var(--color-pink))] text-sm tracking-widest uppercase mb-2"
        >
          Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-12"
        >
          Selected <span className="text-gradient-warm">work</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const styles = accentStyles[project.accent];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`group rounded-xl border border-border bg-card p-6 transition-all duration-300 ${styles.border} hover:${styles.glow}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 text-muted-foreground">
                    <Github size={16} className={`hover:${styles.icon} cursor-pointer transition-colors`} />
                    <ExternalLink size={16} className={`hover:${styles.icon} cursor-pointer transition-colors`} />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className={`text-xs font-display px-2.5 py-1 rounded-full ${styles.tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
