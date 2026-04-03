import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

const ContactSection = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", message: "" });
  };

  const links = [
    { icon: Mail, label: "et.srabon@gmail.com", href: "mailto:et.srabon@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/srabon-barua" },
    { icon: Github, label: "GitHub", href: "https://github.com/et-srabon" },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-code-orange font-mono text-lg block mb-2">{"// 05"}</span>
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm currently open to new opportunities. Whether you have a project in mind or just want to connect, feel free to reach out!
            </p>

            <div className="space-y-4">
              {links.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card hover:border-primary transition-all group"
                  whileHover={{ x: 5 }}
                >
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">{label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="terminal-window glow-border"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="terminal-header">
              <span className="terminal-dot bg-destructive" />
              <span className="terminal-dot bg-code-yellow" />
              <span className="terminal-dot bg-code-green" />
              <span className="ml-3 text-xs font-mono text-muted-foreground">contact.sh</span>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="text-xs font-mono text-primary mb-1.5 block">$ name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none text-sm font-mono text-foreground transition-colors"
                  placeholder="Your name..."
                />
              </div>
              <div>
                <label className="text-xs font-mono text-primary mb-1.5 block">$ email</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none text-sm font-mono text-foreground transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-xs font-mono text-primary mb-1.5 block">$ message</label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none text-sm font-mono text-foreground resize-none transition-colors"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 transition-all"
              >
                {submitted ? (
                  <span className="font-mono">Message sent! ✓</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
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
