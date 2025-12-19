"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ScrollRevealText() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });

   const words = [
      { text: "At", bold: false },
      { text: "Automease,", bold: false },
      { text: "we're", bold: false },
      { text: "committed", bold: false },
      { text: "to", bold: false },
      { text: "driving", bold: false },
      { text: "the", bold: false },
      { text: "future", bold: false },
      { text: "of", bold: false },
      { text: "business", bold: true },
      { text: "efficiency", bold: true },
      { text: "through", bold: false },
      { text: "cutting-edge", bold: true },
      { text: "automation", bold: true },
      { text: "solutions.", bold: true },
      { text: "With", bold: false },
      { text: "a", bold: false },
      { text: "team", bold: false },
      { text: "of", bold: false },
      { text: "industry-certified", bold: true },
      { text: "experts", bold: false },
      { text: "and", bold: false },
      { text: "a", bold: false },
      { text: "passion", bold: false },
      { text: "for", bold: false },
      { text: "innovation,", bold: false },
      { text: "we", bold: false },
      { text: "design,", bold: false },
      { text: "install,", bold: false },
      { text: "and", bold: false },
      { text: "maintain", bold: false },
      { text: "automation", bold: false },
      { text: "systems", bold: false },
      { text: "that", bold: false },
      { text: "help", bold: false },
      { text: "businesses.", bold: false },
   ];

   return (
      <p
         ref={ref}
         className="text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] font-medium leading-[1.5] md:leading-[1.4] tracking-tight"
      >
         {words.map((word, i) => (
            <motion.span
               key={i}
               initial={{ color: "#D1D5DB" }}
               animate={isInView ? { color: word.bold ? "#111827" : "#6B7280" } : {}}
               transition={{ duration: 0.4, delay: i * 0.03 }}
               className={word.bold ? "font-semibold" : ""}
            >
               {word.text}{" "}
            </motion.span>
         ))}
      </p>
   );
}
