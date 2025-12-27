<script lang="ts">
    const currentYear = new Date().getFullYear();
</script>

<footer class="border-t py-6 md:py-0">
    <div
        class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row"
    >
        <div
            class="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0"
        >
            <p
                class="text-center text-sm leading-loose text-muted-foreground md:text-left"
            >
                Built by <span
                    class="font-medium text-foreground underline decoration-dashed underline-offset-4"
                    >You</span
                >. The source code is available on
                <a
                    href="https://github.com"
                    target="_blank"
                    class="font-medium underline underline-offset-4">GitHub</a
                >.
            </p>
        </div>

        <div class="flex gap-4 text-sm text-muted-foreground">
            <a
                href="mailto:your@email.com"
                class="hover:text-foreground hover:underline">Email</a
            >
            <a
                href="https://linkedin.com"
                class="hover:text-foreground hover:underline">LinkedIn</a
            >
        </div>
    </div>
</footer>
