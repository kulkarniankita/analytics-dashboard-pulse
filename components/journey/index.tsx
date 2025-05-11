import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import React from "react";
import ReactCountryFlag from "react-country-flag";
import { VisitorJourney } from "@/prisma/app/generated/prisma/client";
import { commonStyles } from "@/styles/common";
import { cn } from "@/lib/utils";
import { getCountryCode, getDiceBearAvatar } from "@/utils/common";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        {["Visitor", "Source", "Time to complete", "Completed at"].map(
          (header) => (
            <th key={header} className={commonStyles.tableHeader}>
              {header}
            </th>
          )
        )}
      </tr>
    </thead>
  );
};

const TableRow = ({
  id,
  name,
  avatarSeed,
  country,
  source,
  timeToComplete,
  completedAt,
  device,
  os,
  browser,
}: VisitorJourney) => {
  return (
    <tr key={id} className={commonStyles.tableRow}>
      <td className="flex items-center gap-3 py-3 px-2">
        <span className={commonStyles.avatarContainer}>
          <Avatar className="size-16 bg-white">
            <AvatarImage src={getDiceBearAvatar(avatarSeed)} alt={name} />
            <AvatarFallback>
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </span>
        <div>
          <div className={commonStyles.visitorName}>{name}</div>
          <div className={commonStyles.visitorInfo}>
            <span className="flex items-center gap-1">
              <ReactCountryFlag
                countryCode={getCountryCode(country)}
                svg
                style={{
                  width: "1.2em",
                  height: "1.2em",
                }}
                aria-label={`Flag of ${country}`}
              />{" "}
              {country}
            </span>

            {[device, os, browser].map((device, index) => (
              <Badge key={index} className={commonStyles.badge}>
                {device}
              </Badge>
            ))}
          </div>
        </div>
      </td>

      {[source, timeToComplete, completedAt.toLocaleString()].map(
        (item, index) => (
          <td key={index} className={commonStyles.tableCell}>
            {item}
          </td>
        )
      )}
    </tr>
  );
};

export default async function JourneyPage({
  journeys,
}: {
  journeys: VisitorJourney[];
}) {
  return (
    <div
      className={cn(
        commonStyles.container,
        commonStyles.shadow,
        "bg-badge-pink"
      )}
    >
      <h1 className={commonStyles.heading}>Visitor Journey</h1>
      <div
        className={cn(
          commonStyles.tableContainer,
          commonStyles.shadow,
          "bg-badge-yellow"
        )}
      >
        <table className="w-full font-mono border-separate border-spacing-0">
          <TableHeader />
          <tbody>
            {journeys.map((journey, index) => (
              <TableRow key={index} {...journey} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
