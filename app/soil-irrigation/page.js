// app/soil-irrigation/page.js
"use client";

import { Sprout } from "lucide-react";

const data = {
  zones: [
    { name: "Zone A - Tomatoes", value: 45, threshold: 40 },
    { name: "Zone B - Peppers", value: 52, threshold: 35 },
    { name: "Zone C - Strawberries", value: 38, threshold: 40 },
  ],
};

export default function SoilIrrigationPage() {
  return (
    <div className="bg-white p-8 rounded-[3rem] shadow-sm">
      <h2 className="text-2xl font-bold text-[#005C3F] mb-6 flex items-center gap-2">
        <Sprout className="text-[#005C3F]" /> Soil & Irrigation
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
  );
}
