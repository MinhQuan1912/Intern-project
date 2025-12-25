<template>
   <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">Đơn hàng của tôi</h1>

      <div v-if="orders.length > 0" class="space-y-6">
         <div v-for="order in orders" :key="order.id" class="bg-white rounded-lg shadow-md p-6">
            <div class="flex justify-between items-start mb-4">
               <div>
                  <h3 class="text-lg font-bold">Đơn hàng #{{ order.id }}</h3>
                  <p class="text-sm text-gray-600">{{ formatDate(order.createdAt) }}</p>
               </div>
               <div class="text-right">
                  <p class="text-2xl font-bold text-blue-600">
                     {{ formatPrice(order.totalAmount) }}
                  </p>
                  <span
                     :class="`inline-block mt-2 px-3 py-1 rounded text-sm font-semibold ${getStatusColor(order.status)}`">
                     {{ getStatusText(order.status) }}
                  </span>
               </div>
            </div>

            <div class="border-t pt-4">
               <p class="text-sm text-gray-600 mb-2">
                  <strong>Địa chỉ:</strong> {{ order.shippingAddress }}
               </p>
               <p class="text-sm text-gray-600">
                  <strong>SĐT:</strong> {{ order.phoneNumber }}
               </p>
            </div>

            <NuxtLink :to="`/orders/${order.id}`" class="inline-block mt-4 text-blue-600 hover:underline">
               Xem chi tiết →
            </NuxtLink>
         </div>
      </div>

      <div v-else class="text-center py-16">
         <ShoppingBagIcon class="w-24 h-24 text-gray-400 mx-auto mb-4" />
         <h2 class="text-2xl font-bold text-gray-700 mb-2">Chưa có đơn hàng</h2>
         <p class="text-gray-600 mb-6">Bạn chưa đặt hàng lần nào</p>
         <NuxtLink to="/products" class="btn-primary inline-block">
            Mua sắm ngay
         </NuxtLink>
      </div>
   </div>
</template>

<script setup lang="ts">
import { ShoppingBagIcon } from '@heroicons/vue/24/outline'

definePageMeta({ middleware: ['auth'] })

const { getMyOrders } = useApi()
const orders = ref<any[]>([])

const loadOrders = async () => {
   const { data } = await getMyOrders()
   if (data) orders.value = data as any[]
}

const getStatusColor = (status: string) => {
   const colors: any = {
      'PENDING': 'bg-yellow-100 text-yellow-800',
      'PROCESSING': 'bg-blue-100 text-blue-800',
      'COMPLETED': 'bg-green-100 text-green-800',
      'CANCELLED': 'bg-red-100 text-red-800'
   }
   return colors[status] || 'bg-gray-100'
}

const getStatusText = (status: string) => {
   const texts: any = {
      'PENDING': 'Chờ xử lý',
      'PROCESSING': 'Đang xử lý',
      'COMPLETED': 'Hoàn thành',
      'CANCELLED': 'Đã hủy'
   }
   return texts[status] || status
}

const formatPrice = (price: number) => {
   return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
   }).format(price)
}

const formatDate = (date: string) => {
   return new Date(date).toLocaleString('vi-VN')
}

onMounted(() => {
   loadOrders()
})
</script>