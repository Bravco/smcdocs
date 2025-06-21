<template>
    <div>
      <header class="bg-default/75 backdrop-blur border-b border-default h-(--ui-header-height) sticky top-0 z-50">
        <nav class="max-w-(--ui-container) h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          <NuxtLink to="/" class="lg:flex-1">
            <h1 class="text-xl font-bold text-highlighted"><span class="text-primary">SMC</span> Docs</h1>
          </NuxtLink>

          <UNavigationMenu class="hidden lg:flex" :items="items" variant="link"/>
          
          <div class="flex items-center justify-end lg:flex-1 gap-1.5">
            <ColorModeButton/>
            <USlideover v-model:open="open">
              <UButton :icon="open ? 'i-lucide-x' : 'i-lucide-menu'" variant="ghost" color="neutral" class="lg:hidden -me-1.5"/>

              <template #header>
                <div class="w-full flex items-center justify-between">
                  <NuxtLink to="/" class="lg:flex-1">
                    <h1 class="text-xl font-bold text-highlighted"><span class="text-primary">SMC</span> Docs</h1>
                  </NuxtLink>
                  <div>
                    <ColorModeButton/>
                    <UButton @click="open = false" icon="i-lucide-x" variant="ghost" color="neutral"/>
                  </div>
                </div>
              </template>

              <template #body>
                <UNavigationMenu @click="open = false" :items="items" orientation="vertical"/>
              </template>
            </USlideover>
          </div>
        </nav>
      </header>

      <main class="min-h-[calc(100vh-var(--ui-header-height))]">
        <UContainer>
          <slot/>
        </UContainer>
      </main>

      <USeparator/>
      <footer class="py-8">
        <p class="text-center text-sm text-muted">Copyright &copy; 2025 | All Rights Reserved.</p>
      </footer>
    </div>
</template>

<script lang="ts" setup>
  const route = useRoute();

  const open = ref<boolean>(false);

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

  watch(() => route.fullPath, () => open.value = false);
</script>