"use client";
import { motion } from "framer-motion";

const OverLay = () => {
  return (
    <div className="bg-triBackground absolute inset-0 -z-10 bg-cover dark:contrast-[.90]">
      <motion.div
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ type: "spring", duration: 5, delay: 3 }}
        className=" min-h-full bg-gradient-to-r from-white to-transparent"></motion.div>
    </div>
  );
};

export default OverLay;
