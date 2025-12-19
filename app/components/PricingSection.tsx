"use client";

import React from "react";

export default function PricingSection() {
   return (
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[10px] font-bold mb-6 uppercase tracking-wider">
               <div className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center text-white text-[8px]">
                  A
               </div>{" "}
               Automease
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-20">
               <span className="text-[#60A5FA]">Flexible</span> Pricing for Every{" "}
               <br /> Business
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
               <div className="bg-[#F8FAFC] h-[300px] rounded-[2rem] w-full"></div>
               <div className="bg-[#4285F4] h-[400px] rounded-[2rem] w-full shadow-2xl"></div>
               <div className="bg-[#F8FAFC] h-[300px] rounded-[2rem] w-full"></div>
            </div>
         </div>
      </section>
   );
}
