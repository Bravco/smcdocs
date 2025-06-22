<template>
    <div class="group relative block px-4 py-3 rounded-md text-sm/6 last:mb-0 [&_code]:text-xs/5 [&_code]:bg-default [&_pre]:bg-default [&>div]:my-2.5 [&_ul]:my-2.5 [&_ol]:my-2.5 [&>*]:last:!mb-0 [&_ul]:ps-4.5 [&_ol]:ps-4.5 [&_li]:my-0 transition-colors border border-success/25 bg-success/10 text-success-600 dark:text-success-300 [&_a]:text-success [&_a]:hover:border-success [&_code]:text-success-600 dark:[&_code]:text-success-300 [&_code]:border-success/25 [&_a]:hover:[&>code]:border-success [&_a]:hover:[&>code]:text-success [&>ul]:marker:text-success/50 w-full my-0">
        <UIcon name="i-lucide-lightbulb" class="size-4 shrink-0 align-sub me-1.5 transition-colors text-success"/>
        <slot mdc-unwrap="p"/>
    </div>
</template>