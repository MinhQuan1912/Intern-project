<template>
  <div class="h-12 bg-black hidden sm:flex items-center ">
    <div class="px-3 m:px-0 m:container m:mx-auto w-full relative flex items-center">
      <div class="absolute left-1/2 -translate-x-1/2 flex gap-2 text-text items-center whitespace-pre">
        <p class="text-sm leading-[21px]">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <nuxt-link to="" class="text-sm font-semibold leading-6 !underline hover:text-secondary-02">Shop Now</nuxt-link>
      </div>
      <div class="ml-auto hidden md:flex items-center gap-1.25 text-text">
        <p class="text-sm leading-[21px]">English</p>
        <icons-arrow-1 />
      </div>
    </div>
  </div>
  <div class="pt-4 md:pt-10 pb-4 border-b-[0.5px] border-black/30 bg-white w-full">
    <div class="px-3 m:px-0 m:container m:mx-auto">
      <div class="flex items-center justify-between h-9.5 gap-6 xs:gap-12 xl:gap-37">
        <div class="flex items-center justify-between gap-2 h-6 w-full">
          <p class="text-black text-2xl font-bold leading-6 ">Exclusive</p>
          <div class="hidden md:flex items-center h-full">
            <nuxt-link :to="menu.to" v-for="(menu, menuIndex) in menuHeader" :key="menuIndex"
              class="whitespace-nowrap text-black px-2 lg:px-6 hover:text-secondary-02 transition-colors duration-300 ease">
              <p class="cursor-pointer" :class="{ 'border-b': $route.path === menu.to }">{{ menu.label }}</p>
            </nuxt-link>
          </div>
        </div>
        <div class="flex justify-between gap-2 m:gap-6 items-center h-7 m:h-full ">
          <div
            class="flex justify-between items-center gap-4 bg-secondary pl-3 xs:pl-5 pr-3 h-full flex-1 rounded-sm  md:max-w-60.75">
            <input type="text"
              class=" text-xs leading-4.5 opacity-50 text-black w-30 md:w-auto md:flex-1 placeholder-transparent md:placeholder-black  focus:placeholder-transparent"
              placeholder="What are you looking for?">
            <icons-search class="w-4 h-4 lg:w-6 lg:h-6" />
          </div>
          <div v-if="$route.path !== '/sign-up' && $route.path !== '/sign-in'"
            class="hidden md:flex justify-between gap-2 m:gap-4 items-center">
            <nuxt-link to="">
              <icons-wishlist class="h-6 w-6 m:h-8 m:w-8 hover:text-secondary-02  " />
            </nuxt-link>
            <nuxt-link to="">
              <icons-cart class="h-6 w-6 m:h-8 m:w-8 hover:text-secondary-02  " />
            </nuxt-link>
            <div class="group relative inline-block">
              <icons-user class="transition-all duration-300 group-hover:opacity-0" />
              <nuxt-link to="" class="absolute inset-0 opacity-0 group-hover:opacity-100">
                <icons-user2 />
              </nuxt-link>
            </div>
          </div>
          <button
            class="flex md:hidden w-8 h-8 rounded-lg justify-center items-center bg-gray-200 active:text-white active:bg-black">
            <icons-menu-header class="h-4 w-4" />
          </button>
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
    to: '/about',
  },
  {
    label: 'Sign up',
    to: '/sign-up',
  },
])
</script>
