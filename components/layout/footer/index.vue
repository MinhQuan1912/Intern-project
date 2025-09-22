<template>
  <div class="h-110 bg-black text-text">
    <div class="container mx-auto">
      <div class="pt-20 pb-15 flex justify-between">
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-6">
            <p class="text-2xl font-bold leading-6 tracking-[3%]">Exclusive</p>
            <p class="text-xl leading-7 font-medium">Subscribe</p>
            <p class="leading-6">Get 10% off your first order</p>
          </div>
          <div class="w-54.25 p-3 pl-4 flex items-center gap-2 border-[1.5px] rounded-sm border-text h-12">
            <input type="text" class="leading-6 placeholder:text-text placeholder:opacity-40 w-38.5"
              placeholder="Enter your email">
            <icons-send-mail class="cursor-pointer hover:text-secondary-02 transition-colors duration-300 ease" />
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <p class="text-xl leading-7 font-medium">Support</p>
          <div class="flex flex-col justify-between gap-4">
            <p class="leading-6">111 Bijoy sarani, Dhaka,<br /> DH 1515, Bangladesh.</p>
            <a href="mailto:exclusive@gmail.com" class="leading-6 hover:text-secondary-02 ease">exclusive@gmail.com</a>
            <a href="tel:+88015-88888-9999" class="leading-6 hover:text-secondary-02 ease">+88015-88888-9999</a>
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <p class="text-xl leading-7 font-medium">Account</p>
          <div class="flex flex-col justify-between gap-4">
            <template v-for="item in account">
              <nuxt-link :to="item.to" class="leading-6 hover:text-secondary-02">{{ item.label }}</nuxt-link>
            </template>
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <p class="text-xl leading-7 font-medium">Quick Link</p>
          <div class="flex flex-col justify-between gap-4">
            <template v-for="item in quickLink">
              <nuxt-link :to="item.to" class="leading-6 hover:text-secondary-02">{{ item.label }}</nuxt-link>
            </template>
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <p class="text-xl leading-7 font-medium">Download App</p>
          <div class="flex flex-col gap-2">
            <p class="text-xs leading-4.5 font-medium opacity-70">Save $3 with App New User Only</p>
            <div class="flex gap-2 justify-between">
              <div class="w-20 h-20">
                <img src="/images/QR.png" class="object-contain" alt="QR Code" />
              </div>
              <div class="flex flex-col gap-1">
                <a href="" class="h-10 aspect-11/4">
                  <img src="/images/GooglePlay.png" alt="Google Play" class="object-contain" />
                </a>
                <a href="" class="h-10 aspect-11/4">
                  <img src="/images/AppStore.png" alt="App Store" class="object-contain" />
                </a>
              </div>
            </div>
          </div>
          <div class="flex gap-6">
            <template v-for="item in socialMedia">
              <a :href="item.to" class="hover:text-secondary-02">
                <component :is="item.label" />
              </a>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { IconsSocialMediaFacebook, IconsSocialMediaInstagram, IconsSocialMediaLinkedin, IconsSocialMediaTwitter } from '#components';

const account = ref([
  { label: 'My Account', to: '/' },
  { label: 'Login / Register', to: '/' },
  { label: 'Cart', to: '/' },
  { label: 'Wishlist', to: '/' },
  { label: 'Shop', to: '/' },
])
const quickLink = ref([
  { label: 'Privacy Policy', to: '/' },
  { label: 'Terms Of Use', to: '/' },
  { label: 'FAQ', to: '/' },
  { label: 'Contact', to: '/' },
])
const socialMedia = ref([
  { label: IconsSocialMediaFacebook, to: '/' },
  { label: IconsSocialMediaTwitter, to: '/daw' },
  { label: IconsSocialMediaInstagram, to: '/dwa' },
  { label: IconsSocialMediaLinkedin, to: '/dwd' },
])
</script>
