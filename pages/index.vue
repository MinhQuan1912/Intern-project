<template>
    <home-section-banner />
    <home-section-flash-sale/>
    <home-section-categories />
    <home-section-best-selling/>
    <div class="px-3 xs:px-0 xs:container xs:mx-auto">
        <div class="pt-15 lg:pt-35 pb-15 lg:pb-17.5">
            <div class="bg-black md:h-125 py-5 md:py-0 px-3 lg:pr-11 lg:pl-14 flex flex-col md:flex-row justify-between items-center gap-6">
                <div class="flex flex-col gap-10 flex-1 order-2 md:order-1">
                    <div class="flex flex-col gap-4 md:gap-8">
                        <p class="leading-5 font-semibold text-button-01">Categories</p>
                        <p class="text-5xl leading-15 tracking-[4%] font-semibold text-text">Enhance Your Music
                            Experience</p>
                        <div class="h-15.5 flex gap-6">
                            <div v-for="(time, index) in countdownUnits" :key="index"
                                class="h-15.5 w-15.5 rounded-full flex flex-col justify-center items-center bg-white px-2.5 ">
                                <p class="text-lg font-semibold leading-none">{{ time.value }}</p>
                                <p class="text-[11px] font-normal">{{ time.label }}</p>
                            </div>
                        </div>
                    </div>
                    <button
                        class="px-12 py-4 rounded-sm bg-button-01 text-text leading-6 font-medium w-max hover:bg-text active:bg-text hover:text-button-01 active:text-button-01">Buy
                        Now!</button>
                </div>
                <div class="md:w-150 flex justify-center items-center px-4 order-1 md:order-2">
                    <img src="/images/CategoriesHome.png" class="object-cover">
                </div>
            </div>
        </div>
    </div>
    <home-section-feature />
    <service />
</template>
<script setup lang="ts">
import { useCountdown } from '~/composable/useCountDown';
const targetDate = new Date()
targetDate.setDate(targetDate.getDate() + 5)
const { days, hours, minutes, seconds } = useCountdown(targetDate)
const countdownUnits = computed(() => [
    { label: 'Days', value: days.value },
    { label: 'Hours', value: hours.value },
    { label: 'Minutes', value: minutes.value },
    { label: 'Seconds', value: seconds.value },
])

</script>
<style></style>
