import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const codeLines = [
  { text: "const developer = {", color: "text-code-purple" },
  { text: '  name: "Srabon Barua",', color: "text-foreground", indent: true },
  { text: '  role: "Backend Software Developer",', color: "text-foreground", indent: true },
  { text: "  experience: 3,", color: "text-foreground", indent: true },
  { text: '  location: "Bangladesh",', color: "text-foreground", indent: true },
  { text: "  expertise: [", color: "text-foreground", indent: true },
  { text: '    "Scalable APIs & Microservices",', color: "text-code-green", indent: true, extra: true },
  { text: '    "Cloud-Native Deployments (AWS)",', color: "text-code-green", indent: true, extra: true },
  { text: '    "Distributed Systems & Caching",', color: "text-code-green", indent: true, extra: true },
  { text: '    "Database Design & Optimization",', color: "text-code-green", indent: true, extra: true },
  { text: "  ],", color: "text-foreground", indent: true },
  { text: '  passion: "Building robust backend systems"', color: "text-foreground", indent: true },
  { text: "};", color: "text-code-purple" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-code-blue font-mono text-lg block mb-2">{"// 01"}</span>
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <motion.div
          ref={ref}
          className="terminal-window glow-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="terminal-header">
            <span className="terminal-dot bg-destructive" />
            <span className="terminal-dot bg-code-yellow" />
            <span className="terminal-dot bg-code-green" />
            <span className="ml-3 text-xs font-mono text-muted-foreground">about.ts</span>
          </div>
          <div className="p-6 font-mono text-sm md:text-base leading-relaxed">
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.06 }}
                className="flex"
              >
                <span className="text-muted-foreground w-8 text-right mr-4 select-none text-xs leading-6">
                  {i + 1}
                </span>
                <span className={`${line.color} ${line.indent ? "ml-4" : ""} ${line.extra ? "ml-8" : ""}`}>
                  {line.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p
          className="mt-8 text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          I specialize in designing and building high-performance backend architectures using Node.js, NestJS, and cloud services. 
          I love tackling complex distributed systems challenges and optimizing application performance at scale.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
