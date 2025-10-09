<template>
    <div class="px-3 xs:px-0 xs:container mx-auto">
        <div class="flex flex-col gap-15 pt-10 sm:pt-20 pb-10 sm:pb-17.5 border-b-[0.5px] border-black/30">
            <div class="flex justify-between">
                <home-section-title title="Categories" sub-title="Browse By Category" />
                <div class="hidden md:flex gap-2 items-end">
                    <button
                        class="prevEl w-11.5 h-11.5 flex justify-center items-center rounded-full bg-secondary rotate-180 hover:bg-secondary-02 active:bg-secondary-02 active:text-white hover:text-white">
                        <icons-arrow2 />
                    </button>
                    <button
                        class="nextEl w-11.5 h-11.5 flex justify-center items-center rounded-full bg-secondary hover:bg-secondary-02 active:bg-secondary-02 active:text-white hover:text-white">
                        <icons-arrow2 />
                    </button>
                </div>
            </div>
            <swiper :modules="[Pagination, Navigation]" :navigation="{ nextEl: '.nextEl', prevEl: '.prevEl' }"
                :loop="true" class="w-full" :speed="400" :breakpoints="{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        allowTouchMove: true
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                        allowTouchMove: false
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                        allowTouchMove: false
                    }
                }">
                <swiper-slide v-for="item in list" :key="item.label">
                    <div
                        class="h-36.25 rounded-sm border border-black/30 flex flex-col items-center justify-center gap-4 
                    cursor-pointer hover:text-white hover:bg-secondary-02 active:text-white active:bg-secondary-02 transition-colors duration-300 ease">
                        <component :is="item.icon" />
                        <p>{{ item.label }}</p>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    LazyIconsCategoryComputer,
    LazyIconsCategoryPhone,
    LazyIconsCategorySmartwatch,
    LazyIconsCategoryCamera,
    LazyIconsCategoryHeadphone,
    LazyIconsCategoryGaming,
    LazyIconsCategoryClothes
} from '#components';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const list = ref([
    { label: 'Phones', icon: LazyIconsCategoryPhone },
    { label: 'Computers', icon: LazyIconsCategoryComputer },
    { label: 'SmartWatch', icon: LazyIconsCategorySmartwatch },
    { label: 'Camera', icon: LazyIconsCategoryCamera },
    { label: 'HeadPhones', icon: LazyIconsCategoryHeadphone },
    { label: 'Gaming', icon: LazyIconsCategoryGaming },
    { label: 'Clothes', icon: LazyIconsCategoryClothes }
])
</script>

<style scoped></style>