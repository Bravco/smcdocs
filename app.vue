<template>
    <UApp>
        <NuxtRouteAnnouncer/>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
        <ClientOnly>
            <LazyUContentSearch
                :files="files"
                :navigation="navigation"
            />
        </ClientOnly>
    </UApp>
</template>

<script setup lang="ts">
    const { data: navigation } = await useAsyncData("navigation", () => 
        queryCollectionNavigation("content").order("title", "ASC")
    );

    const { data: files } = useLazyAsyncData("search", () =>
        queryCollectionSearchSections("content", { server: false })
    );

    provide("navigation", navigation);
</script>