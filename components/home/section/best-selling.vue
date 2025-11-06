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
               <card :image="product.image" :name="product.name" :price="product.price" :discount="product.discount" :review="product.review" :rating="product.rating"/>
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