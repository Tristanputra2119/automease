"use client";

import React from "react";
import Image from "next/image";
import { testimonials } from "./constants";

export default function AutomeaseInActionSection() {
   return (
      <section className="py-24 bg-white overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-xs font-medium mb-6 shadow-sm">
               <Image
                  src="/logo.png"
                  alt="Automease"
                  width={20}
                  height={20}
                  className="object-contain"
               />
               Automease
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
               Automease in <span className="text-[#60A5FA]">Action</span>
            </h2>
         </div>

         {/* 2 Row Infinite Sliders */}
         <div className="flex flex-col gap-4">
            {/* Row 1 - Slide Left */}
            <div className="relative overflow-hidden">
               <div className="flex animate-marquee gap-4 hover:[animation-play-state:paused]">
                  {[...testimonials, ...testimonials, ...testimonials].map((item, i) => (
                     <div
                        key={i}
                        className="min-w-[380px] p-6 rounded-2xl border border-gray-100 shadow-sm bg-white flex gap-4 flex-shrink-0"
                     >
                        <div className="relative w-12 h-12 bg-gray-200 rounded-xl flex-shrink-0 overflow-hidden">
                           <Image
                              src={item.logo}
                              alt={item.name}
                              fill
                              className="object-cover"
                           />
                        </div>
                        <div className="flex-1">
                           <h4 className="font-bold text-base mb-1">{item.name}</h4>
                           <p className="text-gray-500 text-sm leading-relaxed">
                              {item.testimonial}
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Row 2 - Slide Right */}
            <div className="relative overflow-hidden">
               <div className="flex animate-marquee-reverse gap-4 hover:[animation-play-state:paused]">
                  {[...testimonials, ...testimonials, ...testimonials].map((item, i) => (
                     <div
                        key={i}
                        className="min-w-[380px] p-6 rounded-2xl border border-gray-100 shadow-sm bg-white flex gap-4 flex-shrink-0"
                     >
                        <div className="relative w-12 h-12 bg-gray-200 rounded-xl flex-shrink-0 overflow-hidden">
                           <Image
                              src={item.logo}
                              alt={item.name}
                              fill
                              className="object-cover"
                           />
                        </div>
                        <div className="flex-1">
                           <h4 className="font-bold text-base mb-1">{item.name}</h4>
                           <p className="text-gray-500 text-sm leading-relaxed">
                              {item.testimonial}
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
