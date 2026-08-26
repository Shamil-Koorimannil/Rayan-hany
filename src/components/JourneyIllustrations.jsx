import React from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   Neo-Brutalist Editorial Illustrations — one per career milestone
   Palette: #222222  #FFD45C  #8FA4D8  #FFFFFF  #F4F3EF
   All SVGs are viewBox="0 0 280 200" for consistent aspect ratio
───────────────────────────────────────────────────────────────────────────── */

/** 2019 — Started Career in Design */
const Design2019 = () => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="280" height="200" fill="#F4F3EF"/>
    {[40,80,120,160,200,240].map(x => (
      <line key={`vg${x}`} x1={x} y1="0" x2={x} y2="200" stroke="#222222" strokeWidth="0.5" strokeOpacity="0.15"/>
    ))}
    {[40,80,120,160].map(y => (
      <line key={`hg${y}`} x1="0" y1={y} x2="280" y2={y} stroke="#222222" strokeWidth="0.5" strokeOpacity="0.15"/>
    ))}
    <rect x="22" y="32" width="90" height="26" rx="5" fill="#222222"/>
    <rect x="20" y="30" width="90" height="26" rx="5" fill="#FFFFFF" stroke="#222222" strokeWidth="2.5"/>
    <rect x="24" y="34" width="18" height="18" rx="3" fill="#FFD45C" stroke="#222222" strokeWidth="2"/>
    <rect x="46" y="34" width="18" height="18" rx="3" fill="#8FA4D8" stroke="#222222" strokeWidth="2"/>
    <rect x="68" y="34" width="18" height="18" rx="3" fill="#222222" stroke="#222222" strokeWidth="2"/>
    <rect x="90" y="34" width="16" height="18" rx="3" fill="#F4F3EF" stroke="#222222" strokeWidth="2"/>
    <rect x="34" y="72" width="72" height="86" rx="8" fill="#222222"/>
    <rect x="30" y="68" width="72" height="86" rx="8" fill="#FFD45C" stroke="#222222" strokeWidth="3"/>
    <text x="66" y="135" textAnchor="middle" fontFamily="serif" fontWeight="900" fontSize="76" fill="#222222">T</text>
    <rect x="118" y="32" width="146" height="42" rx="6" fill="#222222"/>
    <rect x="115" y="29" width="146" height="42" rx="6" fill="#8FA4D8" stroke="#222222" strokeWidth="2.5"/>
    <rect x="120" y="34" width="42" height="32" rx="3" fill="#FFFFFF" stroke="#222222" strokeWidth="2"/>
    <rect x="168" y="34" width="26" height="14" rx="3" fill="#FFD45C" stroke="#222222" strokeWidth="2"/>
    <rect x="168" y="52" width="26" height="10" rx="3" fill="#FFFFFF" stroke="#222222" strokeWidth="2"/>
    <rect x="198" y="34" width="58" height="32" rx="3" fill="#FFFFFF" stroke="#222222" strokeWidth="2"/>
    <rect x="123" y="84" width="66" height="66" rx="10" fill="#222222"/>
    <rect x="119" y="80" width="66" height="66" rx="10" fill="#FFFFFF" stroke="#222222" strokeWidth="3"/>
    <polygon points="152,88 168,120 152,132 136,120" fill="#FFD45C" stroke="#222222" strokeWidth="2.5"/>
    <line x1="152" y1="120" x2="152" y2="138" stroke="#222222" strokeWidth="2.5"/>
    <circle cx="152" cy="120" r="5" fill="#222222"/>
    <polygon points="206,87 206,122 214,114 220,128 226,126 220,111 230,111" fill="#222222" transform="translate(2,2)"/>
    <polygon points="206,87 206,122 214,114 220,128 226,126 220,111 230,111" fill="#FFD45C" stroke="#222222" strokeWidth="2.5"/>
    <rect x="119" y="155" width="80" height="7" rx="3" fill="#222222" opacity="0.7"/>
    <rect x="119" y="167" width="55" height="7" rx="3" fill="#8FA4D8" stroke="#222222" strokeWidth="1.5"/>
    <rect x="119" y="179" width="100" height="7" rx="3" fill="#222222" opacity="0.3"/>
    <text x="250" y="175" fontSize="22" fill="#FFD45C" stroke="#222222" strokeWidth="1">✦</text>
  </svg>
);

/** 2020 — Digital Marketing Executive */
const Marketing2020 = () => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="280" height="200" fill="#F4F3EF"/>
    <rect x="17" y="22" width="246" height="158" rx="14" fill="#222222"/>
    <rect x="14" y="19" width="246" height="158" rx="14" fill="#FFFFFF" stroke="#222222" strokeWidth="3"/>
    <rect x="14" y="19" width="246" height="32" rx="14" fill="#222222"/>
    <rect x="14" y="37" width="246" height="14" fill="#222222"/>
    <circle cx="30" cy="35" r="7" fill="#FFD45C" stroke="#222222" strokeWidth="2"/>
    <circle cx="50" cy="35" r="7" fill="#8FA4D8" stroke="#222222" strokeWidth="2"/>
    <rect x="70" y="27" width="90" height="14" rx="4" fill="#FFFFFF" opacity="0.15"/>
    <rect x="20" y="62" width="108" height="100" rx="8" fill="#222222" transform="translate(3,3)"/>
    <rect x="20" y="62" width="108" height="100" rx="8" fill="#F4F3EF" stroke="#222222" strokeWidth="2.5"/>
    <rect x="30" y="118" width="16" height="34" rx="3" fill="#8FA4D8" stroke="#222222" strokeWidth="2"/>
    <rect x="52" y="100" width="16" height="52" rx="3" fill="#8FA4D8" stroke="#222222" strokeWidth="2"/>
    <rect x="74" y="85" width="16" height="67" rx="3" fill="#FFD45C" stroke="#222222" strokeWidth="2"/>
    <rect x="96" y="72" width="16" height="80" rx="3" fill="#FFD45C" stroke="#222222" strokeWidth="2"/>
    <polyline points="38,118 60,100 82,85 104,72" stroke="#222222" strokeWidth="2" strokeDasharray="4 2" fill="none"/>
    <rect x="138" y="62" width="34" height="34" rx="8" fill="#222222" transform="translate(3,3)"/>
    <rect x="138" y="62" width="34" height="34" rx="8" fill="#8FA4D8" stroke="#222222" strokeWidth="2.5"/>
    <text x="155" y="84" textAnchor="middle" fontSize="16" fontWeight="900" fill="#FFFFFF">f</text>
    <rect x="180" y="62" width="34" height="34" rx="8" fill="#222222" transform="translate(3,3)"/>
    <rect x="180" y="62" width="34" height="34" rx="8" fill="#FFD45C" stroke="#222222" strokeWidth="2.5"/>
    <text x="197" y="84" textAnchor="middle" fontSize="13" fontWeight="900" fill="#222222">in</text>
    <rect x="222" y="62" width="34" height="34" rx="8" fill="#222222" transform="translate(3,3)"/>
    <rect x="222" y="62" width="34" height="34" rx="8" fill="#FFFFFF" stroke="#222222" strokeWidth="2.5"/>
    <circle cx="239" cy="74" r="5" fill="none" stroke="#222222" strokeWidth="2"/>
    <circle cx="239" cy="74" r="2" fill="#222222"/>
    <circle cx="244" cy="70" r="1.5" fill="#222222"/>
    <rect x="138" y="107" width="118" height="24" rx="6" fill="#222222" transform="translate(2,2)"/>
    <rect x="138" y="107" width="118" height="24" rx="6" fill="#FFD45C" stroke="#222222" strokeWidth="2"/>
    <text x="149" y="123" fontSize="9" fontWeight="900" fill="#222222">CTR 4.8%</text>
    <text x="211" y="123" fontSize="9" fontWeight="900" fill="#222222">ROAS 3.2x</text>
    <rect x="138" y="137" width="55" height="20" rx="5" fill="#8FA4D8" stroke="#222222" strokeWidth="2"/>
    <text x="165" y="151" textAnchor="middle" fontSize="8" fontWeight="900" fill="#222222">REACH 12K</text>
    <rect x="200" y="137" width="55" height="20" rx="5" fill="#FFFFFF" stroke="#222222" strokeWidth="2"/>
    <text x="227" y="151" textAnchor="middle" fontSize="8" fontWeight="900" fill="#222222">CONV 890</text>
  </svg>
);

/** 2021 — UX/UI Design and BCA */
const UXUI2021 = () => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="280" height="200" fill="#F4F3EF"/>
    <rect x="22" y="32" width="196" height="130" rx="12" fill="#222222"/>
    <rect x="18" y="28" width="196" height="130" rx="12" fill="#8FA4D8" stroke="#222222" strokeWidth="3"/>
    <rect x="28" y="38" width="176" height="110" rx="6" fill="#FFFFFF" stroke="#222222" strokeWidth="2"/>
    <rect x="5" y="157" width="222" height="16" rx="6" fill="#222222"/>
    <rect x="3" y="155" width="222" height="16" rx="6" fill="#8FA4D8" stroke="#222222" strokeWidth="2"/>
    <rect x="92" y="158" width="48" height="8" rx="3" fill="#FFFFFF" opacity="0.4"/>
    <rect x="32" y="42" width="168" height="14" rx="3" fill="#F4F3EF" stroke="#222222" strokeWidth="1.5"/>
    <circle cx="41" cy="49" r="4" fill="#FFD45C" stroke="#222222" strokeWidth="1.5"/>
    <rect x="50" y="45" width="30" height="8" rx="2" fill="#222222" opacity="0.2"/>
    <rect x="150" y="45" width="20" height="8" rx="2" fill="#8FA4D8" stroke="#222222" strokeWidth="1"/>
    <rect x="174" y="45" width="22" height="8" rx="2" fill="#8FA4D8" stroke="#222222" strokeWidth="1"/>
    <rect x="32" y="60" width="110" height="50" rx="3" fill="#FFD45C" stroke="#222222" strokeWidth="2"/>
    <rect x="38" y="68" width="60" height="6" rx="2" fill="#222222" opacity="0.5"/>
    <rect x="38" y="78" width="40" height="5" rx="2" fill="#222222" opacity="0.3"/>
    <rect x="38" y="88" width="28" height="9" rx="3" fill="#222222"/>
    <rect x="148" y="60" width="50" height="24" rx="3" fill="#FFFFFF" stroke="#222222" strokeWidth="1.5"/>
    <rect x="148" y="88" width="50" height="10" rx="3" fill="#F4F3EF" stroke="#222222" strokeWidth="1.5"/>
    <rect x="148" y="102" width="50" height="10" rx="3" fill="#F4F3EF" stroke="#222222" strokeWidth="1.5"/>
    <rect x="32" y="115" width="168" height="26" rx="4" fill="#222222"/>
    <text x="42" y="131" fontSize="10" fontFamily="monospace" fill="#FFD45C">App /</text>
    <text x="95" y="131" fontSize="10" fontFamily="monospace" fill="#8FA4D8">useState()</text>
    <text x="172" y="131" fontSize="10" fontFamily="monospace" fill="#FFFFFF">{ }</text>
    <circle cx="246" cy="60" r="14" fill="#FFD45C" stroke="#222222" strokeWidth="2.5"/>
    <text x="246" y="65" textAnchor="middle" fontSize="14" fontWeight="900" fill="#222222">UX</text>
    <line x1="246" y1="76" x2="246" y2="92" stroke="#222222" strokeWidth="2"/>
    <circle cx="246" cy="106" r="14" fill="#8FA4D8" stroke="#222222" strokeWidth="2.5"/>
    <text x="246" y="111" textAnchor="middle" fontSize="11" fontWeight="900" fill="#222222">BCA</text>
    <line x1="246" y1="122" x2="246" y2="138" stroke="#222222" strokeWidth="2" strokeDasharray="4 2"/>
    <circle cx="246" cy="152" r="14" fill="#FFFFFF" stroke="#222222" strokeWidth="2.5"/>
    <text x="246" y="157" textAnchor="middle" fontSize="9" fontWeight="900" fill="#222222">CODE</text>
  </svg>
);

/** 2022 — Digital Marketing Head */
const Head2022 = () => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="280" height="200" fill="#F4F3EF"/>
    <rect x="17" y="17" width="200" height="150" rx="12" fill="#222222"/>
    <rect x="13" y="13" width="200" height="150" rx="12" fill="#FFFFFF" stroke="#222222" strokeWidth="3"/>
    <rect x="13" y="13" width="200" height="28" rx="12" fill="#222222"/>
    <rect x="13" y="27" width="200" height="14" fill="#222222"/>
    <text x="25" y="31" fontSize="10" fontWeight="900" fill="#FFD45C">BRAND STRATEGY BOARD</text>
    <rect x="20" y="50" width="58" height="42" rx="6" fill="#FFD45C" stroke="#222222" strokeWidth="2.5"/>
    <text x="49" y="68" textAnchor="middle" fontSize="18" fontWeight="900" fill="#222222">UP</text>
    <text x="49" y="84" textAnchor="middle" fontSize="7" fontWeight="900" fill="#222222">REVENUE</text>
    <rect x="84" y="50" width="58" height="42" rx="6" fill="#8FA4D8" stroke="#222222" strokeWidth="2.5"/>
    <text x="113" y="68" textAnchor="middle" fontSize="18" fontWeight="900" fill="#222222">★</text>
    <text x="113" y="84" textAnchor="middle" fontSize="7" fontWeight="900" fill="#222222">BRAND</text>
    <rect x="148" y="50" width="58" height="42" rx="6" fill="#FFFFFF" stroke="#222222" strokeWidth="2.5"/>
    <text x="177" y="68" textAnchor="middle" fontSize="18" fontWeight="900" fill="#222222">⬡</text>
    <text x="177" y="84" textAnchor="middle" fontSize="7" fontWeight="900" fill="#222222">NETWORK</text>
    <rect x="20" y="100" width="186" height="52" rx="6" fill="#F4F3EF" stroke="#222222" strokeWidth="2"/>
    <polyline points="26,144 60,130 95,118 130,108 165,100 198,94" stroke="#FFD45C" strokeWidth="3" fill="none"/>
    <polyline points="26,150 60,144 95,138 130,128 165,120 198,112" stroke="#8FA4D8" strokeWidth="2" fill="none" strokeDasharray="4 2"/>
    <line x1="26" y1="104" x2="26" y2="148" stroke="#222222" strokeWidth="1.5"/>
    <line x1="26" y1="148" x2="200" y2="148" stroke="#222222" strokeWidth="1.5"/>
    <polygon points="237,30 248,55 260,30 256,55 237,55" fill="#FFD45C" stroke="#222222" strokeWidth="2.5"/>
    <circle cx="237" cy="30" r="4" fill="#FFD45C" stroke="#222222" strokeWidth="2"/>
    <circle cx="248" cy="25" r="4" fill="#FFD45C" stroke="#222222" strokeWidth="2"/>
    <circle cx="260" cy="30" r="4" fill="#FFD45C" stroke="#222222" strokeWidth="2"/>
    <circle cx="248" cy="105" r="16" fill="#8FA4D8" stroke="#222222" strokeWidth="2.5"/>
    <circle cx="248" cy="99" r="7" fill="#FFFFFF" stroke="#222222" strokeWidth="2"/>
    <path d="M233,120 Q248,110 263,120" fill="#FFFFFF" stroke="#222222" strokeWidth="2"/>
  </svg>
);

/** 2023 — 3D Animation, VFX and Multimedia */
const VFX2023 = () => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="280" height="200" fill="#F4F3EF"/>
    <polygon points="96,42 150,62 150,122 96,102" fill="#222222" transform="translate(5,5)"/>
    <polygon points="150,62 204,42 204,102 150,122" fill="#222222" transform="translate(5,5)"/>
    <polygon points="96,42 150,22 204,42 150,62" fill="#222222" transform="translate(5,5)"/>
    <polygon points="96,42 150,62 150,122 96,102" fill="#8FA4D8" stroke="#222222" strokeWidth="2.5"/>
    <polygon points="150,62 204,42 204,102 150,122" fill="#FFD45C" stroke="#222222" strokeWidth="2.5"/>
    <polygon points="96,42 150,22 204,42 150,62" fill="#FFFFFF" stroke="#222222" strokeWidth="2.5"/>
    <line x1="30" y1="62" x2="90" y2="62" stroke="#222222" strokeWidth="2" strokeDasharray="6 3" opacity="0.5"/>
    <line x1="30" y1="82" x2="90" y2="82" stroke="#8FA4D8" strokeWidth="2" strokeDasharray="6 3"/>
    <line x1="30" y1="102" x2="90" y2="102" stroke="#FFD45C" strokeWidth="2" strokeDasharray="6 3"/>
    <rect x="18" y="138" width="244" height="30" rx="8" fill="#222222" stroke="#222222" strokeWidth="2"/>
    <rect x="16" y="136" width="244" height="30" rx="8" fill="#FFFFFF" stroke="#222222" strokeWidth="2.5"/>
    <line x1="28" y1="151" x2="252" y2="151" stroke="#222222" strokeWidth="2"/>
    {[40, 80, 120, 160, 200, 240].map((x, i) => (
      <polygon key={`kf${x}`} points={`${x},143 ${x+7},151 ${x},159 ${x-7},151`}
        fill={i % 2 === 0 ? "#FFD45C" : "#8FA4D8"} stroke="#222222" strokeWidth="2"/>
    ))}
    <rect x="214" y="22" width="52" height="38" rx="8" fill="#222222" transform="translate(3,3)"/>
    <rect x="211" y="19" width="52" height="38" rx="8" fill="#FFD45C" stroke="#222222" strokeWidth="2.5"/>
    <circle cx="237" cy="38" r="10" fill="#FFFFFF" stroke="#222222" strokeWidth="2"/>
    <circle cx="237" cy="38" r="5" fill="#222222"/>
    <polygon points="262,26 273,20 273,56 262,50" fill="#FFD45C" stroke="#222222" strokeWidth="2"/>
    <circle cx="30" cy="38" r="16" fill="#222222" transform="translate(3,3)"/>
    <circle cx="30" cy="38" r="16" fill="#8FA4D8" stroke="#222222" strokeWidth="2.5"/>
    <ellipse cx="30" cy="38" rx="16" ry="6" fill="none" stroke="#222222" strokeWidth="1.5"/>
    <line x1="30" y1="22" x2="30" y2="54" stroke="#222222" strokeWidth="1.5"/>
  </svg>
);

/** 2024 — Python/Django Training and Internship */
const Python2024 = () => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="280" height="200" fill="#F4F3EF"/>
    <rect x="107" y="17" width="66" height="166" rx="8" fill="#222222"/>
    <rect x="103" y="13" width="66" height="166" rx="8" fill="#8FA4D8" stroke="#222222" strokeWidth="3"/>
    {[18, 48, 78, 108, 138].map((y, i) => (
      <g key={`srv${y}`}>
        <rect x="108" y={y} width="56" height="24" rx="4" fill="#FFFFFF" stroke="#222222" strokeWidth="2"/>
        <circle cx="118" cy={y + 12} r="4" fill={i % 2 === 0 ? "#FFD45C" : "#8FA4D8"} stroke="#222222" strokeWidth="1.5"/>
        <rect x="126" y={y + 8} width="30" height="4" rx="2" fill="#222222" opacity="0.2"/>
        <rect x="126" y={y + 16} width="20" height="4" rx="2" fill="#222222" opacity="0.2"/>
      </g>
    ))}
    <rect x="108" y="168" width="56" height="8" rx="4" fill="#FFFFFF" stroke="#222222" strokeWidth="2"/>
    <rect x="17" y="62" width="74" height="74" rx="12" fill="#222222" transform="translate(4,4)"/>
    <rect x="17" y="62" width="74" height="74" rx="12" fill="#FFD45C" stroke="#222222" strokeWidth="3"/>
    <path d="M40,88 Q40,76 54,76 L62,76 Q76,76 76,88 L76,98 Q76,110 62,110 L54,110 Q54,122 62,122 L76,122"
      fill="none" stroke="#222222" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="40" cy="88" r="4" fill="#222222"/>
    <circle cx="76" cy="122" r="4" fill="#222222"/>
    <rect x="17" y="145" width="74" height="38" rx="8" fill="#222222" transform="translate(3,3)"/>
    <rect x="17" y="145" width="74" height="38" rx="8" fill="#222222" stroke="#222222" strokeWidth="2"/>
    <text x="24" y="162" fontSize="8" fontFamily="monospace" fill="#FFD45C">def route():</text>
    <text x="24" y="174" fontSize="8" fontFamily="monospace" fill="#8FA4D8">  return view()</text>
    <ellipse cx="219" cy="50" rx="35" ry="12" fill="#222222" transform="translate(3,3)"/>
    <ellipse cx="219" cy="50" rx="35" ry="12" fill="#FFFFFF" stroke="#222222" strokeWidth="2.5"/>
    <rect x="184" y="50" width="70" height="28" fill="#FFFFFF" stroke="#222222" strokeWidth="2.5"/>
    <ellipse cx="219" cy="78" rx="35" ry="12" fill="#FFFFFF" stroke="#222222" strokeWidth="2.5"/>
    <ellipse cx="219" cy="115" rx="28" ry="9" fill="#8FA4D8" stroke="#222222" strokeWidth="2"/>
    <rect x="191" y="115" width="56" height="22" fill="#8FA4D8" stroke="#222222" strokeWidth="2"/>
    <ellipse cx="219" cy="137" rx="28" ry="9" fill="#8FA4D8" stroke="#222222" strokeWidth="2"/>
    <line x1="178" y1="64" x2="171" y2="64" stroke="#222222" strokeWidth="2" strokeDasharray="4 2"/>
    <line x1="178" y1="126" x2="171" y2="126" stroke="#222222" strokeWidth="2" strokeDasharray="4 2"/>
    <line x1="169" y1="64" x2="169" y2="126" stroke="#FFD45C" strokeWidth="2.5"/>
    <rect x="193" y="155" width="52" height="16" rx="4" fill="#FFD45C" stroke="#222222" strokeWidth="2"/>
    <text x="219" y="166" textAnchor="middle" fontSize="7" fontWeight="900" fill="#222222">PostgreSQL</text>
  </svg>
);

/** 2024 — Fluxify MVP */
const Fluxify2024 = () => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="280" height="200" fill="#F4F3EF"/>
    <rect x="17" y="17" width="246" height="166" rx="14" fill="#222222"/>
    <rect x="14" y="14" width="246" height="166" rx="14" fill="#FFFFFF" stroke="#222222" strokeWidth="3"/>
    <rect x="14" y="14" width="246" height="26" rx="14" fill="#222222"/>
    <rect x="14" y="27" width="246" height="13" fill="#222222"/>
    <circle cx="28" cy="27" r="5" fill="#FFD45C" stroke="#222222" strokeWidth="1.5"/>
    <text x="50" y="31" fontSize="9" fontWeight="900" fill="#FFFFFF">FLUXIFY — MVP v0.1</text>
    <rect x="21" y="50" width="74" height="56" rx="7" fill="#FFD45C" stroke="#222222" strokeWidth="2.5"/>
    <text x="58" y="68" textAnchor="middle" fontSize="8" fontWeight="900" fill="#222222">ADS ENGINE</text>
    <rect x="28" y="72" width="60" height="5" rx="2" fill="#222222" opacity="0.3"/>
    <rect x="28" y="81" width="40" height="5" rx="2" fill="#222222" opacity="0.3"/>
    <rect x="28" y="90" width="52" height="10" rx="4" fill="#222222"/>
    <text x="54" y="99" textAnchor="middle" fontSize="7" fontWeight="700" fill="#FFD45C">CONNECT</text>
    <rect x="103" y="50" width="74" height="56" rx="7" fill="#8FA4D8" stroke="#222222" strokeWidth="2.5"/>
    <text x="140" y="68" textAnchor="middle" fontSize="8" fontWeight="900" fill="#222222">ANALYTICS</text>
    <polyline points="110,95 120,85 130,90 140,78 150,82 160,72 170,76" stroke="#222222" strokeWidth="2" fill="none"/>
    <rect x="185" y="50" width="68" height="56" rx="7" fill="#FFFFFF" stroke="#222222" strokeWidth="2.5"/>
    <text x="219" y="68" textAnchor="middle" fontSize="8" fontWeight="900" fill="#222222">CONTENT</text>
    <rect x="192" y="72" width="54" height="7" rx="2" fill="#F4F3EF" stroke="#222222" strokeWidth="1.5"/>
    <rect x="192" y="83" width="54" height="7" rx="2" fill="#F4F3EF" stroke="#222222" strokeWidth="1.5"/>
    <rect x="192" y="94" width="36" height="7" rx="2" fill="#FFD45C" stroke="#222222" strokeWidth="1.5"/>
    <line x1="95" y1="78" x2="103" y2="78" stroke="#222222" strokeWidth="2"/>
    <line x1="177" y1="78" x2="185" y2="78" stroke="#222222" strokeWidth="2"/>
    <rect x="21" y="116" width="116" height="52" rx="7" fill="#F4F3EF" stroke="#222222" strokeWidth="2"/>
    <text x="79" y="132" textAnchor="middle" fontSize="8" fontWeight="900" fill="#222222">USER FLOW</text>
    <rect x="28" y="136" width="28" height="18" rx="4" fill="#FFD45C" stroke="#222222" strokeWidth="1.5"/>
    <text x="42" y="148" textAnchor="middle" fontSize="6" fontWeight="900" fill="#222222">INPUT</text>
    <line x1="56" y1="145" x2="66" y2="145" stroke="#222222" strokeWidth="1.5"/>
    <rect x="66" y="136" width="28" height="18" rx="4" fill="#8FA4D8" stroke="#222222" strokeWidth="1.5"/>
    <text x="80" y="148" textAnchor="middle" fontSize="6" fontWeight="900" fill="#222222">PROC</text>
    <line x1="94" y1="145" x2="104" y2="145" stroke="#222222" strokeWidth="1.5"/>
    <rect x="104" y="136" width="28" height="18" rx="4" fill="#FFFFFF" stroke="#222222" strokeWidth="1.5"/>
    <text x="118" y="148" textAnchor="middle" fontSize="6" fontWeight="900" fill="#222222">OUT</text>
    <rect x="145" y="116" width="108" height="52" rx="7" fill="#222222" stroke="#222222" strokeWidth="2"/>
    <text x="199" y="132" textAnchor="middle" fontSize="8" fontWeight="900" fill="#FFD45C">MVP BUILD LOG</text>
    <text x="152" y="146" fontSize="7" fontFamily="monospace" fill="#8FA4D8">✓ Auth module</text>
    <text x="152" y="157" fontSize="7" fontFamily="monospace" fill="#8FA4D8">✓ Ad pipeline</text>
    <text x="152" y="168" fontSize="7" fontFamily="monospace" fill="#FFFFFF">◌ Dashboard v2</text>
  </svg>
);

/** 2024 — Completed BCA and Advertising Studies */
const BCA2024 = () => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="280" height="200" fill="#F4F3EF"/>
    <rect x="22" y="32" width="160" height="114" rx="12" fill="#222222"/>
    <rect x="18" y="28" width="160" height="114" rx="12" fill="#FFFFFF" stroke="#222222" strokeWidth="3"/>
    <rect x="18" y="28" width="160" height="18" rx="12" fill="#8FA4D8"/>
    <rect x="18" y="38" width="160" height="8" fill="#8FA4D8"/>
    <line x1="18" y1="46" x2="178" y2="46" stroke="#222222" strokeWidth="2"/>
    <text x="98" y="40" textAnchor="middle" fontSize="8" fontWeight="900" fill="#FFFFFF">BACHELOR OF COMPUTER APPLICATIONS</text>
    <text x="98" y="68" textAnchor="middle" fontSize="9" fontWeight="700" fill="#222222">THIS IS TO CERTIFY THAT</text>
    <rect x="34" y="74" width="110" height="7" rx="3" fill="#222222" opacity="0.3"/>
    <text x="98" y="95" textAnchor="middle" fontSize="8" fontWeight="700" fill="#222222">HAS SUCCESSFULLY COMPLETED</text>
    <text x="98" y="108" textAnchor="middle" fontSize="7" fontWeight="700" fill="#8FA4D8">Advertising and Media Visualization</text>
    <text x="98" y="120" textAnchor="middle" fontSize="7" fontWeight="700" fill="#8FA4D8">Consumer Psychology Research</text>
    <line x1="34" y1="133" x2="162" y2="133" stroke="#222222" strokeWidth="1"/>
    <circle cx="98" cy="155" r="16" fill="#222222" transform="translate(3,3)"/>
    <circle cx="98" cy="155" r="16" fill="#FFD45C" stroke="#222222" strokeWidth="3"/>
    <text x="98" y="151" textAnchor="middle" fontSize="8" fontWeight="900" fill="#222222">BCA</text>
    <text x="98" y="162" textAnchor="middle" fontSize="7" fontWeight="900" fill="#222222">2024</text>
    <rect x="192" y="28" width="72" height="54" rx="8" fill="#FFD45C" stroke="#222222" strokeWidth="2.5" transform="rotate(-3 228 55)"/>
    <text x="228" y="50" textAnchor="middle" fontSize="8" fontWeight="900" fill="#222222" transform="rotate(-3 228 55)">BRAND RECALL</text>
    <text x="228" y="66" textAnchor="middle" fontSize="24" fontWeight="900" fill="#222222" transform="rotate(-3 228 55)">94%</text>
    <rect x="196" y="94" width="72" height="54" rx="8" fill="#8FA4D8" stroke="#222222" strokeWidth="2.5" transform="rotate(2 232 121)"/>
    <text x="232" y="116" textAnchor="middle" fontSize="8" fontWeight="900" fill="#222222" transform="rotate(2 232 121)">CONSUMER</text>
    <text x="232" y="128" textAnchor="middle" fontSize="7" fontWeight="900" fill="#222222" transform="rotate(2 232 121)">PSYCHOLOGY</text>
    <circle cx="232" cy="140" r="6" fill="#FFD45C" stroke="#222222" strokeWidth="1.5" transform="rotate(2 232 121)"/>
    <rect x="196" y="158" width="72" height="22" rx="6" fill="#222222" stroke="#222222" strokeWidth="2"/>
    <text x="232" y="172" textAnchor="middle" fontSize="8" fontFamily="monospace" fill="#FFD45C">GRADUATED 2024</text>
  </svg>
);

/** 2024 — Franjex Creative Director */
const Franjex2024 = () => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="280" height="200" fill="#F4F3EF"/>
    <rect x="17" y="12" width="180" height="130" rx="12" fill="#222222"/>
    <rect x="13" y="8" width="180" height="130" rx="12" fill="#FFFFFF" stroke="#222222" strokeWidth="3"/>
    <rect x="13" y="8" width="180" height="24" rx="12" fill="#222222"/>
    <rect x="13" y="20" width="180" height="12" fill="#222222"/>
    <text x="24" y="23" fontSize="9" fontWeight="900" fill="#FFD45C">CREATIVE DIRECTION — FRANJEX</text>
    <rect x="19" y="38" width="55" height="55" rx="6" fill="#FFD45C" stroke="#222222" strokeWidth="2"/>
    <text x="46" y="58" textAnchor="middle" fontSize="24" fontWeight="900" fill="#222222">F</text>
    <text x="46" y="74" textAnchor="middle" fontSize="7" fontWeight="900" fill="#222222">WORDMARK</text>
    <rect x="44" y="80" width="4" height="4" fill="#222222"/>
    <rect x="50" y="80" width="4" height="4" fill="#222222"/>
    <rect x="56" y="80" width="4" height="4" fill="#222222"/>
    <rect x="80" y="38" width="55" height="25" rx="6" fill="#8FA4D8" stroke="#222222" strokeWidth="2"/>
    <text x="107" y="55" textAnchor="middle" fontSize="9" fontWeight="900" fill="#222222">CAMPAIGN 01</text>
    <rect x="80" y="68" width="55" height="25" rx="6" fill="#222222" stroke="#222222" strokeWidth="2"/>
    <text x="107" y="85" textAnchor="middle" fontSize="9" fontWeight="900" fill="#FFD45C">CAMPAIGN 02</text>
    <rect x="141" y="38" width="45" height="55" rx="6" fill="#F4F3EF" stroke="#222222" strokeWidth="2"/>
    {["#222222","#FFD45C","#8FA4D8","#FFFFFF"].map((c, i) => (
      <rect key={`sw${i}`} x="147" y={44 + i*12} width="33" height="9" rx="2" fill={c} stroke="#222222" strokeWidth="1"/>
    ))}
    <rect x="19" y="100" width="167" height="30" rx="6" fill="#F4F3EF" stroke="#222222" strokeWidth="2"/>
    <text x="24" y="112" fontSize="16" fontWeight="900" fontFamily="serif" fill="#222222">Aa Brand Voice</text>
    <text x="24" y="124" fontSize="8" fontWeight="700" fill="#555555">STRATEGIC · PREMIUM · BOLD · HUMAN</text>
    <rect x="204" y="8" width="63" height="130" rx="12" fill="#FFD45C" stroke="#222222" strokeWidth="2.5"/>
    <text x="235" y="50" textAnchor="middle" fontSize="8" fontWeight="900" fill="#222222">CREATIVE</text>
    <text x="235" y="62" textAnchor="middle" fontSize="8" fontWeight="900" fill="#222222">→ BRIEF</text>
    <line x1="225" y1="75" x2="245" y2="75" stroke="#222222" strokeWidth="1.5"/>
    <text x="235" y="90" textAnchor="middle" fontSize="8" fontWeight="900" fill="#222222">CONCEPT</text>
    <text x="235" y="102" textAnchor="middle" fontSize="8" fontWeight="900" fill="#222222">→ BUILD</text>
    <line x1="225" y1="115" x2="245" y2="115" stroke="#222222" strokeWidth="1.5"/>
    <text x="235" y="128" textAnchor="middle" fontSize="8" fontWeight="900" fill="#222222">→ LAUNCH</text>
    <rect x="13" y="148" width="255" height="36" rx="10" fill="#222222" stroke="#222222" strokeWidth="2"/>
    <text x="140" y="162" textAnchor="middle" fontSize="9" fontWeight="900" fill="#8FA4D8">CREATIVE DIRECTOR</text>
    <text x="140" y="176" textAnchor="middle" fontSize="7" fontWeight="700" fill="#FFFFFF">Strategy meets technological execution</text>
  </svg>
);

/** 2025 — MERN Stack and Founding Zywo */
const MERN2025 = () => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="280" height="200" fill="#F4F3EF"/>
    <rect x="82" y="15" width="116" height="30" rx="8" fill="#222222" transform="translate(4,4)"/>
    <rect x="82" y="15" width="116" height="30" rx="8" fill="#FFD45C" stroke="#222222" strokeWidth="2.5"/>
    <text x="140" y="35" textAnchor="middle" fontSize="11" fontWeight="900" fill="#222222">MONGODB</text>
    <rect x="135" y="45" width="10" height="14" fill="#222222" opacity="0.8"/>
    <rect x="62" y="59" width="156" height="30" rx="8" fill="#222222" transform="translate(4,4)"/>
    <rect x="62" y="59" width="156" height="30" rx="8" fill="#8FA4D8" stroke="#222222" strokeWidth="2.5"/>
    <text x="140" y="79" textAnchor="middle" fontSize="11" fontWeight="900" fill="#222222">EXPRESS.JS</text>
    <rect x="135" y="89" width="10" height="14" fill="#222222" opacity="0.8"/>
    <rect x="42" y="103" width="196" height="30" rx="8" fill="#222222" transform="translate(4,4)"/>
    <rect x="42" y="103" width="196" height="30" rx="8" fill="#FFFFFF" stroke="#222222" strokeWidth="2.5"/>
    <text x="140" y="123" textAnchor="middle" fontSize="11" fontWeight="900" fill="#222222">REACT.JS</text>
    <rect x="135" y="133" width="10" height="14" fill="#222222" opacity="0.8"/>
    <rect x="22" y="147" width="236" height="30" rx="8" fill="#222222" transform="translate(4,4)"/>
    <rect x="22" y="147" width="236" height="30" rx="8" fill="#222222" stroke="#222222" strokeWidth="2.5"/>
    <text x="140" y="167" textAnchor="middle" fontSize="11" fontWeight="900" fill="#FFD45C">NODE.JS</text>
    <circle cx="245" cy="44" r="22" fill="#222222" transform="translate(3,3)"/>
    <circle cx="245" cy="44" r="22" fill="#FFD45C" stroke="#222222" strokeWidth="2.5"/>
    <text x="245" y="50" textAnchor="middle" fontSize="14" fontWeight="900" fill="#222222">Z</text>
    <circle cx="35" cy="44" r="22" fill="#222222" transform="translate(3,3)"/>
    <circle cx="35" cy="44" r="22" fill="#8FA4D8" stroke="#222222" strokeWidth="2.5"/>
    <text x="35" y="50" textAnchor="middle" fontSize="9" fontWeight="900" fill="#222222">ZYWO</text>
    <path d="M14,185 Q140,196 266,185" fill="none" stroke="#FFD45C" strokeWidth="3" strokeLinecap="round"/>
    <text x="140" y="197" textAnchor="middle" fontSize="7" fontWeight="900" fill="#222222">FOUNDED 2025</text>
  </svg>
);

/** 2026 — Zywo Strategy-First Creative Agency */
const Zywo2026 = () => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="280" height="200" fill="#F4F3EF"/>
    <text x="14" y="178" fontSize="200" fontWeight="900" fontFamily="sans-serif" fill="#FFD45C" opacity="0.12">Z</text>
    <rect x="17" y="17" width="246" height="166" rx="14" fill="#222222"/>
    <rect x="14" y="14" width="246" height="166" rx="14" fill="#FFFFFF" stroke="#222222" strokeWidth="3"/>
    <rect x="14" y="14" width="246" height="30" rx="14" fill="#222222"/>
    <rect x="14" y="30" width="246" height="14" fill="#222222"/>
    <text x="137" y="33" textAnchor="middle" fontSize="9" fontWeight="900" fill="#FFD45C">ZYWO — STRATEGY-FIRST CREATIVE AGENCY</text>
    <rect x="21" y="52" width="56" height="115" rx="8" fill="#FFD45C" stroke="#222222" strokeWidth="2.5"/>
    <text x="49" y="75" textAnchor="middle" fontSize="8" fontWeight="900" fill="#222222">BRAND</text>
    <text x="49" y="87" textAnchor="middle" fontSize="8" fontWeight="900" fill="#222222">STRATEGY</text>
    <rect x="28" y="96" width="42" height="4" rx="2" fill="#222222" opacity="0.3"/>
    <rect x="28" y="104" width="32" height="4" rx="2" fill="#222222" opacity="0.3"/>
    <rect x="28" y="112" width="38" height="4" rx="2" fill="#222222" opacity="0.3"/>
    <text x="49" y="155" textAnchor="middle" fontSize="22" fontWeight="900" fill="#222222">01</text>
    <rect x="83" y="52" width="56" height="115" rx="8" fill="#8FA4D8" stroke="#222222" strokeWidth="2.5"/>
    <text x="111" y="75" textAnchor="middle" fontSize="8" fontWeight="900" fill="#222222">CREATIVE</text>
    <text x="111" y="87" textAnchor="middle" fontSize="8" fontWeight="900" fill="#222222">EXECUTION</text>
    <rect x="90" y="96" width="42" height="4" rx="2" fill="#222222" opacity="0.3"/>
    <rect x="90" y="104" width="32" height="4" rx="2" fill="#222222" opacity="0.3"/>
    <rect x="90" y="112" width="38" height="4" rx="2" fill="#222222" opacity="0.3"/>
    <text x="111" y="155" textAnchor="middle" fontSize="22" fontWeight="900" fill="#222222">02</text>
    <rect x="145" y="52" width="56" height="115" rx="8" fill="#FFFFFF" stroke="#222222" strokeWidth="2.5"/>
    <text x="173" y="75" textAnchor="middle" fontSize="8" fontWeight="900" fill="#222222">DIGITAL</text>
    <text x="173" y="87" textAnchor="middle" fontSize="8" fontWeight="900" fill="#222222">PRODUCTS</text>
    <rect x="152" y="96" width="42" height="4" rx="2" fill="#222222" opacity="0.3"/>
    <rect x="152" y="104" width="32" height="4" rx="2" fill="#222222" opacity="0.3"/>
    <rect x="152" y="112" width="38" height="4" rx="2" fill="#222222" opacity="0.3"/>
    <text x="173" y="155" textAnchor="middle" fontSize="22" fontWeight="900" fill="#222222">03</text>
    <rect x="207" y="52" width="46" height="115" rx="8" fill="#222222" stroke="#222222" strokeWidth="2.5"/>
    <text x="230" y="75" textAnchor="middle" fontSize="8" fontWeight="900" fill="#FFD45C">GLOBAL</text>
    <text x="230" y="87" textAnchor="middle" fontSize="8" fontWeight="900" fill="#8FA4D8">BRANDS</text>
    <circle cx="230" cy="130" r="16" fill="none" stroke="#FFD45C" strokeWidth="2"/>
    <ellipse cx="230" cy="130" rx="16" ry="8" fill="none" stroke="#FFD45C" strokeWidth="1.5"/>
    <line x1="230" y1="114" x2="230" y2="146" stroke="#FFD45C" strokeWidth="1.5"/>
    <line x1="214" y1="130" x2="246" y2="130" stroke="#FFD45C" strokeWidth="1.5"/>
    <text x="230" y="160" textAnchor="middle" fontSize="22" fontWeight="900" fill="#FFD45C">04</text>
  </svg>
);

/** 2026 — Co-founded Fluxiflow */
const Fluxiflow2026 = () => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="280" height="200" fill="#F4F3EF"/>
    <circle cx="140" cy="100" r="28" fill="#222222" transform="translate(4,4)"/>
    <circle cx="140" cy="100" r="28" fill="#FFD45C" stroke="#222222" strokeWidth="3"/>
    <text x="140" y="96" textAnchor="middle" fontSize="8" fontWeight="900" fill="#222222">FLUXIFLOW</text>
    <text x="140" y="108" textAnchor="middle" fontSize="8" fontWeight="700" fill="#222222">CORE</text>
    <line x1="140" y1="72" x2="140" y2="50" stroke="#222222" strokeWidth="2" strokeDasharray="4 2"/>
    <rect x="116" y="22" width="48" height="28" rx="8" fill="#8FA4D8" stroke="#222222" strokeWidth="2.5"/>
    <text x="140" y="40" textAnchor="middle" fontSize="8" fontWeight="900" fill="#222222">CRM</text>
    <line x1="163" y1="79" x2="186" y2="62" stroke="#222222" strokeWidth="2" strokeDasharray="4 2"/>
    <rect x="188" y="30" width="60" height="28" rx="8" fill="#FFD45C" stroke="#222222" strokeWidth="2.5"/>
    <text x="218" y="48" textAnchor="middle" fontSize="8" fontWeight="900" fill="#222222">ANALYTICS</text>
    <line x1="168" y1="100" x2="200" y2="100" stroke="#222222" strokeWidth="2" strokeDasharray="4 2"/>
    <rect x="200" y="86" width="62" height="28" rx="8" fill="#FFFFFF" stroke="#222222" strokeWidth="2.5"/>
    <text x="231" y="104" textAnchor="middle" fontSize="8" fontWeight="900" fill="#222222">BILLING</text>
    <line x1="163" y1="121" x2="186" y2="138" stroke="#222222" strokeWidth="2" strokeDasharray="4 2"/>
    <rect x="176" y="134" width="80" height="28" rx="8" fill="#222222" stroke="#222222" strokeWidth="2.5"/>
    <text x="216" y="152" textAnchor="middle" fontSize="8" fontWeight="900" fill="#FFD45C">AUTOMATION</text>
    <line x1="140" y1="128" x2="140" y2="150" stroke="#222222" strokeWidth="2" strokeDasharray="4 2"/>
    <rect x="106" y="150" width="68" height="28" rx="8" fill="#8FA4D8" stroke="#222222" strokeWidth="2.5"/>
    <text x="140" y="168" textAnchor="middle" fontSize="8" fontWeight="900" fill="#222222">WORKFLOWS</text>
    <line x1="117" y1="121" x2="94" y2="138" stroke="#222222" strokeWidth="2" strokeDasharray="4 2"/>
    <rect x="20" y="134" width="76" height="28" rx="8" fill="#FFD45C" stroke="#222222" strokeWidth="2.5"/>
    <text x="58" y="152" textAnchor="middle" fontSize="8" fontWeight="900" fill="#222222">INTEGRATIONS</text>
    <line x1="112" y1="100" x2="80" y2="100" stroke="#222222" strokeWidth="2" strokeDasharray="4 2"/>
    <rect x="18" y="86" width="62" height="28" rx="8" fill="#FFFFFF" stroke="#222222" strokeWidth="2.5"/>
    <text x="49" y="104" textAnchor="middle" fontSize="8" fontWeight="900" fill="#222222">TEAM HUB</text>
    <line x1="117" y1="79" x2="94" y2="62" stroke="#222222" strokeWidth="2" strokeDasharray="4 2"/>
    <rect x="20" y="30" width="68" height="28" rx="8" fill="#222222" stroke="#222222" strokeWidth="2.5"/>
    <text x="54" y="48" textAnchor="middle" fontSize="8" fontWeight="900" fill="#8FA4D8">REPORTING</text>
  </svg>
);

export const illustrations = {
  design2019:    <Design2019 />,
  marketing2020: <Marketing2020 />,
  uxui2021:      <UXUI2021 />,
  head2022:      <Head2022 />,
  vfx2023:       <VFX2023 />,
  python2024:    <Python2024 />,
  fluxify2024:   <Fluxify2024 />,
  bca2024:       <BCA2024 />,
  franjex2024:   <Franjex2024 />,
  mern2025:      <MERN2025 />,
  zywo2026:      <Zywo2026 />,
  fluxiflow2026: <Fluxiflow2026 />,
};
