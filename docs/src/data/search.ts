import { allComponents } from "./components";

export type SearchEntry = {
  label: string;
  to: string;
  group: string;
  keywords?: string;
};

export const searchEntries: SearchEntry[] = [
  {
    label: "Home",
    to: "/",
    group: "Guide",
    keywords: "start index",
  },
  {
    label: "Getting Started",
    to: "/guide/getting-started",
    group: "Guide",
    keywords: "install import setup npm",
  },
  {
    label: "Colors",
    to: "/guide/colors",
    group: "Guide",
    keywords: "palette scale primary secondary soft surface",
  },
  {
    label: "Dark Mode",
    to: "/guide/dark-mode",
    group: "Guide",
    keywords: "theme dark class prefers-color-scheme",
  },
  {
    label: "Theming",
    to: "/guide/theming",
    group: "Guide",
    keywords: "token variable override customize @theme",
  },
  {
    label: "Components",
    to: "/components",
    group: "Components",
    keywords: "catalog overview",
  },
  ...allComponents.map((item) => ({
    label: item.label,
    to: item.to,
    group: "Components",
    keywords: item.keywords,
  })),
  {
    label: "Utilities",
    to: "/utilities",
    group: "Utilities",
    keywords: "border rounded shadow font link disabled field",
  },
];

export function filterSearchEntries(query: string, limit = 8): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return searchEntries
    .filter((entry) => {
      const haystack =
        `${entry.label} ${entry.group} ${entry.keywords ?? ""}`.toLowerCase();
      return haystack.includes(q);
    })
    .slice(0, limit);
}
