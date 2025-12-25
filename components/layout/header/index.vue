<template>
  <div class="bg-white sticky top-0 z-5">
    <div class="h-12 bg-black hidden sm:flex items-center fixed top-0 left-0 w-full z-50 
           transition-all duration-500 ease"
      :class="scrollY > 50 ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'">
      <div class="px-3 m:px-0 m:container m:mx-auto w-full relative flex items-center">
        <div class="absolute left-1/2 -translate-x-1/2 text-text items-center h-6">
          <swiper :modules="[Autoplay, Navigation]" :loop="true" :direction="'vertical'" :slides-per-view="1"
            :autoplay="{ delay: 3000, disableOnInteraction: false }" :space-between="0" class="h-6">
            <swiper-slide v-for="item in marketing" :key="item">
              <div class="flex items-center justify-center gap-2">
                <p class="text-sm leading-5.25 whitespace-nowrap">
                  {{ item }}
                </p>
                <nuxt-link to=""
                  class="text-sm font-semibold leading-6 !underline hover:text-secondary-02 whitespace-nowrap">Shop
                  Now</nuxt-link>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="ml-auto hidden md:flex items-center gap-1.25 text-text cursor-pointer group relative">
          <p class="text-sm leading-5.25">{{ selectedLanguage }}</p>
          <icons-arrow-1 />
          <div
            class="absolute top-full left-0 flex flex-col gap-3 bg-black rounded-sm p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease">
            <template v-for="item in language" :key="item">
              <button class="whitespace-nowrap hover:text-secondary-02 text-left" @click="selectLanguage(item)">
                {{ item }}
              </button>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div
      class="pt-4 md:pt-10 pb-4 border-b-[0.5px] border-black/30 bg-white w-full sticky top-0 transition-all duration-500 ease"
      :class="scrollY > 50 ? ' !pt-4' : 'sm:!pt-22 '">
      <div class="px-3 m:px-0 m:container m:mx-auto">
        <div class="flex items-center justify-between h-9.5 gap-6 xs:gap-12 xl:gap-37">
          <div class="flex items-center justify-between gap-2 h-6 w-full">
            <p class="text-black text-2xl font-bold leading-6 ">Exclusive</p>
            <div class="hidden md:flex items-center h-full">
              <nuxt-link :to="menu.to" v-for="(menu, menuIndex) in menuHeader" :key="menuIndex"
                class="whitespace-nowrap text-black px-3 lg:px-6 hover:text-secondary-02 transition-colors duration-300 ease">
                <p class="cursor-pointer" :class="{ 'border-b': route.path === menu.to }">{{ menu.label }}</p>
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
            <div v-if="route.path !== '/sign-up' && route.path !== '/sign-in'"
              class="hidden md:flex justify-between gap-2 m:gap-4 items-center">
              <nuxt-link to="/wishlist">
                <icons-wishlist class="h-6 w-6 m:h-8 m:w-8 hover:text-secondary-02 transition-all duration-300 ease" />
              </nuxt-link>
              <nuxt-link to="/cart">
                <icons-cart class="h-6 w-6 m:h-8 m:w-8 hover:text-secondary-02 transition-all duration-300 ease" />
              </nuxt-link>
              <div v-if="authStore.isLoggedIn" class="group relative inline-block cursor-pointer">
                <icons-header-user class="transition-all duration-300 group-hover:opacity-0 ease" />
                <icons-header-user2
                  class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease " />
                <div
                  class="absolute top-9 right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible 
             transition-all duration-300 ease backdrop-blur-3xl pt-4.5 pb-2.5 flex flex-col gap-3 rounded-sm bg-black/4"
                  :class="{ '!backdrop-blur-none !bg-black': y > 250 || route.path !== '/' }">
                  <template v-for="item in accountDropdown" :key="item.label">
                    <!-- Logout -->
                    <button v-if="item.label === 'Logout'" @click="handleLogout"
                      class="pl-5 pr-3 flex gap-4 h-6 items-center text-text hover:text-secondary-02 w-full text-left">
                      <component :is="item.icon" class="h-6 w-6" />
                      <p class="whitespace-nowrap text-sm leading-5.25">
                        {{ item.label }}
                      </p>
                    </button>
                    <nuxt-link v-else-if="item.label === 'My Order'" to="/orders"
                      class="pl-5 pr-3 flex gap-4 h-6 items-center text-text hover:text-secondary-02 w-full text-left">
                      <component :is="item.icon" class="h-6 w-6" />
                      <p class="whitespace-nowrap text-sm leading-5.25">
                        {{ item.label }}
                      </p>
                    </nuxt-link>
                    <!-- Các item bình thường -->
                    <nuxt-link v-else :to="item.to"
                      class="pl-5 pr-3 flex gap-4 h-6 items-center text-text hover:text-secondary-02">
                      <component :is="item.icon" class="h-6 w-6" />
                      <p class="whitespace-nowrap text-sm leading-5.25">
                        {{ item.label }}
                      </p>
                    </nuxt-link>
                  </template>
                </div>
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
  </div>
</template>
<script setup lang="ts">
import { LazyIconsCancel, LazyIconsHeaderLogOut, LazyIconsHeaderMallbag, LazyIconsHeaderReview, LazyIconsHeaderUser } from '#components';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const authStore = useAuthStore()
const { y } = useWindowScroll();
const scrollY = computed(() => y.value)
const route = useRoute()
const router = useRouter()
const marketing = ref([
  'Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!',
  'Mega Summer Sale: All Swimwear 50% OFF + Free Fast Shipping!',
  'Dive into Savings: 50% OFF All Swimsuits + Free Express Delivery!',
  'Hot Summer Deal: Get 50% OFF Swimwear + Free Shipping Today!',
  'Splash into Style: All Swimsuits 50% OFF with Free Quick Delivery!'
])
const menuHeader = ref([
  { label: 'Home', to: '/', },
  { label: 'Contact', to: '/contact', },
  { label: 'About', to: '/about', },
  { label: 'Sign up', to: '/sign-up', },
])

const accountDropdown = ref([
  { label: 'Manage My Account', icon: LazyIconsHeaderUser, to: '/account' },
  { label: 'My Order', icon: LazyIconsHeaderMallbag, to: '' },
  { label: 'My Cancellations', icon: LazyIconsCancel, to: '' },
  { label: 'My Reviews', icon: LazyIconsHeaderReview, to: '' },
  { label: 'Logout', icon: LazyIconsHeaderLogOut, to: '' },
])
const language = ref(['English', 'Tiếng Việt', 'Thailand'])
const selectedLanguage = ref(language.value[0])
const selectLanguage = (item: string) => {
  selectedLanguage.value = item
}

const handleLogout = () => {
  authStore.logout()
  router.push('/sign-in')
}
</script>
<style lang="scss" scoped></style>
