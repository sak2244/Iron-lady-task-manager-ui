export default function StatsCard({
  title,
  value,
  icon: Icon,
  iconBg,
  iconColor,
}) {
  return (
    <div className="flex items-center justify-between bg-white border rounded-xl px-6 py-5">
      <div>
        <p className="text-sm text-slate-500">{title}</p>
        <h2 className="text-2xl font-semibold text-slate-900">{value}</h2>
      </div>

      <div className={`p-3 rounded-lg ${iconBg}`}>
        <Icon className={`text-xl ${iconColor}`} />
      </div>
    </div>
  );
}
