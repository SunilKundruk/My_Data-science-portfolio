import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Eddie - GenAI-Powered Analytics Assistant",
    description: "Architected a LLM-based multi-agent system integrating query routing with Snowflake analytics. Enables natural language campaign insights and automated SQL generation for 40+ business metrics, improving decision-making speed by 50%.",
    tags: ["LangChain", "Claude 3.5", "Snowflake", "Python", "Multi-Agent AI"],
    accent: "purple",
  },
  {
    title: "POLAR UNIFICATION - Data Deduplication",
    description: "High-performance customer record deduplication platform using Apache Polars. Achieved 50-100x performance improvement over pandas-based pipeline with vectorized operations and multi-threaded execution for millions of records.",
    tags: ["Apache Polars", "Python", "Data Engineering", "Performance Optimization"],
    accent: "pink",
  },
  {
    title: "Multi-Model ML Inference Pipeline",
    description: "Designed and deployed production-scale system processing millions of customer records across 20+ enterprise accounts. Supports CLTV prediction, RFM segmentation, gender prediction, preference modeling, and lookalike audiences with Spark-based distributed processing.",
    tags: ["PySpark", "ML Pipeline", "Scikit-learn", "Production Systems"],
    accent: "cyan",
  },
  {
    title: "AI-Powered Retail Query Engine",
    description: "Developed natural language to SQL system enabling non-technical users to query retail data. Used LangChain and LLaMA 3.1B with Streamlit interface, improving decision-making speed by 50% and analysis accessibility.",
    tags: ["LangChain", "LLaMA", "Streamlit", "Natural Language Processing"],
    accent: "orange",
  },
  {
    title: "Fraud Detection & Risk Scoring System",
    description: "Implemented loyalty fraud detection and risk prediction systems using rule-based scoring, Isolation Forest anomaly detection, and XGBoost models to identify abnormal redemption behavior and predict risk escalation.",
    tags: ["XGBoost", "Isolation Forest", "Scikit-learn", "Risk Modeling"],
    accent: "purple",
  },
  {
    title: "Target E-Commerce Sales Analysis",
    description: "Analyzed 100,000+ orders from Target Brazil's dataset, optimizing query performance by 30%. Implemented complex SQL for customer behavior analysis, improving decision-making by 40% and marketing efficiency by 20%.",
    tags: ["SQL", "MySQL", "Data Analysis", "Performance Optimization"],
    accent: "pink",
  },
  {
    title: "AI Data Analysis Assistant",
    description: "Developed web application enabling natural language analysis of CSV, Excel, and PDF files. Integrated interactive dashboards with Plotly and Streamlit, reducing analysis time by 40% through LLM-powered query processing.",
    tags: ["LLM", "Streamlit", "Plotly", "Python"],
    accent: "cyan",
  },
  {
    title: "Zomato Restaurant Insights Dashboard",
    description: "Analyzed 1,102 restaurants across 14 countries providing insights on customer preferences and sales trends. Optimized Power BI performance with interactive charts, improving marketing ROI by 50%.",
    tags: ["Power BI", "Data Visualization", "Analytics", "SQL"],
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
