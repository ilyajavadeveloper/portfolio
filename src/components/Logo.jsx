import React from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const Logo = () => {
  return (
    <motion.div
      className="inline-flex items-center gap-3"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/15 text-sky-400">
        <Terminal size={20} />
      </div>
      <div className="text-left">
        <div className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
          Ilya <span className="text-sky-400">Hvostenko</span>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-white/45">
          Full-Stack & Systems Engineer
        </div>
      </div>
    </motion.div>
  );
};

export default Logo;
