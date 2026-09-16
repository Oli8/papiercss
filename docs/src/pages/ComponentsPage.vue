<script setup lang="ts">
import { computed, ref } from "vue";
import { RouterLink } from "vue-router";
import {
  componentGroups,
  type ComponentEntry,
  type ComponentGroup,
} from "../data/components";

const query = ref("");

function matches(item: ComponentEntry, q: string) {
  const haystack = `${item.label} ${item.description} ${item.keywords ?? ""}`.toLowerCase();
  return haystack.includes(q);
}

const filteredGroups = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) return componentGroups;

  return componentGroups
    .map((group): ComponentGroup => ({
      title: group.title,
      items: group.items.filter((item) => matches(item, q)),
    }))
    .filter((group) => group.items.length > 0);
});
</script>

<template>
  <section class="space-y-8">
    <div class="space-y-3">
      <h1 class="font-paper-heading text-4xl">Components</h1>
      <label class="form-group-paper block max-w-md">
        <span class="sr-only">Filter components</span>
        <input
          v-model="query"
          type="search"
          class="input-paper w-full"
          placeholder="Filter components…"
          autocomplete="off"
        />
      </label>
    </div>

    <template v-if="filteredGroups.length">
      <div
        v-for="(group, index) in filteredGroups"
        :key="group.title ?? `group-${index}`"
        class="space-y-4"
      >
        <h2
          v-if="group.title"
          class="font-paper-heading text-2xl text-muted-600 dark:text-muted-400"
        >
          {{ group.title }}
        </h2>
        <div class="grid gap-4 sm:grid-cols-2">
          <RouterLink
            v-for="item in group.items"
            :key="item.label"
            :to="item.to"
            class="card-paper rounded-paper cursor-pointer text-inherit no-underline"
          >
            <div class="card-paper-body space-y-2">
              <h3 class="card-paper-title">{{ item.label }}</h3>
              <p class="text-sm text-muted-600 dark:text-muted-400">{{ item.description }}</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </template>

    <p v-else class="text-muted-600 dark:text-muted-400">No components match “{{ query }}”.</p>
  </section>
</template>
