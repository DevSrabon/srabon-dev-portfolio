import profileImg from "@/assets/profile.jpeg";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import FloatingCode from "./FloatingCode";

const roles = [
  "Backend Software Developer",
  "Node.js & Express.js Expert",
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
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        60,
      );
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
    { icon: Mail, href: "mailto:et.srabon@gmail.com", label: "Email" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/srabon-barua",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/devsrabon", label: "GitHub" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <FloatingCode />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute top-1/4 -left-32 w-64 md:w-96 h-64 md:h-96 rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 w-64 md:w-96 h-64 md:h-96 rounded-full bg-accent/10 blur-[100px]" />

      <div className="container mx-auto text-center relative z-10 py-12 md:py-20 lg:py-32 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <motion.div
            className="mb-8 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary/50 glow-border p-1 bg-background/50 backdrop-blur-sm">
              <img
                src={profileImg}
                alt="Srabon Barua"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>

          <motion.p
            className="font-mono text-primary mb-4 text-xs sm:text-sm tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {"// Hello, World! I'm"}
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tighter leading-none">
            <span className="gradient-text">Srabon</span>{" "}
            <span className="text-foreground">Barua</span>
          </h1>

          <div className="h-10 sm:h-12 md:h-16 flex items-center justify-center font-mono text-sm sm:text-lg md:text-2xl text-muted-foreground bg-secondary/20 px-4 py-2 rounded-lg border border-border/50">
            <span className="text-code-green">{">"}</span>
            <span className="mx-2 overflow-hidden whitespace-nowrap">
              {text}
            </span>
            <span className="animate-blink text-primary">|</span>
          </div>

          <motion.p
            className="mt-8 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Backend Software Developer with 3+ years experience building
            scalable systems, high-performance APIs, and cloud-native
            architectures.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4 mt-10"
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
                whileTap={{ scale: 0.9 }}
                className="p-3 sm:p-4 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary transition-all glow-border-hover shadow-lg"
                aria-label={label}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient text-primary-foreground font-bold text-sm sm:text-base transition-all shadow-xl shadow-primary/20 glow-border"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer"
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
