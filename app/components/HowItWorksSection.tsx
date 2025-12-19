"use client";

import React from "react";
import Image from "next/image";

export default function HowItWorksSection() {
   return (
      <section className="py-16 md:py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-12 md:mb-16">
               <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full text-[10px] font-bold mb-4 uppercase tracking-wider">
                  <Image
                     src="/logo.png"
                     alt="Automease"
                     width={16}
                     height={16}
                     className="object-contain"
                  />{" "}
                  Automease
               </div>
               <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                  How It <span className="text-[#60A5FA]">Works</span>
               </h2>
               <p className="text-gray-500 text-sm mt-4 max-w-md">
                  We make automation simple, even for non-tech business owners.
               </p>
            </div>

            {/* Mobile Layout */}
            <div className="flex flex-col gap-8 md:hidden">
               {/* Step 1 */}
               <div className="relative">
                  <div className="w-10 h-10 rounded-full border-2 border-[#2563EB] text-[#2563EB] flex items-center justify-center font-bold mb-4">
                     1
                  </div>
                  <h3 className="font-bold text-lg mb-2">
                     Understand Your Workflow
                  </h3>
                  <p className="text-gray-500 text-sm">
                     We learn how your business operates and identify repetitive
                     tasks
                  </p>
               </div>

               {/* Arrow Down */}
               <div className="flex justify-center">
                  <svg
                     width="40"
                     height="50"
                     viewBox="0 0 40 50"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M20 0 L20 35 M10 25 L20 40 L30 25"
                        stroke="#60A5FA"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                  </svg>
               </div>

               {/* Step 2 */}
               <div className="bg-[#F8FAFC] p-5 rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-full border-2 border-[#93C5FD] bg-[#EFF6FF] text-[#60A5FA] flex items-center justify-center font-bold mb-4">
                     2
                  </div>
                  <h3 className="font-bold text-base mb-2">
                     Design Custom Automation
                  </h3>
                  <p className="text-gray-500 text-sm">
                     We create a tailored workflow using n8n based on your business
                     needs
                  </p>
               </div>

               {/* Arrow Down */}
               <div className="flex justify-center">
                  <svg
                     width="40"
                     height="50"
                     viewBox="0 0 40 50"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M20 0 L20 35 M10 25 L20 40 L30 25"
                        stroke="#60A5FA"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                  </svg>
               </div>

               {/* Step 3 */}
               <div className="bg-[#60A5FA] p-6 rounded-2xl text-white shadow-lg">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold mb-4 border border-white/30">
                     3
                  </div>
                  <h3 className="font-bold text-base mb-2">
                     Build &amp; Implement
                  </h3>
                  <p className="text-blue-50 text-sm">
                     Your automation system is installed and tested to ensure smooth
                     operation
                  </p>
               </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block">
               {/* Row 1: Step 1, Arrow 1, Empty, Step 3 */}
               <div className="grid grid-cols-12 gap-4 items-start">
                  {/* Step 1 - spans 4 columns */}
                  <div className="col-span-4 relative z-10">
                     <div className="w-10 h-10 rounded-full border-2 border-[#2563EB] text-[#2563EB] flex items-center justify-center font-bold mb-6">
                        1
                     </div>
                     <h3 className="font-bold text-lg mb-2">
                        Understand Your Workflow
                     </h3>
                     <p className="text-gray-500 text-sm">
                        We learn how your business operates and identify repetitive
                        tasks
                     </p>
                  </div>

                  {/* Empty spacer */}
                  <div className="col-span-4"></div>

                  {/* Step 3 - spans 4 columns */}
                  <div className="col-span-4 relative z-10">
                     <div className="bg-[#60A5FA] p-6 rounded-2xl text-white shadow-lg">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold mb-4 border border-white/30">
                           3
                        </div>
                        <h3 className="font-bold text-base mb-2">
                           Build &amp; Implement
                        </h3>
                        <p className="text-blue-50 text-sm">
                           Your automation system is installed and tested to ensure
                           smooth operation
                        </p>
                     </div>
                  </div>
               </div>

               {/* Row 2: Arrow 1 (down-right), Step 2, Arrow 2 (up-right) */}
               <div className="grid grid-cols-12 gap-4 items-center mt-4">
                  {/* Arrow from Step 1 to Step 2 */}
                  <div className="col-span-4 flex justify-end pr-4">
                     <svg
                        width="80"
                        height="80"
                        viewBox="0 0 80 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transform translate-x-4"
                     >
                        <path
                           d="M40 0 C 40 40, 40 60, 75 60"
                           stroke="#60A5FA"
                           strokeWidth="4"
                           fill="none"
                           strokeLinecap="round"
                        />
                        <path
                           d="M65 50 L 78 60 L 65 70"
                           stroke="#60A5FA"
                           strokeWidth="4"
                           fill="none"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        />
                     </svg>
                  </div>

                  {/* Step 2 - Center */}
                  <div className="col-span-4 relative z-10">
                     <div className="bg-[#F8FAFC] p-6 rounded-xl border border-gray-100 shadow-sm">
                        <div className="w-10 h-10 rounded-full border-2 border-[#93C5FD] bg-[#EFF6FF] text-[#60A5FA] flex items-center justify-center font-bold mb-4">
                           2
                        </div>
                        <h3 className="font-bold text-base mb-2">
                           Design Custom Automation
                        </h3>
                        <p className="text-gray-500 text-sm">
                           We create a tailored workflow using n8n based on your
                           business needs
                        </p>
                     </div>
                  </div>

                  {/* Arrow from Step 2 to Step 3 */}
                  <div className="col-span-4 flex justify-start pl-4">
                     <svg
                        width="80"
                        height="80"
                        viewBox="0 0 80 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transform -translate-x-4"
                     >
                        <path
                           d="M0 60 C 40 60, 60 40, 60 10"
                           stroke="#60A5FA"
                           strokeWidth="4"
                           fill="none"
                           strokeLinecap="round"
                        />
                        <path
                           d="M50 20 L 60 0 L 70 20"
                           stroke="#60A5FA"
                           strokeWidth="4"
                           fill="none"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        />
                     </svg>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
