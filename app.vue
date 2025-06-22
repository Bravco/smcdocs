<template>
    <UApp>
        <NuxtRouteAnnouncer/>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
    </UApp>
</template>

<script setup lang="ts">
    const { data: navigation } = await useAsyncData("navigation", () => 
        queryCollectionNavigation("content").order("title", "ASC")
    );
    
    provide("navigation", navigation);
</script>