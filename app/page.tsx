import React from 'react';
import { MousePointer2, Star, Menu, ArrowUpRight, CheckCircle2, ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#2563EB] pt-8 px-4 sm:px-6 flex flex-col items-center z-20">
        
        {/* Background Grid & Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[800px] bg-white/10 blur-[120px] rounded-full pointer-events-none mix-blend-overlay" />
        </div>

        {/* Navbar */}
        <nav className="relative z-30 flex justify-between items-center w-full max-w-7xl mb-16 md:mb-24">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-105 transition-transform">
             <span className="text-[#2563EB] font-black text-lg">A</span>
          </div>
          <button className="flex items-center gap-2 bg-[#0F172A] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-xl hover:bg-black transition-all border border-white/10">
            <Menu size={14} strokeWidth={3} />
            <span>Menu</span>
          </button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center pb-[280px]">
          <div className="mb-10 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-white text-[10px] font-bold uppercase tracking-widest shadow-lg cursor-default">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]" />
            Automate v1.0
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05] drop-shadow-lg mb-12">
            Automate Your Business, <br />
            <span className="text-white">Elevate Your Growth.</span>
          </h1>
          
          {/* Glass Input Field */}
          <div className="w-full max-w-[520px] mx-auto relative group">
            <div className="absolute -inset-1 bg-white/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition duration-700" />
            <div className="relative flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-2 pl-6 shadow-2xl transition-all hover:bg-white/15 hover:border-white/30">
              <input type="email" placeholder="Enter your email" className="flex-1 bg-transparent text-white placeholder-blue-100/70 focus:outline-none text-base font-medium"/>
              <button className="bg-[#0F172A] hover:bg-black text-white px-8 py-3.5 rounded-full text-xs font-bold transition-transform hover:scale-105 shadow-lg whitespace-nowrap">Get Started</button>
            </div>
          </div>
        </div>

        {/* === 3-CARD PANORAMA EFFECT (FIXED) === */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[45%] w-full max-w-[1100px] px-4 z-40 flex items-end justify-center">
            
            {/* 1. LEFT WING (Glass/Grey) */}
            {/* Muncul di kiri belakang kartu utama */}
            <div className="hidden md:block w-[200px] h-[220px] bg-white/20 backdrop-blur-lg border border-white/10 rounded-tl-[2rem] rounded-bl-[1rem] shadow-xl transform translate-x-6 -translate-y-4 z-10 hover:-translate-x-2 transition-transform duration-500"></div>

            {/* 2. MAIN CARD (White Solid) */}
            {/* Paling besar, paling depan, shadow paling tebal */}
            <div className="relative w-full md:w-[750px] aspect-[16/10] bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center border-[8px] border-white z-30 overflow-hidden group">
                {/* Window Dots */}
                <div className="absolute top-8 left-8 flex gap-3 opacity-20 group-hover:opacity-40 transition-opacity">
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                </div>
                {/* Content IMG */}
                <span className="text-gray-200 font-black text-6xl tracking-widest uppercase select-none transform group-hover:scale-110 transition-transform duration-700">IMG</span>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>

            {/* 3. RIGHT WING (Glass/Grey) */}
            {/* Muncul di kanan belakang kartu utama */}
            <div className="hidden md:block w-[200px] h-[220px] bg-white/20 backdrop-blur-lg border border-white/10 rounded-tr-[2rem] rounded-br-[1rem] shadow-xl transform -translate-x-6 -translate-y-4 z-10 hover:translate-x-2 transition-transform duration-500"></div>

        </div>
      </section>

      {/* ================= SOCIAL PROOF ================= */}
      {/* Padding top disesuaikan agar pas dengan kartu yang turun */}
      <section className="bg-white pt-[350px] md:pt-[420px] pb-24 relative z-10 overflow-hidden">
        <div className="max-w-xl mx-auto px-4 text-center mb-14">
          <p className="text-gray-900 font-bold text-xl md:text-2xl">
            Trusted By More Than <span className="text-[#2563EB]">+10,000</span> Users
          </p>
        </div>
        <div className="relative flex w-full overflow-hidden">
          <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />
          <div className="flex animate-marquee gap-6 pr-6 items-center">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-3 bg-white border border-gray-100 shadow-[0_2px_15px_-4px_rgba(0,0,0,0.05)] px-8 py-4 rounded-2xl min-w-max hover:border-[#2563EB]/20 hover:shadow-lg transition-all cursor-pointer group">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-lg text-[10px] font-bold group-hover:bg-[#2563EB] transition-colors">N</div>
                <span className="font-bold text-gray-700 text-xl group-hover:text-gray-900">Notion</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CHALLENGES ================= */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2563EB] px-3 py-1 rounded-full text-[10px] font-bold mb-4 uppercase tracking-wider">
                 <div className="w-4 h-4 bg-[#2563EB] rounded-full flex items-center justify-center text-white text-[8px]">A</div> Automease
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1]">
                <span className="text-[#2563EB]">Challenges</span> Faced by <br/> Small Businesses
              </h2>
              <MousePointer2 className="absolute -right-12 top-1/2 w-12 h-12 text-black fill-white drop-shadow-xl transform -translate-y-1/2 rotate-[-15deg]" />
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed text-left md:text-right">
              Lorem ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-full aspect-[4/3] bg-[#F1F5F9] rounded-[1.5rem] mb-8 border border-gray-100 flex items-center justify-center">
                  <span className="text-gray-300 font-bold text-3xl">IMG</span>
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">Problem {item}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SMART AUTOMATION (BENTO GRID) ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2563EB] px-3 py-1 rounded-full text-[10px] font-bold mb-4 uppercase tracking-wider">
               <div className="w-4 h-4 bg-[#2563EB] rounded-full flex items-center justify-center text-white text-[8px]">A</div> Automease
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Smart Automation for Real <br /> Business <span className="text-[#2563EB]">Needs</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[800px]">
            {/* Kiri: 2 Kartu Vertikal */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {[1, 2].map((i) => (
                <div key={i} className="flex-1 bg-[#F8FAFC] rounded-[2rem] p-8 border border-gray-100 relative overflow-hidden group">
                  <h3 className="font-bold text-lg mb-2 relative z-10">Order Automation</h3>
                  <p className="text-gray-500 text-xs mb-6 relative z-10 max-w-[250px]">Pesanan dari form otomatis masuk ke Google Sheet.</p>
                  <div className="w-full h-40 bg-[#E2E8F0] rounded-[1.5rem] mx-auto flex items-center justify-center">
                     <span className="text-gray-400 font-bold text-xl">IMG</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Kanan: Bento Mix */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="bg-[#60A5FA] rounded-[2rem] p-8 text-white h-[200px] flex flex-col justify-center relative overflow-hidden">
                 <h3 className="font-bold text-xl mb-2">Order Automation</h3>
                 <p className="text-blue-50 text-xs max-w-sm">Pesanan dari form otomatis masuk ke Google Sheet, admin dapat notifikasi WA.</p>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-6">
                 <div className="bg-[#DBEAFE] rounded-[2rem] flex items-center justify-center"><span className="text-gray-300 font-bold">IMG</span></div>
                 <div className="bg-white border border-gray-100 rounded-[2rem] flex items-center justify-center shadow-sm"><span className="text-gray-300 font-bold text-2xl">IMG</span></div>
                 <div className="bg-white border border-gray-100 rounded-[2rem] flex items-center justify-center shadow-sm"><span className="text-gray-300 font-bold text-2xl">IMG</span></div>
                 <div className="bg-[#DBEAFE] rounded-[2rem] flex items-center justify-center"><span className="text-gray-300 font-bold">IMG</span></div>
              </div>
              <div className="bg-[#1D4ED8] rounded-[2rem] h-[100px] w-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
           <div className="mb-16">
              <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[10px] font-bold mb-4 uppercase tracking-wider">
                 <div className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center text-white text-[8px]">A</div> Automease
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">How It <span className="text-[#60A5FA]">Works</span></h2>
              <p className="text-gray-500 text-sm mt-4 max-w-md">We make automation simple, even for non-tech business owners.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              <div className="relative z-10">
                 <div className="w-10 h-10 rounded-full border-2 border-[#2563EB] text-[#2563EB] flex items-center justify-center font-bold mb-6">1</div>
                 <h3 className="font-bold text-lg mb-2">Understand Your Workflow</h3>
                 <p className="text-gray-500 text-xs">We learn how your business operates and identify repetitive tasks.</p>
              </div>
              <div className="hidden md:block absolute top-12 left-[25%] w-24 h-12 border-t-2 border-r-2 border-blue-200 rounded-tr-full transform rotate-12"></div>

              <div className="relative z-10 mt-12 md:mt-24">
                 <div className="w-10 h-10 rounded-full border-2 border-[#2563EB] text-[#2563EB] flex items-center justify-center font-bold mb-6">2</div>
                 <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-sm mb-1">Design Custom Automation</h3>
                    <p className="text-gray-500 text-[10px]">We create a tailored workflow using n8n based on your business needs.</p>
                 </div>
              </div>
              <div className="hidden md:block absolute top-32 right-[25%] w-24 h-12 border-b-2 border-r-2 border-blue-200 rounded-br-full transform -rotate-12"></div>

              <div className="relative z-10">
                 <div className="bg-[#60A5FA] p-6 rounded-2xl text-white shadow-lg">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold mb-4 border border-white/30">3</div>
                    <h3 className="font-bold text-sm mb-2">Build & Implement</h3>
                    <p className="text-blue-50 text-[10px]">Your automation system is installed and tested to ensure smooth operation.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
           <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[10px] font-bold mb-6 uppercase tracking-wider">
              <div className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center text-white text-[8px]">A</div> Automease
           </div>
           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-20">
             <span className="text-[#60A5FA]">Flexible</span> Pricing for Every <br/> Business
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              <div className="bg-[#F8FAFC] h-[300px] rounded-[2rem] w-full"></div>
              <div className="bg-[#4285F4] h-[400px] rounded-[2rem] w-full shadow-2xl"></div>
              <div className="bg-[#F8FAFC] h-[300px] rounded-[2rem] w-full"></div>
           </div>
        </div>
      </section>

      {/* ================= AUTOMEASE IN ACTION ================= */}
      <section className="py-24 bg-white overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[10px] font-bold mb-4 uppercase tracking-wider">
               <div className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center text-white text-[8px]">A</div> Automease
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Automease in <span className="text-[#60A5FA]">Action</span></h2>
         </div>
         <div className="flex gap-6 overflow-x-auto pb-8 px-4 no-scrollbar">
            {[...Array(5)].map((_, i) => (
               <div key={i} className="min-w-[300px] p-6 rounded-2xl border border-gray-100 shadow-sm bg-white flex gap-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-lg flex-shrink-0" />
                  <div>
                     <h4 className="font-bold text-sm">BakeBali.id</h4>
                     <p className="text-gray-500 text-xs mt-1">We cut admin work by 70% through automated order intake!</p>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* ================= MEET THE TEAM ================= */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4">
            <div className="mb-12">
               <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[10px] font-bold mb-4 uppercase tracking-wider">
                  <div className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center text-white text-[8px]">A</div> Automease
               </div>
               <h2 className="text-4xl font-bold text-gray-900 mb-2">Meet the Automease <span className="text-[#60A5FA]">Team</span></h2>
               <p className="text-gray-500 text-sm">We make automation simple, even for non-tech business owners.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {[1, 2, 3].map((i) => (
                  <div key={i} className="rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm group relative">
                     <div className="h-64 bg-gray-200 w-full relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                     </div>
                     <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4 flex justify-between items-center shadow-lg">
                        <div>
                           <h4 className="font-bold text-sm">Sutha Raditya</h4>
                           <p className="text-gray-500 text-[10px]">Head of IT Developer</p>
                        </div>
                        <div className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition cursor-pointer">
                           <Instagram size={14} />
                        </div>
                     </div>
                  </div>
               ))}
               <div className="rounded-[2rem] bg-[#3B82F6] flex flex-col items-center justify-center text-white p-8 cursor-pointer hover:bg-[#2563EB] transition">
                  <div className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center mb-4">
                     <ArrowUpRight size={24} />
                  </div>
                  <h4 className="font-bold text-lg">See More</h4>
                  <p className="text-blue-100 text-xs">Explore all team members</p>
               </div>
            </div>
         </div>
      </section>

      {/* ================= CTA & FOOTER ================= */}
      <section className="bg-[#0F172A] relative overflow-hidden">
         <div className="bg-[#4285F4] pt-24 pb-32 text-center px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative z-10">Ready to save hours every day?</h2>
            <p className="text-blue-100 text-sm mb-8 relative z-10">Let automation handle the repetitive tasks for you.</p>
            <button className="bg-[#111827] text-white px-8 py-3 rounded-full text-sm font-bold hover:scale-105 transition shadow-xl relative z-10 border border-white/10">Get Started</button>
         </div>

         <div className="bg-black text-white pt-16 pb-8 px-4 border-t border-white/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
               <div>
                  <div className="flex items-center gap-2 mb-6">
                     <div className="w-8 h-8 bg-white text-black rounded flex items-center justify-center font-bold">M</div>
                     <span className="font-bold tracking-widest text-sm">MEDIATECH<br/><span className="text-[8px] font-normal tracking-normal">INDONESIA</span></span>
                  </div>
                  <p className="text-gray-400 text-xs max-w-xs leading-relaxed">Jelajahi setiap lini kehidupan penuh warna bersama Mediatech Indonesia</p>
               </div>
               <div>
                  <h4 className="font-bold mb-6 text-sm">Company</h4>
                  <ul className="space-y-3 text-xs text-gray-400"><li>Home</li><li>About Us</li><li>Service</li><li>Choose Us</li></ul>
               </div>
               <div>
                  <h4 className="font-bold mb-6 text-sm">Support</h4>
                  <ul className="space-y-3 text-xs text-gray-400"><li>Contact Us</li><li>Help Us</li><li>Customer Center</li></ul>
               </div>
               <div>
                  <h4 className="font-bold mb-6 text-sm">Contact</h4>
                  <ul className="space-y-3 text-xs text-gray-400"><li>mediatech@company.com</li><li>+62 8123-4567-8900</li></ul>
               </div>
            </div>
         </div>
      </section>

    </main>
  );
}