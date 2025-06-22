<template>
    <h3 ref="el" class="relative text-xl text-highlighted font-bold mt-8 mb-3 scroll-mt-[calc(32px+45px+var(--ui-header-height))] lg:scroll-mt-[calc(32px+var(--ui-header-height))] [&>a]:focus-visible:outline-primary [&>a>code]:border-dashed hover:[&>a>code]:border-primary hover:[&>a>code]:text-primary [&>a>code]:text-lg/6 [&>a>code]:font-bold [&>a>code]:transition-colors">
        <NuxtLink :to="path" class="group lg:ps-2 lg:-ms-2">
            <span class="absolute -ms-8 top-0.5 opacity-0 group-hover:opacity-100 group-focus:opacity-100 p-1 bg-elevated hover:text-primary rounded-md hidden lg:flex text-muted transition">
                <UIcon name="i-lucide-hash" class="size-4 shrink-0"/>
            </span>
            <slot/>
        </NuxtLink>
    </h3>
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