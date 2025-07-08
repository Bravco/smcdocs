<template>
    <div>
      <header class="bg-default/75 backdrop-blur border-b border-default h-(--ui-header-height) sticky top-0 z-50">
        <nav class="max-w-(--ui-container) h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          <NuxtLink to="/" class="lg:flex-1 flex items-center gap-1.5">
            <UIcon name="i-lucide-candlestick-chart" class="size-5 text-primary"/>
            <h1 class="text-xl font-bold text-highlighted text-nowrap"><span class="text-primary">SMC</span> Docs</h1>
          </NuxtLink>

          <UNavigationMenu class="w-full justify-center hidden lg:flex lg:flex-1" :items="items" variant="link"/>
          
          <div class="flex items-center justify-end lg:flex-1 gap-1.5">
            <UButton
              icon="i-simple-icons:x"
              color="neutral"
              variant="ghost"
              to="https://x.com/sheldontrading"
              target="_blank"
              aria-label="Twitter"
            />
            <ColorModeButton/>
            <USlideover v-model:open="open">
              <UButton :icon="open ? 'i-lucide-x' : 'i-lucide-menu'" variant="ghost" color="neutral" class="lg:hidden -me-1.5"/>

              <template #header>
                <div class="w-full flex items-center justify-between">
                  <NuxtLink to="/" class="lg:flex-1">
                    <h1 class="text-xl font-bold text-highlighted"><span class="text-primary">SMC</span> Docs</h1>
                  </NuxtLink>
                  <div>
                    <UButton
                      icon="i-simple-icons:x"
                      color="neutral"
                      variant="ghost"
                      to="https://x.com/sheldontrading"
                      target="_blank"
                      aria-label="Twitter"
                    />
                    <ColorModeButton/>
                    <UButton @click="open = false" icon="i-lucide-x" variant="ghost" color="neutral"/>
                  </div>
                </div>
              </template>

              <template #body>
                <UNavigationMenu :items="items" orientation="vertical"/>
              </template>
            </USlideover>
          </div>
        </nav>
      </header>

      <main class="min-h-[calc(100vh-var(--ui-header-height))] relative">
        <div class="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(var(--ui-border)_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <svg
          v-if="route.path === '/'"
          viewBox="0 0 1440 181"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="pointer-events-none absolute w-full inset-0 -top-px transition-all text-primary shrink-0 -z-10 duration-[400ms]"
        >
          <mask id="path-1-inside-1_414_5526" fill="white">
            <path d="M0 0H1440V181H0V0Z"></path>
          </mask>
          <path d="M0 0H1440V181H0V0Z" fill="url(#paint0_linear_414_5526)" fill-opacity="0.22"></path>
          <path d="M0 2H1440V-2H0V2Z" fill="url(#paint1_linear_414_5526)" mask="url(#path-1-inside-1_414_5526)"></path>
          <defs>
            <linearGradient id="paint0_linear_414_5526" x1="720" y1="0" x2="720" y2="181" gradientUnits="userSpaceOnUse">
              <stop stop-color="currentColor"></stop>
              <stop offset="1" stop-color="currentColor" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint1_linear_414_5526" x1="0" y1="90.5" x2="1440" y2="90.5" gradientUnits="userSpaceOnUse">
              <stop stop-color="currentColor" stop-opacity="0"></stop>
              <stop offset="0.395" stop-color="currentColor"></stop>
              <stop offset="1" stop-color="currentColor" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
        <UContainer>
          <slot/>
        </UContainer>
      </main>

      <USeparator/>
      <footer>
        <UContainer class="flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-4 py-4">
          <p class="text-center text-sm text-muted lg:order-0 order-1">Copyright &copy; 2025 | All Rights Reserved.</p>
          <UButton
            icon="i-simple-icons:x"
            color="neutral"
            variant="ghost"
            to="https://x.com/sheldontrading"
            target="_blank"
            aria-label="Twitter"
          />
        </UContainer>
      </footer>
    </div>
</template>

<script lang="ts" setup>
  import type { ContentNavigationItem } from "@nuxt/content";
  import type { NavigationMenuItem } from "@nuxt/ui";

  const route = useRoute();
  const colorMode = useColorMode();

  const navigation = inject<Ref<ContentNavigationItem[]>>("navigation");

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
      active: route.path !== "/",
      children: navigation?.value.map(({ path, title, description }) => ({
        label: title,
        to: path,
        description: description as string | undefined
      })) ?? []
    }
  ]);

  watch(() => route.fullPath, () => open.value = false);
</script>