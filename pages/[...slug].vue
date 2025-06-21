<template>
    <UPage>
        <template #left>
            <UPageAside>
                <UContentSearchButton :collapsed="false"/>
                <USeparator class="h-8"/>
                <UContentNavigation :navigation="navigation" highlight/>
            </UPageAside>
        </template>

        <UPageHeader :title="page?.title" :description="page?.description"/>

        <UPageBody>
            <ContentRenderer :value="page!"/>
            <USeparator/>
            <UContentSurround :surround="surround!"/>
        </UPageBody>

        <template #right>
            <UContentToc :links="page?.body.toc?.links"/>
        </template>
    </UPage>
</template>

<script setup lang="ts">
    import type { ContentNavigationItem } from "@nuxt/content";

    const route = useRoute();
    const navigation = inject<Ref<ContentNavigationItem[]>>("navigation");

    const { data: page } = await useAsyncData(route.path, () =>
        queryCollection("content").path(route.path).first()
    );

    const { data: surround } = await useAsyncData(`${route.path}-surround`, () => 
        queryCollectionItemSurroundings("content", route.path).order("title", "ASC")
    );

    if (!page.value) {
        throw createError({
            statusCode: 404,
            statusMessage: "Page not found",
            fatal: true
        });
    }
</script>