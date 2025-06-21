<template>
    <div>
        <section>
            <UContainer class="flex flex-col lg:grid py-24 sm:py-32 lg:py-40 gap-16 sm:gap-y-24">
                <div class="text-center">
                    <UBadge icon="i-lucide-rocket" label="For Free" variant="soft" color="success"/>
                    <h1 class="text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-highlighted"><span class="text-primary">Smart Money Concepts</span> Docs</h1>
                    <p class="text-lg sm:text-xl/8 text-muted text-balance mt-6">Stop trading like the dumb money — start thinking like the smart money.</p>
                    <div class="mt-8 flex flex-wrap gap-x-6 gap-y-3 justify-center">
                        <UButton to="/candle-behaviour" label="Get started" icon="i-lucide-wand-sparkles"/>
                        <UButton to="/#about" label="Learn more" trailingIcon="i-lucide-arrow-right" variant="subtle" color="neutral"/>
                    </div>
                </div>
            </UContainer>
        </section>

        <section id="about">
            <UContainer class="flex flex-col lg:grid py-16 sm:py-24 lg:py-32 gap-8 sm:gap-16">
                <div>
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-highlighted text-center">Everything to become <span class="text-primary">profitable</span></h2>
                    <p class="text-base sm:text-lg text-muted text-center text-balance mt-6">Learn price action and proven liquidity concepts that actually work.</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <UCard
                        v-for="(card, index) in cards"
                        :key="index"
                        :class="[card.class]"
                        variant="subtle"
                    >
                        <div 
                            class="flex flex-col flex-1"
                            :class="card.image ? 'lg:grid gap-x-8 gap-y-4 lg:grid-cols-2 lg:items-center' : 'items-start'"
                        >
                            <div class="h-full flex flex-col flex-1 items-start">
                                <UIcon
                                    :name="card.icon.name"
                                    :class="['size-5  mb-2.5', `text-${card.icon.color}`]"
                                />
                                <div class="flex-1">
                                    <h3 class="text-base text-pretty font-semibold text-highlighted">{{ card.title }}</h3>
                                    <p class="text-[15px] text-pretty text-toned mt-1">{{ card.description }}</p>
                                </div>
                            </div>
                            <ClientOnly v-if="!colorMode?.forced">
                                <NuxtImg
                                    v-if="card.image"
                                    :src="`${card.image.path}-${colorMode.value}.svg`"
                                    :width="card.image.width"
                                    :height="card.image.height"
                                    :alt="card.title"
                                    loading="lazy"
                                    class="w-full"
                                />
                            </ClientOnly>
                        </div>
                    </UCard>
                </div>
            </UContainer>
        </section>

        <section>
            <UContainer class="py-16 sm:py-24 lg:py-32">
                <div class="rounded-xl bg-elevated/50 ring ring-default px-6 py-12 sm:px-12 sm:py-24 lg:px-16 lg:py-24">
                    <h2 class="text-3xl sm:text-4xl text-pretty tracking-tight font-bold text-highlighted text-center">Backed by <span class="text-primary">profitable traders</span></h2>
                    <p class="text-base sm:text-lg text-center text-balance text-toned mt-6">95% of traders fail because they do not trade <span class="font-bold">Smart Money Concepts</span>.</p>
                    <div class="mt-8 flex flex-wrap gap-x-6 gap-y-3 justify-center">
                        <UButton to="/candle-behaviour" label="Get started" icon="i-lucide-wand-sparkles"/>
                        <UButton to="/#about" label="Learn more" trailingIcon="i-lucide-arrow-right" variant="subtle" color="neutral"/>
                    </div>
                </div>
            </UContainer>
        </section>
    </div>
</template>

<script lang="ts" setup>
    const colorMode = useColorMode();

    const cards = ref([
        {
            title: "Liquidity",
            description: "Market movement is driven by liquidity and nothing else.",
            icon: {
                name: "i-lucide-glass-water",
                color: "info"
            },
            class: "lg:col-span-2",
            image: {
                path: "/images/liquidity",
                width: 240,
                height: 135
            },
            orientation: "horizontal" as const
        },
        {
            title: "Strategy Creation",
            description: "Combine your trading knowledge into a money-making system.",
            icon: {
                name: "i-lucide-wrench",
                color: "warning"
            }
        },
        {
            title: "Psychology",
            description: "Most traders fail because they cannot control their emotions.",
            icon: {
                name: "i-lucide-brain",
                color: "success"
            }
        },
        {
            title: "Market Structure",
            description: "Reading current price action and determining the trend are mandatory while trading.",
            icon: {
                name: "i-lucide-chart-candlestick",
                color: "error"
            },
            class: "lg:col-span-2",
            image: {
                path: "/images/trends",
                width: 240,
                height: 135
            },
            orientation: "horizontal" as const,
            reverse: true
        }
    ]);
</script>