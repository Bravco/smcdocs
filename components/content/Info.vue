<template>
    <div class="group relative block px-4 py-3 rounded-md text-sm/6 last:mb-0 [&_code]:text-xs/5 [&_code]:bg-default [&_pre]:bg-default [&>div]:my-2.5 [&_ul]:my-2.5 [&_ol]:my-2.5 [&>*]:last:!mb-0 [&_ul]:ps-4.5 [&_ol]:ps-4.5 [&_li]:my-0 transition-colors border border-info/25 bg-info/10 text-info-600 dark:text-info-300 [&_a]:text-info [&_a]:hover:border-info [&_code]:text-info-600 dark:[&_code]:text-info-300 [&_code]:border-info/25 [&_a]:hover:[&>code]:border-info [&_a]:hover:[&>code]:text-info [&>ul]:marker:text-info/50 w-full my-0">
        <UIcon name="i-lucide-info" class="size-4 shrink-0 align-sub me-1.5 transition-colors text-info"/>
        <slot mdc-unwrap="p"/>
    </div>
</template>