import StatsCard from "./StatsCard";
import { STATS_CONFIG } from "./stats.config";

export default function StatsGrid({ tasks }) {
  const activeCount = tasks.filter((t) => t.status !== "Completed").length;
  const completedCount = tasks.filter((t) => t.status === "Completed").length;

  const values = {
    active: activeCount,
    completed: completedCount,
    health: "98%",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
      {STATS_CONFIG.map((stat) => (
        <StatsCard
          key={stat.key}
          title={stat.title}
          value={values[stat.key]}
          icon={stat.icon}
          iconBg={stat.iconBg}
          iconColor={stat.iconColor}
        />
      ))}
    </div>
  );
}
