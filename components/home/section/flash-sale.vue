<template>
   <div class="container mx-auto">
      <div class="pt-35 flex flex-col gap-10">
         <div class="flex justify-between items-end">
            <div class="flex justify-between gap-20 items-end">
               <home-section-title title="Today's" sub-title="Flash Sales" />
               <div class="flex pb-2">
                  <template v-for="(item, itemIndex) in countdownUnits" :key="itemIndex">
                     <div class="h-12.5 flex flex-col gap-1 text-black pb-2">
                        <p class="text-xs leading-4.5 font-medium">{{ item.label }}</p>
                        <p class="text-[32px] leading-7.5 tracking-[4%] font-bold text-Inter">{{ item.value }}</p>
                     </div>
                     <div v-if="itemIndex < countdownUnits.length - 1" class="w-9.5 flex items-end justify-center pb-2">
                        <div class="h-4 flex flex-col justify-between ">
                           <div class="w-1 h-1 bg-button-02 rounded-full"></div>
                           <div class="w-1 h-1 bg-button-02 rounded-full"></div>
                        </div>
                     </div>
                  </template>
               </div>
            </div>
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
         <swiper :modules="[Pagination, Navigation]" :loop="true" :navigation="{ nextEl: '.nextEl', prevEl: '.prevEl' }"
            class="w-full" :breakpoints="{
               1024: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                  spaceBetween: 30,
                  allowTouchMove: false
               }
            }">
            <swiper-slide v-for="product in productList" :key="product.id">
               <div class="h-87.5 flex flex-col gap-4">
                  <div
                     class="h-62.5 px-10 py-9 bg-secondary flex items-center justify-center relative group overflow-hidden">
                     <button
                        class="absolute bottom-0 left-0 w-full bg-black h-10 flex justify-center leading-6 font-medium hover:bg-secondary-02 text-white items-center translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease">
                        Add To Cart
                     </button>
                     <div class="w-full h-full">
                        <img :src="product.image" :alt="product.name" class="w-full h-full object-contain">
                     </div>
                     <div class="absolute top-3 left-3 py-1 px-3 rounded-sm bg-secondary-02">
                        <p class="text-xs leading-4.5 text-text">-{{ (product.discount) * 100 }}%</p>
                     </div>
                     <div
                        class="absolute top-3 right-3 translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease flex flex-col gap-2">
                        <button
                           class="h-8.5 w-8.5 bg-white flex justify-center items-center rounded-full hover:bg-secondary-02 active:bg-secondary-02 hover:text-text active:text-text">
                           <icons-heart class="w-6 h-6" />
                        </button>
                        <button
                           class="h-8.5 w-8.5 bg-white flex justify-center items-center rounded-full hover:bg-secondary-02 active:bg-secondary-02 hover:text-text active:text-text">
                           <icons-quick-view />
                        </button>
                     </div>
                  </div>
                  <div class="flex flex-col gap-2">
                     <nuxt-link to="" class="leading-6 font-medium hover:text-secondary-02">{{ product.name
                     }}</nuxt-link>
                     <div class="flex gap-3">
                        <p class="leading-6 font-medium text-secondary-02">${{ product.price * (1 - product.discount) }}</p>
                        <p class="leading-6 font-medium opacity-50 line-through">${{ product.price }}</p>
                     </div>
                     <home-rating :review="product.review" :ratings="product.rating" />
                  </div>
               </div>
            </swiper-slide>
         </swiper>
      </div>
      <div class="py-15 flex justify-center items-center border-b-[0.5px] border-black/30">
         <button
            class="px-12 py-4 flex justify-center items-center rounded-sm hover:shadow-lg text-text bg-secondary-02 hover:text-secondary-02 active:text-secondary-02 hover:bg-text active:bg-text">View
            All Products</button>
      </div>
   </div>
</template>

<script setup lang="ts">
import { useCountdown } from '~/composable/useCountDown';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const countdownUnits = computed(() => [
   { label: 'Days', value: days.value },
   { label: 'Hours', value: hours.value },
   { label: 'Minutes', value: minutes.value },
   { label: 'Seconds', value: seconds.value },
])
const productList = ref([
   {
      id: 1,
      name: "IPS LCD Gaming Monitor",
      image: '/images/product.png',
      price: 160,
      discount: 0.3,
      review: 99,
      rating: 3.5
   },
   {
      id: 2,
      name: "IPS LCD Gaming Monitor",
      image: '/images/product.png',
      price: 370,
      discount: 0.3,
      review: 99,
      rating: 3
   },
   {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      image: '/images/product.png',
      price: 370,
      discount: 0.3,
      review: 99,
      rating: 4
   },
   {
      id: 4,
      name: "IPS LCD Gaming Monitor",
      image: '/images/product.png',
      price: 370,
      discount: 0.3,
      review: 99,
      rating: 5
   },
   {
      id: 5,
      name: "IPS LCD Gaming Monitor",
      image: '/images/product.png',
      price: 370,
      discount: 0.3,
      review: 99,
      rating: 5
   },   
])
const targetDate = new Date()
targetDate.setDate(targetDate.getDate() + 5)
const { days, hours, minutes, seconds } = useCountdown(targetDate)
</script>

<style scoped></style>