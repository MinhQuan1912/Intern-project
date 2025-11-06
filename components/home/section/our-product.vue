<template>
   <div class="container mx-auto">
      <div class="flex flex-col gap-15">
         <div class="flex justify-between items-end">
            <home-section-title title="Our products" sub-title="Explore Our Products" />
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
         <swiper :modules="[Pagination, Navigation,Grid]" :loop="true" :navigation="{ nextEl: '.nextEl', prevEl: '.prevEl' }"
            class="w-full" :breakpoints="{
               1024: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                  spaceBetween: 30,
                  allowTouchMove: false
               }
            }" :grid="{
               rows: 2,
               fill: 'row'
            }">
            <swiper-slide v-for="product in productList1" :key="product.id">
               <card :image="product.image" :name="product.name" :price="product.price" :review="product.review"
                  :rating="product.rating" />
            </swiper-slide>
         </swiper>
         <div class="flex justify-center items-center">
            <nuxt-link to=""
               class="px-12 py-4 flex justify-center items-center rounded-sm hover:shadow-lg text-text bg-secondary-02 hover:text-secondary-02 active:text-secondary-02 hover:bg-text active:bg-text">View
               All Products</nuxt-link>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { Navigation, Pagination, Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/grid'

const productList1 = ref([
   {
      id: 1,
      name: "IPS LCD Gaming Monitor",
      image: '/images/product.png',
      price: 160,
      review: 99,
      rating: 3.5
   },
   {
      id: 2,
      name: "IPS LCD Gaming Monitor",
      image: '/images/product.png',
      price: 370,
      review: 99,
      rating: 3
   },
   {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      image: '/images/product.png',
      price: 370,
      review: 99,
      rating: 4
   },
   {
      id: 4,
      name: "IPS LCD Gaming Monitor",
      image: '/images/product.png',
      price: 370,
      review: 99,
      rating: 5
   },
   {
      id: 5,
      name: "IPS LCD Gaming Monitor",
      image: '/images/product.png',
      price: 370,
      review: 99,
      rating: 5
   },
   {
      id: 6,
      name: "IPS LCD Gaming Monitor",
      image: '/images/product.png',
      price: 160,
      review: 99,
      rating: 3.5
   },
   {
      id: 7,
      name: "IPS LCD Gaming Monitor",
      image: '/images/product.png',
      price: 370,
      review: 99,
      rating: 3
   },
   {
      id: 8,
      name: "IPS LCD Gaming Monitor",
      image: '/images/product.png',
      price: 370,
      review: 99,
      rating: 4
   },
   {
      id: 9,
      name: "IPS LCD Gaming Monitor",
      image: '/images/product.png',
      price: 370,
      review: 99,
      rating: 5
   },
   {
      id: 10,
      name: "IPS LCD Gaming Monitor",
      image: '/images/product.png',
      price: 370,
      review: 99,
      rating: 5
   },

])

   
</script>

<style scoped></style>