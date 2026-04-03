import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Sohi Airport Services — Meet & Assist",
    description:
      "Built a B2C platform supporting customers, agents, and vendors for airport services like lounge access and baggage wrapping.",
    tech: ["Node.js", "React", "PostgreSQL", "SSL Commerz", "bKash"],
    achievements: [
      "Built a B2C platform supporting customers, agents, and vendors for airport services.",
      "Integrated payment gateways: SSL Commerz and bKash for seamless transactions.",
      "Designed scalable APIs and real-time booking features, improving booking efficiency by 35%.",
    ],
    color: "from-code-green to-primary",
    github: "",
    live: "https://sohi.com.bd",
  },
  {
    title: "AMCHAM Membership Management",
    description:
      "Engineered a membership management system featuring event RSVP workflows, double-entry accounting, and a dedicated member panel.",
    tech: ["Node.js", "MySQL", "Express.js"],
    achievements: [
      "Engineered a membership management system featuring event RSVP workflows and a dedicated member panel.",
      "Implemented double-entry accounting to ensure accurate financial tracking and reporting.",
      "Streamlined member operations and event handling, improving administrative efficiency.",
    ],
    color: "from-primary to-code-blue",
    github: "",
    live: "https://member.amchambd.com/",
  },
  {
    title: "Tovozo — Hotel Job Portal",
    description:
      "Hospitality job portal connecting hoteliers and job seekers with structured role management and application tracking.",
    tech: ["Node.js", "PostgreSQL", "Flutter"],
    achievements: [
      "Built a job portal platform tailored for the hospitality industry, connecting hoteliers and job seekers.",
      "Designed and implemented admin panel and job seeker modules for efficient job posting.",
      "Improved hiring workflow efficiency through structured application tracking.",
    ],
    color: "from-code-blue to-accent",
    github: "",
    live: "https://tovozo.com/",
  },
  {
    title: "Saba Al Wadi — E-commerce Platform",
    description:
      "Fine-tuned multi-language, multi-currency e-commerce system supporting 5K+ concurrent users with real-time chat.",
    tech: ["Next.js", "Node.js", "MySQL", "Socket.io"],
    achievements: [
      "Fine-tuned multi-language, multi-currency e-commerce system supporting 5K+ concurrent users.",
      "Carried out real-time chat via Socket.io, boosting engagement 40%.",
    ],
    color: "from-primary to-code-blue",
    github: "",
    live: "https://sabaalwadi.com",
  },
  {
    title: "ATAB — Membership Management",
    description:
      "Automated workflows for 1,000+ users, reducing manual tasks by 50% and designed scalable APIs.",
    tech: ["Node.js", "MySQL", "Express.js"],
    achievements: [
      "Automated workflows for 1,000+ users, reducing manual tasks by 50% and designed scalable APIs.",
    ],
    color: "from-code-blue to-accent",
    github: "",
    live: "https://atab.org.bd",
  },
  {
    title: "Skill Judge — Coding Platform",
    description:
      "Built online compiler (Judge0 API) and quiz system; integrated Stripe payments and REST API principles.",
    tech: ["React.js", "Node.js", "MongoDB", "Judge0", "Stripe"],
    achievements: [
      "Built online compiler (Judge0 API) and quiz system.",
      "Integrated Stripe payments and REST API principles.",
    ],
    color: "from-accent to-code-purple",
    github: "",
    live: "https://skill-judge.vercel.app",
  },
];

type Project = (typeof projects)[0];

const ProjectCard = ({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) => {
  return (
    <motion.div
      className="relative group rounded-xl border border-border bg-card overflow-hidden card-hover glow-border-hover cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      onClick={onOpen}
    >
      <div className={`h-1 bg-gradient-to-r ${project.color}`} />
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-mono text-primary/60 bg-primary/5 px-1.5 py-0.5 rounded">
            {`~/projects/${project.title.split(" ")[0].toLowerCase()}`}
          </span>
          <span className="ml-auto text-[10px] font-mono text-muted-foreground/40">
            size: {Math.floor(Math.random() * 50) + 10}kb
          </span>
        </div>
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-foreground tracking-tight">
            {project.title}
          </h3>
          <div className="flex gap-2">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-1.5 rounded-lg hover:bg-secondary transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4 text-muted-foreground" />
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-1.5 rounded-lg hover:bg-secondary transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </motion.a>
            )}
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2.5 py-1 rounded-full bg-secondary text-primary border border-border"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>

        <p className="text-xs text-muted-foreground mt-4 font-mono opacity-60">
          Click to view details →
        </p>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({
  project,
  open,
  onClose,
}: {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card border-border">
        <DialogHeader>
          <div
            className={`h-1.5 rounded-full bg-gradient-to-r ${project.color} mb-4 -mx-6 -mt-6`}
          />
          <DialogTitle className="text-2xl font-bold text-foreground">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground leading-relaxed mt-2">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5 mt-2">
          <div>
            <p className="text-xs font-mono text-primary mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-3 py-1.5 rounded-full bg-secondary text-primary border border-border"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-mono text-primary mb-3">
              Key Achievements
            </p>
            <ul className="space-y-2">
              {project.achievements.map((a, i) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground flex gap-2"
                >
                  <span className="text-code-green shrink-0">✓</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          {(project.github || project.live) && (
            <div className="flex gap-3 pt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-secondary hover:border-primary transition-colors text-sm font-medium text-foreground"
                >
                  <Github className="w-4 h-4" /> Source Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl px-2 sm:px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-code-purple font-mono text-lg block mb-2">
            {"// 04"}
          </span>
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectsSection;
