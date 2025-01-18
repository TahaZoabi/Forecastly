<script setup lang="ts">
import { defineProps } from "vue";
import type { Day, WeatherData } from "@/lib/weather.ts";
import { Droplet, Wind } from "lucide-vue-next";

defineProps<{
  day: Day;
  place: WeatherData;
}>();
</script>

<template>
  <section class="w-full flex justify-center items-center">
    <!-- Container with fixed max width -->
    <div
      :class="
        place.current.is_day === 1 ? 'bg-day text-black' : 'bg-night text-white'
      "
      class="max-w-[500px] w-full p-4 my-4 rounded-lg shadow-xl"
    >
      <!-- Day Name -->
      <h1 class="text-3xl font-semibold text-center mb-6">
        {{
          new Date(day.date).toLocaleDateString("en-US", {
            weekday: "long",
          })
        }}
      </h1>

      <!-- Current Weather Section -->
      <div class="text-center mb-8">
        <h3 class="text-xl font-semibold">
          {{ place.location.name }}
        </h3>
        <p class="text-sm">Updated: {{ place.current.last_updated }}</p>

        <!-- Weather Icon & Temperature -->
        <div class="flex justify-center items-center my-4">
          <img
            :src="day.day.condition.icon"
            alt="Weather Icon"
            class="w-20 h-20"
          />
          <div class="ml-4">
            <p class="text-4xl font-bold">
              {{ Math.floor(day.day.maxtemp_c) }}&deg;C
            </p>
            <p class="text-lg">{{ day.day.condition.text }}</p>
          </div>
        </div>
      </div>

      <!-- Weather Details -->
      <div
        class="text-center p-4 rounded-lg flex gap-4 justify-center items-center"
      >
        <div class="flex justify-center items-center gap-2">
          <span><Wind /></span>
          <p class="text-sm">Wind: {{ day.day.maxwind_kph }} kph</p>
        </div>
        <div class="flex justify-center items-center gap-2">
          <span><Droplet /></span>
          <p class="text-sm">Humidity: {{ day.day.avghumidity }}%</p>
        </div>
      </div>
    </div>
  </section>
</template>
