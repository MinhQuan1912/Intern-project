<template>
   <div class="px-3 xs:px-0 xs:container xs:mx-auto">
      <div class="pt-15 lg:pt-35 flex flex-col gap-8 lg:gap-15">
         <home-section-title title="Featured" sub-title="New Arrival" />
         <div class="flex flex-col lg:flex-row gap-7.5 lg:h-150 ">
            <div class="flex-1 rounded-sm bg-black flex items-end relative">
               <div class="px-7.5 h-5/6 w-full">
                  <img src="/images/feature-1.png" class="object-cover w-full h-full">
               </div>
               <div class="absolute left-3 bottom-3 xs:left-8 xs:bottom-8 z-2 text-text flex flex-col gap-2 xs:gap-4 w-60.5 ">
                  <div class="flex flex-col gap-1 xs:gap-4">
                     <p class="text-sm xs:text-2xl xs:leading-6 font-semibold font-[Inter]">PlayStation 5</p>
                     <p class="text-xs xs:text-sm xs:leading-5.25">Black and White version of the PS5 coming out on sale.</p>
                  </div>
                  <button
                     class="w-max leading-6 font-medium text-left border-b border-white hover:text-secondary-02 active:text-secondary-02 hover:border-secondary-02 active:border-secondary-02">Shop
                     Now</button>
               </div>
            </div>
            <div class="flex-1 flex flex-col gap-8">
               <div class="rounded-sm bg-black flex justify-end flex-1 relative">
                  <div class="w-3/4">
                     <img src="/images/feature-2.png" class="object-cover w-full h-full">
                  </div>
                  <div class="absolute bottom-3 left-3 xs:bottom-6 xs:left-6 w-63.75 flex flex-col gap-2 xs:gap-4 text-text">
                     <div class="flex flex-col gap-1 xs:gap-4">
                        <p class="text-sm xs:text-2xl xs:leading-6 tracking-[3%] font-semibold font-Inter w-max">Women's Collections
                        </p>
                        <p class="text-xs xs:text-sm xs:leading-5.25">Featured woman collections that give you another vibe.</p>
                     </div>
                     <button
                        class="w-max leading-6 font-medium text-left border-b border-white hover:text-secondary-02 active:text-secondary-02 hover:border-secondary-02 active:border-secondary-02">Shop
                        Now</button>
                  </div>
               </div>
               <div class="flex-1 flex flex-col xs:flex-row gap-7.5">
                  <div class="bg-black flex-1 rounded-sm flex justify-center items-center relative">
                     <div class="w-3/4 md:w-[calc(100%-80px)] aspect-square xs:aspect-auto flex items-center justify-center">
                        <img src="/images/feature-3.png" class="object-cover h-full">
                     </div>
                     <div class="flex flex-col gap-2 text-text absolute left-3 bottom-3 xs:left-6 xs:bottom-6">
                        <div class="flex flex-col gap-1 xs:gap-2">
                           <p class="text-sm xs:text-2xl xs:leading-6 text-Inter font-semibold tracking-[3%]">Speakers</p>
                           <p class="text-xs xs:text-sm xs:leading-5.25">Amazon wireless speakers</p>
                        </div>
                        <button
                           class="w-max leading-6 font-medium text-left border-b border-white hover:text-secondary-02 active:text-secondary-02 hover:border-secondary-02 active:border-secondary-02">Shop
                           Now</button>
                     </div>
                  </div>
                  <div class="bg-black flex-1 rounded-sm flex justify-center items-center text-text relative">
                     <div class="w-3/4 md:w-[calc(100%-68px)] aspect-square xs:aspect-auto flex items-center justify-center">
                        <img src="/images/feature-4.png" class="object-cover h-full">
                     </div>
                     <div class="flex flex-col gap-2 text-text absolute left-3 bottom-3 xs:left-6 xs:bottom-6">
                        <div class="flex flex-col gap-1 xs:gap-2">
                           <p class="text-sm xs:text-2xl xs:leading-6 text-Inter font-semibold tracking-[3%]">Perfume</p>
                           <p class="text-xs xs:text-sm xs:leading-5.25">GUCCI INTENSE OUD EDP</p>
                        </div>
                        <button
                           class="w-max leading-6 font-medium text-left border-b border-white hover:text-secondary-02 active:text-secondary-02 hover:border-secondary-02 active:border-secondary-02">Shop
                           Now</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>