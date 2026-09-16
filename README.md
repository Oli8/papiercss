# PapierCSS

The less formal CSS framework, rebuilt with Tailwind v4.

Nothing is styled until you add classes. Layout, spacing, and colors use Tailwind; the paper look comes from Paper utilities (`border-paper`, `btn-paper`, …).

## Install

```bash
npm install papiercss tailwindcss
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

### Component tokens

Buttons, alerts, tables, and progress read `--paper-*` component variables
(not in `@theme`).  override to
tweak one component without changing the whole palette:

```css
:root {
  --paper-btn-primary-bg: #ffe4e1;
  --paper-btn-primary-fg: #7f1d1d;
  --paper-btn-primary-border-color: #b91c1c;

  --paper-table-stripe-fg: var(--paper-muted-500);
  --paper-table-hover-fg: var(--paper-secondary-700);

  --paper-progress-secondary-bg: #cceeff;
  --paper-progress-secondary-fg: #0c4a6e;
  --paper-progress-secondary-stripe-color: #66c2ff;

  --paper-skeleton-from: var(--paper-muted-500);
  --paper-skeleton-via: var(--paper-muted-300);

  --paper-spinner-secondary-color: #e85d04;
  --paper-spinner-success-color: #16a34a;

  --paper-avatar-secondary-bg: #d6f3ff;
  --paper-avatar-secondary-fg: #0c4a6e;
}

.dark {
  --paper-btn-primary-bg: #3f1d1d;
  --paper-btn-primary-fg: #fecaca;
}
```

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
| `rounded-paper-soft` | softer irregular radius (radios, thumbs, …) |
| `rounded-paper-circle` / `rounded-paper-circle-{1-6}` | imperfect circle/blob radius |
| `border-paper-thick` | 5px width |
| `child-borders-paper` | cycle border styles 1–6 on children |
| `shadow-paper` / `shadow-paper-sm` / `lg` / `hover` | paper shadows (theme) |
| `shadow-paper-lift` | hover lift + shadow |
| `font-paper` / `font-paper-heading` | Neucha / Patrick Hand SC |
| `text-paper-base` | base body look |
| `link-paper` | scribble underline link |
| `disabled-paper` | `cursor: not-allowed` + `--paper-disabled-opacity` |
| `field-paper` | shared text-field base (`input` / `select` / `textarea`) |

Example:

```html
<div class="border-paper-2 border-primary shadow-paper p-4 rounded-none">
  Hello
</div>
```

## Components (opt-in)

- Alert
- Article
- Avatar
- Breadcrumb
- Button
- Card
- Checkbox
- Collapsible
- Divider
- Input
- List
- Modal
- Navbar
- Popover
- Progress
- Radio
- Select
- Skeleton
- Slider
- Spinner
- Switch
- Table
- Tabs
- Tag

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

## Migrating from papiercss

- Drop-in `paper.css` auto-styling is gone (`button`, `a`, `input`, headings are no longer global).
- Old spacing utils (`margin-top-large`, …) → Tailwind (`mt-4`, …).
- `.border` → `border-paper` (plus `border-primary` if you want the color).
- `.paper-btn` / `button` styles → `btn-paper`.

## License

ISC — based on [PaperCSS](https://github.com/papercss/papercss) by [@rhyneav](https://github.com/rhyneav).
See [LICENSE.md](LICENSE.md)
