<template>
    <ClientOnly v-if="!colorMode?.forced">
        <UButton
            :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
            color="neutral"
            variant="ghost"
            @click="isDark = !isDark"
            aria-label="Color Mode Button"
        />

        <template #fallback>
            <div class="size-8" />
        </template>
    </ClientOnly>
</template>

<script setup lang="ts">
    const colorMode = useColorMode();

    const isDark = computed<boolean>({
        get() {
            return colorMode.value === "dark";
        },
        set(_isDark) {
            colorMode.preference = _isDark ? "dark" : "light";
        }
    });
</script>