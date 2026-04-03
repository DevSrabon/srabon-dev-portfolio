import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Download, Twitter, Globe } from "lucide-react";

const roles = [
  "Backend Software Developer",
  "Node.js & NestJS Expert",
  "Cloud & DevOps Enthusiast",
  "Distributed Systems Engineer",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 60);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 30);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  const socials = [
    { icon: Mail, href: "mailto:srabon@example.com", label: "Email" },
    { icon: Linkedin, href: "https://linkedin.com/in/srabon-barua", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/srabon-barua", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/srabon-barua", label: "Twitter" },
    { icon: Globe, href: "https://srabon.dev", label: "Website" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-[100px]" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="font-mono text-primary mb-4 text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {"// Hello, World! I'm"}
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight">
            <span className="gradient-text">Srabon</span>{" "}
            <span className="text-foreground">Barua</span>
          </h1>

          <div className="h-10 md:h-12 flex items-center justify-center font-mono text-lg md:text-2xl text-muted-foreground">
            <span className="text-code-green">{">"}</span>
            <span className="mx-2">{text}</span>
            <span className="animate-blink text-primary">|</span>
          </div>

          <motion.p
            className="mt-6 text-muted-foreground max-w-xl mx-auto text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            3+ years building scalable backend systems, RESTful APIs, and cloud-native applications
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl border border-border bg-card hover:border-primary transition-colors glow-border-hover"
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Download Resume Button */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-sm transition-all glow-border"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
