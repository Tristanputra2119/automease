"use client";

import React from "react";
import Image from "next/image";
import { smartAutomationCards, sliderImagesRow1, sliderImagesRow2 } from "./constants";

export default function SmartAutomationSection() {
   return (
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
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
                  Smart Automation for Real <br /> Business{" "}
                  <span className="text-[#2563EB]">Needs</span>
               </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
               {/* LEFT: 2 Stacked Cards */}
               <div className="flex flex-col gap-6">
                  {smartAutomationCards.map((card, i) => (
                     <div
                        key={i}
                        className="bg-[#F8FAFC] rounded-[2rem] p-6 md:p-8 pb-0 overflow-hidden"
                     >
                        <h3 className="font-bold text-lg mb-2 text-gray-900">
                           {card.title}
                        </h3>
                        <p className="text-gray-500 text-sm mb-6">
                           {card.description}
                        </p>
                        <div className="flex justify-center">
                           <div className="relative w-[200px] md:w-[280px] h-[120px] md:h-[140px] bg-[#D1D5DB] rounded-t-2xl overflow-hidden translate-y-8">
                              <Image
                                 src={card.image}
                                 alt={card.title}
                                 fill
                                 className="object-cover object-top"
                              />
                           </div>
                        </div>
                     </div>
                  ))}
               </div>

               {/* RIGHT: Single Large Card with Animated Sliders */}
               <div className="bg-gradient-to-b from-[#93C5FD] via-[#60A5FA] to-[#3B82F6] rounded-[2rem] overflow-hidden flex flex-col min-h-[500px]">
                  {/* Header */}
                  <div className="p-6 md:p-8 pb-4">
                     <h3 className="font-bold text-xl mb-2 text-white">
                        Order Automation
                     </h3>
                     <p className="text-blue-100 text-sm max-w-md">
                        Pesanan dari form otomatis masuk ke Google Sheet, admin dapat
                        notifikasi WA, dan invoice terkirim otomatis
                     </p>
                  </div>

                  {/* 2 Row Marquee Sliders */}
                  <div className="flex flex-col gap-4 px-4 pb-4">
                     {/* Row 1 - Slider Left to Right */}
                     <div className="relative overflow-hidden rounded-xl">
                        <div className="flex animate-marquee gap-4 hover:[animation-play-state:paused] h-full items-stretch">
                           {[...sliderImagesRow1, ...sliderImagesRow1].map((slide, i) => (
                              <div
                                 key={i}
                                 className="relative w-[380px] h-[240px] bg-[#DBEAFE] rounded-xl overflow-hidden flex-shrink-0"
                              >
                                 <Image
                                    src={slide.image}
                                    alt={`Slide ${i + 1}`}
                                    fill
                                    className="object-cover"
                                 />
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Row 2 - Slider Right to Left */}
                     <div className="relative overflow-hidden rounded-xl">
                        <div className="flex animate-marquee-reverse gap-4 hover:[animation-play-state:paused] h-full items-stretch">
                           {[...sliderImagesRow2, ...sliderImagesRow2].map((slide, i) => (
                              <div
                                 key={i}
                                 className="relative w-[380px] h-[240px] bg-white rounded-xl overflow-hidden flex-shrink-0"
                              >
                                 <Image
                                    src={slide.image}
                                    alt={`Slide ${i + 1}`}
                                    fill
                                    className="object-cover"
                                 />
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
