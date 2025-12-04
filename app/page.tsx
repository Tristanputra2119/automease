import React from 'react';
import { ArrowRight, CheckCircle2, MousePointer2, Play, Star } from 'lucide-react';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-b from-blue-300 via-blue-500 to-blue-600 pt-24 pb-48 px-4 sm:px-6 overflow-hidden">
        {/* Background decorative blurry blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white opacity-20 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          {/* Logo/Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-white text-sm font-medium border border-white/20">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Automate v1.0
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Automate Your Business, <br />
            <span className="text-blue-100">Elevate Your Growth.</span>
          </h1>

          {/* Input & CTA */}
          <div className="max-w-md mx-auto relative group">
            <div className="absolute -inset-1 bg-white/30 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
            <div className="relative flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-2 pl-6">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-transparent text-white placeholder-blue-100 focus:outline-none text-sm"
              />
              <button className="bg-gray-900 hover:bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Mockup Cards Rising from Bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-20 flex gap-4 items-end opacity-90">
           {/* Card Left */}
           <div className="w-32 h-32 bg-gray-200 rounded-t-2xl opacity-50 hidden md:block" />
           {/* Card Center (Main) */}
           <div className="w-[300px] md:w-[500px] h-[200px] bg-white rounded-t-3xl shadow-2xl p-6 relative">
              <div className="w-full h-4 bg-gray-100 rounded mb-2" />
              <div className="w-3/4 h-4 bg-gray-100 rounded" />
              {/* Fake UI Elements */}
              <div className="mt-8 flex gap-4">
                 <div className="w-1/3 h-20 bg-blue-50 rounded-lg" />
                 <div className="w-1/3 h-20 bg-blue-50 rounded-lg" />
                 <div className="w-1/3 h-20 bg-blue-50 rounded-lg" />
              </div>
           </div>
           {/* Card Right */}
           <div className="w-32 h-32 bg-gray-200 rounded-t-2xl opacity-50 hidden md:block" />
        </div>
      </section>
{/* ================= SOCIAL PROOF (UPDATED) ================= */}
      <section className="py-12 bg-white border-b border-gray-100 overflow-hidden"> 
        {/* ^ Tambahkan overflow-hidden di sini supaya logo yang lewat layar tidak bikin scrollbar samping */}
        
        <div className="max-w-6xl mx-auto px-4 text-center mb-8">
          <p className="text-gray-500 font-medium">
            Trusted By More Than <span className="text-blue-600 font-bold">+10,000</span> Users
          </p>
        </div>

        {/* Container Marquee */}
        <div className="relative flex w-full overflow-hidden mask-gradient">
          
          {/* Efek pudar di kiri kanan (Opsional, biar makin estetik) */}
          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        {/* Wrapper Animasi */}
          <div className="flex animate-marquee gap-8 pr-8">
            {/* SET 1: Logo Asli */}
            {[...Array(8)].map((_, i) => (
              <div 
                key={`logo-1-${i}`} 
                className="flex items-center gap-3 bg-white border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] px-6 py-3 rounded-2xl min-w-max hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                {/* Icon Kotak Hitam */}
                <div className="w-6 h-6 bg-black text-white flex items-center justify-center rounded-[4px] text-[10px] font-bold">
                  N
                </div>
                {/* Teks Notion */}
                <span className="font-bold text-gray-600 text-lg">Notion</span>
              </div>
            ))}

            {/* SET 2: Duplikat (Untuk Looping) */}
            {[...Array(8)].map((_, i) => (
              <div 
                key={`logo-2-${i}`} 
                className="flex items-center gap-3 bg-white border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] px-6 py-3 rounded-2xl min-w-max hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="w-6 h-6 bg-black text-white flex items-center justify-center rounded-[4px] text-[10px] font-bold">
                  N
                </div>
                <span className="font-bold text-gray-600 text-lg">Notion</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CHALLENGES SECTION ================= */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-md">
              <span className="text-blue-600">Challenges</span> Faced by Small Businesses
            </h2>
            <div className="flex items-center gap-2 text-gray-500 text-sm max-w-xs">
              <MousePointer2 className="w-4 h-4" />
              <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-full h-32 bg-gray-100 rounded-xl mb-6 flex items-center justify-center text-gray-300">
                  Image Placeholder
                </div>
                <h3 className="font-bold text-lg mb-2">Problem {item}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Lorem ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BENTO GRID / FEATURES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold mb-4">
              AUTOMATION
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Smart Automation for Real <br /> Business <span className="text-blue-500">Needs</span>
            </h2>
          </div>

          {/* Complex Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">
            
            {/* Left Column (Vertical Stack) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Card 1 */}
              <div className="flex-1 bg-gray-50 rounded-3xl p-6 border border-gray-100 relative overflow-hidden group">
                <h3 className="font-bold text-lg mb-2">Order Automation</h3>
                <p className="text-gray-500 text-xs mb-4">Process data forms automatically to Google Sheets.</p>
                <div className="w-3/4 h-32 bg-gray-200 rounded-lg absolute -bottom-4 -right-4 shadow-inner group-hover:scale-105 transition-transform" />
              </div>
              {/* Card 2 */}
              <div className="flex-1 bg-gray-50 rounded-3xl p-6 border border-gray-100 relative overflow-hidden group">
                <h3 className="font-bold text-lg mb-2">Invoice Sync</h3>
                <p className="text-gray-500 text-xs mb-4">Admin can invoice faster with auto-sync.</p>
                <div className="w-3/4 h-32 bg-gray-200 rounded-lg absolute -bottom-4 -right-4 shadow-inner group-hover:scale-105 transition-transform" />
              </div>
            </div>

            {/* Right Column (Mixed Grid) */}
            <div className="lg:col-span-8 grid grid-rows-2 gap-6">
              {/* Top Row: Blue Card (Wide) */}
              <div className="bg-blue-500 rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="font-bold text-xl mb-2">Full Control Automation</h3>
                  <p className="text-blue-100 text-sm max-w-sm">
                    Pasacon does form automatic masuk ke Google Sheet, admin dapat notifikasi WA.
                  </p>
                </div>
                {/* Abstract shapes */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
              </div>

              {/* Bottom Row: Split */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {/* Small Box 1 */}
                 <div className="bg-white border border-gray-200 rounded-3xl p-4 flex items-center justify-center shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      <Star size={20} />
                    </div>
                 </div>
                 {/* Wide Box */}
                 <div className="md:col-span-2 bg-blue-50 rounded-3xl p-6 flex items-center border border-blue-100">
                    <div>
                      <h4 className="font-bold text-gray-900">Seamless Integration</h4>
                      <p className="text-gray-500 text-xs mt-1">Connect with your favorite tools effortlessly.</p>
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PRICING SECTION ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
           <div className="text-center mb-12">
             <div className="inline-block bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase">
               Pricing
             </div>
             <h2 className="text-3xl md:text-4xl font-bold">
               <span className="text-blue-500">Flexible</span> Pricing for Every <br/> Business
             </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
             {/* Basic Plan */}
             <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-xl mb-4">Starter</h3>
                <div className="text-4xl font-bold mb-6">$19<span className="text-base font-normal text-gray-400">/mo</span></div>
                <ul className="space-y-3 mb-8 text-sm text-gray-500">
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-blue-500"/> 5 Projects</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-blue-500"/> Basic Analytics</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-blue-500"/> 24/7 Support</li>
                </ul>
                <button className="w-full py-3 rounded-xl border border-gray-200 font-semibold hover:bg-gray-50 transition">Choose Plan</button>
             </div>

             {/* Pro Plan (Highlighted) */}
             <div className="bg-blue-600 p-8 rounded-3xl shadow-xl transform md:scale-110 relative z-10 text-white">
                <div className="absolute top-4 right-4 bg-blue-400 text-xs px-2 py-1 rounded font-bold">POPULAR</div>
                <h3 className="font-bold text-xl mb-4">Professional</h3>
                <div className="text-4xl font-bold mb-6">$49<span className="text-base font-normal text-blue-200">/mo</span></div>
                <ul className="space-y-3 mb-8 text-sm text-blue-100">
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-white"/> Unlimited Projects</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-white"/> Advanced Analytics</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-white"/> Priority Support</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-white"/> Custom Domain</li>
                </ul>
                <button className="w-full py-3 rounded-xl bg-white text-blue-600 font-bold hover:bg-blue-50 transition">Get Started</button>
             </div>

             {/* Enterprise Plan */}
             <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-xl mb-4">Enterprise</h3>
                <div className="text-4xl font-bold mb-6">$99<span className="text-base font-normal text-gray-400">/mo</span></div>
                <ul className="space-y-3 mb-8 text-sm text-gray-500">
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-blue-500"/> Everything in Pro</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-blue-500"/> Dedicated Agent</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-blue-500"/> SLA Agreement</li>
                </ul>
                <button className="w-full py-3 rounded-xl border border-gray-200 font-semibold hover:bg-gray-50 transition">Contact Us</button>
             </div>
           </div>
        </div>
      </section>

      {/* ================= FOOTER (Simple) ================= */}
      <footer className="bg-white py-12 border-t border-gray-100 text-center text-gray-400 text-sm">
        <p>&copy; 2024 Automate Inc. All rights reserved.</p>
      </footer>

    </main>
  );
}