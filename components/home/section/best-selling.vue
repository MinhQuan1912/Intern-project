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
            <swiper-slide v-for="product in products" :key="product.id">
               <card :id="product.id" :image="product.imageUrl" :name="product.name" :oldPrice="product.oldPrice"
                  :newPrice="product.newPrice" :heart="true" :quickView="true" :delete="false" />
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
const { getAllProducts } = useApi()
const products = ref<any[]>([])
const p = await getAllProducts()
if (p.data) products.value = p.data as any[]

</script>

<style scoped></style>