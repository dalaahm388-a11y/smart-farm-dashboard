"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Thermometer,
  Sprout,
  Droplets,
  Zap,
  ShieldCheck,
  CloudSun,
  Settings,
  Activity,
  Wind,
  Lock,
  Power,
  Fan,
} from "lucide-react";

import { NavItem } from "./components/NavItem";
import { StatCard } from "./components/StatCard";
import { ControlRow } from "./components/ControlRow";

// البيانات الثابتة - جاهزة للاستبدال بـ API لاحقاً
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

export default function Home() {
  // تحديد العنصر النشط
  const [activeMenu, setActiveMenu] = useState("Overview");

  // قائمة العناصر
  const mainMenuItems = [
    { id: "Overview", icon: <LayoutDashboard size={20} />, label: "Overview" },
    { id: "Climate", icon: <Thermometer size={20} />, label: "Climate & Air" },
    { id: "Soil", icon: <Sprout size={20} />, label: "Soil & Irrigation" },
    { id: "Water", icon: <Droplets size={20} />, label: "Water System" },
    { id: "Energy", icon: <Zap size={20} />, label: "Energy Hub" },
  ];

  const securityMenuItems = [
    { id: "Alerts", icon: <ShieldCheck size={20} />, label: "Alerts Center" },
    { id: "Weather", icon: <CloudSun size={20} />, label: "Weather Forecast" },
  ];

  return (
    <div className="flex min-h-screen bg-[#F0F4F2] text-slate-800 font-sans p-6 gap-6">
      {/* Sidebar */}
      <aside className="w-72 bg-white rounded-[2.5rem] p-8 shadow-sm flex flex-col border border-slate-100">
        <div className="flex items-center gap-3 mb-10 font-bold text-2xl text-[#005C3F]">
          <div className="bg-[#005C3F] p-2 rounded-xl text-white">
            <Sprout size={24} />
          </div>
          SmartFarm
        </div>

        <nav className="space-y-1 flex-1">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2">
            Main Menu
          </p>
          {mainMenuItems.map((item) => (
            <div key={item.id} onClick={() => setActiveMenu(item.id)}>
              <NavItem
                icon={item.icon}
                label={item.label}
                active={activeMenu === item.id}
              />
            </div>
          ))}

          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-8 mb-4 px-2">
            Security
          </p>
          {securityMenuItems.map((item) => (
            <div key={item.id} onClick={() => setActiveMenu(item.id)}>
              <NavItem
                icon={item.icon}
                label={item.label}
                active={activeMenu === item.id}
              />
            </div>
          ))}
        </nav>

        <div className="pt-6 border-t border-slate-100">
          <div onClick={() => setActiveMenu("Settings")}>
            <NavItem
              icon={<Settings size={20} />}
              label="Settings"
              active={activeMenu === "Settings"}
            />
          </div>
        </div>
      </aside>

      {/* Main Content - يتغير حسب العنصر المختار */}
      <main className="flex-1 space-y-6">
        {activeMenu === "Overview" && (
          <>
            {/* Header */}
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

            {/* Stats Cards */}
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

            {/* Soil & Actuators */}
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
                          <span className="text-slate-700 font-bold">
                            {z.name}
                          </span>
                        </div>
                        <span
                          className={`text-lg font-black ${z.value < z.threshold ? "text-red-500" : "text-[#005C3F]"}`}
                        >
                          {z.value}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all duration-1000 rounded-full ${z.value < z.threshold ? "bg-red-500" : "bg-[#005C3F]"}`}
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
        )}

        {activeMenu === "Climate" && (
          <div className="bg-white p-8 rounded-[3rem] shadow-sm">
            <h2 className="text-2xl font-bold text-[#005C3F] mb-6">
              Climate & Air Control
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <StatCard
                icon={<Thermometer />}
                label="Temperature"
                value={`${data.env.temp}°C`}
                sub="Optimal"
                color="bg-[#005C3F]"
              />
              <StatCard
                icon={<Droplets />}
                label="Humidity"
                value={`${data.env.hum}%`}
                sub="Warning High"
                color="bg-[#4A6359]"
              />
              <StatCard
                icon={<Activity />}
                label="CO2 Level"
                value={`${data.env.co2} ppm`}
                sub="Normal"
                color="bg-slate-900"
              />
              <StatCard
                icon={<Wind />}
                label="Air Quality"
                value={data.env.aqi}
                sub="Good AQI"
                color="bg-[#10B981]"
              />
            </div>
          </div>
        )}

        {activeMenu === "Soil" && (
          <div className="bg-white p-8 rounded-[3rem] shadow-sm">
            <h2 className="text-2xl font-bold text-[#005C3F] mb-6">
              Soil & Irrigation
            </h2>
            <div className="space-y-6">
              {data.zones.map((z, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold">{z.name}</span>
                    <span
                      className={`font-bold ${z.value < z.threshold ? "text-red-500" : "text-[#005C3F]"}`}
                    >
                      {z.value}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${z.value < z.threshold ? "bg-red-500" : "bg-[#005C3F]"}`}
                      style={{ width: `${z.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeMenu === "Water" && (
          <div className="bg-white p-8 rounded-[3rem] shadow-sm">
            <h2 className="text-2xl font-bold text-[#005C3F] mb-6">
              Water System
            </h2>
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
        )}

        {activeMenu === "Energy" && (
          <div className="bg-white p-8 rounded-[3rem] shadow-sm">
            <h2 className="text-2xl font-bold text-[#005C3F] mb-6">
              Energy Hub
            </h2>
            <div className="grid grid-cols-3 gap-6">
              <StatCard
                icon={<Zap />}
                label="Solar Input"
                value={`${data.energy.solar}W`}
                sub="Active"
                color="bg-[#005C3F]"
              />
              <StatCard
                icon={<Activity />}
                label="Battery"
                value={`${data.energy.battery}%`}
                sub="Charged"
                color="bg-[#4A6359]"
              />
              <StatCard
                icon={<Power />}
                label="Consumption"
                value={`${data.energy.consumption}W`}
                sub="Current"
                color="bg-slate-900"
              />
            </div>
          </div>
        )}

        {activeMenu === "Alerts" && (
          <div className="bg-white p-8 rounded-[3rem] shadow-sm">
            <h2 className="text-2xl font-bold text-[#005C3F] mb-6">
              Alerts Center
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-2xl border border-green-200">
                <p className="font-bold text-green-700">✅ No active alerts</p>
                <p className="text-sm text-green-600">
                  All systems are operating normally
                </p>
              </div>
            </div>
          </div>
        )}

        {activeMenu === "Weather" && (
          <div className="bg-white p-8 rounded-[3rem] shadow-sm">
            <h2 className="text-2xl font-bold text-[#005C3F] mb-6">
              Weather Forecast
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <StatCard
                icon={<CloudSun />}
                label="Outside Temp"
                value="18°C"
                sub="Cool"
                color="bg-[#005C3F]"
              />
              <StatCard
                icon={<Wind />}
                label="Wind Speed"
                value="12 km/h"
                sub="Moderate"
                color="bg-[#4A6359]"
              />
              <StatCard
                icon={<Droplets />}
                label="Expected Rain"
                value="Low"
                sub="10% chance"
                color="bg-slate-900"
              />
            </div>
          </div>
        )}

        {activeMenu === "Settings" && (
          <div className="bg-white p-8 rounded-[3rem] shadow-sm">
            <h2 className="text-2xl font-bold text-[#005C3F] mb-6">Settings</h2>
            <p className="text-slate-500">
              System settings and preferences will be available soon.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
