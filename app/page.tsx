import React from 'react';
import { CheckCircle2, MousePointer2, Star, Menu, ArrowUpRight } from 'lucide-react';

export default function LandingPage() {
  return (
    // Base Background: Menggunakan Hex #FDFDFF (Putih Kebiruan)
    <main className="min-h-screen bg-[#FDFDFF] text-gray-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      {/* Tambahkan 'overflow-visible' agar kartu bisa menonjol keluar ke section bawah */}
      <section className="relative bg-[#2563EB] pt-6 pb-20 px-4 sm:px-6 overflow-visible flex flex-col items-center z-10">
        
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        
        {/* Glow Effect di tengah */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-white/20 blur-[100px] rounded-full pointer-events-none opacity-50 mix-blend-overlay" />

        {/* Navbar */}
        <nav className="relative z-20 flex justify-between items-center max-w-7xl mx-auto w-full mb-16 sm:mb-20 px-4">
          {/* Logo Pill */}
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 pl-1.5 pr-4 py-1.5 rounded-full text-white font-bold text-sm shadow-sm transition hover:bg-white/20 cursor-pointer">
             <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-inner">
                <span className="text-[#2563EB] text-xs font-black">A</span>
             </div>
             <span className="tracking-wide text-xs">Automease</span>
          </div>
          {/* Menu Button */}
          <button className="flex items-center gap-2 bg-[#0F172A] hover:bg-black text-white pl-4 pr-5 py-2.5 rounded-full text-xs font-bold transition-transform hover:scale-105 shadow-lg border border-white/5">
            <Menu size={14} strokeWidth={3} />
            <span>Menu</span>
          </button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center justify-start pb-24 md:pb-32">
          
          {/* Badge 'Automate v1.0' */}
          <div className="mb-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-widest shadow-sm">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]" />
            Automate v1.0
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] drop-shadow-sm mb-10">
            Automate Your Business, <br />
            <span className="text-blue-100 opacity-90">Elevate Your Growth.</span>
          </h1>

          {/* Input & CTA Pill */}
          <div className="w-full max-w-[480px] mx-auto relative group">
            {/* Outer Glow */}
            <div className="absolute -inset-0.5 bg-white/20 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-500" />
            
            {/* Input Container */}
            <div className="relative flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-1.5 pl-6 shadow-xl transition-all hover:bg-white/15 hover:border-white/30">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-transparent text-white placeholder-blue-200/60 focus:outline-none text-sm font-medium"
              />
              <button className="bg-[#0F172A] hover:bg-black text-white px-6 py-3 rounded-full text-xs font-bold transition-transform hover:scale-105 shadow-lg whitespace-nowrap">
                Get Started
              </button>
            </div>
          </div>

        </div>

        {/* HERO CARD - OVERLAPPING EFFECT */}
        {/* Absolute positioning untuk menaruh kartu di perbatasan biru dan putih */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[45%] w-full max-w-[1000px] px-4 z-20">
            <div className="relative w-full aspect-[16/10] bg-white rounded-t-[2rem] md:rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center border-[6px] border-white/40 overflow-hidden">
                {/* Bagian atas kartu (seolah-olah UI window) */}
                <div className="absolute top-0 w-full h-full bg-[#F9FAFB]">
                    {/* Placeholder Content */}
                     <div className="absolute inset-x-8 top-8 bottom-0 bg-white rounded-t-2xl shadow-sm border border-gray-100 flex items-center justify-center">
                        <span className="text-gray-300 font-bold text-3xl tracking-widest uppercase">IMG</span>
                     </div>
                </div>
            </div>
            
            {/* Side Blurs (Dekorasi kiri kanan seperti di Figma) */}
            <div className="absolute top-1/2 -left-12 w-48 h-64 bg-white/10 backdrop-blur-xl rounded-[2rem] -rotate-6 hidden lg:block border border-white/10 pointer-events-none" />
            <div className="absolute top-1/2 -right-12 w-48 h-64 bg-white/10 backdrop-blur-xl rounded-[2rem] rotate-6 hidden lg:block border border-white/10 pointer-events-none" />
        </div>

      </section>

      {/* ================= SOCIAL PROOF ================= */}
      {/* Tambahkan padding-top besar (pt-48 atau pt-64) untuk kompensasi kartu Hero yang menumpuk */}
      <section className="bg-[#FDFDFF] pt-48 pb-16 border-b border-gray-100 overflow-hidden relative z-0">
        <div className="max-w-6xl mx-auto px-4 text-center mb-12">
          <p className="text-gray-900 font-bold text-lg md:text-xl">
            Trusted By More Than <span className="text-[#0351D5]">+10,000</span> Users
          </p>
        </div>

        {/* Marquee */}
        <div className="relative flex w-full overflow-hidden py-2">
          <div className="absolute left-0 top-0 z-10 h-full w-20 md:w-40 bg-gradient-to-r from-[#FDFDFF] to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-20 md:w-40 bg-gradient-to-l from-[#FDFDFF] to-transparent" />

          <div className="flex animate-marquee gap-6 pr-6">
            {/* Loop 1 */}
            {[...Array(8)].map((_, i) => (
              <div key={`l1-${i}`} className="group flex items-center gap-3 bg-white border border-gray-100 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] px-6 py-3.5 rounded-2xl min-w-max hover:shadow-md transition-shadow cursor-default">
                <div className="w-6 h-6 bg-gray-900 text-white flex items-center justify-center rounded-[6px] text-[10px] font-bold group-hover:bg-[#0351D5] transition-colors">N</div>
                <span className="font-bold text-gray-700 text-sm group-hover:text-gray-900">Notion</span>
              </div>
            ))}
            {/* Loop 2 */}
            {[...Array(8)].map((_, i) => (
              <div key={`l2-${i}`} className="group flex items-center gap-3 bg-white border border-gray-100 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] px-6 py-3.5 rounded-2xl min-w-max hover:shadow-md transition-shadow cursor-default">
                <div className="w-6 h-6 bg-gray-900 text-white flex items-center justify-center rounded-[6px] text-[10px] font-bold group-hover:bg-[#0351D5] transition-colors">N</div>
                <span className="font-bold text-gray-700 text-sm group-hover:text-gray-900">Notion</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CHALLENGES SECTION ================= */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.2]">
                <span className="text-[#0351D5]">Challenges</span> Faced by <br/>
                Small Businesses
              </h2>
              <MousePointer2 className="absolute -right-10 top-1/2 w-10 h-10 text-black fill-white drop-shadow-xl transform -translate-y-1/2 rotate-[-15deg] animate-bounce" style={{ animationDuration: '3s' }} />
            </div>
            <p className="text-gray-500 text-base max-w-sm leading-relaxed text-left">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300">
                <div className="w-full aspect-[4/3] bg-gray-50 rounded-2xl mb-8 border border-gray-100 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 via-white to-transparent opacity-50" />
                  <span className="text-gray-300 font-medium z-10">Image Placeholder {item}</span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Problem Statement {item}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Lorem ipsum is simply dummy text of the printing and typesetting industry. Standard dummy text ever since the 1500s.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SMART AUTOMATION (BENTO) ================= */}
      <section className="py-24 bg-[#FDFDFF]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0351D5] px-4 py-1.5 rounded-full text-xs font-bold mb-6 uppercase tracking-wider">
              <Star size={12} fill="currentColor" /> Automation
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Smart Automation for Real <br /> Business <span className="text-[#0351D5]">Needs</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[650px]">
            {/* Left Column */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="flex-1 bg-white rounded-[2rem] p-8 border border-gray-100 relative overflow-hidden group shadow-sm hover:shadow-md transition">
                <h3 className="font-bold text-xl mb-2 relative z-10">Order Automation</h3>
                <p className="text-gray-500 text-sm mb-4 relative z-10">Sync forms to Sheets instantly.</p>
                <div className="w-4/5 h-40 bg-[#F1F5F9] rounded-tl-2xl absolute bottom-0 right-0 border-t border-l border-gray-200 group-hover:scale-105 transition-transform origin-bottom-right shadow-inner" />
              </div>
              <div className="flex-1 bg-white rounded-[2rem] p-8 border border-gray-100 relative overflow-hidden group shadow-sm hover:shadow-md transition">
                <h3 className="font-bold text-xl mb-2 relative z-10">Invoice Sync</h3>
                <p className="text-gray-500 text-sm mb-4 relative z-10">Auto-generate invoices.</p>
                <div className="w-4/5 h-40 bg-[#F1F5F9] rounded-tl-2xl absolute bottom-0 right-0 border-t border-l border-gray-200 group-hover:scale-105 transition-transform origin-bottom-right shadow-inner" />
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-8 grid grid-rows-2 gap-6">
              {/* Highlight Card */}
              <div className="bg-[#0351D5] rounded-[2rem] p-10 text-white flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-xl group">
                <div className="relative z-10 max-w-sm">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                    <CheckCircle2 className="text-white" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3">Full Control Automation</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Pasacon does form automatic masuk ke Google Sheet, admin dapat notifikasi WA. Control everything from one dashboard.
                  </p>
                </div>
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-3xl opacity-50 absolute -right-20 -bottom-20 group-hover:scale-125 transition-transform duration-700" />
              </div>

              {/* Bottom Split */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div className="bg-white border border-gray-100 rounded-[2rem] p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition group cursor-default">
                    <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-[#0351D5] mb-4 group-hover:scale-110 transition-transform">
                      <Star size={24} fill="currentColor" />
                    </div>
                    <span className="font-bold text-gray-900">Top Rated</span>
                 </div>
                 <div className="md:col-span-2 bg-[#EFF6FF] rounded-[2rem] p-8 flex flex-col justify-center border border-blue-100 relative overflow-hidden group">
                    <div className="relative z-10">
                      <h4 className="font-bold text-xl text-gray-900 mb-2">Seamless Integration</h4>
                      <p className="text-gray-500 text-sm">Connect with your favorite tools effortlessly without code.</p>
                      <button className="mt-4 flex items-center text-[#0351D5] text-sm font-bold gap-1 group-hover:gap-2 transition-all">
                        Learn more <ArrowUpRight size={16} />
                      </button>
                    </div>
                    <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-white/60 to-transparent transform group-hover:translate-x-2 transition-transform" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRICING SECTION ================= */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4">
           <div className="text-center mb-16">
             <div className="inline-block bg-gray-200 text-gray-600 px-4 py-1.5 rounded-full text-xs font-bold mb-6 uppercase tracking-wider">
               Pricing Plans
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
               <span className="text-[#0351D5]">Flexible</span> Pricing for Every <br/> Business
             </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
             <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                <h3 className="font-bold text-xl mb-4 text-gray-900">Starter</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-gray-900">$19</span>
                  <span className="text-gray-400 font-medium">/mo</span>
                </div>
                <ul className="space-y-4 mb-8 text-sm text-gray-500 font-medium">
                  <li className="flex gap-3 items-center"><CheckCircle2 size={18} className="text-[#0351D5] flex-shrink-0"/> 5 Active Projects</li>
                  <li className="flex gap-3 items-center"><CheckCircle2 size={18} className="text-[#0351D5] flex-shrink-0"/> Basic Analytics</li>
                  <li className="flex gap-3 items-center"><CheckCircle2 size={18} className="text-[#0351D5] flex-shrink-0"/> 24/7 Email Support</li>
                </ul>
                <button className="w-full py-3.5 rounded-xl border-2 border-gray-100 font-bold text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-all">Choose Plan</button>
             </div>

             <div className="bg-[#0351D5] p-10 rounded-[2rem] shadow-2xl shadow-blue-900/20 transform md:scale-105 relative z-10 text-white border-4 border-blue-400/20">
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md text-xs px-3 py-1 rounded-full font-bold border border-white/20 shadow-sm">POPULAR</div>
                <h3 className="font-bold text-2xl mb-4">Professional</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-6xl font-bold text-white">$49</span>
                  <span className="text-blue-200 font-medium text-lg">/mo</span>
                </div>
                <ul className="space-y-4 mb-10 text-sm text-blue-50 font-medium">
                  <li className="flex gap-3 items-center"><CheckCircle2 size={20} className="text-white flex-shrink-0"/> Unlimited Projects</li>
                  <li className="flex gap-3 items-center"><CheckCircle2 size={20} className="text-white flex-shrink-0"/> Advanced Analytics</li>
                  <li className="flex gap-3 items-center"><CheckCircle2 size={20} className="text-white flex-shrink-0"/> Priority Support</li>
                  <li className="flex gap-3 items-center"><CheckCircle2 size={20} className="text-white flex-shrink-0"/> Custom Domain</li>
                </ul>
                <button className="w-full py-4 rounded-xl bg-white text-[#0351D5] font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">Get Started</button>
             </div>

             <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                <h3 className="font-bold text-xl mb-4 text-gray-900">Enterprise</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-gray-900">$99</span>
                  <span className="text-gray-400 font-medium">/mo</span>
                </div>
                <ul className="space-y-4 mb-8 text-sm text-gray-500 font-medium">
                  <li className="flex gap-3 items-center"><CheckCircle2 size={18} className="text-[#0351D5] flex-shrink-0"/> Everything in Pro</li>
                  <li className="flex gap-3 items-center"><CheckCircle2 size={18} className="text-[#0351D5] flex-shrink-0"/> Dedicated Agent</li>
                  <li className="flex gap-3 items-center"><CheckCircle2 size={18} className="text-[#0351D5] flex-shrink-0"/> SLA Agreement</li>
                </ul>
                <button className="w-full py-3.5 rounded-xl border-2 border-gray-100 font-bold text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-all">Contact Us</button>
             </div>
           </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
           <div className="col-span-1 md:col-span-1">
             <div className="w-10 h-10 bg-[#0351D5] rounded-xl flex items-center justify-center text-white font-bold text-lg mb-6 shadow-md">A</div>
             <p className="text-gray-400 text-sm leading-relaxed">Making automation accessible for everyone, everywhere.</p>
           </div>
           <div>
             <h4 className="font-bold text-gray-900 mb-6">Company</h4>
             <ul className="space-y-4 text-sm text-gray-500">
               <li className="hover:text-[#0351D5] cursor-pointer transition">About Us</li>
               <li className="hover:text-[#0351D5] cursor-pointer transition">Careers</li>
               <li className="hover:text-[#0351D5] cursor-pointer transition">Blog</li>
             </ul>
           </div>
           <div>
             <h4 className="font-bold text-gray-900 mb-6">Resources</h4>
             <ul className="space-y-4 text-sm text-gray-500">
               <li className="hover:text-[#0351D5] cursor-pointer transition">Documentation</li>
               <li className="hover:text-[#0351D5] cursor-pointer transition">Help Center</li>
               <li className="hover:text-[#0351D5] cursor-pointer transition">Community</li>
             </ul>
           </div>
           <div>
             <h4 className="font-bold text-gray-900 mb-6">Legal</h4>
             <ul className="space-y-4 text-sm text-gray-500">
               <li className="hover:text-[#0351D5] cursor-pointer transition">Privacy Policy</li>
               <li className="hover:text-[#0351D5] cursor-pointer transition">Terms of Service</li>
             </ul>
           </div>
        </div>
        <div className="text-center text-gray-400 text-sm border-t border-gray-100 pt-8">
          <p>&copy; 2024 Automate Inc. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}