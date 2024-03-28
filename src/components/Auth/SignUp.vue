<template>
    <main class="min-h-[100svh] text-sm space-y-10">
        <div class="mt-14 text-center space-y-3">
            <p class="text-3xl font-semibold">Create an account</p>
            <p class="text-gray-400">Fill your information below</p>
        </div>

        <div class="mx-10 space-y-5">
            <div class="flex flex-col gap-2">
                <label>Name</label>
                <input class="bg-gray-100 px-5 py-4 rounded-lg" placeholder="e.g Juan Dela Cruz">
            </div>
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
            <button class="w-full px-5 py-2.5 bg-blue-600 text-white rounded-full text-base">Sign Up</button>
        </div>

        <div class="mx-10 flex gap-1 justify-center">
            <p>Already have an account?</p>
            <RouterLink to="/" class="text-blue-500 underline">Sing In</RouterLink>
        </div>


    </main>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>