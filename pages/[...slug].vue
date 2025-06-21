<template>
    <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-10">
        <UPageAside class="lg:col-span-2">
            <UContentSearchButton :collapsed="false"/>
            <USeparator class="h-8"/>
            <UContentNavigation :navigation="navigation" highlight/>
        </UPageAside>

        <div class="lg:col-span-6">
            <div v-if="page" class="border-b border-default py-8">
                <span class="mb-2.5 text-sm font-semibold text-primary flex items-center gap-1.5">headline</span>
                <h1 class="text-3xl sm:text-4xl text-pretty font-bold text-highlighted">{{ page?.title }}</h1>
                <p class="text-lg text-pretty text-muted mt-4">{{ page?.description }}</p>
            </div>

            <div class="mt-8 pb-24 space-y-12">
                <ContentRenderer v-if="page" :value="page"/>
                <USeparator/>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <NuxtLink v-if="surround[0]" :to="surround[0].path" class="group block px-6 py-8 rounded-lg border border-default hover:bg-elevated/50 focus-visible:outline-primary transition-colors">
                        <div class="inline-flex items-center rounded-full p-1.5 bg-elevated group-hover:bg-primary/10 ring ring-accented mb-4 group-hover:ring-primary/50 transition">
                            <UIcon name="i-lucide-arrow-left" class="size-5 shrink-0 text-highlighted group-hover:text-primary transition-[color,translate] group-active:-translate-x-0.5"/>
                        </div>
                        <p class="font-medium text-[15px] text-highlighted mb-1 truncate">{{ surround[0].title }}</p>
                        <p class="text-sm text-muted line-clamp-2">{{ surround[0].description }}</p>
                    </NuxtLink>
                    <span v-else class="hidden lg:block"></span>

                    <NuxtLink v-if="surround[1]" :to="surround[1].path" class="group block px-6 py-8 rounded-lg border border-default hover:bg-elevated/50 focus-visible:outline-primary transition-colors text-right">
                        <div class="inline-flex items-center rounded-full p-1.5 bg-elevated group-hover:bg-primary/10 ring ring-accented mb-4 group-hover:ring-primary/50 transition">
                            <UIcon name="i-lucide-arrow-right" class="size-5 shrink-0 text-highlighted group-hover:text-primary transition-[color,translate] group-active:translate-x-0.5"/>
                        </div>
                        <p class="font-medium text-[15px] text-highlighted mb-1 truncate">{{ surround[1].title }}</p>
                        <p class="text-sm text-muted line-clamp-2">{{ surround[1].description }}</p>
                    </NuxtLink>
                    <span v-else class="hidden lg:block"></span>
                </div>
            </div>
        </div>

        <UContentToc class="lg:col-span-2 order-first lg:order-last" :links="page?.body.toc?.links"/>
    </div>
</template>

<script setup lang="ts">
    import type { ContentNavigationItem } from "@nuxt/content";

    const route = useRoute();
    const navigation = inject<Ref<ContentNavigationItem[]>>("navigation");

    const { data: page } = await useAsyncData(route.path, () =>
        queryCollection("content").path(route.path).first()
    );

    const { data: surround } = await useAsyncData(`${route.path}-surround`, () => 
        queryCollectionItemSurroundings("content", route.path, { fields: ["description"] }).order("title", "ASC")
    );

    if (!page.value) {
        throw createError({
            statusCode: 404,
            statusMessage: "Page not found",
            fatal: true
        });
    }
</script>