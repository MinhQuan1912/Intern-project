<template>
  <div class="container mx-auto">
      <div class="pt-20 pb-35 flex flex-col gap-35">
         <div v-if="loading" class="bg-white rounded-lg p-8 animate-pulse">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div class="h-96 bg-gray-200 rounded"></div>
               <div class="space-y-4">
                  <div class="h-8 bg-gray-200 rounded"></div>
                  <div class="h-4 bg-gray-200 rounded w-2/3"></div>
               </div>
            </div>
         </div>
         <div v-else-if="product" class="flex gap-17.5">
            <div class="min-w-175 h-150 bg-secondary rounded-sm flex justify-center items-center">
               <img :src="getImageUrl(product.imageUrl)" :alt="product.name">
            </div>
            <div class="flex flex-col gap-10">
               <div class="flex flex-col gap-6">
                  <div class="flex flex-col gap-4">
                     <p class="text-black text-2xl leading-6 font-semibold">{{ product.name }}</p>
                     <div class="flex gap-4 items-center">
                        <div class="border-r border-black h-4 opacity-50"></div>
                        <div :class="product.stock > 0 ? 'text-button-01' : 'text-red-600'" class="font-semibold">
                           {{ product.stock > 0 ? `Còn ${product.stock} sản phẩm` : 'Hết hàng' }}</div>
                     </div>
                     <div class="flex items-center space-x-4">
                        <span class="text-gray-400 line-through text-xl">
                           {{ formatPrice(product.oldPrice) }}
                        </span>
                        <span class="text-blue-600 font-bold text-3xl">
                           {{ formatPrice(product.newPrice) }}
                        </span>
                        <span class="bg-red-500 text-white px-3 py-1 rounded text-sm">
                           -{{ discount }}%
                        </span>
                     </div>
                  </div>
                  <p class="leading-5.25 text-black text-sm">{{ product.description }}</p>
                  <div class="border-b border-black"></div>
                  <div class="flex justify-between">
                     <div class="flex gap-4">
                        <div class="flex h-11">
                           <button
                              class="w-10 border border-black/50 rounded-l-sm flex justify-center items-center cursor-pointer disabled:opacity-50"
                              :disabled="quantity <= 1" @click="quantity--">
                              <icons-minus />
                           </button>

                           <div class="w-20 border-b border-t flex justify-center items-center font-semibold">
                              {{ quantity }}
                           </div>
                           <button
                              class="w-10 rounded-r-sm flex justify-center items-center text-text bg-secondary-02 cursor-pointer disabled:opacity-50"
                              :disabled="quantity >= product.stock" @click="quantity++">
                              <icons-plus />
                           </button>
                        </div>
                        <button @click="handleAddToCart" :disabled="product.stock === 0"
                           class="rounded-sm py-2.5 px-10 bg-secondary-02 text-text leading-6 font-medium">Add to cart</button>
                     </div>
                     <button @click="handleWishlist"
                        class="w-11 h-11 rounded-sm border border-black/50 flex justify-center items-center">
                        <icons-wishlist />
                     </button>
                  </div>
               </div>
               <div class="rounded-sm border border-black flex flex-col">
                  <div class="flex pt-6 pl-4 pb-4 gap-4 items-center border-b border-black">
                     <icons-delivery />
                     <div class="flex flex-col gap-2">
                        <p class="leading-6 text-black font-medium">Free Delivery</p>
                        <nuxt-link class="text-xs leading-4.5 font-medium !underline">Enter your postal code for
                           Delivery Availability</nuxt-link>
                     </div>
                  </div>
                  <div class="flex pt-4 pl-4 pb-6 gap-4 items-center">
                     <icons-return />
                     <div class="flex flex-col gap-2">
                        <p class="leading-6 text-black font-medium">Return Delivery</p>
                        <p class="text-xs leading-4.5 font-medium">Free 30 Days Delivery Returns.
                           <nuxt-link class="!underline">Details</nuxt-link>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="flex flex-col gap-15">
            <div class="flex justify-between">
               <home-section-title title="Related Item" />
               <div class="hidden md:flex gap-2 items-end">
                  <button
                     class="prevEl w-11.5 h-11.5 flex justify-center items-center rounded-full bg-secondary rotate-180 hover:bg-secondary-02 active:bg-secondary-02 active:text-white hover:text-white">
                     <icons-arrow2 />
                  </button>
                  <button
                     class="nextEl w-11.5 h-11.5 flex justify-center items-center rounded-full bg-secondary hover:bg-secondary-02 active:bg-secondary-02 active:text-white hover:text-white">
                     <icons-arrow2 />
                  </button>
               </div>
            </div>
            <swiper :modules="[Pagination, Navigation]" :navigation="{ nextEl: '.nextEl', prevEl: '.prevEl' }"
               class="w-full" :breakpoints="{
                  1024: {
                     slidesPerView: 4,
                     slidesPerGroup: 4,
                     spaceBetween: 30,
                     allowTouchMove: false
                  }
               }">
               <swiper-slide>
                  
               </swiper-slide>
            </swiper>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const { getProductById, addToCart, addToWishlist } = useApi()
const config = useRuntimeConfig()

const product = ref<any>(null)
const loading = ref(true)
const quantity = ref(1)

const productId = computed(() => parseInt(route.params.id as string))

const discount = computed(() => {
  if (!product.value) return 0
  return Math.round(((product.value.oldPrice - product.value.newPrice) / product.value.oldPrice) * 100)
})

const loadProduct = async () => {
  loading.value = true
  const r = await getProductById(productId.value)
  if (r.data) product.value = r.data
  loading.value = false
}

const handleAddToCart = async () => {
  if (!authStore.isLoggedIn) {
    router.push(`/sign-in?redirect=/product/${productId.value}`)
    return
  }

  const r = await addToCart(productId.value, quantity.value)
  if (r.data) {
    alert(`Đã thêm ${quantity.value} sản phẩm vào giỏ!`)
    quantity.value = 1
  } else {
    alert('Lỗi: ' + r.error)
  }
}

const handleWishlist = async () => {
  if (!authStore.isLoggedIn) {
    router.push(`/sign-in?redirect=/product/${productId.value}`)
    return
  }

  const r = await addToWishlist(productId.value)
  if (r.data) {
    alert('Đã thêm vào yêu thích!')
  } else {
    alert('Lỗi: ' + r.error)
  }
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price)
}

const getImageUrl = (url: string) => {
  if (!url) return 'https://via.placeholder.com/600'
  if (url.startsWith('http')) return url
  return `${config.public.apiBase.replace('/api', '')}${url}`
}

onMounted(loadProduct)
</script>