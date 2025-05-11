// Date related types
export type DateRange = {
  gte?: Date;
  lte?: Date;
};

// Chart related types
export interface ChartData {
  name: string;
  value: number;
}

// Page related types
export type PageProps = {
  params: Promise<{
    tab: string;
  }>;
  searchParams: Promise<{
    q?: string;
  }>;
};

// Utility types
export type CountryCodeMap = {
  [key: string]: string;
};
