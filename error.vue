<template>
    <layout-header />
    <div class="py-35 gap-20 flex flex-col items-center justify-center">
        <div class="flex flex-col gap-10 items-center text-black">
            <p class="text-[110px] leading-28.75 tracking-[3%] font-medium font-[Inter]">{{ error?.statusCode }} {{ error?.message }}
            </p>
            <p class="leading-6">Your visited page not found. You may go home page.</p>
        </div>
        <nuxt-link to="/" class="py-4 px-12 bg-secondary-02 text-text rounded-sm">Back to home page</nuxt-link>
    </div>
    <layout-footer />
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
    error: NuxtError
}>()
</script>

<style scoped></style>
