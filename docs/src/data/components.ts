export type ComponentEntry = {
  label: string;
  description: string;
  to: string;
  keywords?: string;
};

export type ComponentGroup = {
  title?: string;
  items: ComponentEntry[];
};

/** Sidebar + overview catalog, with named subgroups. */
export const componentGroups: ComponentGroup[] = [
  {
    title: "Form",
    items: [
      {
        label: "Checkbox",
        description: "Select one or more options from a list.",
        to: "/components/checkbox",
        keywords: "form check checkbox",
      },
      {
        label: "Input",
        description: "Enter short or long free-form text.",
        to: "/components/input",
        keywords: "form input text field textarea",
      },
      {
        label: "Radio",
        description: "Choose a single option from a set.",
        to: "/components/radio",
        keywords: "form radio",
      },
      {
        label: "Slider",
        description: "Pick a value along a continuous range.",
        to: "/components/slider",
        keywords: "form range slider",
      },
      {
        label: "Select",
        description: "Pick one option from a dropdown list.",
        to: "/components/select",
        keywords: "form select dropdown",
      },
      {
        label: "Switch",
        description: "Toggle a setting on or off.",
        to: "/components/switch",
        keywords: "form switch toggle tile",
      },
    ],
  },
  {
    title: "Misc",
    items: [
      {
        label: "Alert",
        description: "Call attention to status, feedback, or a short notice.",
        to: "/components/alert",
        keywords: "alert message notice",
      },
      {
        label: "Avatar",
        description: "Represent a user with an image or initials.",
        to: "/components/avatar",
        keywords: "user profile stack",
      },
      {
        label: "Breadcrumb",
        description: "Show where the user is in a hierarchy.",
        to: "/components/breadcrumb",
        keywords: "nav path",
      },
      {
        label: "Button",
        description: "Trigger an action or navigate somewhere.",
        to: "/components/button",
        keywords: "btn action",
      },
      {
        label: "Navbar",
        description: "Primary site or app navigation across pages.",
        to: "/components/navbar",
        keywords: "nav header menu",
      },
      {
        label: "Progress",
        description: "Show how far a task or process has gone.",
        to: "/components/progress",
        keywords: "bar meter",
      },
      {
        label: "Skeleton",
        description: "Placeholder shapes while content is loading.",
        to: "/components/skeleton",
        keywords: "loading placeholder shimmer",
      },
      {
        label: "Spinner",
        description: "Indicate that something is loading or in progress.",
        to: "/components/spinner",
        keywords: "loading spin",
      },
      {
        label: "Tag",
        description: "Label or categorize an item with a short chip.",
        to: "/components/tag",
        keywords: "badge label chip",
      },
    ],
  },
  {
    title: "Content",
    items: [
      {
        label: "Article",
        description: "Present long-form reading with title and supporting text.",
        to: "/components/article",
        keywords: "article content typography",
      },
      {
        label: "Divider",
        description: "Separate sections of content visually.",
        to: "/components/divider",
        keywords: "hr divider separator",
      },
      {
        label: "List",
        description: "Display related items in a vertical sequence.",
        to: "/components/list",
        keywords: "ul ol list",
      },
      {
        label: "Table",
        description: "Compare and scan structured data in rows and columns.",
        to: "/components/table",
        keywords: "table grid data",
      },
    ],
  },
  {
    title: "Overlay",
    items: [
      {
        label: "Modal",
        description: "Focus the user on a task or message above the page.",
        to: "/components/modal",
        keywords: "dialog popup overlay",
      },
      {
        label: "Popover",
        description: "Show extra context or actions next to a trigger.",
        to: "/components/popover",
        keywords: "tooltip tip overlay",
      },
    ],
  },
  {
    title: "Panel",
    items: [
      {
        label: "Card",
        description: "Group related content into a self-contained block.",
        to: "/components/card",
        keywords: "panel surface card",
      },
      {
        label: "Collapsible",
        description: "Hide and reveal extra content on demand.",
        to: "/components/collapsible",
        keywords: "accordion details summary panel",
      },
      {
        label: "Tabs",
        description: "Switch between related views in the same place.",
        to: "/components/tabs",
        keywords: "tab panel",
      },
    ],
  },
];

export const allComponents: ComponentEntry[] = componentGroups.flatMap(
  (group) => group.items,
);
