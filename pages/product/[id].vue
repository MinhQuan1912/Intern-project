<template>
   <div class="container mx-auto">
      <div class="pt-20 pb-35 flex flex-col gap-35">
         <div class="flex gap-17.5">
            <div class="min-w-175 h-150 bg-secondary rounded-sm flex justify-center items-center">
               <img :src="product.image" alt="" class="">
            </div>
            <div class="flex flex-col gap-10">
               <div class="flex flex-col gap-6">
                  <div class="flex flex-col gap-4">
                     <p class="text-black text-2xl leading-6 font-semibold">{{ product.name }}</p>
                     <div class="flex gap-4 items-center">
                        <div class="flex gap-2 items-center">
                           <home-rating :ratings="product.rating" />
                           <p class="opacity-50 text-black leading-5.25">({{ product.review }} Reviews)</p>
                        </div>
                        <div class="border-r border-black h-4 opacity-50"></div>
                        <div class="leading-5.25 text-button-01">In Stock</div>
                     </div>
                     <div class="text-2xl leading-6 font-Inter">${{ product.price.toFixed(2) }}</div>
                  </div>
                  <p class="leading-5.25 text-black text-sm">{{ product.desciption }}</p>
                  <div class="border-b border-black"></div>
                  <div class="flex gap-6 items-center">
                     <p class="leading-5 text-xl tracking-[3%] text-black">Colours:</p>
                     <div class="flex gap-2">
                        <label class="flex items-center cursor-pointer">
                           <input type="radio" name="color" class="peer hidden">
                           <span
                              class="w-5 h-5 rounded-full bg-[#a0bce0] peer-checked:border-2 peer-checked:border-black peer-checked:p-0.5 bg-clip-content "></span>
                        </label>
                        <label class="flex items-center cursor-pointer">
                           <input type="radio" name="color" class="peer hidden">
                           <span
                              class="w-5 h-5 rounded-full bg-[#e07575] peer-checked:border-2 peer-checked:border-black peer-checked:p-0.5 bg-clip-content "></span>
                        </label>
                     </div>
                  </div>
                  <div class="flex gap-6 items-center">
                     <p class="leading-5 text-xl tracking-[3%] text-black">Size:</p>
                     <div class="flex gap-4">
                        <label v-for="size in product.size">
                           <input type="radio" name="size" class="hidden peer">
                           <span
                              class="w-8 h-8 border border-black/50 rounded-sm text-sm leading-5.25 font-medium flex items-center justify-center cursor-pointer peer-checked:border-transparent peer-checked:bg-secondary-02 peer-checked:text-text">{{
                              size }}</span>
                        </label>
                     </div>
                  </div>
                  <div class="flex justify-between">
                     <div class="flex gap-4">
                        <div class="flex h-11">
                           <div
                              class="w-10 border border-black/50 rounded-l-sm flex justify-center items-center cursor-pointer">
                              <icons-minus />
                           </div>
                           <div class="w-20 border-b border-t flex justify-center items-center">1</div>
                           <div
                              class="w-10 rounded-r-sm flex justify-center items-center text-text bg-secondary-02 cursor-pointer">
                              <icons-plus />
                           </div>
                        </div>
                        <button class="rounded-sm py-2.5 px-12 bg-secondary-02 text-text leading-6 font-medium">Buy
                           Now</button>
                     </div>
                     <button class="w-11 h-11 rounded-sm border border-black/50 flex justify-center items-center">
                        <icons-wishlist />
                     </button>
                  </div>
               </div>
               <div class="rounded-sm border border-black flex flex-col">
                  <div class="flex pt-6 pl-4 pb-4 gap-4 items-center border-b border-black">
                     <icons-delivery />
                     <div class="flex flex-col gap-2">
                        <p class="leading-6 text-black font-medium">Free Delivery</p>
                        <nuxt-link class="text-xs leading-4.5 font-medium !underline">Enter your postal code for
                           Delivery Availability</nuxt-link>
                     </div>
                  </div>
                  <div class="flex pt-4 pl-4 pb-6 gap-4 items-center">
                     <icons-return />
                     <div class="flex flex-col gap-2">
                        <p class="leading-6 text-black font-medium">Return Delivery</p>
                        <p class="text-xs leading-4.5 font-medium">Free 30 Days Delivery Returns.
                           <nuxt-link class="!underline">Details</nuxt-link>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="flex flex-col gap-15">
            <div class="flex justify-between">
               <home-section-title title="Related Item" />
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
            <swiper :modules="[Pagination, Navigation]" :navigation="{ nextEl: '.nextEl', prevEl: '.prevEl' }" class="w-full" :breakpoints="{
               1024: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                  spaceBetween: 30,
                  allowTouchMove: false
               }
            }">
               <swiper-slide v-for="product in productList" :key="product.id">
                  <card :image="product.image" :name="product.name" :price="product.price" :discount="product.discount"
                     :review="product.review" :rating="product.rating" />
               </swiper-slide>
            </swiper>
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
const product = {
   id: 1,
   name: 'LCD Monitor',
   image: '/images/product.png',
   price: 650,
   rating: 3.5,
   review: 150,
   inStock: true,
   desciption: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
   size: ['XS','S','M','L','XL']
}
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

