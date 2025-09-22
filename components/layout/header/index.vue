<template>
  <div class="h-12 bg-black flex items-center">
    <div class="container mx-auto relative flex items-center">
      <div class="absolute left-1/2 -translate-x-1/2 flex gap-2 text-text items-center whitespace-pre">
        <p class="text-sm leading-[21px]">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <nuxt-link to="" class="text-sm font-semibold leading-6 !underline hover:text-secondary-02">Shop Now</nuxt-link>
      </div>
      <div class="ml-auto flex items-center gap-1.25 text-text">
        <p class="text-sm leading-[21px]">English</p>
        <icons-arrow-1 />
      </div>
    </div>
  </div>
  <div class="pt-10 pb-4 border-b-[0.5px] border-black/30 ">
    <div class="container mx-auto">
      <div class="flex items-center justify-between h-9.5 gap-37">
        <div class="flex items-center justify-between h-6 flex-1">
          <p class="text-black text-2xl font-bold leading-6 ">Exclusive</p>
          <div class="flex items-center h-full">
            <nuxt-link :to="menu.to" v-for="(menu, menuIndex) in menuHeader" class="text-black px-6 hover:text-secondary-02 transition-colors duration-300 ease">
              <p class="cursor-pointer" :class="{ 'border-b': $route.path === menu.to }">{{ menu.label }}</p>
            </nuxt-link>
          </div>
        </div>
        <div class="flex justify-between gap-6 items-center h-full ">
          <div class="flex justify-between items-center gap-4 bg-secondary pl-5 pr-3 h-full flex-1 rounded-sm w-60.75">
            <input type="text" class="text-xs leading-4.5 opacity-50 text-black flex-1 focus:placeholder-transparent"
              placeholder="What are you looking for?">
            <icons-search />
          </div>
          <div class="flex justify-between gap-4 items-center">
            <nuxt-link to=""><icons-wishlist class="hover:text-secondary-02 transition-colors duration-300 ease "/></nuxt-link>
            <nuxt-link to=""><icons-cart class="hover:text-secondary-02 transition-colors duration-300 ease "/></nuxt-link>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script setup lang="ts">
const menuHeader = ref([
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Contact',
    to: '/dwa',
  },
  {
    label: 'About',
    to: '/dw',
  },
  {
    label: 'Sign up',
    to: '/dw',
  },
])
</script>
