import { FiClipboard, FiCheckCircle, FiZap } from "react-icons/fi";

export const STATS_CONFIG = [
  {
    key: "active",
    title: "Active Tasks",
    icon: FiClipboard,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    key: "completed",
    title: "Completed",
    icon: FiCheckCircle,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    key: "health",
    title: "System Health",
    icon: FiZap,
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
];
