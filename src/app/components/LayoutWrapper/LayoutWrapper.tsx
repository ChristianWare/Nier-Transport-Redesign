"use client";
import { motion } from "framer-motion";

import styles from "./LayoutWrapper.module.css";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className={styles.layout}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      {children}
    </motion.div>
  );
};
export default LayoutWrapper;
