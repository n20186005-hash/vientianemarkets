import{c as a,j as e}from"./createLucideIcon.Cs67O4nw.js";import{r as n}from"./index.DK-fsZOb.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],p=a("Moon",m);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],x=a("Sun",u);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M12 10V2",key:"16sf7g"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]],f=a("Sunset",y);function w({tWeather:c,tSunset:o,tBlueHour:d}){const[s,i]=n.useState(null);return n.useEffect(()=>{async function l(){try{const t=await(await fetch("https://api.open-meteo.com/v1/forecast?latitude=17.9653&longitude=102.6143&current=temperature_2m,is_day&daily=sunset&timezone=Asia%2FBangkok")).json();if(t&&t.current&&t.daily){const h=new Date(t.daily.sunset[0]);i({temp:Math.round(t.current.temperature_2m),isDay:t.current.is_day===1,sunset:h.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1})})}}catch(r){console.error("Failed to fetch weather data",r)}}l()},[]),s?e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 bg-slate-900/80 backdrop-blur-md border border-slate-700 p-4 rounded-2xl shadow-lg text-white",children:[e.jsxs("div",{className:"flex items-center gap-3 pr-4 sm:border-r border-slate-700/50",children:[s.isDay?e.jsx(x,{className:"w-8 h-8 text-yellow-400"}):e.jsx(p,{className:"w-8 h-8 text-blue-300"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-slate-300 font-medium uppercase tracking-wider",children:c}),e.jsxs("p",{className:"text-2xl font-bold text-white",children:[s.temp,"°C"]})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(f,{className:"w-8 h-8 text-sunset-orange"}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-xs text-slate-300 font-medium uppercase tracking-wider",children:[o," & ",d]}),e.jsx("p",{className:"text-2xl font-bold text-white",children:s.sunset})]})]})]}):null}export{w as default};
