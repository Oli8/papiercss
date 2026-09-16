<script setup lang="ts">
import DocsSection from "../components/DocsSection.vue";
import DocsVariables from "../components/DocsVariables.vue";

type Player = {
  rank: number;
  name: string;
  country: string;
  code: string;
};

const ranking: Player[] = [
  { rank: 1, name: "Jannik Sinner", country: "Italy", code: "it" },
  { rank: 2, name: "Alexander Zverev", country: "Germany", code: "de" },
  { rank: 3, name: "Carlos Alcaraz", country: "Spain", code: "es" },
  { rank: 4, name: "Ben Shelton", country: "United States", code: "us" },
  { rank: 5, name: "Félix Auger-Aliassime", country: "Canada", code: "ca" },
  { rank: 6, name: "Daniil Medvedev", country: "Russia", code: "ru" },
  { rank: 7, name: "Flavio Cobolli", country: "Italy", code: "it" },
  { rank: 8, name: "Frances Tiafoe", country: "United States", code: "us" },
];

const usagePlayers = ranking.slice(0, 5);
const hoverPlayers = ranking;

function flagImg(code: string, country: string) {
  return `<img
      class="border-paper border-primary"
      src="https://flagcdn.com/w40/${code}.png"
      width="40"
      alt="${country}"
    />`;
}

function row(player: Player) {
  return `<tr>
    <td>${player.rank}</td>
    <td>${player.name}</td>
    <td>${flagImg(player.code, player.country)}</td>
  </tr>`;
}

function tableMarkup(className: string, players: Player[]) {
  return `<table class="${className}">
  <thead>
    <tr>
      <th>Rank</th>
      <th>Player</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    ${players.map(row).join("\n    ")}
  </tbody>
</table>`;
}

const usage = tableMarkup("table-paper", usagePlayers);
const hoverAlternating = tableMarkup(
  "table-paper table-paper-hover table-paper-alternating",
  hoverPlayers,
);

const variables = [
  { name: "--paper-table-stripe-fg", value: "var(--paper-primary)" },
  { name: "--paper-table-stripe-bg", value: "var(--paper-primary-100)" },
  {
    name: "--paper-table-row-border-color",
    value: "var(--paper-primary-300)",
  },
  { name: "--paper-table-hover-fg", value: "var(--paper-secondary)" },
];
</script>

<template>
  <section class="space-y-12">
    <h1 class="font-paper-heading text-4xl">Table</h1>

    <DocsSection
      title="Usage"
      :code="usage"
      demo-class="space-y-3 overflow-x-auto rounded-paper border-paper border-muted-border bg-surface p-6"
    >
      <table class="table-paper">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="player in usagePlayers" :key="player.rank">
            <td>{{ player.rank }}</td>
            <td>{{ player.name }}</td>
            <td>
              <img
                class="border-paper border-primary"
                :src="`https://flagcdn.com/w40/${player.code}.png`"
                width="40"
                :alt="player.country"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </DocsSection>

    <DocsSection
      title="Hover & alternating"
      :code="hoverAlternating"
      demo-class="space-y-3 overflow-x-auto rounded-paper border-paper border-muted-border bg-surface p-6"
    >
      <table class="table-paper table-paper-hover table-paper-alternating">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="player in hoverPlayers" :key="player.rank">
            <td>{{ player.rank }}</td>
            <td>{{ player.name }}</td>
            <td>
              <img
                class="border-paper border-primary"
                :src="`https://flagcdn.com/w40/${player.code}.png`"
                width="40"
                :alt="player.country"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </DocsSection>

    <DocsVariables :variables="variables" />
  </section>
</template>
