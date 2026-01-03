<script module lang="ts">
  export const metadata = {
    title: "MDsveX Preview (Svelte 5)",
    description:
      "A long .svx page to preview typography, components, code blocks, tables, and interactive demos.",
    date: "2025-12-30",
    tags: ["mdsvex", "sveltekit", "svelte5", "preview"],
    published: true
  };
</script>

<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { Card } from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";

  // Svelte 5 runes
  let count = $state(0);
  let showDetails = $state(false);

  let name = $state("Bukhari");
  let mood = $state<"calm" | "focused" | "chaotic">("focused");

  let todos = $state([
    { id: 1, text: "Finish layout polish", done: false },
    { id: 2, text: "Add OG tags", done: true },
    { id: 3, text: "Ship the first version", done: false }
  ]);

  let newTodoText = $state("");

  function inc() {
    count += 1;
  }

  function dec() {
    count -= 1;
  }

  function toggleDetails() {
    showDetails = !showDetails;
  }

  function addTodo() {
    const text = newTodoText.trim();
    if (!text) return;

    todos = [{ id: Date.now(), text, done: false }, ...todos];
    newTodoText = ""; // clear input after add
  }

  function toggleTodo(id: number) {
    todos = todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
  }

  // optional: Enter key to submit
  function onNewTodoKeydown(e: KeyboardEvent) {
    if (e.key === "Enter") addTodo();
  }
</script>

This file is meant to help you preview:

- Typography (headings, paragraphs, lists, links)
- Markdown elements (tables, blockquotes, code)
- Embedded HTML
- **Svelte 5 interactivity inside `.svx`** (buttons, state, conditional UI)

---

## 1) Headings & Paragraph Rhythm

### Subheading: Comfortable reading width

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.

**Bold text**, *italic text*, and `inline code` should all look good.

A link example: [Svelte docs](https://svelte.dev).

---

## 2) Lists

### Unordered

- Clean bullets
- Consistent spacing
- Nested list:
  - Level 2
  - Another item
    - Level 3

### Ordered

1. Step one
2. Step two
3. Step three

---

## 3) Blockquote

> A blockquote should have enough contrast and spacing to feel intentional.

---

## 4) Code Blocks

### TypeScript

```ts
type Mood = "calm" | "focused" | "chaotic";

function greet(name: string, mood: Mood) {
  return `Hello ${name}, you look ${mood} today.`;
}
````

```bash
pnpm add -D mdsvex
pnpm sv add mdsvex
```

---

## 5) Table

| Feature       | Expectation          | Status             |
| ------------- | -------------------- | ------------------ |
| Headings      | Good hierarchy       | ✅                  |
| Links         | Clear style          | ✅                  |
| Code blocks   | Syntax highlight     | ✅ / depends        |
| Interactivity | Buttons update state | ✅ (if events work) |

---
## 6) Interactive Demos (Svelte 5 / runes)

<div class="not-prose space-y-10">
  <Card class="p-5 sm:p-6">
    <div class="flex flex-col gap-4">
      <div class="flex items-start justify-between gap-4">
        <div class="space-y-1">
          <h3 class="text-base font-semibold leading-none">Demo A</h3>
          <p class="text-sm text-muted-foreground">
            Native state + conditional UI
          </p>
        </div>

        <Badge variant="secondary" class="font-mono">
          count: {count}
        </Badge>
      </div>

      <div class="flex flex-wrap items-center gap-2">
        <Button variant="secondary" size="sm" onclick={dec} aria-label="decrement">
          -1
        </Button>
        <Button variant="secondary" size="sm" onclick={inc} aria-label="increment">
          +1
        </Button>

        <Button
          variant="outline"
          size="sm"
          onclick={toggleDetails}
          aria-expanded={showDetails}
        >
          {showDetails ? "Hide details" : "Show details"}
        </Button>
      </div>

      {#if showDetails}
        <div class="rounded-lg border bg-muted/40 p-4 text-sm">
          <p class="font-medium">Details panel</p>
          <p class="mt-1 text-muted-foreground">
            If you can toggle this, hydration + events are working.
          </p>
          <p class="mt-2 text-muted-foreground">
            Try clicking increment a few times — the badge should update instantly.
          </p>
        </div>
      {/if}
    </div>
  </Card>

  <Card class="p-5 sm:p-6">
    <div class="space-y-5">
      <div class="space-y-1">
        <h3 class="text-base font-semibold leading-none">Demo B</h3>
        <p class="text-sm text-muted-foreground">
          “Form-ish” state + segmented mood picker
        </p>
      </div>

      <div class="grid gap-2">
        <Label for="demo-name">Your name</Label>
        <Input
          id="demo-name"
          value={name}
          oninput={(e) => (name = (e.currentTarget as HTMLInputElement).value)}
          placeholder="Type here…"
        />
        <p class="text-sm text-muted-foreground">
          Hello, <span class="font-medium text-foreground">{name}</span> 👋
        </p>
      </div>

      <div class="space-y-2">
        <p class="text-sm font-medium">Pick a mood</p>

        <div class="inline-flex flex-wrap gap-2 rounded-lg border bg-muted/30 p-1">
          <Button
            size="sm"
            variant={mood === "calm" ? "default" : "ghost"}
            onclick={() => (mood = "calm")}
            aria-pressed={mood === "calm"}
          >
            Calm
          </Button>
          <Button
            size="sm"
            variant={mood === "focused" ? "default" : "ghost"}
            onclick={() => (mood = "focused")}
            aria-pressed={mood === "focused"}
          >
            Focused
          </Button>
          <Button
            size="sm"
            variant={mood === "chaotic" ? "default" : "ghost"}
            onclick={() => (mood = "chaotic")}
            aria-pressed={mood === "chaotic"}
          >
            Chaotic
          </Button>
        </div>

        <p class="text-sm text-muted-foreground">
          Current mood: <code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">{mood}</code>
        </p>
      </div>
    </div>
  </Card>

  <Card class="p-5 sm:p-6">
    <div class="space-y-5">
      <div class="flex items-start justify-between gap-4">
        <div class="space-y-1">
          <h3 class="text-base font-semibold leading-none">Demo C</h3>
          <p class="text-sm text-muted-foreground">Tiny list interaction</p>
        </div>

        <div class="flex flex-col gap-2 sm:flex-row sm:items-center">
        <Input
            placeholder="Add a todo…"
            value={newTodoText}
            oninput={(e) => (newTodoText = (e.currentTarget as HTMLInputElement).value)}
            onkeydown={onNewTodoKeydown}
        />
        <Button size="sm" onclick={addTodo} disabled={!newTodoText.trim()}>
            Add todo
        </Button>
        </div>
      </div>

      <ul class="divide-y rounded-lg border">
        {#each todos as t (t.id)}
          <li class="flex items-center gap-3 p-3">
            <input
              class="h-4 w-4 accent-current"
              type="checkbox"
              checked={t.done}
              onchange={() => toggleTodo(t.id)}
            />

            <div class="min-w-0 flex-1">
              {#if t.done}
                <p class="truncate text-sm text-muted-foreground line-through">{t.text}</p>
              {:else}
                <p class="truncate text-sm">{t.text}</p>
              {/if}
            </div>

            <Badge variant={t.done ? "secondary" : "outline"} class="shrink-0">
              {t.done ? "Done" : "Todo"}
            </Badge>
          </li>
        {/each}
      </ul>
    </div>
  </Card>
</div>

---

## 7) Notes for shadcn-svelte buttons

If you’re using shadcn-svelte’s `<Button />`, event binding depends on how that component forwards props.

This usually works if the component forwards DOM events:

<Button onclick={() => alert("works in Svelte 5")}>Click</Button>

If it *doesn’t* forward `onclick`, fall back to:

<Button on:click={() => alert("works")}>Click</Button>


---

## 8) End

If everything above updates live, your `.svx` pipeline is interactive-ready.
