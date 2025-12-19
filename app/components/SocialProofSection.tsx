"use client";

import React from "react";
import Image from "next/image";
import { socialProofLogos } from "./constants";

export default function SocialProofSection() {
   return (
      <section className="bg-white pt-16 pb-20 relative z-10 overflow-hidden">
         <div className="max-w-xl mx-auto px-4 text-center mb-12">
            <p className="text-gray-900 font-bold text-xl md:text-2xl">
               Trusted By More Than <span className="text-[#2563EB]">+10,000</span>{" "}
               Users
            </p>
         </div>
         <div className="relative flex w-full overflow-hidden">
            <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
            <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />
            <div className="flex animate-marquee gap-6 pr-6 items-center">
               {[...socialProofLogos, ...socialProofLogos, ...socialProofLogos].map((brand, i) => (
                  <div
                     key={i}
                     className="flex items-center gap-3 bg-white border border-gray-100 shadow-[0_2px_15px_-4px_rgba(0,0,0,0.05)] px-8 py-4 rounded-2xl min-w-max hover:border-[#2563EB]/20 hover:shadow-lg transition-all cursor-pointer group"
                  >
                     <div className="relative w-8 h-8 rounded-lg overflow-hidden">
                        <Image
                           src={brand.logo}
                           alt={brand.name}
                           fill
                           className="object-contain"
                        />
                     </div>
                     <span className="font-bold text-gray-700 text-xl group-hover:text-gray-900">
                        {brand.name}
                     </span>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
