<template>
    <h4 ref="el" class="relative text-lg text-highlighted font-bold mt-6 mb-2 scroll-mt-[calc(24px+45px+var(--ui-header-height))] lg:scroll-mt-[calc(24px+var(--ui-header-height))] [&>a]:focus-visible:outline-primary">
        <NuxtLink :to="path" class="group lg:ps-2 lg:-ms-2">
            <slot/>
        </NuxtLink>
    </h4>
</template>

<script lang="ts" setup>
    const el = ref<HTMLElement | null>(null);
    const path = ref<string>("/");

    onMounted(() => {
        if (el.value) {
            path.value = "#" + el.value.id;
        }
    });
</script>