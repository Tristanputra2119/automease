"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Instagram } from "lucide-react";
import { team } from "./constants";

export default function TeamSection() {
   return (
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-12">
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
               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                  Meet the Automease <span className="text-[#60A5FA]">Team</span>
               </h2>
               <p className="text-gray-500 text-sm max-w-md">
                  We make automation simple, even for non-tech business owners.
               </p>
            </div>
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {team.map((person, i) => (
                     <div
                        key={i}
                        className="relative aspect-square rounded-[2rem] overflow-hidden group"
                     >
                        {/* Full Background Image */}
                        <img
                           src={person.image}
                           alt={person.name}
                           className={`absolute inset-0 w-full h-full object-cover ${person.objectPosition || "object-top"
                              }`}
                        />

                        {/* Floating Info Bar */}
                        <div className="absolute bottom-4 left-4 right-4 p-4 flex justify-between items-center bg-white rounded-xl shadow-lg border border-gray-100 z-10">
                           <div>
                              <h4 className="font-bold text-base">{person.name}</h4>
                              <p className="text-gray-500 text-sm">{person.role}</p>
                           </div>
                           {person.instagram && (
                              <a
                                 href={person.instagram}
                                 target="_blank"
                                 className="w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-black hover:text-white transition cursor-pointer"
                              >
                                 <Instagram size={18} />
                              </a>
                           )}
                           {!person.instagram && (
                              <div className="w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center opacity-50 cursor-not-allowed">
                                 <Instagram size={18} />
                              </div>
                           )}
                        </div>
                     </div>
                  ))}

                  {/* See More Card */}
                  <div className="relative aspect-square rounded-[2rem] overflow-hidden group bg-[#3B82F6] flex flex-col items-center justify-center text-white cursor-pointer hover:bg-[#2563EB] transition-colors">
                     <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6 backdrop-blur-sm">
                        <ArrowUpRight size={32} />
                     </div>
                     <h4 className="font-bold text-lg mb-1">See More</h4>
                     <p className="text-blue-100 text-sm">
                        Meet the rest of the team
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
