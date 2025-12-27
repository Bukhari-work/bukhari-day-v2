<script lang="ts">
    import type { LayoutProps } from "./$types";

    let { data, children }: LayoutProps = $props();
</script>

<div class="submenu"></div>

{@render children()}
