"use client";

import React from "react";

export default function CTAFooterSection() {
   return (
      <section className="bg-[#0F172A] relative overflow-hidden">
         <div className="bg-[#4285F4] pt-24 pb-32 text-center px-4 relative overflow-hidden">
            {/* Background Grid - sama seperti hero */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:80px_80px]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative z-10">
               Ready to save hours every day?
            </h2>
            <p className="text-blue-100 text-sm mb-8 relative z-10">
               Let automation handle the repetitive tasks for you.
            </p>
            <button className="bg-[#111827] text-white px-8 py-3 rounded-full text-sm font-bold hover:scale-105 transition shadow-xl relative z-10 border border-white/10">
               Get Started
            </button>
         </div>

         <div className="bg-black text-white pt-16 pb-8 px-4 border-t border-white/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
               <div>
                  <div className="flex items-center gap-2 mb-6">
                     <div className="w-8 h-8 bg-white text-black rounded flex items-center justify-center font-bold">
                        M
                     </div>
                     <span className="font-bold tracking-widest text-sm">
                        MEDIATECH
                        <br />
                        <span className="text-[8px] font-normal tracking-normal">
                           INDONESIA
                        </span>
                     </span>
                  </div>
                  <p className="text-gray-400 text-xs max-w-xs leading-relaxed">
                     Jelajahi setiap lini kehidupan penuh warna bersama Mediatech
                     Indonesia
                  </p>
               </div>
               <div>
                  <h4 className="font-bold mb-6 text-sm">Company</h4>
                  <ul className="space-y-3 text-xs text-gray-400">
                     <li>Home</li>
                     <li>About Us</li>
                     <li>Service</li>
                     <li>Choose Us</li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold mb-6 text-sm">Support</h4>
                  <ul className="space-y-3 text-xs text-gray-400">
                     <li>Contact Us</li>
                     <li>Help Us</li>
                     <li>Customer Center</li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold mb-6 text-sm">Contact</h4>
                  <ul className="space-y-3 text-xs text-gray-400">
                     <li>mediatech@company.com</li>
                     <li>+62 8123-4567-8900</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
}
