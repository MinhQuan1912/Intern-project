<template>
    <div class=" m:container m:mx-auto flex">
        <div class="pt-10 pr-4 hidden m:flex flex-col min-w-50 w-1/5 gap-4 border-r-[0.5px] border-black/30">
            <template v-for="item in list" :key="item.label">
                <div v-if="item.sub" class="h-6 flex justify-between text-black cursor-pointer whitespace-nowrap">
                    <p>{{ item.label }}</p>
                    <icons-arrow1 class="-rotate-90" />
                </div>
                <nuxt-link v-else to="" class="cursor-pointer hover:text-secondary-02 h-6">{{ item.label }}</nuxt-link>
            </template>
        </div>
        <div class="pt-10 m:pl-4 lg:pl-11.25 banner w-full m:w-4/5 overflow-hidden">
            <swiper :modules="[Pagination, Autoplay, Navigation]" :slides-per-view="1" :loop="true"
                :pagination="{ clickable: true }" :initial-slide="2">
                <swiper-slide><img src="/images/banner-2.png" class="w-full h-86" alt=""></swiper-slide>
                <swiper-slide><img src="/images/banner-3.png" class="w-full h-86" alt=""></swiper-slide>
                <swiper-slide>
                    <div class="flex items-center gap-9.5 bg-black pt-4 pl-16 h-86 ">
                        <div class="flex flex-col gap-5 text-text">
                            <div class="flex items-center gap-6">
                                <icons-apple />
                                <p class="leading-6">iPhone 14 Series</p>
                            </div>
                            <p class="lg:text-[48px] leading-15 font-semibold tracking-[4%]">Up to 10%<br /> off
                                Voucher
                            </p>
                            <div class="flex gap-2 h-6">
                                <p class="border-b h-6 border-text">Shop Now</p>
                                <icons-arrow2 />
                            </div>
                        </div>
                        <div class="flex-1 overflow-hidden">
                            <img src="/images/banner-1.png" class="object-contain aspect-31/22" alt="ip14">
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide><img src="/images/banner-4.png" class="w-full h-86" alt=""></swiper-slide>
                <swiper-slide><img src="/images/banner-5.png" class="w-full h-86" alt=""></swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const list = ref([
    {
        label: "Woman's Fashion",
        sub: {}
    },
    {
        label: "Men's Fashion",
        sub: {}
    },
    { label: 'Electronics' },
    { label: 'Home & Lifestyle' },
    { label: 'Medicine' },
    { label: 'Sports & Outdoor' },
    { label: "Baby's & Toys" },
    { label: 'Groceries & Pets' },
    { label: 'Health & Beauty' },
])


</script>

<style lang="scss">

</style>