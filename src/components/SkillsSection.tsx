import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    title: "Backend",
    color: "from-primary to-code-blue",
    skills: [
      { name: "Node.js", level: 95 },
      { name: "Express.js", level: 90 },
      { name: "NestJS", level: 88 },
      { name: "REST APIs", level: 95 },
      { name: "GraphQL", level: 75 },
    ],
  },
  {
    title: "Frontend",
    color: "from-code-blue to-accent",
    skills: [
      { name: "React.js", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Databases",
    color: "from-code-green to-primary",
    skills: [
      { name: "PostgreSQL", level: 92 },
      { name: "MySQL", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "Redis", level: 85 },
    ],
  },
  {
    title: "Cloud & DevOps",
    color: "from-code-orange to-code-yellow",
    skills: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 88 },
      { name: "Kubernetes", level: 78 },
      { name: "CI/CD", level: 85 },
    ],
  },
];

const SkillBar = ({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium font-mono text-foreground">{name}</span>
        <span className="text-xs font-mono text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-code-green font-mono text-lg block mb-2">{"// 02"}</span>
          Tech <span className="gradient-text">Stack</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              className="p-6 rounded-xl border border-border bg-card card-hover glow-border-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
            >
              <h3 className="font-mono text-lg font-semibold mb-5 gradient-text">{`<${group.title} />`}</h3>
              {group.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={group.color}
                  delay={si * 0.1}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
