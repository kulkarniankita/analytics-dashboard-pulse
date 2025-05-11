"use client";

import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { ToggleGroupProps } from "@/@types/components";

export default function ToggleGroup({
  options,
  selectedValues,
  toggleKey,
  onToggle,
}: ToggleGroupProps) {
  return (
    <div className="flex flex-wrap gap-4 items-center my-2">
      {options.map((option, index) => {
        const isActive = selectedValues.includes(option.value.toString());
        return (
          <Link
            href={`?${toggleKey}=${isActive ? "" : option.value}`}
            key={`${option.value}-${index}`}
            className={cn(
              "bg-badge-purple font-bold",
              isActive && "border-2 border-black",
              "w-fit rounded-full px-4 py-2"
            )}
            onClick={(e) => {
              e.preventDefault();
              if (isActive) {
                onToggle(
                  selectedValues.filter((selectedValue) => {
                    return selectedValue !== option.value;
                  })
                );
              } else {
                onToggle([...selectedValues, option.value]);
              }
            }}
          >
            {option.label}
          </Link>
        );
      })}
    </div>
  );
}
