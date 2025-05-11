import { ChartData } from "./common";

// Component Props types
export interface VisitorChartProps {
  data: ChartData[];
}

export interface InfoItem {
  id: string;
  label: string;
  value: string;
}

export interface ToggleOption {
  label: string;
  value: string;
}

export interface ToggleGroupProps {
  options: ToggleOption[];
  selectedValues: string[];
  toggleKey?: string;
  onToggle: (_options: string[]) => void;
}
