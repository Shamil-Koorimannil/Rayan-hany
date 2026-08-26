import React from "react";

const INTERESTS = [
  "Photography",
  "Filmmaking",
  "Technology",
  "Cars",
  "Architecture",
  "Travel",
  "Events"
];

export default function FounderSection() {
  return (
    <section
      id="founder-section"
      className="relative w-full bg-[#F4F3EF] py-24 px-6 md:px-16 select-none overflow-hidden"
    >
      {/* Deco: lightbulb circle top-right */}
      <div className="absolute top-10 right-[3%] z-20 rotate-[14deg] hidden lg:flex w-14 h-14 bg-[#FFD45C] border-[3px] border-[#222222] rounded-full shadow-[5px_5px_0px_0px_#222222] items-center justify-center hover:scale-110 transition-transform duration-150">
        <span className="text-[#222222] text-xl font-black">💡</span>
      </div>
      {/* Deco: "BUILDER" pill bottom-right */}
      <div className="absolute bottom-10 right-[2%] z-20 rotate-[8deg] hidden lg:flex items-center px-3 py-2 bg-[#8A63D2] border-[3px] border-[#222222] rounded-full shadow-[4px_4px_0px_0px_#222222] hover:scale-110 transition-transform duration-150">
        <span className="text-[10px] font-black uppercase tracking-widest text-white">BUILDER</span>
      </div>
      {/* Deco: camera top-left */}
      <div className="absolute top-8 left-[2%] z-20 rotate-[-12deg] hidden lg:flex w-12 h-12 bg-[#319C97] border-[3px] border-[#222222] rounded-xl shadow-[4px_4px_0px_0px_#222222] items-center justify-center hover:scale-110 transition-transform duration-150">
        <span className="text-white text-lg font-black">📷</span>
      </div>
      <div className="max-w-6xl w-full flex flex-col gap-16 relative z-10 mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <div className="inline-block self-start px-4 py-1.5 bg-[#8A63D2] text-white text-xs font-black uppercase tracking-wider rounded-xl border-[3px] border-[#222222] shadow-[3.5px_3.5px_0px_0px_#222222] rotate-[-1deg]">
            12 — FOUNDER BEHIND THE SCENES
          </div>
          <h2 className="font-heading font-black text-4xl md:text-6xl text-[#222222] uppercase tracking-tight">
            The person behind the companies
          </h2>
          <p className="text-xl md:text-2xl font-black text-[#555555] uppercase tracking-tight text-left">
            Obsession with understanding how things work.
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Image & Leadership Quote (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8 items-center lg:items-start order-2 lg:order-1">
            <div className="w-full max-w-[400px] aspect-[4/3] rounded-[24px] border-[3px] border-[#222222] shadow-[8px_8px_0px_0px_#222222] overflow-hidden rotate-[-1deg] hover:rotate-0 hover:-translate-y-1 transition-all duration-300 relative group bg-[#F4F3EF]">
              <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full group-hover:scale-[1.02] transition-transform duration-500">

                {/* Background */}
                <rect width="400" height="300" fill="#F4F3EF"/>
                {/* Subtle grid */}
                {[50,100,150,200,250,300,350].map(x => <line key={`vg${x}`} x1={x} y1="0" x2={x} y2="300" stroke="#222222" strokeWidth="0.4" strokeOpacity="0.1"/>)}
                {[50,100,150,200,250].map(y => <line key={`hg${y}`} x1="0" y1={y} x2="400" y2={y} stroke="#222222" strokeWidth="0.4" strokeOpacity="0.1"/>)}

                {/* ── DESK surface ── */}
                <rect x="20" y="210" width="360" height="14" rx="4" fill="#222222" transform="translate(4,4)"/>
                <rect x="20" y="210" width="360" height="14" rx="4" fill="#FFFFFF" stroke="#222222" strokeWidth="2.5"/>

                {/* ── CAMERA (left) ── */}
                {/* body shadow */}
                <rect x="34" y="145" width="88" height="62" rx="10" fill="#222222" transform="translate(4,4)"/>
                {/* body */}
                <rect x="34" y="145" width="88" height="62" rx="10" fill="#222222" stroke="#222222" strokeWidth="2.5"/>
                {/* lens ring */}
                <circle cx="78" cy="176" r="22" fill="#222222" transform="translate(4,4)"/>
                <circle cx="78" cy="176" r="22" fill="#F4F3EF" stroke="#222222" strokeWidth="2.5"/>
                <circle cx="78" cy="176" r="14" fill="#8FA4D8" stroke="#222222" strokeWidth="2"/>
                <circle cx="78" cy="176" r="7" fill="#222222"/>
                <circle cx="74" cy="172" r="2" fill="#FFFFFF" opacity="0.6"/>
                {/* shutter button */}
                <rect x="96" y="148" width="18" height="10" rx="4" fill="#FFD45C" stroke="#222222" strokeWidth="2"/>
                {/* viewfinder */}
                <rect x="36" y="148" width="24" height="16" rx="4" fill="#319C97" stroke="#222222" strokeWidth="2"/>
                {/* label */}
                <rect x="40" y="196" width="76" height="9" rx="3" fill="#FFD45C" stroke="#222222" strokeWidth="1.5"/>
                <text x="78" y="204" textAnchor="middle" fontSize="6" fontWeight="900" fill="#222222">PHOTOGRAPHY</text>

                {/* ── LAPTOP / CODE (centre) ── */}
                {/* shadow */}
                <rect x="138" y="138" width="130" height="74" rx="8" fill="#222222" transform="translate(4,4)"/>
                {/* lid */}
                <rect x="138" y="138" width="130" height="74" rx="8" fill="#222222" stroke="#222222" strokeWidth="2.5"/>
                {/* screen */}
                <rect x="144" y="144" width="118" height="62" rx="4" fill="#1a1a2e"/>
                {/* code lines */}
                <text x="152" y="158" fontSize="7" fontFamily="monospace" fill="#FFD45C">def curiosity():</text>
                <text x="152" y="170" fontSize="7" fontFamily="monospace" fill="#8FA4D8">  explore()</text>
                <text x="152" y="182" fontSize="7" fontFamily="monospace" fill="#319C97">  build()</text>
                <text x="152" y="194" fontSize="7" fontFamily="monospace" fill="#DE4A82">  repeat()</text>
                {/* cursor blink */}
                <rect x="194" y="192" width="5" height="8" rx="1" fill="#FFFFFF" opacity="0.8"/>
                {/* keyboard base */}
                <rect x="130" y="210" width="146" height="8" rx="4" fill="#222222" transform="translate(3,2)"/>
                <rect x="130" y="210" width="146" height="8" rx="4" fill="#8FA4D8" stroke="#222222" strokeWidth="2"/>

                {/* ── FILM REEL (right) ── */}
                {/* shadow */}
                <circle cx="326" cy="176" r="34" fill="#222222" transform="translate(4,4)"/>
                <circle cx="326" cy="176" r="34" fill="#DE4A82" stroke="#222222" strokeWidth="2.5"/>
                {/* spokes */}
                <line x1="326" y1="142" x2="326" y2="210" stroke="#222222" strokeWidth="2"/>
                <line x1="292" y1="176" x2="360" y2="176" stroke="#222222" strokeWidth="2"/>
                <line x1="303" y1="153" x2="349" y2="199" stroke="#222222" strokeWidth="2"/>
                <line x1="349" y1="153" x2="303" y2="199" stroke="#222222" strokeWidth="2"/>
                {/* center hub */}
                <circle cx="326" cy="176" r="12" fill="#222222" stroke="#222222" strokeWidth="2"/>
                <circle cx="326" cy="176" r="6" fill="#FFD45C"/>
                {/* outer holes */}
                {[[326,146],[346,162],[346,190],[326,206],[306,190],[306,162]].map(([cx,cy],i) => (
                  <circle key={i} cx={cx} cy={cy} r="5" fill="#222222"/>
                ))}
                <text x="326" y="242" textAnchor="middle" fontSize="6" fontWeight="900" fill="#222222">FILMMAKING</text>

                {/* ── CAR SKETCH (bottom-left area) ── */}
                <rect x="22" y="226" width="100" height="46" rx="8" fill="#222222" transform="translate(3,3)"/>
                <rect x="22" y="226" width="100" height="46" rx="8" fill="#FFD45C" stroke="#222222" strokeWidth="2.5"/>
                {/* car silhouette */}
                <path d="M34,256 L40,244 L58,240 L76,240 L86,244 L110,248 L110,258 L34,258 Z" fill="#222222"/>
                <circle cx="48" cy="258" r="6" fill="#F4F3EF" stroke="#222222" strokeWidth="2"/>
                <circle cx="48" cy="258" r="2.5" fill="#222222"/>
                <circle cx="96" cy="258" r="6" fill="#F4F3EF" stroke="#222222" strokeWidth="2"/>
                <circle cx="96" cy="258" r="2.5" fill="#222222"/>
                {/* windscreen */}
                <polygon points="58,244 44,254 68,254 72,244" fill="#8FA4D8" stroke="#222222" strokeWidth="1"/>
                <text x="72" y="238" textAnchor="middle" fontSize="6" fontWeight="900" fill="#222222">CARS</text>

                {/* ── GLOBE (bottom-centre) ── */}
                <circle cx="203" cy="258" r="26" fill="#222222" transform="translate(3,3)"/>
                <circle cx="203" cy="258" r="26" fill="#319C97" stroke="#222222" strokeWidth="2.5"/>
                <ellipse cx="203" cy="258" rx="26" ry="10" fill="none" stroke="#222222" strokeWidth="1.5"/>
                <line x1="203" y1="232" x2="203" y2="284" stroke="#222222" strokeWidth="1.5"/>
                <line x1="177" y1="258" x2="229" y2="258" stroke="#222222" strokeWidth="1.5"/>
                <text x="203" y="295" textAnchor="middle" fontSize="6" fontWeight="900" fill="#222222">TRAVEL</text>

                {/* ── ARCHITECTURE book (bottom-right) ── */}
                <rect x="280" y="224" width="96" height="52" rx="8" fill="#222222" transform="translate(3,3)"/>
                <rect x="280" y="224" width="96" height="52" rx="8" fill="#8FA4D8" stroke="#222222" strokeWidth="2.5"/>
                {/* building silhouettes */}
                <rect x="290" y="240" width="14" height="32" rx="2" fill="#222222"/>
                <rect x="308" y="234" width="14" height="38" rx="2" fill="#222222"/>
                <rect x="326" y="244" width="10" height="28" rx="2" fill="#222222"/>
                <rect x="340" y="237" width="16" height="35" rx="2" fill="#222222"/>
                {/* windows */}
                {[[292,244],[292,252],[292,260],[310,238],[310,246],[310,254],[342,241],[342,249],[342,257]].map(([x,y],i) => (
                  <rect key={i} x={x} y={y} width="5" height="4" rx="1" fill="#FFD45C"/>
                ))}
                <text x="328" y="285" textAnchor="middle" fontSize="6" fontWeight="900" fill="#222222">ARCHITECTURE</text>

                {/* ── "CURIOSITY" header pill ── */}
                <rect x="118" y="16" width="164" height="28" rx="8" fill="#222222" transform="translate(4,4)"/>
                <rect x="118" y="16" width="164" height="28" rx="8" fill="#FFD45C" stroke="#222222" strokeWidth="3"/>
                <text x="200" y="35" textAnchor="middle" fontSize="11" fontWeight="900" fill="#222222" fontFamily="sans-serif">CURIOSITY DRIVEN</text>

                {/* ── Stars / deco ── */}
                <text x="30" y="50" fontSize="18" fill="#DE4A82" stroke="#222222" strokeWidth="0.5">✦</text>
                <text x="358" y="55" fontSize="14" fill="#319C97" stroke="#222222" strokeWidth="0.5">✦</text>
                <text x="352" y="120" fontSize="10" fill="#FFD45C" stroke="#222222" strokeWidth="0.5">★</text>
                <text x="22" y="120" fontSize="10" fill="#8FA4D8" stroke="#222222" strokeWidth="0.5">★</text>

                {/* ── Connecting dotted line between objects ── */}
                <line x1="122" y1="176" x2="138" y2="176" stroke="#222222" strokeWidth="1.5" strokeDasharray="3 2"/>
                <line x1="268" y1="176" x2="292" y2="176" stroke="#222222" strokeWidth="1.5" strokeDasharray="3 2"/>

              </svg>
              <div className="absolute inset-0 bg-[#222222]/5 pointer-events-none" />
            </div>

            {/* Leadership Box */}
            <div className="w-full max-w-[400px] bg-white p-6 rounded-[20px] border-[3px] border-[#222222] shadow-[4px_4px_0px_0px_#222222] text-left">
              <span className="text-[10px] uppercase font-black tracking-widest text-[#DE4A82] block mb-2">Leadership Philosophy</span>
              <p className="font-heading font-black text-lg text-[#222222] leading-snug">
                “Vision gives people direction. People give the vision life.”
              </p>
            </div>
          </div>

          {/* Right Block: The Persona & Interests (7 cols) - order 1 on lg */}
          <div className="lg:col-span-7 flex flex-col gap-8 order-1 lg:order-2">
            <div className="flex flex-col gap-6 font-sans text-lg text-[#555555] leading-relaxed text-left">
              <p>
                My trajectory is driven by a simple motivation: <span className="font-black text-[#222222]">curiosity</span>. I am obsessed with opening the black box, breaking down systems to their atomic parts, and understanding how strategy, design, and code integrate together.
              </p>
              <p>
                Whether managing campaigns for global clients, architecting system frameworks, or founding companies, I approach every challenge with the same builder's mindset.
              </p>
              <p className="text-base text-left">
                <span className="font-black text-[#222222] uppercase text-sm block mb-1">Leadership Style</span>
                My leadership approach is vision-driven and people-first, steering projects toward aggressive goals while empowering creators and engineers to execute at their best.
              </p>
            </div>

            {/* Personal Interests Area (10% personal) */}
            <div className="flex flex-col gap-4 border-t border-[#222222]/10 pt-6 text-left">
              <h4 className="text-xs uppercase tracking-widest font-black text-[#8A63D2]">
                Beyond the Ventures
              </h4>
              <div className="flex flex-wrap gap-3">
                {INTERESTS.map((interest, i) => {
                  const colors = ["bg-[#8FA4D8]/20", "bg-[#FFD45C]/20", "bg-[#319C97]/20", "bg-[#DE4A82]/20"];
                  return (
                    <span 
                      key={i} 
                      className={`px-4 py-2 rounded-xl border-2 border-[#222222] text-xs font-black uppercase text-[#222222] tracking-wider shadow-[2px_2px_0px_0px_#222222] ${colors[i % colors.length]}`}
                    >
                      {interest}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
