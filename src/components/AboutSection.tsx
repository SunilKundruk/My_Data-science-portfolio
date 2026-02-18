const skills = [
  { category: "Languages", items: ["Python", "R", "SQL", "JavaScript"] },
  { category: "ML / DL", items: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost"] },
  { category: "Data", items: ["Pandas", "NumPy", "Spark", "Airflow"] },
  { category: "Tools", items: ["Docker", "Git", "AWS", "Tableau"] },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="section-line mb-12" />
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">About</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Turning data into <span className="text-gradient">decisions</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-16 leading-relaxed">
          I'm a Data Science Engineer with a Master of Science in Data Science. I specialize in building end-to-end machine learning pipelines, statistical modeling, and deploying scalable data solutions. Passionate about extracting actionable insights from complex datasets.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group) => (
            <div key={group.category} className="rounded-lg border border-border bg-card p-5 hover:border-primary/40 transition-colors">
              <h3 className="font-mono text-primary text-xs tracking-widest uppercase mb-4">{group.category}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-secondary-foreground flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
