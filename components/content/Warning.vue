<template>
    <div class="group relative block px-4 py-3 rounded-md text-sm/6 last:mb-0 [&_code]:text-xs/5 [&_code]:bg-default [&_pre]:bg-default [&>div]:my-2.5 [&_ul]:my-2.5 [&_ol]:my-2.5 [&>*]:last:!mb-0 [&_ul]:ps-4.5 [&_ol]:ps-4.5 [&_li]:my-0 transition-colors border border-warning/25 bg-warning/10 text-warning-600 dark:text-warning-300 [&_a]:text-warning [&_a]:hover:border-warning [&_code]:text-warning-600 dark:[&_code]:text-warning-300 [&_code]:border-warning/25 [&_a]:hover:[&>code]:border-warning [&_a]:hover:[&>code]:text-warning [&>ul]:marker:text-warning/50 w-full my-0">
        <UIcon name="i-lucide-triangle-alert" class="size-4 shrink-0 align-sub me-1.5 transition-colors text-warning"/>
        <slot mdc-unwrap="p"/>
    </div>
</template>