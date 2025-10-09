<template>
    <div class=" m:container m:mx-auto flex">
        <div class="pt-10 pr-4 hidden m:flex flex-col min-w-50 w-1/5 gap-4 border-r-[0.5px] border-black/30">
            <template v-for="item in list" :key="item.label">
                <!-- Cấp 1 -->
                <div v-if="item.sub" class="group relative">
                    <div
                        class="h-6 flex justify-between items-center text-black cursor-pointer whitespace-nowrap hover:text-secondary-02 transition-all duration-300 ease">
                        <p>{{ item.label }}</p>
                        <icons-arrow1 class="-rotate-90" />
                    </div>
                    <!-- Cấp 2 -->
                    <div
                        class="absolute -top-3 left-full hidden group-hover:flex bg-white shadow-md rounded-sm p-3 min-w-40 flex-col gap-2 z-5">
                        <template v-for="subItem in item.sub" :key="subItem.label">
                            <div v-if="subItem.sub" class="group/sub relative">
                                <div
                                    class="h-6 flex justify-between items-center text-black cursor-pointer whitespace-nowrap hover:text-secondary-02 transition-all duration-300 ease">
                                    <p>{{ subItem.label }}</p>
                                    <icons-arrow1 class="-rotate-90" />
                                </div>
                                <!-- Cấp 3 -->
                                <div
                                    class="absolute -top-3 left-full hidden group-hover/sub:flex flex-col gap-2 bg-white shadow-md rounded-sm p-3 min-w-40 z-5">
                                    <nuxt-link v-for="child in subItem.sub" :key="child" to=""
                                        class="block cursor-pointer hover:text-secondary-02 h-6 whitespace-nowrap">
                                        {{ child }}
                                    </nuxt-link>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>

                <nuxt-link v-else to="" class="cursor-pointer hover:text-secondary-02 h-6 whitespace-nowrap">
                    {{ item.label }}
                </nuxt-link>
            </template>

        </div>
        <div class="pt-10 m:pl-4 lg:pl-11.25 banner w-full m:w-4/5 overflow-hidden">
            <swiper :modules="[Pagination, Autoplay, Navigation]" :slides-per-view="1" :loop="true"
                :pagination="{ clickable: true }" :initial-slide="2">
                <swiper-slide v-for="item in banner" :key="item.title">
                    <div class="flex items-center gap-9.5 bg-black pt-4 pl-16 h-86 ">
                        <div class="flex flex-col gap-5 text-text">
                            <div class="flex items-center gap-6">
                                <icons-apple />
                                <p class="leading-6">{{item.title}}</p>
                            </div>
                            <p class="lg:text-[48px] leading-15 font-semibold tracking-[4%]">Up to
                                {{item.discount}}%<br /> off
                                Voucher
                            </p>
                            <button class="flex gap-2 h-6 group items-center">
                                <p
                                    class="border-b h-6 border-text group-hover:text-secondary-02 group-hover:border-secondary-02 transition-all duration-300 ease">
                                    Shop Now</p>
                                <icons-arrow2 class="group-hover:text-secondary-02 transition-all duration-300 ease" />
                            </button>
                        </div>
                        <div class="w-3/5 overflow-hidden">
                            <img :src="item.image" class="object-cover aspect-31/22 w-full" alt="{{ item.title }}">
                        </div>
                    </div>
                </swiper-slide>
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
        label: "Women's Fashion",
        sub: [
            {
                label: "Clothing",
                sub: [
                    "Dresses",
                    "Tops & T-Shirts",
                    "Blouses & Shirts",
                    "Sweaters & Cardigans",
                    "Jackets & Coats",
                    "Jeans",
                    "Skirts",
                    "Shorts",
                    "Activewear",
                    "Lingerie & Sleepwear"
                ]
            },
            {
                label: "Shoes",
                sub: [
                    "Heels",
                    "Flats",
                    "Sneakers",
                    "Sandals",
                    "Boots",
                    "Slippers"
                ]
            },
            {
                label: "Bags & Accessories",
                sub: [
                    "Handbags",
                    "Backpacks",
                    "Crossbody & Shoulder Bags",
                    "Wallets",
                    "Belts",
                    "Hats & Caps",
                    "Scarves & Shawls",
                    "Sunglasses",
                    "Jewelry"
                ]
            },
            {
                label: "Seasonal & Special",
                sub: [
                    "Swimwear",
                    "Winter Wear",
                    "Traditional Wear"
                ]
            }
        ]
    },
    {
        label: "Men's Fashion",
        sub: [
            {
                label: "Clothing",
                sub: [
                    "T-Shirts",
                    "Shirts",
                    "Jeans",
                    "Trousers",
                    "Suits & Blazers",
                    "Shorts",
                    "Activewear",
                    "Jackets & Coats"
                ]
            },
            {
                label: "Shoes & Accessories",
                sub: [
                    "Casual Shoes",
                    "Formal Shoes",
                    "Sneakers",
                    "Sandals",
                    "Boots",
                    "Belts",
                    "Wallets",
                    "Bags"
                ]
            }
        ]
    },
    { label: "Electronics" },
    { label: "Home & Lifestyle" },
    { label: "Medicine" },
    { label: "Sports & Outdoor" },
    { label: "Baby's & Toys" },
    { label: "Groceries & Pets" },
    { label: "Health & Beauty" }
])

const banner = ref([
    {
        title: 'iPhone 15 Pro Max',
        discount: 15,
        image: '/images/banner-2.png'
    },
    {
        title: 'iPhone Air',
        discount: 10,
        image: '/images/banner-3.png'
    },
    {
        title: 'iPhone 14 Series',
        discount: 10,
        image: '/images/banner-1.png'
    },
    {
        title: 'iPhone 15',
        discount: 20,
        image: '/images/banner-4.png'
    },
    {
        title: 'iPhone 13',
        discount: 10,
        image: '/images/banner-5.png'
    },
])

</script>

<style lang="scss">

</style>