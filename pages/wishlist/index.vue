<template>
   <div class="container mx-auto">
      <div class="pt-20 pb-35 flex flex-col gap-20">
         <div class="flex flex-col gap-15">
            <div class="flex justify-between items-center">
               <p class="text-xl leading-6.5 text-black">Wishlist</p>
               <button
                  class="px-12 py-4 flex items-center justify-center leading-6 font-medium rounded-sm !border !border-black/50 hover:bg-secondary-02 hover:text-text">Move
                  All To Bag</button>
            </div>
            <swiper v-if="productList" :modules="[Pagination, Navigation]" class="w-full" :breakpoints="{
                  1024: {
                     slidesPerView: 4,
                     slidesPerGroup: 4,
                     spaceBetween: 30,
                     allowTouchMove: false
                  }
               }">
               <swiper-slide v-for="product in productList" :key="product.id">
                  <card :image="product.image" :name="product.name" :price="product.price" :delete="true" :heart="false"
                     :quick-view="false" />
               </swiper-slide>
            </swiper>
            <div v-else class="flex justify-center text-4xl">You haven’t added any products to your wishlist yet.</div>
         </div>
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

<style scoped>

</style>