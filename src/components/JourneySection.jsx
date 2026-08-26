import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { journeyData } from "../data/journey";
import { illustrations } from "./JourneyIllustrations";

export default function JourneySection() {
  const containerRef = useRef(null);
  const progressLineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (progressLineRef.current) {
        gsap.fromTo(
          progressLineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 60%",
              end: "bottom 80%",
              scrub: true,
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="journey-section"
      className="relative w-full bg-[#F4F3EF] py-24 px-6 md:px-16 select-none overflow-hidden"
    >
      {/* Deco: clock/timeline circle top-right */}
      <div className="absolute top-10 right-[3%] z-20 rotate-[15deg] hidden lg:flex w-14 h-14 bg-[#8FA4D8] border-[3px] border-[#222222] rounded-full shadow-[5px_5px_0px_0px_#222222] items-center justify-center hover:scale-110 transition-transform duration-150">
        <span className="text-[#222222] text-lg font-black">⏱</span>
      </div>
      {/* Deco: "2019→2026" journey pill bottom-left */}
      <div className="absolute bottom-12 left-[2%] z-20 rotate-[-6deg] hidden lg:flex items-center px-3 py-2 bg-[#FFD45C] border-[3px] border-[#222222] rounded-xl shadow-[4px_4px_0px_0px_#222222] hover:scale-110 transition-transform duration-150">
        <span className="text-[10px] font-black uppercase tracking-widest text-[#222222]">2019 → 2026</span>
      </div>
      {/* Deco: spark top-left */}
      <div className="absolute top-8 left-[2%] z-20 rotate-[-18deg] hidden lg:flex w-12 h-12 bg-[#DE4A82] border-[3px] border-[#222222] rounded-xl shadow-[4px_4px_0px_0px_#222222] items-center justify-center hover:scale-110 transition-transform duration-150">
        <span className="text-white text-lg font-black">★</span>
      </div>
      <div className="max-w-5xl w-full flex flex-col gap-16 relative z-10 mx-auto">

        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <div className="inline-block self-start px-4 py-1.5 bg-[#8A63D2] text-white text-xs font-black uppercase tracking-wider rounded-xl border-[3px] border-[#222222] shadow-[3.5px_3.5px_0px_0px_#222222] rotate-[-2deg]">
            03 — THE TIMELINE
          </div>
          <h2 className="font-heading font-black text-4xl md:text-6xl text-[#222222] uppercase tracking-tight">
            A Curiosity-Driven Journey
          </h2>
          <p className="font-sans font-medium text-base md:text-lg text-[#555555] max-w-xl leading-relaxed">
            My career didn't follow a straight line. Every step added another layer of design, technology, or business execution to my thinking.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full mt-10 pl-6 md:pl-0">

          {/* Vertical central baseline */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-[#222222]/15 -translate-x-1/2" />

          {/* GSAP animated vertical progress line */}
          <div
            ref={progressLineRef}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-[#222222] -translate-x-1/2 origin-top"
          />

          {/* Timeline Rows */}
          <div className="flex flex-col gap-12 w-full">
            {journeyData.map((item, index) => {
              const isEven = index % 2 === 0;
              const illustration = illustrations[item.illustrationKey];

              return (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-start md:items-center w-full relative"
                >
                  {/* central node marker */}
                  <div className="absolute left-6 md:left-1/2 w-6 h-6 rounded-full bg-[#FFD45C] border-3 border-[#222222] -translate-x-1/2 z-20 transition-all duration-300 hover:scale-125" />

                  {/*
                    Desktop layout — two-column, alternating:
                      Even (isEven): [CONTENT CARD] ● [ILLUSTRATION]
                      Odd  (!isEven): [ILLUSTRATION] ● [CONTENT CARD]

                    Mobile layout — single column, stacked:
                      Always: content card → illustration, indented from the left node
                  */}

                  {/* ── LEFT HALF ─────────────────────────────────── */}
                  <div className={`w-full md:w-[45%] pl-8 md:pl-0 md:pr-10 flex flex-col gap-4`}>
                    {isEven ? (
                      /* Even → content card on left */
                      <ContentCard item={item} />
                    ) : (
                      /* Odd → illustration on left (hidden on mobile, shown in bottom block) */
                      illustration ? (
                        <IllustrationCard illustration={illustration} hidden />
                      ) : null
                    )}
                  </div>

                  {/* ── RIGHT HALF ────────────────────────────────── */}
                  <div className={`w-full md:w-[45%] pl-8 md:pl-0 md:pl-10 flex flex-col gap-4`}>
                    {isEven ? (
                      /* Even → illustration on right (hidden on mobile) */
                      illustration ? (
                        <IllustrationCard illustration={illustration} hidden />
                      ) : null
                    ) : (
                      /* Odd → content card on right */
                      <ContentCard item={item} />
                    )}
                  </div>

                  {/* ── MOBILE ILLUSTRATION (below the card, full width) ── */}
                  {illustration && (
                    <div className="w-full pl-8 md:hidden mt-2">
                      <IllustrationCard illustration={illustration} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

/** Existing content card — unchanged styling */
function ContentCard({ item }) {
  return (
    <div className="bg-white p-6 rounded-[20px] border-[3px] border-[#222222] shadow-[5px_5px_0px_0px_#222222] hover:shadow-[7px_7px_0px_0px_#222222] hover:-translate-y-1 transition-all duration-300 select-none group text-left">
      {/* Year badge */}
      <span className="inline-block px-3 py-1 bg-[#8FA4D8] border-2 border-[#222222] text-[#222222] text-xs font-black rounded-lg shadow-[2px_2px_0px_0px_#222222] mb-3">
        {item.year}
      </span>
      <h3 className="font-heading font-black text-xl md:text-2xl text-[#222222] uppercase tracking-tight mb-2">
        {item.title}
      </h3>
      <p className="font-sans text-sm md:text-base text-[#555555] leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}

/**
 * Illustration card — neo-brutalist container with SVG inside.
 * `hidden` = show on desktop only (md:flex), used for the in-column desktop slot.
 * Without hidden = show on mobile only (flex md:hidden), used for the stacked mobile block.
 */
function IllustrationCard({ illustration, hidden = false }) {
  return (
    <div
      className={`
        ${hidden ? "hidden md:flex" : "flex"}
        items-center justify-center
        bg-white rounded-[20px] border-[3px] border-[#222222]
        shadow-[5px_5px_0px_0px_#222222]
        hover:shadow-[7px_7px_0px_0px_#222222]
        hover:-translate-y-1
        transition-all duration-300
        p-3 overflow-hidden
        aspect-[280/200]
        group
      `}
    >
      <div className="w-full h-full group-hover:scale-[1.02] transition-transform duration-300">
        {illustration}
      </div>
    </div>
  );
}
