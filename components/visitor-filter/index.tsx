"use client";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import ToggleGroup from "../toggle-group";
import { VisitorFilter as VisitorFilterType } from "@/prisma/app/generated/prisma/client";
import { use, useTransition } from "react";
import { FilterPreferences } from "@/@types/analytics";

export default function VisitorFilter({
  visitorFiltersPromise,
}: {
  visitorFiltersPromise: Promise<VisitorFilterType[]>;
}) {
  const visitorFilters = use(visitorFiltersPromise);

  const router = useRouter();
  const searchParams = useSearchParams();

  const [isPending, startTransition] = useTransition();

  const selectedFilters = searchParams.getAll("filter");

  const options = visitorFilters.flatMap((filter) => {
    const filterPrefs = filter.filters as FilterPreferences;

    return Object.entries(filterPrefs).flatMap(([, values]) =>
      (values || []).map((value) => ({
        label: value,
        value,
      }))
    );
  });

  return (
    <div data-pending={isPending ? "true" : undefined}>
      <ToggleGroup
        toggleKey="filter"
        options={options}
        selectedValues={selectedFilters}
        onToggle={(newFilters) => {
          const params = new URLSearchParams(searchParams);

          params.delete("filter");

          newFilters.forEach((filter) => {
            //?q="ios"&filter="chrome"&filter="firefox"
            params.append("filter", filter);
          });

          startTransition(() => {
            router.push(`?${params.toString()}`, {
              scroll: false,
            });
          });
        }}
      />
    </div>
  );
}
