// app/alerts-center/page.js
"use client";

import { ShieldCheck } from "lucide-react";

export default function AlertsCenterPage() {
  return (
    <div className="bg-white p-8 rounded-[3rem] shadow-sm">
      <h2 className="text-2xl font-bold text-[#005C3F] mb-6 flex items-center gap-2">
        <ShieldCheck className="text-[#005C3F]" /> Alerts Center
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
  );
}
