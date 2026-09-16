import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import GettingStartedPage from "../pages/GettingStartedPage.vue";
import ColorsPage from "../pages/ColorsPage.vue";
import DarkModePage from "../pages/DarkModePage.vue";
import ThemingPage from "../pages/ThemingPage.vue";
import ComponentsPage from "../pages/ComponentsPage.vue";
import AlertsPage from "../pages/AlertsPage.vue";
import ArticlesPage from "../pages/ArticlesPage.vue";
import AvatarPage from "../pages/AvatarPage.vue";
import BreadcrumbPage from "../pages/BreadcrumbPage.vue";
import ButtonsPage from "../pages/ButtonsPage.vue";
import CardsPage from "../pages/CardsPage.vue";
import CheckboxesPage from "../pages/CheckboxesPage.vue";
import CollapsiblePage from "../pages/CollapsiblePage.vue";
import DividersPage from "../pages/DividersPage.vue";
import InputsPage from "../pages/InputsPage.vue";
import ListsPage from "../pages/ListsPage.vue";
import ModalsPage from "../pages/ModalsPage.vue";
import NavbarPage from "../pages/NavbarPage.vue";
import PopoversPage from "../pages/PopoversPage.vue";
import ProgressPage from "../pages/ProgressPage.vue";
import RadiosPage from "../pages/RadiosPage.vue";
import SelectsPage from "../pages/SelectsPage.vue";
import SkeletonPage from "../pages/SkeletonPage.vue";
import SliderPage from "../pages/SliderPage.vue";
import SpinnerPage from "../pages/SpinnerPage.vue";
import SwitchesPage from "../pages/SwitchesPage.vue";
import TablesPage from "../pages/TablesPage.vue";
import TabsPage from "../pages/TabsPage.vue";
import TagsPage from "../pages/TagsPage.vue";
import UtilitiesPage from "../pages/UtilitiesPage.vue";

declare module "vue-router" {
  interface RouteMeta {
    title?: string;
  }
}

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomePage },
    {
      path: "/guide/getting-started",
      name: "getting-started",
      component: GettingStartedPage,
      meta: { title: "Getting Started" },
    },
    {
      path: "/guide/colors",
      name: "colors",
      component: ColorsPage,
      meta: { title: "Colors" },
    },
    {
      path: "/guide/dark-mode",
      name: "dark-mode",
      component: DarkModePage,
      meta: { title: "Dark Mode" },
    },
    {
      path: "/guide/theming",
      name: "theming",
      component: ThemingPage,
      meta: { title: "Theming" },
    },
    {
      path: "/components",
      name: "components",
      component: ComponentsPage,
      meta: { title: "Components" },
    },
    {
      path: "/components/alert",
      name: "alert",
      component: AlertsPage,
      meta: { title: "Alert" },
    },
    {
      path: "/components/article",
      name: "article",
      component: ArticlesPage,
      meta: { title: "Article" },
    },
    {
      path: "/components/avatar",
      name: "avatar",
      component: AvatarPage,
      meta: { title: "Avatar" },
    },
    {
      path: "/components/breadcrumb",
      name: "breadcrumb",
      component: BreadcrumbPage,
      meta: { title: "Breadcrumb" },
    },
    {
      path: "/components/button",
      name: "button",
      component: ButtonsPage,
      meta: { title: "Button" },
    },
    {
      path: "/components/card",
      name: "card",
      component: CardsPage,
      meta: { title: "Card" },
    },
    {
      path: "/components/checkbox",
      name: "checkbox",
      component: CheckboxesPage,
      meta: { title: "Checkbox" },
    },
    {
      path: "/components/collapsible",
      name: "collapsible",
      component: CollapsiblePage,
      meta: { title: "Collapsible" },
    },
    {
      path: "/components/divider",
      name: "divider",
      component: DividersPage,
      meta: { title: "Divider" },
    },
    {
      path: "/components/input",
      name: "input",
      component: InputsPage,
      meta: { title: "Input" },
    },
    {
      path: "/components/list",
      name: "list",
      component: ListsPage,
      meta: { title: "List" },
    },
    {
      path: "/components/modal",
      name: "modal",
      component: ModalsPage,
      meta: { title: "Modal" },
    },
    {
      path: "/components/navbar",
      name: "navbar",
      component: NavbarPage,
      meta: { title: "Navbar" },
    },
    {
      path: "/components/popover",
      name: "popover",
      component: PopoversPage,
      meta: { title: "Popover" },
    },
    {
      path: "/components/progress",
      name: "progress",
      component: ProgressPage,
      meta: { title: "Progress" },
    },
    {
      path: "/components/radio",
      name: "radio",
      component: RadiosPage,
      meta: { title: "Radio" },
    },
    {
      path: "/components/select",
      name: "select",
      component: SelectsPage,
      meta: { title: "Select" },
    },
    {
      path: "/components/skeleton",
      name: "skeleton",
      component: SkeletonPage,
      meta: { title: "Skeleton" },
    },
    {
      path: "/components/slider",
      name: "slider",
      component: SliderPage,
      meta: { title: "Slider" },
    },
    {
      path: "/components/spinner",
      name: "spinner",
      component: SpinnerPage,
      meta: { title: "Spinner" },
    },
    {
      path: "/components/switch",
      name: "switch",
      component: SwitchesPage,
      meta: { title: "Switch" },
    },
    {
      path: "/components/table",
      name: "table",
      component: TablesPage,
      meta: { title: "Table" },
    },
    {
      path: "/components/tabs",
      name: "tabs",
      component: TabsPage,
      meta: { title: "Tabs" },
    },
    {
      path: "/components/tag",
      name: "tag",
      component: TagsPage,
      meta: { title: "Tag" },
    },
    {
      path: "/utilities",
      name: "utilities",
      component: UtilitiesPage,
      meta: { title: "Utilities" },
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

router.afterEach((to) => {
  const page = typeof to.meta.title === "string" ? to.meta.title : undefined;
  document.title = page ? `PapierCSS | ${page}` : "PapierCSS";
});
