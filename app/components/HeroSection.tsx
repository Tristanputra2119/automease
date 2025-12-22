"use client";

import React from "react";
import Image from "next/image";
import { heroImages } from "./constants";

export default function HeroSection() {
   return (
      <div className="bg-white p-3 sm:p-4">
         <section className="relative bg-gradient-to-b from-[#6B9FFF] via-[#4285F4] to-[#2563EB] pt-6 px-4 sm:px-6 flex flex-col items-center z-20 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:80px_80px]" />
            </div>

            {/* Navbar */}
            <nav className="relative z-30 flex justify-between items-center w-full max-w-7xl mb-12 md:mb-16">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-105 transition-transform overflow-hidden">
                  <Image
                     src="/logo.png"
                     alt="Automease Logo"
                     width={32}
                     height={32}
                     className="object-contain"
                  />
               </div>
               <button className="flex items-center gap-2.5 bg-[#0F172A] text-white pl-3 pr-5 py-2.5 rounded-full text-sm font-semibold shadow-xl hover:bg-black transition-all">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                     <span className="w-2 h-2 bg-white rounded-full" />
                  </span>
                  <span>Menu</span>
               </button>
            </nav>

            {/* Hero Content */}
            <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center">
               {/* Automease Badge */}
               <div className="mb-8 inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-full text-white text-sm font-medium shadow-lg cursor-default">
                  <Image
                     src="/logo.png"
                     alt="Automease"
                     width={20}
                     height={20}
                     className="object-contain"
                  />
                  Automease
               </div>

               {/* Normal Headline */}
               <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-10">
                  Automate Your Business, <br />
                  Elevate Your Growth.
               </h1>

               {/* Glass Input Field */}
               <div className="w-full max-w-[480px] mx-auto relative group mb-16">
                  <div className="relative flex items-center bg-white/15 backdrop-blur-xl border border-white/30 rounded-full p-1.5 pl-5 shadow-2xl transition-all hover:bg-white/20">
                     <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 bg-transparent text-white placeholder-white/60 focus:outline-none text-sm font-medium py-2"
                     />
                     <button className="bg-[#0F172A] hover:bg-black text-white px-6 py-3 rounded-full text-sm font-semibold transition-transform hover:scale-105 shadow-lg whitespace-nowrap">
                        Get Started
                     </button>
                  </div>
               </div>
            </div>

            {/* === 3-CARD IMAGE SECTION (INSIDE BLUE) === */}
            <div className="relative z-20 w-full max-w-[1000px] px-4 pb-0">
               {/* Wings container with absolute positioning */}
               <div className="relative flex justify-center items-end">
                  {/* 1. LEFT WING - positioned at left corner of main card */}
                  <div 
                     className="hidden md:block absolute w-[400px] h-[450px] z-10"
                     style={{ left: '-50px', bottom: '0px', transform: 'rotate(-10deg)' }}
                  >
                     <Image
                        src={heroImages.leftWing}
                        alt="Feature Left"
                        fill
                        className="object-contain"
                     />
                  </div>

                  {/* 2. MAIN CARD - stays in center */}
                  <div className="relative w-full md:w-[550px] h-[260px] md:h-[300px] bg-white rounded-t-[2rem] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.15)] z-30 overflow-hidden">
                     <Image
                        src={heroImages.main}
                        alt="Main Dashboard"
                        fill
                        className="object-cover object-top"
                     />
                  </div>

                  {/* 3. RIGHT WING - positioned at right corner of main card */}
                  <div 
                     className="hidden md:block absolute w-[400px] h-[450px] z-10"
                     style={{ right: '-50px', bottom: '0px', transform: 'rotate(10deg)' }}
                  >
                     <Image
                        src={heroImages.rightWing}
                        alt="Feature Right"
                        fill
                        className="object-contain"
                     />
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
