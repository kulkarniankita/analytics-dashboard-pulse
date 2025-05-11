// import { FilterPreferences } from "@/@types/analytics";
// import ToggleGroup from "@/components/toggle-group";
// import { useSearchParams } from "next/navigation";
// import { use } from "react";

// export default function VisitorFilter({
//   visitorFiltersPromise,
// }: {
//   visitorFiltersPromise: Promise<VisitorFilter[]>;
// }) {
//   const visitorFilters = use(visitorFiltersPromise);
//   const searchParams = useSearchParams();
//   const selectedFilters = searchParams.getAll("filter");

//   // Transform visitor filters into toggle group options
//   const options = visitorFilters.flatMap((filter) => {
//     const filterPrefs = filter.filters as FilterPreferences;
//     return Object.entries(filterPrefs).flatMap(([, values]) =>
//       (values || []).map((value) => ({
//         label: value,
//         value: value,
//       }))
//     );
//   });

//   return (
//     <div>
//       <ToggleGroup
//         toggleKey="filter"
//         options={options}
//         selectedValues={selectedFilters}
//         onToggle={(newFilters) => {
//           const params = new URLSearchParams(searchParams);
//           params.delete("filter");
//           newFilters.forEach((filter) => {
//             params.append("filter", filter);
//           });
//         }}
//       />
//     </div>
//   );
// }
