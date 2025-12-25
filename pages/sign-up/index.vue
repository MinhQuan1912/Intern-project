<template>
        <div class="flex flex-col gap-12 w-full md:w-3/5 xl:w-auto">
            <div class="flex flex-col gap-6 text-black">
                <p class="text-4xl leading-7.5 font-medium">Create an account</p>
                <p class="leading-6">Enter your details below</p>
            </div>
            <div class="flex flex-col gap-10">
                <form @submit.prevent="handleRegister" class="flex flex-col gap-10">
                    <input type="text" placeholder="Name" class="h-8 pb-2  !border-b-1 !border-black/50 " v-model="form.name" />
                    <input type="text" placeholder="Email or Phone Number"
                        class="h-8 pb-2  !border-b-1 !border-black/50 " v-model="form.email" />
                    <input type="password" placeholder="Password" class="h-8 pb-2  !border-b-1 !border-black/50 " v-model="form.password" />
                </form>
                <div class="flex flex-col gap-4">
                    <button
                        class="h-14 bg-secondary-02 flex justify-center items-center font-medium leading-6 text-text rounded-sm" @click="handleRegister">Create
                        Account</button>
                    <div class="flex flex-col gap-8 items-center">
                        <button class="h-14 flex justify-center items-center gap-4 border border-black/40 rounded-sm w-full">
                            <icons-google />
                            <p class="leading-6 ">Sign up with Google</p>
                        </button>
                        <div class="h-7 flex gap-4 items-center">
                            <p class="text-black leading-6">Already have account?</p>
                            <nuxt-link to="/sign-in" class="h-full font-medium leading-6 opacity-70 border-b hover:text-secondary-02 hover:border-secondary-02">Log in</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'authentication',

})
const authStore = useAuthStore()
const router = useRouter()

const form = reactive({
    name: '',
    email: '',
    password: '',
})

const loading = ref(false)
const errorMessage = ref('')

const handleRegister = async () => {
    errorMessage.value = ''


    if (form.password.length < 6) {
        errorMessage.value = 'Mật khẩu phải có ít nhất 6 ký tự'
        return
    }

    loading.value = true

    const result = await authStore.register(form.name, form.email, form.password)

    loading.value = false

    if (result.success) {
        router.push('/')
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