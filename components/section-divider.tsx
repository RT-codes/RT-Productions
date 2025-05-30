"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return <motion.div className="bg-gray-300 my-20 h-32 w-[.20rem] rounded-full hidden sm:block" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}></motion.div>;
}
