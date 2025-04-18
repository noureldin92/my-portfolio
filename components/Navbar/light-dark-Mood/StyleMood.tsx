"use client";
import { faSun, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const StyleMood = () => {
  const { theme, setTheme } = useTheme();
  const [icon, setIcon] = useState<IconDefinition>(faSun);
  const moodToggle = () => {
    setTheme(() => (theme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    if (theme === "dark") {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setIcon(faSun);
    }
    if (theme === "light") {
      setIcon(faMoon);
    }
  }, [theme]);
  if (theme === "system" || theme === null) {
    setTheme("dark");
  }

  const notUndefined = icon !== undefined;
  return (
    <motion.span
      initial={{ translateX: -150, rotate: 90, opacity: 0 }}
      animate={{ translateX: 0, rotate: 0, opacity: 1 }}
      transition={{ delay: 5, type: "spring" ,stiffness:70}}
      className={`group p-2 block text-center ${
        notUndefined && "bg-[#0c7090] dark:bg-lightBlue/20 cursor-pointer"
      } w-10 h-10 rounded-full shadow-md shadow-black/40 dark:shadow-gray-500/20`}
      onClick={moodToggle}>
      <FontAwesomeIcon
        icon={icon!}
        className="text-white  group-hover:scale-110 "
      />
    </motion.span>
  );
};

export default StyleMood;
