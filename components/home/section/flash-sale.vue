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
            <swiper-slide v-for="product in topDiscountProducts" :key="product.id">
               <card :id="product.id" :image="product.imageUrl" :name="product.name" :oldPrice="product.oldPrice"
                  :newPrice="product.newPrice" :heart="true" :quickView="true" :delete="false" />
            </swiper-slide>
         </swiper>
      </div>
      <div class="py-15 flex justify-center items-center border-b-[0.5px] border-black/30">
         <nuxt-link to="/product"
            class="px-12 py-4 flex justify-center items-center rounded-sm hover:shadow-lg text-text bg-secondary-02 hover:text-secondary-02 active:text-secondary-02 hover:bg-text active:bg-text">View
            All Products</nuxt-link>
      </div>
   </div>
</template>

<script setup lang="ts">
import { useCountdown } from '~/composables/useCountDown';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const { getAllProducts } = useApi()
const countdownUnits = computed(() => [
   { label: 'Days', value: days.value },
   { label: 'Hours', value: hours.value },
   { label: 'Minutes', value: minutes.value },
   { label: 'Seconds', value: seconds.value },
])
const targetDate = new Date()
targetDate.setDate(targetDate.getDate() + 5)
const { days, hours, minutes, seconds } = useCountdown(targetDate)
const products = ref<any[]>([])
const p = await getAllProducts()
if (p.data) products.value = p.data as any[]
const topDiscountProducts = computed(() => {
   return [...products.value]
      .filter(p => p.oldPrice > 0 && p.newPrice > 0)
      .sort((a, b) => {
         const discountA = (a.oldPrice - a.newPrice) / a.oldPrice
         const discountB = (b.oldPrice - b.newPrice) / b.oldPrice
         return discountB - discountA 
      })
      .slice(0, 8)
})

</script>

<style scoped></style>