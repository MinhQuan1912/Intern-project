<template>
   <div class="flex gap-2 items-center">
      <div class="flex">
         <template v-for="star in 5" :key="star">
            <div class="relative w-5 h-5">
               <icons-star class="absolute top-0 left-0 opacity-25" />
               <icons-star class="absolute top-0 left-0 text-yellow-01" :style="{
                  clipPath: `inset(0 ${(1 - getFillPercent(star)) * 100}% 0 0)`
               }" />
            </div>
         </template>
      </div>
      <p class="text-sm leading-5.25 font-semibold opacity-50">({{ props.review }})</p>
   </div>
</template>

<script setup lang="ts">
const props = defineProps({
   ratings: {
      type: Number,
      default: 0
   },
   review: {
      type: Number
   }
})

const getFillPercent = (star: number) => {
   const filled = Math.min(Math.max(props.ratings - (star - 1), 0), 1)
   return filled
}
</script>
