<template>
    <div>
        <UHeader mode="slideover">
          <template #title>
            <h1><span class="text-primary">SMC</span> Docs</h1>
          </template>

          <UNavigationMenu :items="items" variant="link"/>

          <template #body>
            <UNavigationMenu :items="items" orientation="vertical"/>
          </template>

          <template #right>
            <ColorModeButton/>
          </template>
        </UHeader>

        <UMain>
          <UContainer>
            <slot/>
          </UContainer>
        </UMain>

        <USeparator/>
        <UFooter>
          <p class="text-center text-sm text-muted font-medium">Copyright &copy; 2025 | All Rights Reserved.</p>
        </UFooter>
    </div>
</template>

<script lang="ts" setup>
  const route = useRoute();

  const items = computed<NavigationMenuItem[]>(() => [
    {
      label: "Home",
      icon: "i-lucide-house",
      to: "/",
      active: route.path === "/"
    },
    {
      label: "Docs",
      icon: "i-lucide-book-open",
      to: "/candle-behaviour",
      active: route.path !== "/"
    }
  ]);
</script>