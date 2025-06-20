<template>
    <UApp>
        <NuxtRouteAnnouncer/>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
    </UApp>
</template>

<script setup lang="ts">
    const { data: navigation } = await useAsyncData("navigation", () => queryCollectionNavigation("content"));
    provide("navigation", navigation);
</script>