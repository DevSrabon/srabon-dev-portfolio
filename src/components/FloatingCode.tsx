import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const codeSnippets = [
  "const", "await", "async", "import", "export",
  "{", "}", "=>", "[]", "process.env",
  "npm start", "git commit", "docker-compose",
  "API", "REST", "JSON", "NoSQL", "SQL",
  "AWS", "EKS", "S3", "λ", "node",
];

const FloatingCode = () => {
  const [particles, setParticles] = useState<{ id: number; text: string; x: number; y: number; duration: number; delay: number; size: number }[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 12 : 24;
    
    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
      duration: 15 + Math.random() * 25,
      delay: Math.random() * 10,
      size: (isMobile ? 0.6 : 0.8) + Math.random() * 0.5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-20">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute font-mono text-primary/30 whitespace-nowrap"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: `${p.size}rem`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        >
          {p.text}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingCode;
