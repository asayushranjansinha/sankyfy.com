"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

function MotionWrapper({ className, children }: { className?: string, children:React.ReactNode }) {
  return (
    <motion.section
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5, ease: "linear", delay: 0 }}
      className={cn(className,"container mx-auto px-[1rem] sm:px-[2rem] ")}
    >
      {children}
    </motion.section>
  );
}

export default MotionWrapper;
