"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  MousePointer2,
  ArrowUpRight,
  ArrowRight,
  Instagram,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

// Scroll Reveal Text Component
function ScrollRevealText() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const words = [
    { text: "At", bold: false },
    { text: "Automease,", bold: false },
    { text: "we're", bold: false },
    { text: "committed", bold: false },
    { text: "to", bold: false },
    { text: "driving", bold: false },
    { text: "the", bold: false },
    { text: "future", bold: false },
    { text: "of", bold: false },
    { text: "business", bold: true },
    { text: "efficiency", bold: true },
    { text: "through", bold: false },
    { text: "cutting-edge", bold: true },
    { text: "automation", bold: true },
    { text: "solutions.", bold: true },
    { text: "With", bold: false },
    { text: "a", bold: false },
    { text: "team", bold: false },
    { text: "of", bold: false },
    { text: "industry-certified", bold: true },
    { text: "experts", bold: false },
    { text: "and", bold: false },
    { text: "a", bold: false },
    { text: "passion", bold: false },
    { text: "for", bold: false },
    { text: "innovation,", bold: false },
    { text: "we", bold: false },
    { text: "design,", bold: false },
    { text: "install,", bold: false },
    { text: "and", bold: false },
    { text: "maintain", bold: false },
    { text: "automation", bold: false },
    { text: "systems", bold: false },
    { text: "that", bold: false },
    { text: "help", bold: false },
    { text: "businesses.", bold: false },
  ];

  return (
    <p
      ref={ref}
      className="text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] font-medium leading-[1.5] md:leading-[1.4] tracking-tight"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ color: "#D1D5DB" }}
          animate={isInView ? { color: word.bold ? "#111827" : "#6B7280" } : {}}
          transition={{ duration: 0.4, delay: i * 0.03 }}
          className={word.bold ? "font-semibold" : ""}
        >
          {word.text}{" "}
        </motion.span>
      ))}
    </p>
  );
}

const team = [
  {
    image: "/profile/sutha.jpg",
    name: "Sutha Raditya",
    role: "Head of IT Developer",
    instagram: "",
    objectPosition: "object-top",
  },
  {
    image: "/profile/tristan.jpg",
    name: "Tristan Putra",
    role: "CTO, Lead Engineer",
    instagram: "",
    objectPosition: "object-center",
  },
  {
    image: "/profile/daliant.jpg",
    name: "Made Daliant",
    role: "Customer Success , QA",
    instagram: "https://instagram.com/xxx",
    objectPosition: "object-top",
  },
  {
    image: "/profile/alek.jpg",
    name: "Chistian Redita",
    role: "UI/UX Designer",
    instagram: "https://instagram.com/xxx",
    objectPosition: "object-bottom scale-125 origin-bottom",
  },
  {
    image: "/profile/diwa.jpg",
    name: "Wayan Diwangga",
    role: "Full-Stack Developer",
    instagram: "https://instagram.com/xxx",
    objectPosition: "object-top",
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      {/* White background wrapper with padding for rounded corners effect */}
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
          <div className="relative z-20 w-full max-w-[1000px] px-4 flex items-end justify-center gap-0 pb-0">
            {/* 1. LEFT WING (Solid Light Gray) */}
            <div className="hidden md:block w-[180px] h-[180px] bg-[#D1D5DB] rounded-tl-[1.5rem] shadow-xl transform translate-x-3 z-10 flex-shrink-0"></div>

            {/* 2. MAIN CARD (White Solid) - partially visible, cuts off at bottom */}
            <div className="relative w-full md:w-[550px] h-[260px] md:h-[300px] bg-white rounded-t-[2rem] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center z-30 overflow-hidden flex-shrink-0">
              {/* Content IMG */}
              <span className="text-gray-300 font-bold text-4xl tracking-widest uppercase select-none">
                IMG
              </span>
            </div>

            {/* 3. RIGHT WING (Solid Light Gray) */}
            <div className="hidden md:block w-[180px] h-[180px] bg-[#D1D5DB] rounded-tr-[1.5rem] shadow-xl transform -translate-x-3 z-10 flex-shrink-0"></div>
          </div>
        </section>
      </div>

      {/* ================= SOCIAL PROOF ================= */}
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
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white border border-gray-100 shadow-[0_2px_15px_-4px_rgba(0,0,0,0.05)] px-8 py-4 rounded-2xl min-w-max hover:border-[#2563EB]/20 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-lg text-[10px] font-bold group-hover:bg-[#2563EB] transition-colors">
                  N
                </div>
                <span className="font-bold text-gray-700 text-xl group-hover:text-gray-900">
                  Notion
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SCROLL REVEAL TEXT ================= */}
      <section className="bg-white py-20 md:py-28 relative z-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="relative">
            {/* Small Label - Floated left */}
            <div className="md:float-left md:mr-8 md:mb-2 mb-6 md:w-[160px]">
              <p className="text-gray-400 text-xs leading-relaxed">
                Leading the Way in
                <br />
                Business Automation That
                <br />
                Power Your Growth
              </p>
            </div>

            {/* Main Text with Framer Motion scroll reveal */}
            <ScrollRevealText />

            {/* Clear float */}
            <div className="clear-both"></div>

            {/* CTA Button */}
            <div className="mt-10">
              <button className="inline-flex items-center gap-3 bg-[#DBEAFE] hover:bg-[#BFDBFE] text-gray-800 pl-5 pr-3 py-2.5 rounded-full text-sm font-medium transition-all group">
                <span>Learn More About Us</span>
                <span className="w-8 h-8 bg-[#2563EB] text-white rounded-full flex items-center justify-center group-hover:bg-[#1D4ED8] transition-colors">
                  <ArrowRight size={16} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CHALLENGES ================= */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-20 gap-6 md:gap-8">
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2563EB] px-3 py-1.5 rounded-full text-[10px] font-bold mb-4 uppercase tracking-wider">
                <Image
                  src="/logo.png"
                  alt="Automease"
                  width={16}
                  height={16}
                  className="object-contain"
                />{" "}
                Automease
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1]">
                <span className="text-[#2563EB]">Challenges</span> Faced by
                <br className="hidden sm:block" />{" "}
                <span className="sm:hidden"> </span>Small Businesses
              </h2>
              <MousePointer2 className="hidden md:block absolute -right-12 top-1/2 w-12 h-12 text-black fill-white drop-shadow-xl transform -translate-y-1/2 rotate-[-15deg]" />
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed text-left lg:text-right">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white p-4 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-full aspect-[4/3] bg-[#F1F5F9] rounded-[1rem] sm:rounded-[1.25rem] md:rounded-[1.5rem] mb-4 sm:mb-6 md:mb-8 border border-gray-100 flex items-center justify-center">
                  <span className="text-gray-300 font-bold text-2xl sm:text-3xl">
                    IMG
                  </span>
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">
                  Problem {item}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SMART AUTOMATION (BENTO GRID) ================= */}
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
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="bg-[#F8FAFC] rounded-[2rem] p-6 md:p-8 pb-0 overflow-hidden"
                >
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    Order Automation
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Pesanan dari form otomatis masuk ke Google Sheet, admin
                    dapat notifikasi WA, dan invoice terkirim otomatis
                  </p>
                  <div className="flex justify-center">
                    <div className="w-[200px] md:w-[280px] h-[120px] md:h-[140px] bg-[#D1D5DB] rounded-t-2xl flex items-center justify-center translate-y-8">
                      <span className="text-gray-500 font-bold text-2xl">
                        IMG
                      </span>
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
                    {[...Array(16)].map((_, i) => (
                      <div
                        key={i}
                        className="w-[380px] h-[240px] bg-[#DBEAFE] rounded-xl flex items-center justify-center flex-shrink-0"
                      >
                        <span className="text-gray-400 font-bold text-xl">
                          IMG
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Row 2 - Slider Right to Left */}
                <div className="relative overflow-hidden rounded-xl">
                  <div className="flex animate-marquee-reverse gap-4 hover:[animation-play-state:paused] h-full items-stretch">
                    {[...Array(16)].map((_, i) => (
                      <div
                        key={i}
                        className="w-[380px] h-[240px] bg-white rounded-xl flex items-center justify-center flex-shrink-0"
                      >
                        <span className="text-gray-300 font-bold text-xl">
                          IMG
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12 md:mb-16">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              How It <span className="text-[#60A5FA]">Works</span>
            </h2>
            <p className="text-gray-500 text-sm mt-4 max-w-md">
              We make automation simple, even for non-tech business owners.
            </p>
          </div>

          {/* Mobile Layout */}
          <div className="flex flex-col gap-8 md:hidden">
            {/* Step 1 */}
            <div className="relative">
              <div className="w-10 h-10 rounded-full border-2 border-[#2563EB] text-[#2563EB] flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h3 className="font-bold text-lg mb-2">
                Understand Your Workflow
              </h3>
              <p className="text-gray-500 text-sm">
                We learn how your business operates and identify repetitive
                tasks
              </p>
            </div>

            {/* Arrow Down */}
            <div className="flex justify-center">
              <svg
                width="40"
                height="50"
                viewBox="0 0 40 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 0 L20 35 M10 25 L20 40 L30 25"
                  stroke="#60A5FA"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Step 2 */}
            <div className="bg-[#F8FAFC] p-5 rounded-xl border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-full border-2 border-[#93C5FD] bg-[#EFF6FF] text-[#60A5FA] flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h3 className="font-bold text-base mb-2">
                Design Custom Automation
              </h3>
              <p className="text-gray-500 text-sm">
                We create a tailored workflow using n8n based on your business
                needs
              </p>
            </div>

            {/* Arrow Down */}
            <div className="flex justify-center">
              <svg
                width="40"
                height="50"
                viewBox="0 0 40 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 0 L20 35 M10 25 L20 40 L30 25"
                  stroke="#60A5FA"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Step 3 */}
            <div className="bg-[#60A5FA] p-6 rounded-2xl text-white shadow-lg">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold mb-4 border border-white/30">
                3
              </div>
              <h3 className="font-bold text-base mb-2">
                Build &amp; Implement
              </h3>
              <p className="text-blue-50 text-sm">
                Your automation system is installed and tested to ensure smooth
                operation
              </p>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block">
            {/* Row 1: Step 1, Arrow 1, Empty, Step 3 */}
            <div className="grid grid-cols-12 gap-4 items-start">
              {/* Step 1 - spans 4 columns */}
              <div className="col-span-4 relative z-10">
                <div className="w-10 h-10 rounded-full border-2 border-[#2563EB] text-[#2563EB] flex items-center justify-center font-bold mb-6">
                  1
                </div>
                <h3 className="font-bold text-lg mb-2">
                  Understand Your Workflow
                </h3>
                <p className="text-gray-500 text-sm">
                  We learn how your business operates and identify repetitive
                  tasks
                </p>
              </div>

              {/* Empty spacer */}
              <div className="col-span-4"></div>

              {/* Step 3 - spans 4 columns */}
              <div className="col-span-4 relative z-10">
                <div className="bg-[#60A5FA] p-6 rounded-2xl text-white shadow-lg">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold mb-4 border border-white/30">
                    3
                  </div>
                  <h3 className="font-bold text-base mb-2">
                    Build &amp; Implement
                  </h3>
                  <p className="text-blue-50 text-sm">
                    Your automation system is installed and tested to ensure
                    smooth operation
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2: Arrow 1 (down-right), Step 2, Arrow 2 (up-right) */}
            <div className="grid grid-cols-12 gap-4 items-center mt-4">
              {/* Arrow from Step 1 to Step 2 */}
              <div className="col-span-4 flex justify-end pr-4">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform translate-x-4"
                >
                  <path
                    d="M40 0 C 40 40, 40 60, 75 60"
                    stroke="#60A5FA"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M65 50 L 78 60 L 65 70"
                    stroke="#60A5FA"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Step 2 - Center */}
              <div className="col-span-4 relative z-10">
                <div className="bg-[#F8FAFC] p-6 rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-full border-2 border-[#93C5FD] bg-[#EFF6FF] text-[#60A5FA] flex items-center justify-center font-bold mb-4">
                    2
                  </div>
                  <h3 className="font-bold text-base mb-2">
                    Design Custom Automation
                  </h3>
                  <p className="text-gray-500 text-sm">
                    We create a tailored workflow using n8n based on your
                    business needs
                  </p>
                </div>
              </div>

              {/* Arrow from Step 2 to Step 3 */}
              <div className="col-span-4 flex justify-start pl-4">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform -translate-x-4"
                >
                  <path
                    d="M0 60 C 40 60, 60 40, 60 10"
                    stroke="#60A5FA"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M50 20 L 60 0 L 70 20"
                    stroke="#60A5FA"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[10px] font-bold mb-6 uppercase tracking-wider">
            <div className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center text-white text-[8px]">
              A
            </div>{" "}
            Automease
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-20">
            <span className="text-[#60A5FA]">Flexible</span> Pricing for Every{" "}
            <br /> Business
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
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="min-w-[380px] p-6 rounded-2xl border border-gray-100 shadow-sm bg-white flex gap-4 flex-shrink-0"
                >
                  <div className="w-12 h-12 bg-gray-200 rounded-xl flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-bold text-base mb-1">BakeBali.id</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      We cut admin work by 70% through automated order intake by
                      Automease! 🤩
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Slide Right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee-reverse gap-4 hover:[animation-play-state:paused]">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="min-w-[380px] p-6 rounded-2xl border border-gray-100 shadow-sm bg-white flex gap-4 flex-shrink-0"
                >
                  <div className="w-12 h-12 bg-gray-200 rounded-xl flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-bold text-base mb-1">BakeBali.id</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      We cut admin work by 70% through automated order intake by
                      Automease! 🤩
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= MEET THE TEAM ================= */}
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
                    className={`absolute inset-0 w-full h-full object-cover ${
                      person.objectPosition || "object-top"
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

      {/* ================= CTA & FOOTER ================= */}
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
    </main>
  );
}
