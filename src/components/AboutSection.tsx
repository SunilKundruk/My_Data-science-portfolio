import { motion } from "framer-motion";

const skills = [
  { category: "Languages", items: ["Python", "SQL", "PySpark"], color: "purple" },
  { category: "ML / DL", items: ["Scikit-learn", "XGBoost", "Isolation Forest", "Custom ML Models", "Anomaly Detection"], color: "pink" },
  { category: "Data Processing", items: ["Pandas", "NumPy", "PySpark", "Apache Polars", "ETL Development"], color: "cyan" },
  { category: "Feature Engineering", items: ["Feature Selection", "Data Transformation", "Handling Imbalanced Data", "Hyperparameter Tuning"], color: "orange" },
  { category: "GenAI / LLM", items: ["LangChain", "LangGraph", "Claude 3.5", "LLaMA", "Prompt Engineering"], color: "purple" },
  { category: "Analytics & BI", items: ["Power BI", "Tableau", "Streamlit", "Data Visualization", "Dashboard Design"], color: "pink" },
  { category: "Data Infrastructure", items: ["Snowflake", "Kafka", "Apache Airflow", "Docker", "Git"], color: "cyan" },
  { category: "ML Systems", items: ["Multi-Model Inference", "Fraud Detection", "Risk Scoring", "CLTV Prediction", "Customer Segmentation"], color: "orange" },
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
          Data Science Engineer with 1 year of industry experience at FirstHive. MSc in Data Science from Reva University. Specialized in designing and deploying production-scale ML and AI systems, including multi-model inference pipelines, fraud detection frameworks, and LLM-based multi-agent architectures. Experienced in building scalable Spark-based data processing systems and enterprise analytics solutions.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

        <div className="mt-12 pt-12 border-t border-border">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6"
          >
            Work Experience
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-8 p-6 rounded-lg border border-border bg-card/50"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold text-[hsl(var(--color-cyan))]">Data Science Engineer</h4>
              <span className="text-sm text-muted-foreground">05/2025 - Current</span>
            </div>
            <p className="text-sm font-medium text-foreground mb-3">FirstHive</p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Designed and deployed a multi-model ML inference pipeline processing millions of customer records across 20+ enterprise accounts</li>
              <li>• Architected Eddie, a GenAI-powered multi-agent system integrating LLM-based query routing with Snowflake-backed analytics</li>
              <li>• Built POLAR UNIFICATION - Data deduplication platform achieving 50-100x performance improvement using Apache Polars</li>
              <li>• Developed fraud detection and risk prediction systems using Isolation Forest and XGBoost models</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-lg border border-border bg-card/50"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold text-[hsl(var(--color-pink))]">Data Analyst Intern</h4>
              <span className="text-sm text-muted-foreground">02/2025 - 05/2025</span>
            </div>
            <p className="text-sm font-medium text-foreground mb-3">FirstHive</p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Cleaned and preprocessed large-scale customer datasets ensuring accuracy and readiness for analysis</li>
              <li>• Built interactive Power BI dashboards visualizing key business metrics with DAX calculations</li>
              <li>• Enhanced predictive analytics models, achieving 25% increase in forecast accuracy for customer behavior</li>
              <li>• Performed advanced data extraction and manipulation across enterprise systems</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
