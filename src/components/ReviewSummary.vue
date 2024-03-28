<template>
    <main class="min-h-[100svh] text-sm space-y-8">
        <nav>
            <div class="flex p-5 items-center relative">
                <button @click="goBack" class="outline outline-1 absolute outline-gray-300 p-3 rounded-xl">
                    <ChevronLeftIcon />
                </button>
                <p class="flex-grow text-center text-lg font-medium">Review Summary</p>
            </div>
        </nav>


        <div class="divide-y space-y-7">
            <div class="mx-10 flex">
                <!-- Image here -->
                <div class="size-28 bg-gray-500 rounded-lg shadow-md p-3 grid place-items-center animate-pulse">
                    [Image here]
                </div>

                <!-- Details -->
                <div class="p-3 font-medium text-base">
                    <p>[Title of the car here]</p>
                    <div class="flex items-center">
                        <p class="font-bold text-indigo-600">PHP 1000</p>
                        <span class="text-gray-400 text-sm">/Day</span>
                    </div>
                </div>
            </div>


            <!-- Date -->
            <div class="mx-10 flex flex-col">
                <div class="p-3 font-medium text-base">
                    <ul>
                        <li class="flex justify-between">
                            <p class="text-gray-400">Pickup Date</p>
                            <p>March 05 | 3:00 PM</p>
                        </li>
                        <li class="flex justify-between">
                            <p class="text-gray-400">Return Date</p>
                            <p>March 10 | 3:00 PM</p>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Date -->
            <div class="mx-10 flex flex-col">
                <div class="p-3 font-medium text-base">
                    <ul>
                        <li class="flex justify-between">
                            <p class="text-gray-400">Amount</p>
                            <p>PHP 1000</p>
                        </li>
                        <li class="flex justify-between">
                            <p class="text-gray-400">Duration</p>
                            <p>5 days</p>
                        </li>
                        <li class="flex justify-between mt-5">
                            <p class="text-gray-400">Total</p>
                            <p>PHP 5000</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


        <div class="px-10 fixed bottom-0 w-full py-4 border">
            <button @click="SignIn"
                class="w-full px-5 py-2.5 bg-blue-600 text-white rounded-full text-base">Continue</button>
        </div>


    </main>
</template>

<script setup>
    import { RouterLink, useRouter } from 'vue-router'
    import { ChevronLeftIcon } from 'lucide-vue-next';

    const router = useRouter()
    const SignIn = () => {
        router.push('/home')
    }
    const goBack = () => {
        router.go(-1)
    }
</script>