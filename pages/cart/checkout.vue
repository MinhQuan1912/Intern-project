<template>
   <div class="container mx-auto">
      <div class="pt-20 pb-35 flex justify-between">
         <div class="flex flex-col gap-12 w-2/5">
            <p class="text-4xl leading-7.5 tracking-[4%] font-medium text-black">Billing Details</p>
            <form action="" class="flex flex-col gap-8">
               <template v-for="item in form">
                  <div class="flex flex-col gap-2">
                     <p class="opacity-40 leading-6">{{ item.label }}<span v-if="item.required == true"
                           class="text-secondary-02">*</span></p>
                     <input v-if="item.model === 'shippingAddress'" v-model="shippingAddress" :type="item.type"
                        class="rounded-sm bg-secondary h-12.5 w-full px-5 py-4" />

                     <input v-if="item.model === 'phoneNumber'" v-model="phoneNumber" :type="item.type"
                        class="rounded-sm bg-secondary h-12.5 w-full px-5 py-4" />
                  </div>
               </template>
            </form>
         </div>
         <div class="flex flex-col gap-8 w-45/100 pt-20">
            <div class="flex flex-col gap-8 w-105.5">
               <template v-for="product in cartItems" :key="product.id">
                  <div class="flex items-center justify-between">
                     <div class="flex items-center gap-6">
                        <div class="h-13.5 w-13.5 flex justify-center items-center">
                           <img :src="getImageUrl(product.product.imageUrl)" :alt="product.product.name"
                              class="object-contain w-full h-full">
                        </div>
                        <p class="text-black leading-6">{{ product.product.name }}</p>
                     </div>
                     <p class="text-black leading-6">{{ formatFull(product.price * product.quantity) }}đ</p>
                  </div>
               </template>
               <div class="flex flex-col gap-4">
                  <div class="flex items-center justify-between">
                     <p class="text-black leading-6">Subtotal:</p>
                     <p class="text-black leading-6">{{ formatFull(cartSubtotal) }}đ</p>
                  </div>
                  <div class="border-t border-black"></div>
                  <div class="flex items-center justify-between">
                     <p class="text-black leading-6">Shipping:</p>
                     <p class="text-black leading-6">Free</p>
                  </div>
                  <div class="border-t border-black"></div>
                  <div class="flex items-center justify-between">
                     <p class="text-black leading-6">Total:</p>
                     <p class="text-black leading-6">{{ formatFull(cartSubtotal) }}đ</p>
                  </div>
               </div>
               <div class="flex justify-between items-center">
                  <label class="flex items-center gap-4 cursor-pointer">
                     <input type="radio" class="w-6 h-6" name="payment" />
                     <div class="text-black leading-6 select-none">Bank</div>
                  </label>
                  <div class="flex gap-2">
                     <img class="h-7 cursor-pointer" src="/images/bank/bKash.png" alt="">
                     <img class="h-7 cursor-pointer" src="/images/bank/visa.png" alt="">
                     <img class="h-7 cursor-pointer" src="/images/bank/mastercard.png" alt="">
                     <img class="h-7 cursor-pointer" src="/images/bank/nagad.png" alt="">
                  </div>
               </div>
               <label class="flex items-center gap-4 cursor-pointer">
                  <input type="radio" class="w-6 h-6" name="payment">
                  <div class="text-black leading-6 select-none">Cash on delivery</div>
               </label>
            </div>
            <div class="flex gap-4">
               <input type="text" class="rounded-sm !border !border-black px-6 py-4 " placeholder="Coupon Code">
               <button
                  class="px-12 py-4 bg-secondary-02 rounded-sm text-text font-medium hover:bg-text hover:text-secondary-02 hover:shadow-lg">Apply
                  Coupon</button>
            </div>
            <button @click="handleCheckout" class="px-12 py-4 bg-secondary-02 rounded-sm text-text w-fit">Place
               Order</button>
         </div>

      </div>
   </div>
</template>

<script setup lang="ts">
const form = ref([
   {
      label: 'Address',
      required: true,
      type: 'text',
      model: 'shippingAddress'
   },
   {
      label: 'Phone Number',
      required: true,
      type: 'text',
      model: 'phoneNumber'
   },
])
const { getCart, createOrder } = useApi()
const config = useRuntimeConfig()
const { formatFull } = useFormatNumber()
const loading = ref(true)
const cartItems = ref<any[]>([])
const shippingAddress = ref('')
const phoneNumber = ref('')
const router = useRouter()
const loadCart = async () => {
   loading.value = true
   const r = await getCart()
   if (r.data) {
      cartItems.value = r.data as any[]
   }
   loading.value = false
}

const cartSubtotal = computed(() =>
   cartItems.value.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
   )
)

const getImageUrl = (url: string) => {
   if (!url) return 'https://via.placeholder.com/150'
   if (url.startsWith('http')) return url
   return `${config.public.apiBase.replace('/api', '')}${url}`
}
const handleCheckout = async () => {
   if (!shippingAddress.value || !phoneNumber.value) {
      alert('Vui lòng nhập đầy đủ thông tin')
      return
   }

   const { data, error } = await createOrder(
      shippingAddress.value,
      phoneNumber.value
   )

   if (error) {
      alert(error)
      return
   }

   router.push(`/orders/${(data as any).id}`)
}
onMounted(loadCart)

</script>

<style scoped></style>