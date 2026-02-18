import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(hsl(175 70% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(175 70% 50%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-3xl text-center">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4 animate-fade-in">
          Data Science Engineer
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
          Hi, I'm <span className="text-gradient">Your Name</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
          MSc in Data Science · Building intelligent systems with machine learning, deep learning, and data-driven insights.
        </p>
        <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-mono text-sm font-medium hover:opacity-90 transition-opacity">
            View Projects
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-foreground font-mono text-sm font-medium hover:border-primary hover:text-primary transition-colors">
            Get in Touch
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce">
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default HeroSection;
