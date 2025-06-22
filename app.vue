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
        queryCollection("content").select("title", "path", "description").order("title", "ASC").all()
    );
    
    provide("navigation", navigation);
</script>