<script setup>
import { computed, onMounted } from "vue";
import { CollapsibleRoot, CollapsibleTrigger, CollapsibleContent, useForwardPropsEmits } from "reka-ui";
import { reactivePick, createReusableTemplate } from "@vueuse/core";
import { useRouter, useAppConfig } from "#imports";
import theme from "~/utils/contentTocTheme";
import { tv } from "tailwind-variants";

const props = defineProps({
  as: { type: null, required: false, default: "nav" },
  trailingIcon: { type: String, required: false },
  title: { type: String, required: false },
  color: { type: null, required: false },
  highlight: { type: Boolean, required: false },
  highlightColor: { type: null, required: false },
  links: { type: Array, required: false },
  class: { type: null, required: false },
  ui: { type: null, required: false },
  defaultOpen: { type: Boolean, required: false },
  open: { type: Boolean, required: false }
});
const emits = defineEmits(["update:open", "move"]);
const slots = defineSlots();
const rootProps = useForwardPropsEmits(reactivePick(props, "as", "open", "defaultOpen"), emits);
const router = useRouter();
const appConfig = useAppConfig();
const { activeHeadings, updateHeadings } = useScrollspy();
const [DefineListTemplate, ReuseListTemplate] = createReusableTemplate({
  props: {
    links: Array,
    level: Number
  }
});
const [DefineTriggerTemplate, ReuseTriggerTemplate] = createReusableTemplate();
const ui = computed(() =>
  tv(theme)({
    color: props.color,
    highlight: props.highlight,
    highlightColor: props.highlightColor || props.color
  })
);
function scrollToHeading(id) {
  const encodedId = encodeURIComponent(id);
  router.push(`#${encodedId}`);
  emits("move", id);
}
function flattenLinks(links) {
  return links.flatMap((link) => [link, ...link.children ? flattenLinks(link.children) : []]);
}
const indicatorStyle = computed(() => {
  if (!activeHeadings.value?.length) {
    return;
  }
  const flatLinks = flattenLinks(props.links || []);
  const activeIndex = flatLinks.findIndex((link) => activeHeadings.value.includes(link.id));
  const linkHeight = 28;
  const gapSize = 0;
  return {
    "--indicator-size": `${linkHeight * activeHeadings.value.length + gapSize * (activeHeadings.value.length - 1)}px`,
    "--indicator-position": activeIndex >= 0 ? `${activeIndex * (linkHeight + gapSize)}px` : "0px"
  };
});
onMounted(() => {
  const headings = Array.from(document.querySelectorAll("h2, h3"));
  updateHeadings(headings);
});
</script>

<template>
  <!-- eslint-disable-next-line vue/no-template-shadow -->
  <DefineListTemplate v-slot="{ links, level }">
    <ul :class="level > 0 ? ui.listWithChildren({ class: props.ui?.listWithChildren }) : ui.list({ class: props.ui?.list })">
      <li v-for="(link, index) in links" :key="index" :class="link.children && link.children.length > 0 ? ui.itemWithChildren({ class: [props.ui?.itemWithChildren, link.ui?.itemWithChildren] }) : ui.item({ class: [props.ui?.item, link.ui?.item] })">
        <a :href="`#${link.id}`" :class="ui.link({ class: [props.ui?.link, link.ui?.link, link.class], active: activeHeadings.includes(link.id) })" @click.prevent="scrollToHeading(link.id)">
          <slot name="link" :link="link">
            <span :class="ui.linkText({ class: [props.ui?.linkText, link.ui?.linkText] })">
              {{ link.text }}
            </span>
          </slot>
        </a>

        <ReuseListTemplate v-if="link.children?.length" :links="link.children" :level="level + 1" />
      </li>
    </ul>
  </DefineListTemplate>

  <DefineTriggerTemplate v-slot="{ open }">
    <slot name="leading" :open="open" />

    <span :class="ui.title({ class: props.ui?.title })">
      <slot :open="open">{{ title }}</slot>
    </span>

    <span :class="ui.trailing({ class: props.ui?.trailing })">
      <slot name="trailing" :open="open">
        <UIcon :name="trailingIcon || appConfig.ui.icons.chevronDown" :class="ui.trailingIcon({ class: props.ui?.trailingIcon })" />
      </slot>
    </span>
  </DefineTriggerTemplate>

  <CollapsibleRoot v-slot="{ open }" v-bind="rootProps" :default-open="defaultOpen" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <div :class="ui.container({ class: props.ui?.container })">
      <div v-if="!!slots.top" :class="ui.top({ class: props.ui?.top })">
        <slot name="top" :links="links" />
      </div>

      <template v-if="links?.length">
        <CollapsibleTrigger :class="ui.trigger({ class: 'lg:hidden' })">
          <ReuseTriggerTemplate :open="open" />
        </CollapsibleTrigger>

        <CollapsibleContent :class="ui.content({ class: [props.ui?.content, 'lg:hidden'] })">
          <div v-if="highlight" :class="ui.indicator({ class: props.ui?.indicator })" :style="indicatorStyle" />

          <slot name="content" :links="links">
            <ReuseListTemplate :links="links" :level="0" />
          </slot>
        </CollapsibleContent>

        <p :class="ui.trigger({ class: 'hidden lg:flex' })">
          <ReuseTriggerTemplate :open="open" />
        </p>

        <div :class="ui.content({ class: [props.ui?.content, 'hidden lg:flex'] })">
          <div v-if="highlight" :class="ui.indicator({ class: props.ui?.indicator })" :style="indicatorStyle" />

          <slot name="content" :links="links">
            <ReuseListTemplate :links="links" :level="0" />
          </slot>
        </div>
      </template>

      <div v-if="!!slots.bottom" :class="ui.bottom({ class: props.ui?.bottom })">
        <slot name="bottom" :links="links" />
      </div>
    </div>
  </CollapsibleRoot>
</template>
