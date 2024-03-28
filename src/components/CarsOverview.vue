<script setup>
  import { AtSignIcon, MapPinIcon, ChevronLeftIcon } from 'lucide-vue-next';
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter()

  const goBack = () => {
    router.go(-1)
  }

  const Book = () => {
    router.push('/book')
  }
  onMounted(() => {
    window.scrollTo(0, 0)
  })
</script>

<template>
  <main class="text-sm mb-36">

    <nav class="fixed top-0 w-full z-50">
      <div class="flex p-5 items-center">
        <button @click="goBack" class="outline outline-1 outline-gray-300 p-3 rounded-xl">
          <ChevronLeftIcon />
        </button>
        <p class="flex-grow text-center text-lg font-medium">Car Details</p>
      </div>
    </nav>



    <section class="space-y-6">

      <!-- Images -->
      <div class="space-y-2">
        <!-- Preview -->
        <div class="h-[300px] bg-gray-500 grid place-items-center animate-pulse">
          [Preview Image here]
        </div>

        <!-- Thumbnails -->
        <div class="px-5 flex overflow-x-auto gap-2 scroller">

          <div v-for="n in 5" class="bg-gray-500 h-[80px] size-24 grid place-items-center animate-pulse">
            [Thumbnails]
          </div>

        </div>
      </div>


      <!-- Available Cars -->
      <div class="space-y-4">

        <!-- Title -->
        <div class="px-5">
        <p class="text-gray-400 text-lg font-semibold">TITLE</p>

          <p class="text-base font-medium">[The title of the car will go here]</p>
        </div>

        <!-- Price -->
        <div class="px-5">
          <p class="text-gray-400 text-lg font-semibold">MODE</p>
          <div>
            <div class="grid grid-cols-3 gap-3">
              <div class="bg-indigo-600 p-4 rounded-lg text-white">
                <p class="mb-2 font-semibold">Day</p>
                <p class="font-bold text-2xl">4,000</p>
                <p>PHP</p>
              </div>
              <div class="outline outline-1 outline-gray-300 p-4 rounded-lg">
                <p class="mb-2 font-semibold">Kilometer</p>
                <p class="font-bold text-2xl">200</p>
                <p>PHP</p>
              </div>
            </div>
          </div>
        </div>


        <!-- Specification -->
        <div class="mb-40">
          <p class="text-gray-400 text-lg font-semibold px-5">SPECIFICATION</p>
          <div class="scroller flex gap-3 overflow-x-auto px-5">
  
            <div class="border border-gray-200 shadow-sm rounded-lg p-5">
              <p class="text-gray-500">Color</p>
              <p class="text-lg font-semibold min-w-[100px]">White</p>
            </div>
  
            <div class="border border-gray-200 shadow-sm rounded-lg p-5">
              <p class="text-gray-500">Transmission</p>
              <p class="text-lg font-semibold min-w-[100px]">Automatic</p>
            </div>
  
            <div class="border border-gray-200 shadow-sm rounded-lg p-5">
              <p class="text-gray-500">Seats</p>
              <p class="text-lg font-semibold min-w-[100px]">4</p>
            </div>
  
            <div class="border border-gray-200 shadow-sm rounded-lg p-5">
              <p class="text-gray-500">Fuel</p>
              <p class="text-lg font-semibold min-w-[100px]">Diesel</p>
            </div>
  
            <div class="border border-gray-200 shadow-sm rounded-lg p-5">
              <p class="text-gray-500">A/C</p>
              <p class="text-lg font-semibold min-w-[100px]">Yes</p>
            </div>
  
          </div>
        </div>
      </div>


    </section>


    <div class="fixed bottom-0 bg-white p-4 border min-w-full">
      <button @click="Book" class="bg-indigo-500 px-5 py-4 text-white rounded-xl float-right text-base font-medium">Select This
        Car</button>
    </div>
  </main>

</template>


<style scoped>
  .scroller::-webkit-scrollbar {
    display: none;
  }

</style>
