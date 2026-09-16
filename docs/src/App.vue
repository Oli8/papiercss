<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import DocsSidebar from "./components/DocsSidebar.vue";
import DocsSearch from "./components/DocsSearch.vue";

const GITHUB_URL = "https://github.com/Oli8/papiercss";
const THEME_KEY = "papiercss-docs-theme";

const topNav = [
  { to: "/guide/getting-started", label: "Guide" },
  { to: "/components", label: "Components" },
  { to: "/utilities", label: "Utilities" },
];

const isDark = ref(false);
const isMobileNav = ref(false);
const navToggle = ref<HTMLInputElement | null>(null);
const route = useRoute();

let mobileNavMq: MediaQueryList | null = null;
let mobileNavSync: (() => void) | null = null;

function navMobileMediaQuery() {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--breakpoint-paper-nav")
    .trim();
  return `(width < ${raw || "48rem"})`;
}

function applyTheme(dark: boolean) {
  isDark.value = dark;
  document.documentElement.classList.toggle("dark", dark);
  localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
}

function toggleTheme() {
  applyTheme(!isDark.value);
}

watch(
  () => route.fullPath,
  () => {
    if (navToggle.value) navToggle.value.checked = false;
  },
);

onMounted(() => {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "dark" || stored === "light") {
    applyTheme(stored === "dark");
  } else {
    applyTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }

  const mq = window.matchMedia(navMobileMediaQuery());
  const syncMobileNav = () => {
    isMobileNav.value = mq.matches;
  };
  syncMobileNav();
  mq.addEventListener("change", syncMobileNav);
  mobileNavMq = mq;
  mobileNavSync = syncMobileNav;
});

onBeforeUnmount(() => {
  mobileNavMq?.removeEventListener("change", mobileNavSync!);
});
</script>

<template>
  <div class="min-h-screen">
    <nav
      class="nav-paper nav-paper-split sticky top-0 border-b-2 border-muted-border backdrop-blur-md"
    >
      <div class="font-paper-heading text-2xl">
        <RouterLink to="/">PapierCSS</RouterLink>
      </div>

      <div class="nav-paper-end">
        <DocsSearch v-if="!isMobileNav" />
        <a
          :href="GITHUB_URL"
          class="hidden sm:inline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <button
          type="button"
          class="btn-paper btn-paper-sm"
          :aria-pressed="isDark"
          aria-label="Toggle dark mode"
          @click="toggleTheme"
        >
          {{ isDark ? "Light" : "Dark" }}
        </button>
      </div>

      <div class="nav-paper-collapsible">
        <input
          id="docs-nav-toggle"
          ref="navToggle"
          class="nav-paper-collapsible-input"
          type="checkbox"
        />
        <label class="nav-paper-burger" for="docs-nav-toggle">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </label>
        <div class="nav-paper-collapsible-body nav-paper-collapsible-mobile">
          <ul class="inline">
            <li v-if="isMobileNav" class="px-2">
              <DocsSearch />
            </li>
            <li v-for="item in topNav" :key="item.to">
              <RouterLink :to="item.to" active-class="text-secondary">
                {{ item.label }}
              </RouterLink>
            </li>
            <li class="sm:hidden">
              <a
                :href="GITHUB_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="flex min-h-[calc(100vh-4.5rem)]">
      <DocsSidebar />
      <main class="min-w-0 flex-1 px-4 py-10 md:px-10">
        <div class="mx-auto flex min-h-full max-w-5xl flex-col">
          <div class="flex-1">
            <RouterView />
          </div>
          <footer class="mt-16 border-t-2 border-muted-border pt-6 text-sm text-muted-600 dark:text-muted-400">
            PapierCSS is based on
            <a
              class="link-paper"
              href="https://github.com/papercss/papercss"
              target="_blank"
              rel="noopener noreferrer"
            >
              PaperCSS
            </a>
            by
            <a
              class="link-paper"
              href="https://github.com/rhyneav"
              target="_blank"
              rel="noopener noreferrer"
            >
              @rhyneav
            </a>
            .
          </footer>
        </div>
      </main>
    </div>
  </div>
</template>

<style>
body {
  background-color: var(--paper-primary-50);
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23e6e6e5' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
}
.dark body {
  background-color: #41403e;
background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23545351' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
}
</style>
