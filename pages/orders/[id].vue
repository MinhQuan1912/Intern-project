<template>
   <div class="container mx-auto px-4 py-8">
      <NuxtLink to="/orders" class="text-blue-600 hover:underline mb-6 inline-block">
         ← Quay lại danh sách đơn hàng
      </NuxtLink>

      <div v-if="order" class="bg-white rounded-lg shadow-md p-8">
         <div class="text-center mb-8">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
               <CheckCircleIcon class="w-10 h-10 text-green-600" />
            </div>
            <h1 class="text-3xl font-bold mb-2">Đặt hàng thành công!</h1>
            <p class="text-gray-600">Đơn hàng #{{ order.id }}</p>
         </div>

         <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
               <h3 class="font-bold mb-3">Thông tin giao hàng</h3>
               <p class="text-gray-700">{{ order.userName }}</p>
               <p class="text-gray-700">{{ order.phoneNumber }}</p>
               <p class="text-gray-700">{{ order.shippingAddress }}</p>
            </div>

            <div>
               <h3 class="font-bold mb-3">Thông tin đơn hàng</h3>
               <p class="text-gray-700">Ngày đặt: {{ formatDate(order.createdAt) }}</p>
               <p class="text-gray-700">
                  Trạng thái:
                  <span :class="`px-2 py-1 rounded text-sm ${getStatusColor(order.status)}`">
                     {{ getStatusText(order.status) }}
                  </span>
               </p>
               <p class="text-gray-700">Tổng tiền: <strong class="text-blue-600">{{ formatPrice(order.totalAmount)
                     }}</strong></p>
            </div>
         </div>

         <div class="border-t pt-6">
            <h3 class="font-bold mb-4">Chi tiết sản phẩm</h3>
            <div class="space-y-3">
               <div v-for="item in order.items" :key="item.id"
                  class="flex items-center space-x-4 p-4 bg-gray-50 rounded">
                  <img :src="getImageUrl(item.product.imageUrl)" :alt="item.productName"
                     class="w-20 h-20 object-cover rounded" />
                  <div class="flex-1">
                     <p class="font-semibold">{{ item.product.name }}</p>
                     <p class="text-sm text-gray-600">{{ formatPrice(item.price) }} x {{ item.quantity }}</p>
                  </div>
                  <p class="font-bold">{{ formatPrice(item.price * item.quantity) }}</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/24/outline'

const route = useRoute()
const config = useRuntimeConfig()
const { getMyOrders } = useApi()

const order = ref<any>(null)

const loadOrder = async () => {
   const { data } = await getMyOrders()
   if (data) {
      const orderList = data as any[]
      order.value = orderList.find((o: any) => o.id === Number(route.params.id))
   }
}

const getImageUrl = (url: string) => {
   if (!url) return 'https://via.placeholder.com/100'
   if (url.startsWith('http')) return url
   return `${config.public.apiBase.replace('/api', '')}${url}`
}

const formatPrice = (price: number) => {
   return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
}

const formatDate = (date: string) => {
   return new Date(date).toLocaleString('vi-VN')
}

const getStatusColor = (status: string) => {
   const colors: any = {
      'PENDING': 'bg-yellow-100 text-yellow-800',
      'COMPLETED': 'bg-green-100 text-green-800'
   }
   return colors[status] || 'bg-gray-100'
}

const getStatusText = (status: string) => {
   const texts: any = {
      'PENDING': 'Chờ xử lý',
      'COMPLETED': 'Hoàn thành'
   }
   return texts[status] || status
}

onMounted(() => {
   loadOrder()
})
console.log(order.value)
</script>