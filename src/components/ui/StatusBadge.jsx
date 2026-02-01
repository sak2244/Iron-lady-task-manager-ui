import { FiClock, FiPlay, FiCheckCircle } from "react-icons/fi";

export default function StatusBadge({ status }) {
  const config = {
    New: { icon: FiClock, style: "bg-amber-100 text-amber-700" },
    "In Progress": { icon: FiPlay, style: "bg-blue-100 text-blue-700" },
    Completed: {
      icon: FiCheckCircle,
      style: "bg-emerald-100 text-emerald-700",
    },
  };

  const Icon = config[status].icon;

  return (
    <span
      className={`inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full text-xs ${config[status].style}`}
    >
      <Icon size={12} />
      {status}
    </span>
  );
}
