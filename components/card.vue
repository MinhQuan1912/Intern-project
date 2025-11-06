<template>
   <div class="h-87.5 flex flex-col gap-4">
      <div class="h-62.5 px-10 py-9 bg-secondary flex items-center justify-center relative group overflow-hidden">
         <button
            class="absolute bottom-0 left-0 w-full bg-black h-10 flex justify-center leading-6 font-medium hover:bg-secondary-02 text-white items-center translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease">
            Add To Cart
         </button>
         <div class="w-full h-full">
            <img :src="props.image" :alt="props.name" class="w-full h-full object-contain">
         </div>
         <div v-if="props.discount" class="absolute top-3 left-3 py-1 px-3 rounded-sm bg-secondary-02">
            <p class="text-xs leading-4.5 text-text">-{{ props.discount * 100 }}%</p>
         </div>
         <div
            class="absolute top-3 right-3 translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease flex flex-col gap-2">
            <button v-if="props.heart"
               class="h-8.5 w-8.5 bg-white flex justify-center items-center rounded-full hover:bg-secondary-02 active:bg-secondary-02 hover:text-text active:text-text">
               <icons-heart class="w-6 h-6" />
            </button>
            <button v-if="props.quickView"
               class="h-8.5 w-8.5 bg-white flex justify-center items-center rounded-full hover:bg-secondary-02 active:bg-secondary-02 hover:text-text active:text-text">
               <icons-quick-view />
            </button>
            <button v-if="props.delete"
               class="h-8.5 w-8.5 bg-white flex justify-center items-center rounded-full hover:bg-secondary-02 active:bg-secondary-02 hover:text-text active:text-text">
               <icons-delete />
            </button>
         </div>
      </div>
      <div class="flex flex-col gap-2">
         <nuxt-link to="" class="leading-6 font-medium hover:text-secondary-02">{{ props.name
         }}</nuxt-link>
         <div class="flex gap-3">
            <p class="leading-6 font-medium text-secondary-02">${{ props.price * (1 - props.discount) }}</p>
            <p class="leading-6 font-medium opacity-50 line-through">${{ props.price }}</p>
         </div>
         <home-rating v-if="props.rating  && props.review" :review="props.review" :ratings="props.rating" />
      </div>
   </div>
</template>

<script setup lang="ts">

const props = defineProps({
   image: { type: String, required: true },
   name: { type: String, required: true },
   discount: { type: Number, default: 0 },
   price: { type: Number, required: true },
   review: { type: Number, default: 0 },
   rating: { type: Number, default: 0 },
   heart: { type: Boolean, default: true },
   quickView: { type: Boolean, default: true },
   delete: { type: Boolean, default: false }
})


</script>

<style scoped></style>