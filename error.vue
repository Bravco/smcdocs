<template>
    <UApp>
        <main class="min-h-[calc(100vh-var(--ui-header-height))] flex flex-col items-center justify-center text-center">
            <span class="text-base font-semibold text-primary">{{ error.statusCode }}</span>
            <h1 class="mt-2 text-4xl sm:text-5xl font-bold text-highlighted text-balance">{{ error.statusMessage }}</h1>
            <p class="mt-4 text-lg text-muted text-balance">{{ error.message }}</p>
            <div class="mt-8 flex items-center justify-center gap-6">
                <UButton to="/" label="Back to home"/>
            </div>
        </main>
    </UApp>
</template>

<script setup lang="ts">
    import type { NuxtError } from '#app';

    const props = defineProps<{
        error: NuxtError
    }>();
</script>