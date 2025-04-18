"use client"
import { motion } from "framer-motion";
import { ReactNode } from "react";

const NavContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <motion.nav
      className="relative h-16 px-4  mx-auto z-0"
      variants={{ basic: { y: 0 }, move: { y: 0 } }}
      initial="basic"
      animate={"move"}>
      {children}
    </motion.nav>
  );
};

export default NavContainer;
