"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import ScrollRevealText from "./ScrollRevealText";

export default function ScrollRevealSection() {
   return (
      <section className="bg-white py-20 md:py-28 relative z-10">
         <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="relative">
               {/* Small Label - Floated left */}
               <div className="md:float-left md:mr-8 md:mb-2 mb-6 md:w-[160px]">
                  <p className="text-gray-400 text-xs leading-relaxed">
                     Leading the Way in
                     <br />
                     Business Automation That
                     <br />
                     Power Your Growth
                  </p>
               </div>

               {/* Main Text with Framer Motion scroll reveal */}
               <ScrollRevealText />

               {/* Clear float */}
               <div className="clear-both"></div>

               {/* CTA Button */}
               <div className="mt-10">
                  <button className="inline-flex items-center gap-3 bg-[#DBEAFE] hover:bg-[#BFDBFE] text-gray-800 pl-5 pr-3 py-2.5 rounded-full text-sm font-medium transition-all group">
                     <span>Learn More About Us</span>
                     <span className="w-8 h-8 bg-[#2563EB] text-white rounded-full flex items-center justify-center group-hover:bg-[#1D4ED8] transition-colors">
                        <ArrowRight size={16} />
                     </span>
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
}
