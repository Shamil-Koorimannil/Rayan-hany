import React from "react";
import { FaExclamationTriangle, FaHome, FaRedo } from "react-icons/fa";
import CustomCursor from "./CustomCursor";

export default function ErrorPage({ 
  error = null, 
  resetErrorBoundary = null, 
  code: initialCode = "404",
  onGoHome = null
}) {
  const activeCode = error ? "500" : initialCode;

  const handleHomeClick = () => {
    if (resetErrorBoundary) {
      resetErrorBoundary();
    }
    if (onGoHome) {
      onGoHome();
    } else {
      window.location.href = "/";
    }
  };

  const handleReload = () => {
    if (resetErrorBoundary) {
      resetErrorBoundary();
    }
    window.location.reload();
  };

  const is500 = activeCode === "500" || !!error;

  const errorMessage = error?.message || (
    is500 
      ? "An unexpected runtime exception was intercepted in the render pipeline."
      : "The page or artboard path you are attempting to visit does not exist or has been relocated."
  );

  return (
    <>
      <CustomCursor />

      {/* Outer wrapper matching portfolio's warm cream background */}
      <div className="min-h-screen w-full bg-[#F3E8D9] py-8 px-4 md:py-16 md:px-12 relative flex justify-center items-center overflow-x-hidden font-sans select-none">

        {/* Neo-Brutalist Floating Decorative Stickers */}
        {/* Error Code Sticker */}
        <div className="absolute top-[30px] left-[6%] md:left-[18%] z-20 rotate-[-8deg] bg-[#DE4A82] text-white border-[3px] border-[#222222] px-4 py-2 rounded-xl shadow-[4px_4px_0px_0px_#222222] flex items-center gap-2 select-none hover:scale-105 transition-transform duration-150">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFD45C] border border-[#222222] animate-ping" />
          <span className="font-heading font-black text-xs uppercase tracking-wider">
            {is500 ? "CRITICAL EXCEPTION" : "PATH UNRESOLVED"}
          </span>
        </div>

        {/* Branding Sticker */}
        <div className="absolute top-[40px] right-[6%] md:right-[15%] z-20 rotate-[6deg] bg-[#FFD45C] border-[3px] border-[#222222] px-6 py-2 rounded-full shadow-[5px_5px_0px_0px_#222222] select-none hover:scale-105 transition-transform duration-150">
          <span className="font-heading font-black text-xs md:text-sm text-[#222222] uppercase tracking-widest">
            RAYAN HANY
          </span>
        </div>

        {/* Teal Semicircle Sticker */}
        <div className="absolute top-[280px] left-[2%] md:left-[4%] z-20 rotate-[15deg] w-14 h-14 bg-[#319C97] border-[3px] border-[#222222] rounded-t-full shadow-[4px_4px_0px_0px_#222222] select-none hover:scale-110 transition-transform duration-150 hidden lg:block" />

        {/* Pink Ball Sticker */}
        <div className="absolute bottom-[200px] left-[2%] md:left-[3%] z-20 rotate-[-20deg] w-14 h-14 bg-[#DE4A82] border-[3px] border-[#222222] rounded-full shadow-[5px_5px_0px_0px_#222222] flex items-center justify-center select-none hover:scale-110 transition-transform duration-150 hidden lg:block">
          <div className="w-full h-0.5 bg-[#222222]" />
        </div>

        {/* Purple Crescent Sticker */}
        <div className="absolute top-[500px] right-[2%] md:right-[4%] z-20 rotate-[-45deg] w-14 h-14 bg-[#8A63D2] border-[3px] border-[#222222] rounded-b-full shadow-[4px_4px_0px_0px_#222222] select-none hover:scale-110 transition-transform duration-150 hidden lg:block" />

        {/* Yellow Quarter-Circle Sticker */}
        <div className="absolute bottom-[100px] right-[2%] md:right-[4%] z-20 rotate-[30deg] w-12 h-12 bg-[#FFD45C] border-[3px] border-[#222222] rounded-bl-full shadow-[4px_4px_0px_0px_#222222] select-none hover:scale-110 transition-transform duration-150 hidden lg:block" />

        {/* Main Central Canvas Frame matching App.jsx layout */}
        <div className="w-full max-w-3xl bg-[#F4F3EF] border-[3px] border-[#222222] rounded-[32px] shadow-[12px_12px_0px_0px_#222222] relative flex flex-col z-10 overflow-hidden my-8">

          {/* Canvas Header */}
          <div className="w-full py-5 px-6 md:px-10 flex justify-between items-center border-b-[3px] border-[#222222] bg-[#F4F3EF]">
            <button
              onClick={handleHomeClick}
              className="flex items-center gap-3 group cursor-pointer interactive-hover"
            >
              <div className="w-9 h-9 bg-[#FFD45C] border-2 border-[#222222] flex items-center justify-center font-heading font-black text-md text-[#222222] shadow-[2.5px_2.5px_0px_0px_#222222] group-hover:bg-[#DE4A82] group-hover:text-white transition-all duration-150">
                @
              </div>
              <span className="font-heading font-black text-base md:text-lg text-[#222222] tracking-tight group-hover:text-[#DE4A82] transition-colors duration-150">
                rayan_hany_a
              </span>
            </button>

            <div className="flex items-center gap-2 bg-[#222222] text-[#FFD45C] border-2 border-[#222222] px-3 py-1 rounded-lg text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-[#DE4A82] animate-pulse" />
              STATUS: {activeCode}
            </div>
          </div>

          {/* Main Error Content Body */}
          <div className="p-6 md:p-12 flex flex-col items-center text-center gap-8">
            
            {/* Giant Hero Brutalist Code & Badge Graphic */}
            <div className="relative my-2">
              {/* Offset Background Shadow Card */}
              <div className="absolute inset-0 bg-[#222222] rounded-2xl translate-x-3 translate-y-3" />
              
              <div className="relative bg-[#FFD45C] border-[3px] border-[#222222] rounded-2xl px-8 py-6 md:px-12 md:py-8 flex flex-col items-center gap-2">
                
                {/* Warning Badge Icon */}
                <div className="w-14 h-14 bg-[#DE4A82] border-2 border-[#222222] rounded-xl shadow-[3px_3px_0px_0px_#222222] flex items-center justify-center text-white text-2xl rotate-[-6deg] -mt-10 mb-2">
                  <FaExclamationTriangle />
                </div>

                {/* Giant Brutalist Code Text */}
                <h1 className="font-heading font-black text-7xl md:text-9xl text-[#222222] tracking-tighter leading-none drop-shadow-[4px_4px_0px_#ffffff]">
                  {activeCode}
                </h1>

                <div className="bg-[#222222] text-[#F7F6F2] font-heading font-black text-xs md:text-sm uppercase tracking-widest px-4 py-1.5 rounded-md border border-[#222222] mt-1">
                  {is500 ? "500 Internal System Breakdown" : "404 Canvas Out of Bounds"}
                </div>
              </div>
            </div>

            {/* Error Message & Explanation */}
            <div className="max-w-xl flex flex-col gap-3">
              <h2 className="font-heading font-black text-2xl md:text-4xl text-[#222222] uppercase tracking-tight leading-snug">
                {is500 ? "Whoops! A glitch in the matrix." : "Lost in the canvas?"}
              </h2>
              <p className="font-sans font-medium text-sm md:text-base text-[#555555] leading-relaxed">
                {errorMessage}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full mt-2">
              <button
                onClick={handleHomeClick}
                className="group flex items-center gap-3 py-3.5 px-8 bg-[#FFD45C] text-[#222222] border-[3px] border-[#222222] rounded-xl shadow-[5px_5px_0px_0px_#222222] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_0px_#222222] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150 font-heading font-black uppercase text-sm tracking-wider cursor-pointer interactive-hover"
              >
                <FaHome className="text-lg group-hover:rotate-[-12deg] transition-transform" />
                <span>Return to Canvas</span>
              </button>

              <button
                onClick={handleReload}
                className="group flex items-center gap-3 py-3.5 px-8 bg-[#8FA4D8] text-[#222222] border-[3px] border-[#222222] rounded-xl shadow-[5px_5px_0px_0px_#222222] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_0px_#222222] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150 font-heading font-black uppercase text-sm tracking-wider cursor-pointer interactive-hover"
              >
                <FaRedo className="text-sm group-hover:rotate-180 transition-transform duration-500" />
                <span>Reload Page</span>
              </button>
            </div>

          </div>

          {/* Footer Bar inside frame */}
          <div className="w-full py-3 px-6 bg-[#222222] text-white flex justify-between items-center text-[11px] font-mono border-t-[3px] border-[#222222]">
            <span className="text-[#FFD45C] font-bold">NEO-BRUTALIST ERROR SYSTEM</span>
            <span className="opacity-70">Rayan Hany &bull; Zywo</span>
          </div>

        </div>
      </div>
    </>
  );
}
