import React from "react";
import { motion } from "framer-motion";
interface Props {
  children: string;
}
const Title = ({ children }: Props) => {
  return (
    <motion.h2
      initial={{ x: "-300px", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className=" text-center  my-5 md:text-start"
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: 1,
        repeatDelay: 0.2,
      }}
    >
      {children}
    </motion.h2>
  );
};

export default Title;
