"use client";

import React from "react";
import Image from "next/image";
import { MousePointer2 } from "lucide-react";

export default function ChallengesSection() {
   return (
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-20 gap-6 md:gap-8">
               <div className="relative">
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2563EB] px-3 py-1.5 rounded-full text-[10px] font-bold mb-4 uppercase tracking-wider">
                     <Image
                        src="/logo.png"
                        alt="Automease"
                        width={16}
                        height={16}
                        className="object-contain"
                     />{" "}
                     Automease
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1]">
                     <span className="text-[#2563EB]">Challenges</span> Faced by
                     <br className="hidden sm:block" />{" "}
                     <span className="sm:hidden"> </span>Small Businesses
                  </h2>
                  <MousePointer2 className="hidden md:block absolute -right-12 top-1/2 w-12 h-12 text-black fill-white drop-shadow-xl transform -translate-y-1/2 rotate-[-15deg]" />
               </div>
               <p className="text-gray-500 text-sm max-w-xs leading-relaxed text-left lg:text-right">
                  Lorem ipsum is simply dummy text of the printing and typesetting
                  industry.
               </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
               {[1, 2, 3].map((item) => (
                  <div
                     key={item}
                     className="bg-white p-4 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                     <div className="w-full aspect-[4/3] bg-[#F1F5F9] rounded-[1rem] sm:rounded-[1.25rem] md:rounded-[1.5rem] mb-4 sm:mb-6 md:mb-8 border border-gray-100 flex items-center justify-center">
                        <span className="text-gray-300 font-bold text-2xl sm:text-3xl">
                           IMG
                        </span>
                     </div>
                     <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">
                        Problem {item}
                     </h3>
                     <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                        Lorem ipsum is simply dummy text of the printing and
                        typesetting industry.
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
