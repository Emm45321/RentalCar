<template>
    <main class="min-h-[100svh] text-sm space-y-8">
        <nav>
            <div class="flex p-5 items-center relative">
                <button @click="goBack" class="outline outline-1 absolute outline-gray-300 p-3 rounded-xl">
                    <ChevronLeftIcon />
                </button>
                <p class="flex-grow text-center text-lg font-medium">Book Car</p>
            </div>
        </nav>

        <div class="mt-14 space-y-3 mx-10">
            <p class="text-2xl font-semibold">Your Information Details</p>
        </div>

        <div class="mx-10 space-y-6">
            <div class="flex flex-col gap-2">
                <label>Name</label>
                <input class="bg-gray-100 px-5 py-4 rounded-lg" placeholder="e.g Juan Dela Cruz">
            </div>

            <div class="flex flex-col gap-2">
                <label>Email</label>
                <input class="bg-gray-100 px-5 py-4 rounded-lg" placeholder="example@email.com">
            </div>

            <div class="flex flex-col gap-2">
                <label>Gender</label>
                <select class="bg-gray-100 px-5 py-4 rounded-lg" placeholder="Password">
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>

            <div class="flex flex-col gap-2">
                <label>Phone Number</label>
                <input type="number" class="bg-gray-100 px-5 py-4 rounded-lg" placeholder="0000">
            </div>
        </div>

        <div class="px-10 fixed bottom-0 w-full py-4 border">
            <button @click="Review" class="w-full px-5 py-2.5 bg-blue-600 text-white rounded-full text-base">Continue</button>
        </div>


    </main>
</template>

<script setup>
    import { RouterLink, useRouter } from 'vue-router'
    import { ChevronLeftIcon } from 'lucide-vue-next';

    const router = useRouter()
    const Review = () => {
        router.push('/review')
    }
    const goBack = () => {
        router.go(-1)
    }
</script>