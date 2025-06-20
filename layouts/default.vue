<template>
    <div>
        <UHeader>
          <template #title>
            <h1><span class="text-primary">SMC</span> Docs</h1>
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

        <UFooter>
          <p class="text-center text-sm text-muted">&copy; 2025 | All Right Reserved.</p>
        </UFooter>
    </div>
</template>