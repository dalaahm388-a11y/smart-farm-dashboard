// app/page.js
"use client";

import {
  Zap,
  Thermometer,
  Droplets,
  Activity,
  Sprout,
  Fan,
  Power,
  Wind,
  Lock,
} from "lucide-react";

// تعريف StatCard جوا الصفحة نفسها
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

// تعريف ControlRow جوا الصفحة نفسها
const ControlRow = ({ icon, label, state, active }) => (
  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
    <div className="flex items-center gap-3">
      <div className="text-[#005C3F]">{icon}</div>
      <span className="font-bold text-slate-700">{label}</span>
    </div>
    <div
      className={`px-3 py-1 rounded-full text-xs font-bold ${
        active ? "bg-green-100 text-green-700" : "bg-slate-200 text-slate-500"
      }`}
    >
      {state}
    </div>
  </div>
);

const data = {
  house: {
    location: "Syria - Damascus",
    status: "Online",
    uptime: "15 days",
  },
  env: { temp: 24.5, hum: 62, co2: 415, aqi: 45, light: 12000 },
  water: { tank: 85, ph: 6.4, temp: 19.0 },
  energy: { solar: 450, battery: 92, consumption: 120 },
  zones: [
    { name: "Zone A - Tomatoes", value: 45, threshold: 40 },
    { name: "Zone B - Peppers", value: 52, threshold: 35 },
    { name: "Zone C - Strawberries", value: 38, threshold: 40 },
  ],
  actuators: {
    windows: "Closed",
    pump: "OFF",
    fans: "ON",
    door: "Locked",
  },
};

export default function OverviewPage() {
  return (
    <>
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-500 font-medium">
            {data.house.location} • {data.house.status}
          </p>
        </div>
        <div className="flex gap-4 bg-white p-2 rounded-2xl shadow-sm border border-slate-100">
          <div className="px-4 py-2 text-center border-r border-slate-100">
            <p className="text-[10px] text-slate-400 font-bold uppercase">
              Uptime
            </p>
            <p className="text-sm font-bold text-[#005C3F]">
              {data.house.uptime}
            </p>
          </div>
          <button className="bg-[#005C3F] text-white px-6 py-2 rounded-xl font-bold text-sm shadow-lg">
            Live Feed
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          icon={<Zap />}
          label="Power Input"
          value={`${data.energy.solar}W`}
          sub="Solar Active"
          color="bg-[#005C3F]"
        />
        <StatCard
          icon={<Thermometer />}
          label="Air Temp"
          value={`${data.env.temp}°C`}
          sub="Optimal"
          color="bg-[#4A6359]"
        />
        <StatCard
          icon={<Droplets />}
          label="Tank Level"
          value={`${data.water.tank}%`}
          sub="800L Left"
          color="bg-slate-900"
        />
        <StatCard
          icon={<Activity />}
          label="Air Quality"
          value={data.env.aqi}
          sub="Good (AQI)"
          color="bg-[#10B981]"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100">
          <h3 className="font-bold text-xl mb-8 flex items-center gap-2">
            <Sprout className="text-[#005C3F]" /> Soil Moisture Analysis
          </h3>
          <div className="space-y-6">
            {data.zones.map((z, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2 items-end">
                  <div>
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-1">
                      Zone {i + 1}
                    </span>
                    <span className="text-slate-700 font-bold">{z.name}</span>
                  </div>
                  <span
                    className={`text-lg font-black ${
                      z.value < z.threshold ? "text-red-500" : "text-[#005C3F]"
                    }`}
                  >
                    {z.value}%
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-1000 rounded-full ${
                      z.value < z.threshold ? "bg-red-500" : "bg-[#005C3F]"
                    }`}
                    style={{ width: `${z.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col">
          <h3 className="font-bold text-xl mb-8">System Actuators</h3>
          <div className="grid grid-cols-1 gap-4 flex-1">
            <ControlRow
              icon={<Fan />}
              label="Cooling Fans"
              state={data.actuators.fans}
              active={data.actuators.fans === "ON"}
            />
            <ControlRow
              icon={<Power />}
              label="Irrigation Pump"
              state={data.actuators.pump}
              active={data.actuators.pump === "ON"}
            />
            <ControlRow
              icon={<Wind />}
              label="Windows"
              state={data.actuators.windows}
              active={data.actuators.windows === "Open"}
            />
            <ControlRow
              icon={<Lock />}
              label="Main Door"
              state={data.actuators.door}
              active={data.actuators.door === "Locked"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
