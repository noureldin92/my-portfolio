"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const AboutStyle = () => {
  const theme = useTheme().theme;

  return (
    <motion.ul
      variants={{
        move: { opacity: 1, transition: { staggerChildren: 0.01, repeat: 0 } },
      }}
      initial={{ opacity: 0 }}
      className="absolute bg-lightBackground dark:bg-darkBackground opacity-50 inset-0 rotate-45 grid grid-cols-4 -z-10 ">
      {"*"
        .repeat(30)
        .split("")
        .map((_, i) => {
          const backgroundColor =
            theme === "light"
              ? `rgba(76, 191, 246, ${i / 50})`
              : `rgba(49, 163, 223, ${i / 50})`;
          return (
            <motion.li
              variants={{ move: { opacity: 1 } }}
              initial={{ opacity: 0 }}
              key={i}
              className={`text-center dark:opacity-50`}
              style={{ backgroundColor }}></motion.li>
          );
        })}
    </motion.ul>
  );
};

export default AboutStyle;
