<template>
    <div class="group relative block px-4 py-3 rounded-md text-sm/6 last:mb-0 [&_code]:text-xs/5 [&_code]:bg-default [&_pre]:bg-default [&>div]:my-2.5 [&_ul]:my-2.5 [&_ol]:my-2.5 [&>*]:last:!mb-0 [&_ul]:ps-4.5 [&_ol]:ps-4.5 [&_li]:my-0 transition-colors border border-error/25 bg-error/10 text-error-600 dark:text-error-300 [&_a]:text-error [&_a]:hover:border-error [&_code]:text-error-600 dark:[&_code]:text-error-300 [&_code]:border-error/25 [&_a]:hover:[&>code]:border-error [&_a]:hover:[&>code]:text-error [&>ul]:marker:text-error/50 w-full my-0">
        <UIcon name="i-lucide-circle-alert" class="size-4 shrink-0 align-sub me-1.5 transition-colors text-error"/>
        <slot mdc-unwrap="p"/>
    </div>
</template>