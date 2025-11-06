<template>
   <div class="container mx-auto">
      <div class="flex pt-20 pb-35">
         <div class="w-1/4 flex flex-col gap-6">
            <div v-for="menu in menuList" :key="menu.label" class="flex flex-col gap-4">
               <div v-if="!menu.to" class="leading-6 font-medium">{{ menu.label }}</div>
               <nuxt-link :to="menu.to" v-else class="leading-6 font-medium hover:text-secondary-02">{{ menu.label }}</nuxt-link>
               <div class="pl-8.75 flex flex-col gap-2">
                  <template v-for="sub in menu.subMenu">
                     <div
                        class="leading-6 text-black opacity-50 hover:text-secondary-02 hover:opacity-100 cursor-pointer">
                        {{ sub.label }}</div>
                  </template>
               </div>
            </div>
         </div>
         <div class="px-20 py-10 flex flex-col gap-4 flex-1">
            <div class="text-secondary-02 text-xl leading-7 font-medium">Edit Your Profile</div>
            <form class="flex flex-col gap-6">
               <div class="grid grid-cols-2 gap-12.5">
                  <div class="flex flex-col gap-2">
                     <div class="leading-6 text-black">First Name</div>
                     <input type="text" class="rounded-sm h-12 bg-secondary opacity-50 text-black flex items-center px-4">
                  </div>
                  <div class="flex flex-col gap-2">
                     <div class="leading-6 text-black">Last Name</div>
                     <input type="text" class="rounded-sm h-12.5 bg-secondary opacity-50 text-black flex items-center px-4">
                  </div>
               </div>
               <div class="grid grid-cols-2 gap-12.5">
                  <div class="flex flex-col gap-2">
                     <div class="leading-6 text-black">Email</div>
                     <input type="email" class="rounded-sm h-12.5 bg-secondary opacity-50 text-black flex items-center px-4">
                  </div>
                  <div class="flex flex-col gap-2">
                     <div class="leading-6 text-black">Address</div>
                     <input type="text" class="rounded-sm h-12.5 bg-secondary opacity-50 text-black flex items-center px-4">
                  </div>
               </div>
               <div class="flex flex-col gap-2">
                  <div class="leading-6 text-black">Password Changes</div>
                  <div class="flex flex-col gap-4">
                     <input type="password" class="h-12.5 bg-secondary opacity-50 text-black flex items-center px-4 rounded-sm"
                        placeholder="Current Password">
                     <input type="password" class="h-12.5 bg-secondary opacity-50 text-black flex items-center px-4 rounded-sm"
                        placeholder="New Password">
                     <input type="password" class="h-12.5 bg-secondary opacity-50 text-black flex items-center px-4 rounded-sm"
                        placeholder="Confirm New Password">
                  </div>
               </div>
               <div class="flex justify-end gap-8">
                  <button type="submit"
                     class="rounded-sm py-4 px-12 flex justify-center items-center bg-secondary-02 text-text hover:text-secondary-02 hover:shadow-lg hover:bg-white">Save Changes</button>
               </div>
            </form>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
const menuList = ref([
   {
      label: 'Manage My Account',
      subMenu: [
         {
            label: 'My Profile',
            to: ''
         },
         {
            label: 'Address Book',
            to: ''
         },
         {
            label: 'My Payment Options',
            to: ''
         },
      ]
   },
   {
      label: 'My Orders',
      subMenu: [
         {
            label: 'My Returns',
            to: ''
         },
         {
            label: 'My Cancellations',
            to: ''
         },
      ]
   },
   {
      label: 'My Wishlist',
      to: '/'
   }
])
</script>

<style scoped></style>