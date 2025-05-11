"use client";

import { cn } from "@/lib/utils";
import { commonStyles } from "@/styles/common";
import SearchStatus from "./search-status";

export default function Search() {
  return (
    <form action="" className="relative flex w-full flex-col gap-2 sm:w-fit">
      <label
        className="font-bold uppercase tracking-wider text-black text-2xl"
        htmlFor="search"
      >
        Search
      </label>
      <div className="relative">
        <input
          autoComplete="off"
          id="search"
          name="q"
          className={cn(
            "w-full pl-10 pr-4 py-3 sm:w-96",
            "focus:outline-none focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
            "transition-all duration-200",
            commonStyles.border
          )}
          placeholder="Search in task title or description..."
          type="search"
        />
        <SearchStatus searching={false} />
      </div>
    </form>
  );
}
