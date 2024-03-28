<script setup>
  import { AtSignIcon, MapPinIcon, PresentationIcon, SlidersIcon } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';
</script>

<template>
  <main class="space-y-5 text-sm">

    <nav class="bg-blue-500 p-5 space-y-3 rounded-b-xl">

      <div class="text-white">
        <p class="text-blue-200">Location</p>
        <h3 class="flex gap-2 text-lg items-center">
          <span>
            <MapPinIcon />
          </span>
          <span>
            Isabela City, Basilan
          </span>
        </h3>
      </div>

      <div class="flex gap-2">
        <input class="rounded-lg px-3 py-2 flex-grow" placeholder="Search">
        <button class="bg-white w-10 grid place-items-center text-blue-700 rounded-lg">
          <span>
            <SlidersIcon />
          </span>
        </button>
      </div>
    </nav>



    <section class="space-y-6">

      <!-- Brand -->
      <div class="space-y-4">
        <div class="flex justify-between px-5 items-center">
          <h2 class="text-base font-bold">Brands</h2>
          <!-- <a href="#" class="text-blue-500">See all</a> -->
        </div>

        <div class="flex gap-3 px-5 overflow-x-auto brand">
          <div v-for="n in 20" class="">
            <p class="bg-gray-200 p-4 rounded-full grid place-items-center ">
              <MapPinIcon size="24" />
            </p>

            <p class="text-center">Brand</p>
          </div>
        </div>
      </div>


      <!-- Available Cars -->
      <div class="px-5 space-y-4">
        <div class="flex justify-between items-center">
          <p class="text-base font-bold">Available Cars</p>
          <a href="#" class="text-blue-500">See all</a>
        </div>




        <!-- Cars -->
        <div class="grid grid-cols-2 gap-2">

          <RouterLink to="/overview" v-for="m in 10" class="flex flex-col h-[280px]">

            <div class="bg-gray-500 flex-grow rounded-xl grid place-items-center animate-pulse">
              [Image goes here]
            </div>
            <div class="mt-auto line-clamp-2 h-[50px] p-1">
              <div class="font-medium">[Title will go here]</div>

              <div>
                <p>P300/day</p>  
              </div>
            </div>

          </RouterLink>

        </div>
      </div>


    </section>

  </main>

</template>


<style scoped>
  .brand::-webkit-scrollbar {
    display: none;
  }

</style>
