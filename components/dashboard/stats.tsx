import { commonStyles } from "@/styles/common";
import { cn } from "@/lib/utils";
import { StatItem } from "@/@types/dashboard";

interface StatsProps extends StatItem {
  sub?: string;
}

export default function Stats({
  label,
  value,
  color = "text-stat-blue",
  sub = "",
}: StatsProps) {
  return (
    <div className={cn(commonStyles.statCard, commonStyles.shadow)}>
      <div className="flex items-center gap-2">
        <span className={color}>
          <span className={commonStyles.icon} />
        </span>
        <div className={commonStyles.statLabel}>{label}</div>
      </div>
      <div className="flex items-end gap-2">
        <div className={commonStyles.statValue}>{value}</div>
        {sub && <div className={commonStyles.statSub}>{sub}</div>}
      </div>
    </div>
  );
}
