<template>
   <div class="container mx-auto">
      <div class="pt-20 pb-35 flex flex-col gap-20">
         <div class="flex flex-col gap-6">
            <table class="border-separate border-spacing-y-10">
               <thead>
                  <tr>
                     <th class="px-10 py-6" v-for="title in table">
                        <p class="text-left text-base font-normal leading-6">{{ title }}</p>
                     </th>
                  </tr>
               </thead>
               <tbody>
                  <tr v-for="product in productList" :key="product.id">
                     <td class="px-10 py-6">
                        <div class="flex gap-5 items-center">
                           <div class="w-13.5 h-13.5 flex items-center justify-center">
                              <img :src="product.image" :alt="product.name">
                           </div>
                           <nuxt-link>{{ product.name }}</nuxt-link>
                        </div>
                     </td>
                     <td class="px-10 py-6">
                        ${{ product.price }}
                     </td>
                     <td class="px-10 py-6">

                     </td>
                     <td class="px-10 py-6">

                     </td>
                  </tr>
               </tbody>
            </table>
            <nuxt-link to="/" class="px-12 py-4 flex justify-center items-center w-fit rounded-sm border border-black/50 hover:border-transparent hover:bg-secondary-02 hover:text-text">Return
               To Shop</nuxt-link>
         </div>
         <div class="flex justify-between">
            <div class="flex gap-4 h-fit">
               <input type="text" class="rounded-sm w-75 px-6 py-4 !border !border-black opacity-50"
                  placeholder="Coupon Code">
               <button
                  class="rounded-sm px-12 py-4 text-text bg-secondary-02 hover:text-secondary-02 hover:bg-white hover:shadow-lg">Apply
                  Coupon</button>
            </div>
            <div class="rounded-sm border-[1.5px] border-black px-6 py-8 flex flex-col gap-6 w-2/5">
               <p class="text-black text-xl leading-7 font-medium">Cart Total</p>
               <div class="flex flex-col gap-4">
                  <div class="flex justify-between items-center">
                     <p class="text-black leading-6">Subtotal:</p>
                     <p class="text-black leading-6">$1750</p>
                  </div>
                  <div class="border-t border-black"></div>
                  <div class="flex justify-between items-center">
                     <p class="text-black leading-6">Shipping:</p>
                     <p class="text-black leading-6">Free</p>
                  </div>
                  <div class="border-t border-black"></div>
                  <div class="flex justify-between items-center">
                     <p class="text-black leading-6">Total:</p>
                     <p class="text-black leading-6">$1750</p>
                  </div>
                  <div class="flex justify-center">
                     <nuxt-link to="/cart/checkout"
                        class="rounded-sm px-12 py-4 text-text bg-secondary-02 font-medium leading-6 hover:text-secondary-02 hover:shadow-lg hover:bg-white">Process
                        to checkout</nuxt-link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
const table = ['Product', 'Price', 'Quantity', 'Subtotal']
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
   {
      id: 3,
      name: 'LCD Monitor',
      image: '/images/product.png',
      price: 650,
   },
])
</script>

<style lang="scss" scoped>
tr {
   box-shadow: 0px 1px 13px 0px #0000000D;
}

</style>