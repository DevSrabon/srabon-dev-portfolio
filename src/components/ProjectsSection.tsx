import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Saba Al Wadi E-commerce",
    description: "Full-featured multi-language, multi-currency e-commerce platform with real-time chat and background job handling.",
    tech: ["Node.js", "NestJS", "PostgreSQL", "Redis", "BullMQ", "WebSocket", "AWS"],
    achievements: ["Multi-language & multi-currency support", "Real-time chat system", "Background job processing with Redis + BullMQ", "Scalable microservices architecture"],
    color: "from-primary to-code-blue",
  },
  {
    title: "ATAB — Membership Management",
    description: "Automated membership management system with real-time communication for 1000+ users.",
    tech: ["Node.js", "Express.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    achievements: ["Automated workflows for 1000+ users", "Real-time communication system", "Role-based access control", "Automated reporting & analytics"],
    color: "from-code-blue to-accent",
  },
  {
    title: "Skill Judge — Coding Platform",
    description: "Online coding assessment platform with compiler integration, quizzes, and payment processing.",
    tech: ["NestJS", "React.js", "PostgreSQL", "Docker", "Stripe", "WebSocket"],
    achievements: ["Online compiler integration", "Quiz & assessment engine", "Stripe payment processing", "Real-time leaderboards"],
    color: "from-accent to-code-purple",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative group rounded-xl border border-border bg-card overflow-hidden card-hover glow-border-hover"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top gradient bar */}
      <div className={`h-1 bg-gradient-to-r ${project.color}`} />

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
          <div className="flex gap-2">
            <motion.button whileHover={{ scale: 1.1 }} className="p-1.5 rounded-lg hover:bg-secondary transition-colors">
              <Github className="w-4 h-4 text-muted-foreground" />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} className="p-1.5 rounded-lg hover:bg-secondary transition-colors">
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </motion.button>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

        {/* Tech stack chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-full bg-secondary text-primary border border-border">
              {t}
            </span>
          ))}
        </div>

        {/* Expandable achievements */}
        <motion.div
          initial={false}
          animate={{ height: hovered ? "auto" : 0, opacity: hovered ? 1 : 0 }}
          className="overflow-hidden"
        >
          <div className="pt-3 border-t border-border">
            <p className="text-xs font-mono text-primary mb-2">Key Achievements:</p>
            <ul className="space-y-1">
              {project.achievements.map((a, i) => (
                <li key={i} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-code-green">✓</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-code-purple font-mono text-lg block mb-2">{"// 04"}</span>
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
