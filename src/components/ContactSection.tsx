import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", message: "" });
  };

  const links = [
    {
      icon: Mail,
      label: "et.srabon@gmail.com",
      href: "mailto:et.srabon@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/srabon-barua",
    },
    { icon: Github, label: "GitHub", href: "https://github.com/devsrabon" },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="container mx-auto max-w-5xl px-4">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-code-orange font-mono text-base md:text-lg block mb-2 tracking-widest">
            {"// 05"}
          </span>
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <div className="grid lg:grid-cols-5 gap-10 md:gap-16 items-start">
          {/* Contact info */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                Let's collaborate!
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                I'm currently open to new opportunities. Whether you have a
                project in mind, a question, or just want to connect, feel free
                to reach out!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {links.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary transition-all group shadow-lg"
                  whileHover={{ x: 8 }}
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm font-medium">
                    {label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-3 terminal-window glow-border shadow-2xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="terminal-header flex items-center bg-terminal-header/50">
              <div className="flex gap-1.5 px-3">
                <div className="terminal-dot bg-destructive" />
                <div className="terminal-dot bg-code-yellow" />
                <div className="terminal-dot bg-code-green" />
              </div>
              <span className="ml-3 text-[10px] font-mono text-muted-foreground tracking-wider uppercase opacity-60">
                contact.sh
              </span>
            </div>
            <div className="p-6 md:p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-primary/80 ml-1">
                    $ name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary/50 focus:outline-none text-sm font-mono text-foreground transition-all focus:ring-1 focus:ring-primary/20"
                    placeholder="Your name..."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-primary/80 ml-1">
                    $ email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary/50 focus:outline-none text-sm font-mono text-foreground transition-all focus:ring-1 focus:ring-primary/20"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-primary/80 ml-1">
                  $ message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary/50 focus:outline-none text-sm font-mono text-foreground resize-none transition-all focus:ring-1 focus:ring-primary/20"
                  placeholder="Your message details..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient text-primary-foreground font-bold text-sm sm:text-base flex items-center justify-center gap-3 transition-all shadow-xl shadow-primary/20"
              >
                {submitted ? (
                  <span className="font-mono tracking-widest uppercase">
                    Message sent! ✓
                  </span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span className="tracking-widest uppercase">
                      Send Message
                    </span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
