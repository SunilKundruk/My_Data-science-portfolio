import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Customer Churn Prediction",
    description: "Built an end-to-end ML pipeline predicting customer churn with 94% accuracy using XGBoost and feature engineering on 500K+ records.",
    tags: ["Python", "XGBoost", "Pandas", "Scikit-learn"],
  },
  {
    title: "NLP Sentiment Analyzer",
    description: "Developed a deep learning model for real-time sentiment analysis of social media data using transformer architectures.",
    tags: ["PyTorch", "NLP", "Transformers", "FastAPI"],
  },
  {
    title: "Real-Time Data Dashboard",
    description: "Created an interactive analytics dashboard processing streaming data with automated anomaly detection and alerting.",
    tags: ["Python", "Spark", "Plotly", "Kafka"],
  },
  {
    title: "Image Classification Pipeline",
    description: "Designed a CNN-based image classification system with automated data augmentation and model versioning.",
    tags: ["TensorFlow", "Docker", "AWS", "MLflow"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="section-line mb-12" />
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Projects</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Selected <span className="text-gradient">work</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group rounded-lg border border-border bg-card p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-[var(--glow-primary)]"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-mono text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2 text-muted-foreground">
                  <Github size={16} className="hover:text-primary cursor-pointer transition-colors" />
                  <ExternalLink size={16} className="hover:text-primary cursor-pointer transition-colors" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-secondary text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
