export function NavItem({ icon, label, active = false }: any) {
  return (
    <div
      className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl cursor-pointer transition-all ${active ? "bg-[#005C3F] text-white shadow-xl shadow-emerald-100" : "text-slate-400 hover:bg-slate-50 hover:text-slate-600"}`}
    >
      {icon} <span className="font-bold text-sm tracking-tight">{label}</span>
    </div>
  );
}
