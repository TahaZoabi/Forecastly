<script setup lang="ts">
import { type WeatherData } from "@/lib/weather.ts";

defineProps<{
  place: WeatherData;
}>();
</script>

<template>
  <div v-if="place && place.location && place.current">
    <div class="w-full p-6">
      <div
        class="max-w-[500px] w-full mx-auto p-6 bg-white rounded-lg shadow-xl bg-gradient-to-r from-blue-300 to-purple-500"
      >
        <!-- Current Location Time -->
        <div class="flex justify-between items-center text-gray-700 mb-6">
          <span class="text-sm"
            >Local Time
            {{
              new Date(place.location.localtime)
                .getHours()
                .toString()
                .padStart(2, "0")
            }}:{{
              new Date(place.location.localtime)
                .getMinutes()
                .toString()
                .padStart(2, "0")
            }}
          </span>
        </div>

        <!-- Weather Card Header -->
        <div class="flex items-center justify-between mb-4">
          <div>
            <h2 class="text-3xl font-semibold text-gray-800">
              {{ place.location.name }}
            </h2>
            <p class="text-lg text-gray-600">
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
          <span class="text-6xl font-bold text-gray-800"
            >{{ Math.round(place.current.temp_c) }}&deg;C</span
          >
          <p class="text-lg text-gray-500 ml-4">
            Feels like {{ Math.round(place.current.feelslike_c) }}&deg;C
          </p>
        </div>

        <!-- Additional Weather Details (Wind, Humidity) -->
        <div class="grid grid-cols-2 gap-4 text-sm text-gray-600">
          <div class="flex items-center">
            <span class="material-icons text-blue-500">Air</span>
            <p class="ml-2">Wind: {{ place.current.wind_kph }} kph</p>
          </div>
          <div class="flex items-center">
            <span class="material-icons text-blue-500">Water Drop</span>
            <p class="ml-2">Humidity: {{ place.current.humidity }}%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Weather data not available.</p>
  </div>
</template>
