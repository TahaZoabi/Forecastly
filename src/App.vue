<script setup lang="ts">
import Logo from "@/components/Logo.vue";
import Footer from "@/components/Footer.vue";
import Search from "@/components/Search.vue";
import WeatherCard from "@/components/WeatherCard.vue";

import { ref } from "vue";
import type { WeatherData } from "@/lib/weather.ts";
import ThreeDayForecast from "@/components/ThreeDayForecast.vue";

const places = ref<WeatherData[]>([]);

const addPlace = (data: WeatherData) => {
  places.value[0] = data;
};
</script>

<template>
  <div class="flex flex-col min-h-screen max-w-[600px] mx-auto">
    <main
      class="flex-grow flex flex-col justify-start items-center gap-4 bg-gray-100"
    >
      <Logo />
      <Search @place-data="addPlace" />
      <div v-for="place in places" :key="place.location.name">
        <WeatherCard :place="place" />
        <ThreeDayForecast :place="place" />
      </div>

      <Footer />
    </main>
  </div>
</template>
