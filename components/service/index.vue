<template>
   <div class="container mx-auto">
      <div class="flex justify-center">
         <div class="py-15 lg:py-35 flex flex-wrap gap-5 lg:gap-10 xl:gap-22 w-full  m:w-max">
            <template v-for="item in service" :key="item.content">
               <div class="w-full md:w-[calc(50%-10px)] m:w-65.5 flex m:flex-col justify-center items-center gap-6">
                  <div
                     class="w-20 h-20 rounded-full border-11 border-primary-01/30 bg-black bg-clip-content flex justify-center items-center text-text">
                     <component :is="item.icon" />
                  </div>
                  <div class="flex flex-col items-center gap-2 text-black">
                     <p class="text-xl leading-7 font-semibold">{{ item.label }}</p>
                     <p class="text-sm leading-5.25 ">{{ item.content }}</p>
                  </div>
               </div>
            </template>
         </div>
      </div>
   </div>

</template>

<script setup lang="ts">
import {
   LazyIconsAboutUsCustomerService,
   LazyIconsAboutUsDelivery,
   LazyIconsAboutUsSecure,
} from '#components';
const service = ref([
   { label: 'FREE AND FAST DELIVERY', content: 'Free delivery for all orders over $140', icon: LazyIconsAboutUsDelivery },
   { label: '24/7 CUSTOMER SERVICE', content: 'Friendly 24/7 customer support', icon: LazyIconsAboutUsCustomerService },
   { label: 'MONEY BACK GUARANTEE', content: 'We return money within 30 days', icon: LazyIconsAboutUsSecure },
])
</script>

<style scoped></style>