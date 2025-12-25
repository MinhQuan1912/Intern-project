<template>
   <div class="min-h-screen bg-gray-50 py-8">
      <div class="container mx-auto px-4">
         <h1 class="text-3xl font-bold mb-8">Products</h1>

         <div class="flex flex-col lg:flex-row gap-8">
            <!-- Sidebar -->
            <aside class="lg:w-48 flex-shrink-0">
               <div class="bg-white rounded-lg shadow p-6 sticky top-4">
                  <h3 class="font-bold text-lg mb-4">Categories</h3>
                  <div class="space-y-2">
                     <button @click="filterCategory(null)" :class="[
                        'w-full text-left px-4 py-2 rounded transition',
                        selectedCategory === null ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'
                     ]">
                        All
                     </button>
                     <button v-for="cat in categories" :key="cat.id" @click="filterCategory(cat.id)" :class="[
                        'w-full text-left px-4 py-2 rounded transition',
                        selectedCategory === cat.id ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'
                     ]">
                        {{ cat.name }}
                     </button>
                  </div>
               </div>
            </aside>

            <!-- Products Grid -->
            <main class="flex-1">
               <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  <div v-for="n in 8" :key="n" class="bg-white rounded-lg shadow animate-pulse">
                     <div class="h-64 bg-gray-200"></div>
                     <div class="p-4 space-y-3">
                        <div class="h-4 bg-gray-200 rounded"></div>
                        <div class="h-4 bg-gray-200 rounded w-2/3"></div>
                     </div>
                  </div>
               </div>

               <div v-else-if="products.length > 0"
                  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  <div v-for="product in products" :key="product.id"
                     class="bg-white rounded-lg shadow hover:shadow-xl transition group">
                     <card :id="product.id" :image="product.imageUrl" :name="product.name" :oldPrice="product.oldPrice" :newPrice="product.newPrice" :heart="true" :quickView="true" :delete="false" />
                  </div>
               </div>

               <div v-else class="text-center py-12">
                  <p class="text-gray-500">Không có sản phẩm</p>
               </div>
            </main>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">

const { getAllProducts, getProductsByCategory, getAllCategories, addToCart, addToWishlist} = useApi()

const router = useRouter()
const authStore = useAuthStore()
const products = ref<any[]>([])
const categories = ref<any[]>([])
const loading = ref(true)
const selectedCategory = ref<number | null>(null)

const loadData = async () => {
   loading.value = true
   const [p, c] = await Promise.all([getAllProducts(), getAllCategories()])
   if (p.data) products.value = p.data as any[]
   if (c.data) categories.value = c.data as any[]
   loading.value = false
}

const filterCategory = async (catId: number | null) => {
   selectedCategory.value = catId
   loading.value = true

   if (catId === null) {
      const r = await getAllProducts()
      if (r.data) products.value = r.data as any[]
   } else {
      const r = await getProductsByCategory(catId)
      if (r.data) products.value = r.data as any[]
   }

   loading.value = false
}
const handleAddToCart = async (productId: number) => {
   if (!authStore.isLoggedIn) {
      router.push('/signin?redirect=/products')
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
      router.push('/signin?redirect=/products')
      return
   }

   const r = await addToWishlist(productId)
   if (r.data) {
      alert('Đã thêm vào yêu thích!')
   } else {
      alert('Lỗi: ' + r.error)
   }
}
onMounted(loadData)
</script>

<style scoped></style>