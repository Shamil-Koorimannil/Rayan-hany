import React from "react";
import { FiArrowUpRight, FiServer, FiGrid, FiSliders } from "react-icons/fi";
import { venturesData } from "../data/ventures";
import fluxiflowLogo from "../assets/ventures/Fluxiflow logo white.png";

export default function FluxiflowSection() {
  const data = venturesData.fluxiflow;
  return (
    <section
      id="fluxiflow-section"
      className="relative w-full bg-[#F4F3EF] py-24 px-6 md:px-16 select-none overflow-hidden"
    >
      {/* Deco: grid modules circle top-right */}
      <div className="absolute top-10 right-[3%] z-20 rotate-[10deg] hidden lg:flex w-14 h-14 bg-[#DE4A82] border-[3px] border-[#222222] rounded-xl shadow-[5px_5px_0px_0px_#222222] items-center justify-center hover:scale-110 transition-transform duration-150">
        <span className="text-white text-lg font-black">⊞</span>
      </div>
      {/* Deco: "SaaS" pill bottom-left */}
      <div className="absolute bottom-10 left-[2%] z-20 rotate-[-10deg] hidden lg:flex items-center px-3 py-2 bg-[#8FA4D8] border-[3px] border-[#222222] rounded-full shadow-[4px_4px_0px_0px_#222222] hover:scale-110 transition-transform duration-150">
        <span className="text-[10px] font-black uppercase tracking-widest text-[#222222]">SAAS ⚙</span>
      </div>
      {/* Deco: automation arrow top-left */}
      <div className="absolute top-8 left-[2%] z-20 rotate-[-14deg] hidden lg:flex w-12 h-12 bg-[#FFD45C] border-[3px] border-[#222222] rounded-full shadow-[4px_4px_0px_0px_#222222] items-center justify-center hover:scale-110 transition-transform duration-150">
        <span className="text-[#222222] text-lg font-black">→</span>
      </div>
      <div className="max-w-6xl w-full flex flex-col gap-16 relative z-10 mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <div className="inline-block self-start px-4 py-1.5 bg-[#DE4A82] text-white text-xs font-black uppercase tracking-wider rounded-xl border-[3px] border-[#222222] shadow-[3.5px_3.5px_0px_0px_#222222] rotate-[1.5deg]">
            08 — VENTURE 03
          </div>

          {/* Logo + name row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="shrink-0 w-20 h-20 rounded-[16px] border-[3px] border-[#222222] shadow-[4px_4px_0px_0px_#222222] overflow-hidden bg-white flex items-center justify-center p-3">
              <img
                src={fluxiflowLogo}
                alt="Fluxiflow logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="font-heading font-black text-6xl md:text-8xl text-[#222222] uppercase tracking-tighter">
              {data.name}
            </h2>
          </div>

          <p className="font-heading font-black text-2xl md:text-3.5xl text-[#222222] leading-tight max-w-3xl border-l-[6px] border-[#DE4A82] pl-6 text-left">
            {data.tagline}
          </p>
        </div>

        {/* Info Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: SaaS Philosophy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <p className="font-sans font-medium text-lg md:text-xl text-[#555555] leading-relaxed text-left">
              {data.positioning}
            </p>
            <p className="font-sans text-base md:text-lg text-[#555555] leading-relaxed text-left">
              {data.philosophy}
            </p>

            <div className="self-start mt-4">
              <a
                href={data.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 py-4 px-8 text-md font-black bg-[#FFD45C] text-[#222222] border-[3px] border-[#222222] rounded-xl shadow-[4px_4px_0px_0px_#222222] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#222222] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150 ease-out cursor-pointer interactive-hover"
              >
                <span>{data.ctaText}</span>
                <FiArrowUpRight className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Right Block: Software Structure (5 cols) */}
          <div className="lg:col-span-5 bg-white p-8 md:p-10 rounded-[24px] border-[3px] border-[#222222] shadow-[6px_6px_0px_0px_#222222] relative overflow-hidden flex flex-col gap-6 text-left">
            <div className="flex items-center gap-4 border-b border-[#222222]/10 pb-4">
              <FiServer className="text-[#319C97] text-2xl" />
              <h3 className="font-heading font-black text-lg text-[#222222] uppercase tracking-wider">
                Software Architecture
              </h3>
            </div>
            
            <div className="flex flex-col gap-4 text-sm font-medium text-[#222222]">
              <div className="flex gap-4 items-center">
                <FiGrid className="text-[#319C97] text-lg shrink-0" />
                <span>Shared Unified Databases</span>
              </div>
              <div className="flex gap-4 items-center">
                <FiSliders className="text-[#8FA4D8] text-lg shrink-0" />
                <span>Cross-Product Automated Workflows</span>
              </div>
            </div>

            <div className="mt-4 bg-[#F4F3EF] p-4 rounded-xl border-2 border-[#222222] flex flex-col gap-2">
              <span className="text-[10px] uppercase font-black tracking-widest text-[#8A63D2]">SaaS Framework Status</span>
              <span className="text-sm font-sans font-black uppercase text-[#222222]">Under Active Development</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
