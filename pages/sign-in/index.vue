<template>
        <div class="flex flex-col gap-10 w-full md:w-3/5 xl:w-auto">
            <div class="flex flex-col gap-12">
                <div class="flex flex-col gap-6 text-black">
                    <p class="text-4xl leading-7.5 font-medium tracking-[4%]">Log in to Exclusive</p>
                    <p class="leading-6">Enter your details below</p>
                </div>
                <form @submit.prevent="handleLogin" class="flex flex-col gap-10">
                    <input type="text" placeholder="Email or Phone Number"
                        class="h-8 pb-2  !border-b-1 !border-black/50 " v-model="form.email" />
                    <input type="password" placeholder="Password" class="h-8 pb-2  !border-b-1 !border-black/50 " v-model="form.password" />
                </form>
            </div>
            <div class="flex justify-between">
                <button
                    class="h-14 px-12 bg-secondary-02 flex justify-center items-center font-medium leading-6 text-text rounded-sm" @click="handleLogin">Log
                    in</button>
                <button class="text-secondary-02 leading-6">Forget Password?</button>
            </div>
        </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout:'authentication'
})

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()

const form = reactive({
    email: '',
    password: ''
})

const loading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

const handleLogin = async () => {
    errorMessage.value = ''
    successMessage.value = ''
    loading.value = true

    const result = await authStore.login(form.email, form.password)

    loading.value = false

    if (result.success) {
        successMessage.value = 'Đăng nhập thành công!'

        setTimeout(() => {
            const redirect = route.query.redirect as string || '/'
            router.push(redirect)
        }, 500)
    } else {
        errorMessage.value = result.error
    }
}

onMounted(() => {
    if (authStore.isLoggedIn) {
        router.push('/')
    }
})
</script>

<style scoped></style>