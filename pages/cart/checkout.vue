<template>
   <div class="container mx-auto">
      <div class="pt-20 pb-35 flex justify-between">
         <div class="flex flex-col gap-12 w-2/5">
            <p class="text-4xl leading-7.5 tracking-[4%] font-medium text-black">Billing Details</p>
            <form action="" class="flex flex-col gap-8">
               <template v-for="item in form">
                  <div class="flex flex-col gap-2">
                     <p class="opacity-40 leading-6">{{ item.label }}<span v-if="item.required == true"
                           class="text-secondary-02">*</span></p>
                     <input :type="item.type" class="rounded-sm bg-secondary h-12.5 w-full px-5 py-4">
                  </div>
               </template>
            </form>
         </div>
         <div class="flex flex-col gap-8 w-45/100 pt-20">
            <div class="flex flex-col gap-8 w-105.5">
               <template v-for="product in productList" :key="product.id">
                  <div class="flex items-center justify-between">
                     <div class="flex items-center gap-6">
                        <div class="h-13.5 w-13.5 flex justify-center items-center">
                           <img :src="product.image" :alt="product.name">
                        </div>
                        <p class="text-black leading-6">{{ product.name }}</p>
                     </div>
                     <p class="text-black leading-6">${{ product.price }}</p>
                  </div>
               </template>
               <div class="flex flex-col gap-4">
                  <div class="flex items-center justify-between">
                     <p class="text-black leading-6">Subtotal:</p>
                     <p class="text-black leading-6">$1750</p>
                  </div>
                  <div class="border-t border-black"></div>
                  <div class="flex items-center justify-between">
                     <p class="text-black leading-6">Shipping:</p>
                     <p class="text-black leading-6">Free</p>
                  </div>
                  <div class="border-t border-black"></div>
                  <div class="flex items-center justify-between">
                     <p class="text-black leading-6">Total:</p>
                     <p class="text-black leading-6">$1750</p>
                  </div>
               </div>
               <div class="flex justify-between items-center">
                  <label class="flex items-center gap-4 cursor-pointer">
                     <input type="radio" class="w-6 h-6" name="payment" />
                     <div class="text-black leading-6 select-none">Bank</div>
                  </label>
                  <div class="flex gap-2">
                     <img class="h-7 cursor-pointer" src="/images/bank/bKash.png" alt="">
                     <img class="h-7 cursor-pointer" src="/images/bank/visa.png" alt="">
                     <img class="h-7 cursor-pointer" src="/images/bank/mastercard.png" alt="">
                     <img class="h-7 cursor-pointer" src="/images/bank/nagad.png" alt="">
                  </div>
               </div>
               <label class="flex items-center gap-4 cursor-pointer">
                  <input type="radio" class="w-6 h-6" name="payment">
                  <div class="text-black leading-6 select-none">Cash on delivery</div>
               </label>
            </div>
            <div class="flex gap-4">
               <input type="text" class="rounded-sm !border !border-black px-6 py-4 " placeholder="Coupon Code">
               <button class="px-12 py-4 bg-secondary-02 rounded-sm text-text font-medium hover:bg-text hover:text-secondary-02 hover:shadow-lg">Apply Coupon</button>
            </div>
            <button class="px-12 py-4 bg-secondary-02 rounded-sm text-text w-fit">Place Order</button>
         </div>

      </div>
   </div>
</template>

<script setup lang="ts">
const form = ref([
   {
      label: 'First Name',
      required: true,
      type: 'text'
   },
   {
      label: 'Company Name',
      required: false,
      type: 'text'
   },
   {
      label: 'Street Address',
      required: true,
      type: 'text'
   },
   {
      label: 'Apartment, floor, etc. (optional)',
      required: false,
      type: 'text'
   },
   {
      label: 'Town/City',
      required: true,
      type: 'text'
   },
   {
      label: 'Phone Number',
      required: true,
      type: 'number'
   },
   {
      label: 'Email Address',
      required: true,
      type: 'email'
   },

])
const productList = ref([
   {
      id: 1,
      name: 'LCD Monitor',
      image: '/images/product.png',
      price: 650,
   },
   {
      id: 2,
      name: 'LCD Monitor',
      image: '/images/product.png',
      price: 650,
   },
])
</script>

<style scoped></style>