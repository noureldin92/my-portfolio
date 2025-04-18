"use client";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

const AboutContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <motion.aside
      variants={{ basic: { y: 0 }, move: { y: 0 } }}
      initial="basic"
      animate={"move"}
      className="relative mx-auto bg-lightBlue -z-10 rounded-md py-4 w-full  sm:w-3/4 px-4 h-full space-y-10 overflow-hidden shadow-lg shadow-black/20 dak:shadow-sm dark:shadow-black/50">
      {children}
    </motion.aside>
  );
};

export default AboutContainer;
