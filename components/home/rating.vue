<template>
      <div class="flex">
         <template v-for="star in 5" :key="star">
            <div class="relative w-5 h-5">
               <icons-star class="w-5 h-5 absolute top-0 left-0 opacity-25" />
               <icons-star class="w-5 h-5 absolute top-0 left-0 text-yellow-01" :style="{
                  clipPath: `inset(0 ${(1 - getFillPercent(star)) * 100}% 0 0)`
               }" />
            </div>
         </template>
      </div>
</template>

<script setup lang="ts">
const props = defineProps({
   ratings: {
      type: Number,
      default: 0
   },
   
})

const getFillPercent = (star: number) => {
   const filled = Math.min(Math.max(props.ratings - (star - 1), 0), 1)
   return filled
}
</script>
