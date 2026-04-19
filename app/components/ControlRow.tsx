export function ControlRow({ icon, label, state, active }: any) {
  return (
    <div
      className={`flex items-center justify-between p-5 rounded-[2rem] border transition-all ${active ? "bg-emerald-50/50 border-emerald-100" : "bg-slate-50 border-slate-100"}`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`p-3 rounded-xl ${active ? "bg-[#005C3F] text-white" : "bg-white text-slate-400 shadow-sm"}`}
        >
          {icon}
        </div>
        <span className="text-sm font-bold text-slate-700">{label}</span>
      </div>
      <span
        className={`text-[10px] font-black px-3 py-1 rounded-full uppercase ${active ? "bg-[#005C3F]/20 text-[#005C3F]" : "bg-slate-200 text-slate-500"}`}
      >
        {state}
      </span>
    </div>
  );
}
