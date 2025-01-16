<script setup lang="ts">
import { defineProps } from "vue";
import type { Day, WeatherData } from "@/lib/weather.ts";

defineProps<{
  day: Day;
  place: WeatherData;
}>();
</script>

<template>
  <section class="w-full flex justify-center items-center">
    <!-- Container with fixed max width -->
    <div
      class="max-w-[500px] w-full p-4 my-4 rounded-lg shadow-xl bg-gradient-to-r from-blue-300 to-purple-500"
    >
      <!-- Day Name -->
      <h1 class="text-3xl font-semibold text-center text-gray-800 mb-6">
        {{
          new Date(day.date).toLocaleDateString("en-US", {
            weekday: "long",
          })
        }}
      </h1>

      <!-- Current Weather Section -->
      <div class="text-center mb-8">
        <h3 class="text-xl font-semibold text-gray-800">
          {{ place.location.name }}
        </h3>
        <p class="text-sm text-gray-600">
          Updated: {{ place.current.last_updated }}
        </p>

        <!-- Weather Icon & Temperature -->
        <div class="flex justify-center items-center my-4">
          <img
            :src="day.day.condition.icon"
            alt="Weather Icon"
            class="w-20 h-20"
          />
          <div class="ml-4">
            <p class="text-4xl font-bold text-gray-800">
              {{ Math.floor(day.day.maxtemp_c) }}&deg;C
            </p>
            <p class="text-lg text-gray-600">{{ day.day.condition.text }}</p>
          </div>
        </div>
      </div>

      <!-- Weather Details -->
      <div class="text-center p-4 bg-gray-100 rounded-lg shadow-md">
        <p class="text-sm text-gray-600">Wind: {{ day.day.maxwind_kph }} kph</p>
        <p class="text-sm text-gray-600">
          Humidity: {{ day.day.avghumidity }}%
        </p>
      </div>
    </div>
  </section>
</template>
