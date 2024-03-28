<template>
    <main class="min-h-[100svh] text-sm space-y-10">
        <div class="mt-14 text-center space-y-3">
            <p class="text-3xl font-semibold">Sign In</p>
            <p class="text-gray-400">Hi! Welcome back, you've been missed</p>
        </div>

        <div class="mx-10 space-y-6">
            <div class="flex flex-col gap-2">
                <label>Email</label>
                <input class="bg-gray-100 px-5 py-4 rounded-lg" placeholder="example@email.com">
            </div>
            <div class="flex flex-col gap-2">
                <label>Password</label>
                <input class="bg-gray-100 px-5 py-4 rounded-lg" placeholder="Password">
            </div>
        </div>

        <div class="mx-10">
            <button @click="SignIn" class="w-full px-5 py-2.5 bg-blue-600 text-white rounded-full text-base">Sign In</button>
        </div>

        <div class="mx-10 flex items-center text-gray-400">
            <div class="border-t flex-grow"></div>
            <div class="mx-2">Or sign in with</div>
            <div class="border-t flex-grow"></div>
        </div>

        <div class="mx-10">
            <button class="w-full border border-gray-300 py-2.5 px-5">
                <span>
                </span>
                Continue with Google
            </button>
        </div>

        <div class="mx-10 flex gap-1 justify-center">
            <p>Don't have an account?</p>
            <RouterLink to="/signup" class="text-blue-500 underline">Sing Up</RouterLink>
        </div>


    </main>
</template>

<script setup>
    import {RouterLink, useRouter} from 'vue-router'

    const router = useRouter()
    const SignIn = ()=>{
        router.push('/home')
    }
</script>