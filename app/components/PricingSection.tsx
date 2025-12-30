"use client";

import React from "react";
import Image from "next/image";
import { pricingPackages } from "./constants";

export default function PricingSection() {
   return (
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-20">
               <span className="text-[#60A5FA]">Flexible</span> Pricing for Every{" "}
               <br /> Business
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
               {pricingPackages.map((pkg, i) => (
                  <div
                     key={i}
                     className={`rounded-[2rem] w-full p-8 text-left transition-all duration-300 hover:scale-105 ${pkg.highlight
                        ? "bg-[#3B82F6] text-white shadow-xl h-[480px] flex flex-col justify-between"
                        : "bg-[#F8FAFC] text-gray-900 h-auto"
                        }`}
                  >
                     <div>
                        <div className="mb-4">
                           <h3 className={`text-xl font-bold ${pkg.highlight ? "text-white" : "text-gray-900"}`}>
                              {pkg.name}
                           </h3>
                           <p className={`text-sm mt-2 ${pkg.highlight ? "text-blue-100" : "text-gray-500"}`}>
                              {pkg.description}
                           </p>
                        </div>
                        <div className="mb-8">
                           <span className="text-4xl font-bold">{pkg.price}</span>
                           {pkg.price !== "Custom" && <span className={`text-sm ${pkg.highlight ? "text-blue-100" : "text-gray-500"}`}>/month</span>}
                        </div>
                        <ul className="space-y-4 mb-8">
                           {pkg.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm">
                                 <svg
                                    className={`w-5 h-5 flex-shrink-0 ${pkg.highlight ? "text-white" : "text-blue-500"}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                 >
                                    <path
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       strokeWidth={2}
                                       d="M5 13l4 4L19 7"
                                    />
                                 </svg>
                                 <span className={pkg.highlight ? "text-blue-50" : "text-gray-600"}>
                                    {feature}
                                 </span>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <button
                        className={`w-full py-3 rounded-xl font-bold text-sm transition-colors ${pkg.highlight
                           ? "bg-white text-blue-600 hover:bg-gray-50"
                           : "bg-blue-600 text-white hover:bg-blue-700"
                           }`}
                     >
                        Choose {pkg.name}
                     </button>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}

