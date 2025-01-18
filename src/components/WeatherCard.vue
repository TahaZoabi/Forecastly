<script setup lang="ts">
import { type WeatherData } from "@/lib/weather.ts";
import { defineProps } from "vue";
import { computed } from "vue";
import { Droplet, Wind } from "lucide-vue-next";

const props = defineProps<{
  place: WeatherData;
}>();

// Computed property to extract and format the local time
const localTime = computed(() => {
  const date = new Date(props.place.location.localtime);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
});
</script>

<template>
  <div class="w-full p-6">
    <div
      :class="
        place.current.is_day === 1 ? 'bg-day text-black' : 'bg-night text-white'
      "
      class="max-w-[500px] w-full mx-auto p-8 bg-white rounded-lg shadow-xl"
    >
      <!-- Current Location Time -->
      <div class="flex justify-between items-center mb-6">
        <span class="text-sm"> Local Time {{ localTime }} </span>
      </div>

      <!-- Weather Card Header -->
      <div class="flex items-center justify-between mb-4">
        <div>
          <h2 class="text-3xl font-semibold">
            {{ place.location.name }}
          </h2>
          <p class="text-lg">
            {{ place.current.condition.text }}
          </p>
        </div>
        <!-- Weather Icon -->
        <img
          :src="place.current.condition.icon"
          alt="Weather Icon"
          class="w-16 h-16"
        />
      </div>

      <!-- Temperature & Feels Like -->
      <div class="flex items-center mb-4">
        <span class="text-6xl font-bold"
          >{{ Math.round(place.current.temp_c) }}&deg;C</span
        >
        <p class="text-lg ml-4">
          Feels like {{ Math.round(place.current.feelslike_c) }}&deg;C
        </p>
      </div>

      <!-- Additional Weather Details (Wind, Humidity) -->
      <div class="grid grid-cols-2 gap-4 text-sm">
        <div class="flex items-center">
          <span><Wind /></span>
          <p class="ml-2">Wind: {{ place.current.wind_kph }} kph</p>
        </div>
        <div class="flex items-center">
          <span><Droplet /></span>
          <p class="ml-2">Humidity: {{ place.current.humidity }}%</p>
        </div>
      </div>
    </div>
  </div>
</template>
