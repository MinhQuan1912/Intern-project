<template>
   <div class="container mx-auto">
      <div class="pt-20 pb-35 flex flex-col gap-20">
         <div class="flex flex-col gap-15">
            <div class="flex justify-between items-center">
               <p class="text-xl leading-6.5 text-black">Wishlist</p>
            </div>
            <swiper v-if="wishlistItems.length" :modules="[Pagination, Navigation]" class="w-full" :breakpoints="{
                  1024: {
                     slidesPerView: 4,
                     slidesPerGroup: 4,
                     spaceBetween: 30,
                     allowTouchMove: false
                  }
               }">
               <swiper-slide v-for="product in wishlistItems" :key="product.id">
                  <card :wishlist-id="product.id" :id="product.product.id" :image="product.product.imageUrl" :name="product.product.name" :oldPrice="product.product.oldPrice"
                     :newPrice="product.product.newPrice" :heart="false" :quickView="true" :delete="true" @remove="handleRemove"/>
               </swiper-slide>
            </swiper>
            <div v-else class="flex justify-center text-4xl">You haven’t added any products to your wishlist yet.</div>
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

const { getWishlist, removeFromWishlist } = useApi()
const authStore = useAuthStore()
const router = useRouter()

const loading = ref(true)
const wishlistItems = ref<any[]>([])

const loadWishlist = async () => {
   if (!authStore.isLoggedIn) {
      router.push('/signin')
      return
   }

   loading.value = true
   const r = await getWishlist()
   if (r.data) {
      wishlistItems.value = r.data as any[]
   }
   loading.value = false
}

const handleRemove = async (wishlistId: number) => {
   await removeFromWishlist(wishlistId)
   wishlistItems.value = wishlistItems.value.filter(
      item => item.id !== wishlistId
   )
   await loadWishlist()
}

onMounted(loadWishlist)
</script>

<style scoped>

</style>