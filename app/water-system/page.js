// app/water-system/page.js
"use client";

import { Droplets, Activity, Thermometer } from "lucide-react";

const StatCard = ({ icon, label, value, sub, color }) => (
  <div
    className={`${color} p-8 rounded-[2.5rem] text-white shadow-xl flex flex-col justify-between h-48 hover:scale-[1.02] transition-transform`}
  >
    <div className="bg-white/20 w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner">
      {icon}
    </div>
    <div>
      <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">
        {label}
      </p>
      <h4 className="text-3xl font-black">{value}</h4>
      <p className="text-[10px] text-white/40 font-medium mt-1">{sub}</p>
    </div>
  </div>
);

const data = { water: { tank: 85, ph: 6.4, temp: 19.0 } };

export default function WaterSystemPage() {
  return (
    <div className="bg-white p-8 rounded-[3rem] shadow-sm">
      <h2 className="text-2xl font-bold text-[#005C3F] mb-6">Water System</h2>
      <div className="grid grid-cols-2 gap-6">
        <StatCard
          icon={<Droplets />}
          label="Tank Level"
          value={`${data.water.tank}%`}
          sub="800L Left"
          color="bg-[#005C3F]"
        />
        <StatCard
          icon={<Activity />}
          label="pH Level"
          value={data.water.ph}
          sub="Perfect"
          color="bg-[#4A6359]"
        />
        <StatCard
          icon={<Thermometer />}
          label="Water Temp"
          value={`${data.water.temp}°C`}
          sub="Normal"
          color="bg-slate-900"
        />
      </div>
    </div>
  );
}
