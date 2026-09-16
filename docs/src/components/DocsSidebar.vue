<script setup lang="ts">
import { RouterLink } from "vue-router";
import { componentGroups } from "../data/components";

const sections = [
  {
    title: "Guide",
    items: [
      { to: "/guide/getting-started", label: "Getting Started" },
      { to: "/guide/colors", label: "Colors" },
      { to: "/guide/dark-mode", label: "Dark Mode" },
      { to: "/guide/theming", label: "Theming" },
    ],
  },
  {
    title: "Components",
    to: "/components",
    groups: componentGroups,
  },
  {
    title: "Utilities",
    to: "/utilities",
    groups: [],
  },
];
</script>

<template>
  <aside
    class="hidden w-56 shrink-0 border-r-2 border-muted-border bg-surface md:block"
  >
    <div class="sticky top-0 max-h-screen overflow-y-auto px-4 py-8">
      <nav class="space-y-6">
        <div v-for="section in sections" :key="section.title" class="space-y-2">
          <RouterLink
            v-if="section.to"
            :to="section.to"
            class="font-paper-heading block text-sm uppercase tracking-wide text-muted-500 no-underline hover:text-primary"
            active-class=""
            exact-active-class="text-secondary"
          >
            {{ section.title }}
          </RouterLink>
          <p
            v-else
            class="font-paper-heading text-sm uppercase tracking-wide text-muted-500"
          >
            {{ section.title }}
          </p>

          <template v-if="section.items?.length">
            <ul class="space-y-1">
              <li v-for="item in section.items" :key="item.to">
                <RouterLink
                  :to="item.to"
                  class="block rounded-paper px-2 py-1.5 text-primary no-underline hover:bg-surface-sunken"
                  active-class="bg-secondary-soft text-secondary-soft-fg"
                >
                  {{ item.label }}
                </RouterLink>
              </li>
            </ul>
          </template>

          <div
            v-for="(group, index) in section.groups"
            :key="group.title ?? `group-${index}`"
            class="space-y-1"
            :class="group.title ? 'pt-2' : undefined"
          >
            <p
              v-if="group.title"
              class="px-2 text-xs font-semibold uppercase tracking-wide text-muted-500"
            >
              {{ group.title }}
            </p>
            <ul class="space-y-1">
              <li v-for="item in group.items" :key="item.to">
                <RouterLink
                  :to="item.to"
                  class="block rounded-paper px-2 py-1.5 text-primary no-underline hover:bg-surface-sunken"
                  :class="group.title ? 'pl-4' : undefined"
                  active-class="bg-secondary-soft text-secondary-soft-fg"
                >
                  {{ item.label }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </aside>
</template>
