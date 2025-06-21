<template>
    <UPage>
        <UPageHero headline="For Free" :links="links">
            <template #title>
                <h1><span class="text-primary">Smart Money Concepts</span> Docs</h1>
            </template>
            <template #description>
                <p>Stop trading like the <span class="font-medium">dumb money</span> — start thinking like the <span class="font-medium">smart money</span>.</p>
            </template>
        </UPageHero>

        <UPageSection id="about" description="Learn price action and proven liquidity concepts that actually work.">
            <template #title>
                <h2>Everything to become <span class="text-primary">profitable</span></h2>
            </template>
            <UPageGrid>
                <UPageCard
                    v-for="(card, index) in cards"
                    :key="index"
                    v-bind="card"
                    :spotlight="true"
                    variant="subtle"
                >
                    <UColorModeImage
                        v-if="card.image"
                        :light="`${card.image.path}-light.svg`"
                        :dark="`${card.image.path}-dark.svg`"
                        :width="card.image.width"
                        :height="card.image.height"
                        :alt="card.title"
                        loading="lazy"
                        class="w-full"
                    />
                </UPageCard>
            </UPageGrid>
        </UPageSection>

        <UPageSection>
            <UPageCTA variant="subtle" :links="links">
                <template #title>
                    <h2>Backed by <span class="text-primary">profitable traders</span></h2>
                </template>
                <template #description>
                    <p>95% of traders fail because they do not trade <span class="font-medium">Smart Money Concepts</span>.</p>
                </template>
            </UPageCTA>
        </UPageSection>
    </UPage>
</template>

<script lang="ts" setup>
    const links = ref([
        {
            label: "Get started",
            icon: "i-lucide-wand-sparkles",
            to: "/candle-behaviour"
        },
        {
            label: "Learn more",
            to: "/#about",
            color: "neutral",
            variant: "subtle",
            trailingIcon: "i-lucide-arrow-right"
        }
    ]);

    const cards = ref([
        {
            title: "Liquidity",
            description: "Market movement is driven by liquidity and nothing else.",
            icon: "i-lucide-glass-water",
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
            icon: "i-lucide-wrench"
        },
        {
            title: "Psychology",
            description: "Most traders fail because they cannot control their emotions.",
            icon: "i-lucide-brain"
        },
        {
            title: "Market Structure",
            description: "Reading current price action and determining the trend are mandatory while trading.",
            icon: "i-lucide-chart-candlestick",
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