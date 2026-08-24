# PaperCSS 2 (Tailwind)

The less formal CSS framework — now a **Tailwind CSS v4** theme + utilities pack.

Nothing is styled until you add classes. Layout, spacing, and colors use Tailwind; the paper look comes from Paper utilities (`border-paper`, `btn-paper`, …).

## Install

```bash
npm install papercss tailwindcss
```

In your CSS entry:

```css
@import "papercss/fonts.css"; /* must be first if used */
@import "tailwindcss";
@import "papercss";
```

Or import only what you need:

```css
@import "papercss/fonts.css";
@import "tailwindcss";
@import "papercss/theme.css";
@import "papercss/utilities.css";
@import "papercss/components.css";
```

You can also skip `fonts.css` and load Neucha + Patrick Hand SC with a `<link>` tag.

## Theme

Semantic colors use Tailwind-style scales (`50`–`950`) plus a default alias:

`bg-primary`, `text-secondary-600`, `border-danger`, `bg-success-100`, …

Default aliases (light → dark):

| Token | Light | Dark |
| --- | --- | --- |
| `primary` | 700 | 50 |
| `secondary` | 800 | 500 |
| `success` | 400 | 400 |
| `warning` | 400 | 400 |
| `danger` | 700 | 500 |
| `muted` | 400 | 400 |

Components typically use soft role tokens (`*-soft` fill + `*-soft-fg` text),
remapped for dark mode so fills stay dark instead of pastel.

Surfaces (neutral canvas):

| Token | Role |
| --- | --- |
| `surface` | page / canvas |
| `surface-raised` | cards, modals, nav, inputs |
| `surface-sunken` | card header/footer, recessed areas |

Legacy aliases: `main-background` → `surface`, `white-dark` → `surface-sunken`.

### Component tokens

Buttons, alerts, tables, and progress read `--paper-*` component variables
(not in `@theme`). Defaults point at soft / surface tokens — override to
tweak one component without changing the whole palette:

```css
:root {
  --paper-btn-primary-bg: #ffe4e1;
  --paper-btn-primary-fg: #7f1d1d;
  --paper-btn-primary-border: #b91c1c;

  --paper-table-stripe-fg: var(--paper-muted-500);
  --paper-table-hover-fg: var(--paper-secondary-700);
  --paper-progress-bar-bg: var(--paper-secondary-soft);
}

.dark {
  --paper-btn-primary-bg: #3f1d1d;
  --paper-btn-primary-fg: #fecaca;
}
```

Useful names: `--paper-btn-{color}-{bg|fg|border}`, `--paper-alert-{color}-…`,
`--paper-table-stripe-fg`, `--paper-table-stripe-bg` (default `transparent`),
`--paper-table-row-border`, `--paper-table-hover-fg`,
`--paper-progress-bar-bg`, `--paper-progress-{color}-stripe`,
`--paper-tag-{color}-bg`.

Use `progress-paper-striped` (primary) or `progress-paper-striped-{color}` —
each color owns its fill + stripe band (`--paper-progress-{color}-stripe`).
Defaults: soft fill (`*-100` / dark `*-900`) + stripe (`*-200` / dark `*-950`).

Override tokens in your app:

```css
@import "tailwindcss";
@import "papercss";

@theme {
  --color-primary: #2a2a2a;
  --color-secondary: #e85d04;
}
```

Or override the underlying CSS variables (also switches dark mode cleanly):

```css
:root {
  --paper-primary-700: #2a2a2a;
  --paper-primary: var(--paper-primary-700);
  --paper-secondary-800: #e85d04;
  --paper-secondary: var(--paper-secondary-800);
}

.dark {
  --paper-primary-50: #ffffff;
  --paper-primary: var(--paper-primary-50);
}
```

Dark mode: add class `dark` on a parent (usually `<html class="dark">`).

## Paper utilities

| Class | Role |
| --- | --- |
| `border-paper` / `border-paper-{1-6}` | 2px solid + hand-drawn radius |
| `rounded-paper` / `rounded-paper-{1-6}` | radius only |
| `border-paper-thick` | 5px width |
| `child-borders-paper` | cycle border styles 1–6 on children |
| `shadow-paper` / `shadow-paper-sm` / `lg` / `hover` | paper shadows (theme) |
| `shadow-paper-lift` | hover lift + shadow |
| `font-paper` / `font-paper-heading` | Neucha / Patrick Hand SC |
| `text-paper-base` | base body look |
| `link-paper` | scribble underline link |

Example:

```html
<div class="border-paper-2 border-primary shadow-paper p-4 rounded-none">
  Hello
</div>
```

## Components (opt-in)

| Class | Notes |
| --- | --- |
| `btn-paper` (+ `btn-paper-secondary`, `-outline`, `-sm`, `-lg`, …) | buttons |
| `card-paper`, `card-paper-header/body/footer` | cards |
| `alert-paper`, `alert-paper-success`, … | alerts |
| `tag-paper`, `tag-paper-primary`, … | tags |
| `input-paper`, `select-paper`, `textarea-paper` | form controls |
| `paper-check`, `paper-radio` | checkbox / radio |
| `paper-switch`, `paper-switch-2`, `paper-switch-tile`, `range-paper` | switches / range slider |
| `progress-paper`, `progress-paper-bar`, `progress-paper-bar-{color}`, `progress-paper-striped[-{color}]` | progress |
| `collapsible-paper` | accordion |
| `tabs-paper` (evenly by default) + `tabs-paper-start/center/end/between/around` | tabs |
| `modal-paper`, `modal-paper-body`, … | modal |
| `nav-paper` | navbar |
| `breadcrumb-paper` | breadcrumb |
| `popover-paper` + `data-popover="…"` | popover |
| `table-paper`, `table-paper-hover`, `table-paper-alternating`, `table-paper-borderless` | tables |
| `list-paper`, `article-paper` | lists / articles |
| `divider-paper` | `~~~` divider |

Example:

```html
<button class="btn-paper btn-paper-secondary shadow-paper">Save</button>
```

## Demo

```bash
npm install
npm run demo:build
npx serve demo
```

## Migrating from 1.x

- Drop-in `paper.css` auto-styling is gone (`button`, `a`, `input`, headings are no longer global).
- Old spacing utils (`margin-top-large`, …) → Tailwind (`mt-4`, …).
- `.border` → `border-paper` (plus `border-primary` if you want the color).
- `.paper-btn` / `button` styles → `btn-paper`.
- Recompile with Tailwind; Paper is a CSS source package, not a prebuilt monolithic sheet.

## License

ISC
