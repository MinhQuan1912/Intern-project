<template>
   <div class="container mx-auto">
      <div class="pt-17.5 flex flex-col gap-15">
         <div class="flex justify-between items-end">
            <home-section-title title="This Month" sub-title="Best Selling Products" />
            <nuxt-link to=""
               class="h-14 px-12 py-4 flex justify-center items-center bg-secondary-02 rounded-sm leading-6 text-text font-medium hover:text-secondary-02 hover:bg-white hover:shadow-lg">View
               All</nuxt-link>
         </div>
         <swiper :modules="[Pagination, Navigation]" :loop="true" class="w-full" :autoplay="{ delay: 3000 }" :breakpoints="{
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
                        <p class="leading-6 font-medium text-secondary-02">${{ product.price * (1 - product.discount) }}
                        </p>
                        <p class="leading-6 font-medium opacity-50 line-through">${{ product.price }}</p>
                     </div>
                     <home-rating :review="product.review" :ratings="product.rating" />
                  </div>
               </div>
            </swiper-slide>
         </swiper>
      </div>
   </div>
</template>

<script setup lang="ts">
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

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
</script>

<style scoped></style>