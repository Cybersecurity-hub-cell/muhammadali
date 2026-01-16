import { motion } from "framer-motion";
import { LucideIcon, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "A high-performance web application built with modern technologies.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "#"
  },
  {
    title: "Project Two",
    description: "Innovative mobile-first solution for digital commerce.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    link: "#"
  },
  {
    title: "Project Three",
    description: "Beautifully designed user interface for creative professionals.",
    tags: ["Framer Motion", "Shadcn UI", "Vite"],
    link: "#"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="relative z-10 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight mb-6">
              Fullstack <span className="text-muted-foreground">Developer</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Crafting elegant digital experiences through clean code and thoughtful design. Focused on building scalable applications that solve real-world problems.
            </p>
            <div className="flex items-center justify-center gap-4">
              <SocialLink href="#" icon={Github} label="Github" />
              <SocialLink href="#" icon={Linkedin} label="LinkedIn" />
              <SocialLink href="#" icon={Mail} label="Email" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12">Selected Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in building robust fullstack applications. My approach combines technical excellence with a keen eye for user experience. Whether it's architecting a complex database schema or fine-tuning an animation, I strive for perfection in every pixel and line of code.
            </p>
          </div>
          <div className="aspect-square bg-muted rounded-2xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            {/* Placeholder for user image */}
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              [Image Placeholder]
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-6">Let's work together</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:scale-105 transition-transform"
          >
            Get in touch
          </a>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium px-2 py-1 bg-muted rounded-md text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
        <a href={project.link} className="text-muted-foreground hover:text-primary transition-colors">
          <ExternalLink size={20} />
        </a>
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
    </motion.div>
  );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: LucideIcon; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-all hover:-translate-y-1"
    >
      <Icon size={24} />
    </a>
  );
}
