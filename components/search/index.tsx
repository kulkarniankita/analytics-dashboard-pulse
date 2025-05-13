"use client";
import { cn } from "@/lib/utils";
import { commonStyles } from "@/styles/common";
import Form from "next/form";
import SearchStatus from "./search-status";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import { InsightKey } from "@/@types/insights";

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();
  const activeTab = params.insight as InsightKey;

  const defaultValue = searchParams.get("q") || "";

  return (
    <Form
      action=""
      className="relative flex w-full flex-col gap-2 sm:w-fit"
      key={activeTab}
    >
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
          defaultValue={defaultValue}
          className={cn(
            "w-full pl-10 pr-4 py-3 sm:w-96",
            "focus:outline-none focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
            "transition-all duration-200",
            commonStyles.border
          )}
          placeholder="Search in task title or description..."
          type="search"
          onChange={(e) => {
            const newSearchParams = new URLSearchParams(
              searchParams.toString()
            );
            newSearchParams.set("q", e.target.value);
            router.push(`?${newSearchParams.toString()}`, {
              scroll: false,
            });
          }}
        />
        <SearchStatus />
      </div>
    </Form>
  );
}
