<template>
   <div class="h-87.5 flex flex-col gap-4">
      <div class="h-62.5 px-10 py-9 bg-secondary flex items-center justify-center relative group overflow-hidden">
         <button v-if="props.id" @click="handleAddToCart(props.id)"
            class="absolute bottom-0 left-0 w-full bg-black h-10 flex justify-center leading-6 font-medium hover:bg-secondary-02 text-white items-center translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease">
            Add To Cart
         </button>
         <div class="w-full h-full">
            <img :src="getImageUrl(props.image)" :alt="props.name" class="w-full h-full object-contain">
         </div>
         <div  class="absolute top-3 left-3 py-1 px-3 rounded-sm bg-secondary-02">
            <p class="text-xs leading-4.5 text-text">-{{ Math.round((props.oldPrice - props.newPrice) / props.oldPrice * 100) }}%</p>
         </div>
         <div
            class="absolute top-3 right-3 translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease flex flex-col gap-2">
            <button v-if="props.heart && props.id" @click="handleWishlist(props.id)"
               class="h-8.5 w-8.5 bg-white flex justify-center items-center rounded-full hover:bg-secondary-02 active:bg-secondary-02 hover:text-text active:text-text">
               <icons-heart class="w-6 h-6" />
            </button>
            <button v-if="props.quickView"
               class="h-8.5 w-8.5 bg-white flex justify-center items-center rounded-full hover:bg-secondary-02 active:bg-secondary-02 hover:text-text active:text-text">
               <icons-quick-view />
            </button>
            <button v-if="props.delete" @click="emit('remove',props.id)"
               class="h-8.5 w-8.5 bg-white flex justify-center items-center rounded-full hover:bg-secondary-02 active:bg-secondary-02 hover:text-text active:text-text">
               <icons-delete />
            </button>
         </div>
      </div>
      <div class="flex flex-col gap-2 p-4">
         <nuxt-link :to="`/product/${props.id}`" class="min-h-12 leading-6 font-medium hover:text-secondary-02 line-clamp-2">{{ props.name
            }}</nuxt-link>
         <div class="flex flex-col gap-3">
            <p class="leading-6 font-medium text-secondary-02">{{ formatFull(props.newPrice) }}đ</p>
            <p class="leading-6 font-medium opacity-50 line-through">{{ formatFull(props.oldPrice) }}đ</p>
         </div>
         
      </div>
   </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const { formatFull } = useFormatNumber()
const { addToCart, addToWishlist, removeFromWishlist } = useApi()
const router = useRouter()
const authStore = useAuthStore()
const emit = defineEmits(['remove'])
const props = defineProps({
   id: { type: Number, required: false },
   image: { type: String, required: true },
   name: { type: String, required: true },
   oldPrice: { type: Number, default: 0 },
   newPrice: { type: Number, required: true },
   heart: { type: Boolean, default: false },
   quickView: { type: Boolean, default: false },
   delete: { type: Boolean, default: false }
})
const getImageUrl = (url: string) => {
   if (!url) return 'https://via.placeholder.com/400'
   if (url.startsWith('http')) return url
   return `${config.public.apiBase.replace('/api', '')}${url}`
}
const handleAddToCart = async (productId: number) => {
   if (!authStore.isLoggedIn) {
      router.push('/sign-in?redirect=/products')
      return
   }

   const r = await addToCart(productId, 1)
   if (r.data) {
      alert('Đã thêm vào giỏ hàng!')
   } else {
      alert('Lỗi: ' + r.error)
   }
}

const handleWishlist = async (productId: number) => {
   if (!authStore.isLoggedIn) {
      router.push('/sign-in?redirect=/products')
      return
   }

   const r = await addToWishlist(productId)
   if (r.data) {
      alert('Đã thêm vào yêu thích!')
   } else {
      alert('Lỗi: ' + r.error)
   }
}

</script>

<style scoped></style>