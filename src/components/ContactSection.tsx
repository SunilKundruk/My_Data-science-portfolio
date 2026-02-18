import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="section-line mb-12" />
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Contact</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let's <span className="text-gradient">connect</span>
        </h2>
        <p className="text-muted-foreground mb-10">
          Open to opportunities in data science, machine learning engineering, and analytics roles.
        </p>

        <div className="flex justify-center gap-6">
          <a href="mailto:your@email.com" className="flex items-center gap-2 px-5 py-3 rounded-md border border-border text-foreground font-mono text-sm hover:border-primary hover:text-primary transition-colors">
            <Mail size={16} /> Email
          </a>
          <a href="#" className="flex items-center gap-2 px-5 py-3 rounded-md border border-border text-foreground font-mono text-sm hover:border-primary hover:text-primary transition-colors">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href="#" className="flex items-center gap-2 px-5 py-3 rounded-md border border-border text-foreground font-mono text-sm hover:border-primary hover:text-primary transition-colors">
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>

      <footer className="mt-24 text-center text-xs text-muted-foreground font-mono">
        <p>© {new Date().getFullYear()} · Built with passion for data</p>
      </footer>
    </section>
  );
};

export default ContactSection;
