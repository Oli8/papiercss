<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { filterSearchEntries, type SearchEntry } from "../data/search";

const router = useRouter();

const query = ref("");
const open = ref(false);
const activeIndex = ref(0);
const root = ref<HTMLElement | null>(null);
const input = ref<HTMLInputElement | null>(null);

const results = computed(() => filterSearchEntries(query.value));

watch(results, () => {
  activeIndex.value = 0;
});

watch(query, (value) => {
  open.value = value.trim().length > 0;
});

function close() {
  open.value = false;
  activeIndex.value = 0;
}

function clear() {
  query.value = "";
  close();
}

function go(entry: SearchEntry) {
  clear();
  void router.push(entry.to);
}

function onKeydown(event: KeyboardEvent) {
  if (!open.value || results.value.length === 0) {
    if (event.key === "Escape") {
      clear();
      input.value?.blur();
    }
    return;
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();
    activeIndex.value = (activeIndex.value + 1) % results.value.length;
    return;
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    activeIndex.value =
      (activeIndex.value - 1 + results.value.length) % results.value.length;
    return;
  }

  if (event.key === "Enter") {
    event.preventDefault();
    const entry = results.value[activeIndex.value];
    if (entry) go(entry);
    return;
  }

  if (event.key === "Escape") {
    event.preventDefault();
    clear();
    input.value?.blur();
  }
}

function onDocumentPointerDown(event: PointerEvent) {
  if (!root.value?.contains(event.target as Node)) {
    close();
  }
}

function onGlobalKeydown(event: KeyboardEvent) {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    open.value = query.value.trim().length > 0;
    void nextTick(() => input.value?.focus());
  }
}

onMounted(() => {
  document.addEventListener("pointerdown", onDocumentPointerDown);
  document.addEventListener("keydown", onGlobalKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener("pointerdown", onDocumentPointerDown);
  document.removeEventListener("keydown", onGlobalKeydown);
});
</script>

<template>
  <div ref="root" class="relative w-full max-w-xs min-w-40 flex-1 sm:flex-none">
    <label class="block">
      <span class="sr-only">Search docs</span>
      <input
        ref="input"
        v-model="query"
        type="search"
        class="input-paper w-full"
        placeholder="Search…"
        autocomplete="off"
        aria-autocomplete="list"
        :aria-expanded="open"
        aria-controls="docs-search-results"
        @keydown="onKeydown"
        @focus="open = query.trim().length > 0"
      />
    </label>

    <div
      v-if="open"
      id="docs-search-results"
      role="listbox"
      class="absolute top-full right-0 left-0 z-20 mt-2 overflow-hidden rounded-paper border-paper border-muted-border bg-surface-raised shadow-paper"
    >
      <p v-if="results.length === 0" class="px-3 py-2 text-sm text-muted-600 dark:text-muted-400">
        No pages match “{{ query }}”.
      </p>
      <ul v-else class="max-h-80 overflow-y-auto py-1">
        <li v-for="(entry, index) in results" :key="entry.to">
          <button
            type="button"
            role="option"
            class="flex w-full cursor-pointer items-baseline justify-between gap-3 px-3 py-2 text-left no-underline"
            :class="
              index === activeIndex
                ? 'bg-secondary-soft text-secondary-soft-fg'
                : 'text-primary hover:bg-surface-sunken'
            "
            :aria-selected="index === activeIndex"
            @mouseenter="activeIndex = index"
            @click="go(entry)"
          >
            <span>{{ entry.label }}</span>
            <span class="shrink-0 text-xs text-muted-500">{{ entry.group }}</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
