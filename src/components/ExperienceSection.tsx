import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "M360 ICT",
    role: "Junior Backend Developer",
    period: "Apr 2023 – Present",
    achievements: [
      "Boosted performance of 15+ RESTful APIs serving 10K+ monthly users, increasing reliability and uptime by 25%.",
      "Utilized query optimization and caching strategies, reducing API response time by 35%.",
      "Built scalable backend services with Node.js, Express.js, PostgreSQL, and MySQL.",
      "Executed CI/CD pipelines with Jenkins and GitHub Actions, cutting deployment time by 40%.",
      "Fine-tuned database efficiency, lowering query execution time by 30%.",
    ],
  },
  {
    company: "Canopus Lab",
    role: "Junior Web Developer",
    period: "Sep 2023 – Dec 2023",
    achievements: [
      "Refined responsive web apps using React.js and Next.js, improving page load speed by 30%.",
      "Integrated REST APIs and employed performance improvements, resulting in better UX metrics and 20% faster interactions.",
    ],
  },
  {
    company: "Unicorniz Innovation",
    role: "Full Stack Developer Intern",
    period: "Apr 2023 – Aug 2023",
    achievements: [
      "Built full-stack features using React, Next.js, Express, and MongoDB.",
      "Contributed to scalable architecture using TypeScript, Prisma, and GraphQL.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-code-yellow font-mono text-lg block mb-2">{"// 03"}</span>
          Work <span className="gradient-text">Experience</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className={`relative mb-12 md:mb-16 flex flex-col md:flex-row ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 z-10 animate-pulse_glow" />

              <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="p-5 rounded-xl border border-border bg-card card-hover glow-border-hover">
                  <div className="flex items-center gap-2 mb-2 justify-start">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="font-mono text-xs text-primary">{exp.period}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{exp.company}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{exp.role}</p>
                  <ul className="space-y-1.5 text-left">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1 shrink-0">▹</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
