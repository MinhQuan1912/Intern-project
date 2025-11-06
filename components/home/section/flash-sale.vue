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
               <card :image="product.image" :name="product.name" :price="product.price" :discount="product.discount" :review="product.review" :rating="product.rating"/>
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