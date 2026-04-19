export function StatCard({ icon, label, value, sub, color }: any) {
  return (
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
}
