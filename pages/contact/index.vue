<template>
   <div class="container mx-auto">
      <div class="flex gap-7.5 pt-20 pb-35">
         <div class="pt-10 flex flex-1 flex-col items-center gap-8 section px-8.75">
            <div class="flex flex-col gap-6">
               <div class="flex gap-4 items-center">
                  <icons-phone />
                  <p class="leading-6 font-medium">Call To Us</p>
               </div>
               <div class="flex flex-col gap-4 text-sm">
                  <p class="leading-5.25">We are available 24/7, 7 days a week.</p>
                  <p class="leading-5.25">Phone: <a href="tel:+8801611112222">+8801611112222</a></p>
               </div>
            </div>
            <div class="border-t border-black w-full"></div>
            <div class="flex flex-col gap-6">
               <div class="flex gap-4 items-center">
                  <icons-mail />
                  <p class="leading-6 font-medium">Write To Us</p>
               </div>
               <div class="flex flex-col gap-4 text-sm">
                  <p class="leading-5.25">Fill out our form and we will contact you within 24 hours.</p>
                  <p class="leading-5.25">Emails: <a href="mailto:customer@exclusive.com">customer@exclusive.com</a></p>
                  <p class="leading-5.25">Emails: <a href="mailto:support@exclusive.com">support@exclusive.com</a></p>
               </div>
            </div>
         </div>
         <div class="w-200 section py-10 px-7.5">
            <form class="flex items-center flex-col gap-8 h-full">
               <div class="flex gap-4">
                  <div class="relative w-full">
                     <input type="text" required
                        class="peer flex-1 h-12.5 w-full rounded-sm bg-secondary px-4 placeholder-transparent focus:outline-none"
                        placeholder="Your Name" />
                     <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none opacity-50
           peer-[&:not(:placeholder-shown)]:hidden peer-focus:hidden">
                        Your Name <span class="text-red-500">*</span>
                     </span>
                  </div>
                  <div class="relative w-full">
                     <input type="email" required
                        class="peer flex-1 h-12.5 w-full rounded-sm bg-secondary px-4 placeholder-transparent focus:outline-none"
                        placeholder="Your Name" />
                     <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none opacity-50
           peer-[&:not(:placeholder-shown)]:hidden peer-focus:hidden">
                        Your Email <span class="text-red-500">*</span>
                     </span>
                  </div>
                  <div class="relative w-full">
                     <input type="number" required
                        class="peer flex-1 h-12.5 w-full rounded-sm bg-secondary px-4 placeholder-transparent focus:outline-none"
                        placeholder="Your Name" />
                     <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none opacity-50
           peer-[&:not(:placeholder-shown)]:hidden peer-focus:hidden">
                        Your Phone <span class="text-red-500">*</span>
                     </span>
                  </div>
               </div>
               <textarea class="w-full h-full p-4 rounded-sm bg-secondary resize-none placeholder:opacity-50 text-black"
                  placeholder="Your message"></textarea>
               <div class="flex justify-end w-full">
                  <button type="submit"
                     class="rounded-sm py-4 px-12 flex justify-center items-center bg-secondary-02 text-text hover:text-secondary-02 hover:shadow-lg hover:bg-white">Send Message</button>
               </div>
            </form>

         </div>
      </div>
   </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.section {
   box-shadow: 0px 1px 13px 0px #0000000D;
}
</style>