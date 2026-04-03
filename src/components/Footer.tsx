import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-4 text-center">
      <motion.p
        className="text-sm text-muted-foreground font-mono flex items-center justify-center gap-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {"<"} Built with <Heart className="w-3.5 h-3.5 text-destructive inline" /> by Srabon Barua {"/>"}
      </motion.p>
      <p className="text-xs text-muted-foreground/60 mt-2">© {new Date().getFullYear()} All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
