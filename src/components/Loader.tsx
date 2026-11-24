import { motion } from "framer-motion";

export function Loader() {
  return (
    <motion.div initial={{ y: 0 }} exit={{ y: "-100%" }} transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }} className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-8 bg-background">
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-secondary font-display text-4xl font-bold text-primary-foreground shadow-[0_0_60px_-10px] shadow-primary"
      >
        L
      </motion.div>

      {/* Progress line */}
      <div className="h-px w-40 overflow-hidden bg-white/10">
        <motion.div initial={{ x: "-100%" }} animate={{ x: "0%" }} transition={{ duration: 1.4, ease: "easeInOut" }} className="h-full bg-gradient-to-r from-primary to-secondary" />
      </div>
    </motion.div>
  );
}
