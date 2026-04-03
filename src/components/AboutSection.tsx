import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const codeLines = [
  { text: "const developer = {", color: "text-code-purple" },
  { text: '  name: "Srabon Barua",', color: "text-foreground", indent: true },
  { text: '  role: "Backend Software Developer",', color: "text-foreground", indent: true },
  { text: "  experience_years: 3,", color: "text-foreground", indent: true },
  { text: '  location: "Dhaka, Bangladesh",', color: "text-foreground", indent: true },
  { text: "  expertise: [", color: "text-foreground", indent: true },
  { text: '    "Scalable APIs (Node/Python/Go)",', color: "text-code-green", indent: true, extra: true },
  { text: '    "Full-Stack JS/TS Development",', color: "text-code-green", indent: true, extra: true },
  { text: '    "Cloud-Native Systems (AWS)",', color: "text-code-green", indent: true, extra: true },
  { text: '    "Query Optimization (35% Latency Reduction)",', color: "text-code-green", indent: true, extra: true },
  { text: "  ],", color: "text-foreground", indent: true },
  { text: '  passion: "Delivering high-impact, real-time backend solutions"', color: "text-foreground", indent: true },
  { text: "};", color: "text-code-purple" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-4xl px-1 sm:px-4">
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
          className="terminal-window glow-border w-full max-w-full overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="terminal-header flex items-center bg-terminal-header/50">
            <div className="flex gap-1.5 px-3">
              <div className="terminal-dot bg-destructive animate-pulse" />
              <div className="terminal-dot bg-code-yellow animate-pulse [animation-delay:0.2s]" />
              <div className="terminal-dot bg-code-green animate-pulse [animation-delay:0.4s]" />
            </div>
            <div className="flex items-center gap-2 sm:gap-3 ml-2 sm:ml-4 overflow-hidden">
              <span className="text-[9px] sm:text-[10px] font-mono text-muted-foreground bg-secondary/80 px-1.5 sm:px-2 py-0.5 rounded border border-border/50 whitespace-nowrap">
                bash
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono text-primary/60 flex items-center gap-1 overflow-hidden whitespace-nowrap">
                <span className="text-secondary-foreground/40 hidden sm:inline">
                  on
                </span>
                <span className="text-code-purple"> main</span>
                <span className="text-code-yellow"> [!+]</span>
              </span>
            </div>
            <span className="ml-auto text-[9px] sm:text-[10px] font-mono text-muted-foreground/40 pr-3 hidden xs:block">
              about.ts — 4.2kb
            </span>
          </div>
          <div className="p-4 sm:p-6 lg:p-8 font-mono text-xs sm:text-sm md:text-base leading-relaxed overflow-x-auto scrollbar-thin">
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.06 }}
                className="flex whitespace-pre"
              >
                <span className="text-muted-foreground/40 w-6 sm:w-8 shrink-0 text-right mr-3 sm:mr-4 select-none text-[10px] sm:text-xs leading-6">
                  {i + 1}
                </span>
                <span
                  className={`${line.color} ${line.indent ? "ml-4 sm:ml-6" : ""} ${line.extra ? "ml-8 sm:ml-12" : ""}`}
                >
                  {line.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p
          className="mt-8 sm:mt-12 text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Backend Software Developer with 3+ years of experience building
          scalable APIs and cloud-based systems. Proficient in Node.js,
          Express.js, PostgreSQL, MySQL, and AWS. Demonstrated expertise in
          fine-tuning query performance, reducing latency by up to 35%, and
          executing robust CI/CD pipelines.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
