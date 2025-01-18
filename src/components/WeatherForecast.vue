<script setup lang="ts">
import { defineProps } from "vue";
import type { Day, WeatherData } from "@/lib/weather.ts";
import { Droplet, Wind } from "lucide-vue-next";

defineProps<{
  day: Day;
  place: WeatherData;
  fahrenheit: boolean;
}>();
</script>

<template>
  <section class="w-full p-6">
    <!-- Container with fixed max width -->
    <div
      :class="
        place.current.is_day === 1 ? 'bg-day text-black' : 'bg-night text-white'
      "
      class="max-w-[500px] w-full p-8 mx-auto my-4 rounded-lg shadow-xl"
    >
      <!-- Day Name -->
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-semibold text-center mb-6">
          {{
            new Date(day.date).toLocaleDateString("en-US", {
              weekday: "long",
            })
          }}
        </h2>
        <h1 class="text-2xl font-semibold text-center mb-6">
          {{
            new Date(day.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })
          }}
        </h1>
      </div>

      <!-- Current Weather Section -->
      <div class="text-center mb-8">
        <h3 class="text-3xl font-semibold">
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
              {{
                fahrenheit
                  ? Math.floor(day.day.maxtemp_f)
                  : Math.floor(day.day.maxtemp_c)
              }}&deg;{{ fahrenheit ? "F" : "C" }}
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
          <p class="text-sm">
            Wind: {{ fahrenheit ? day.day.maxwind_mph : day.day.maxwind_kph }}
            {{ fahrenheit ? "mp" : "km" }}/h
          </p>
        </div>
        <div class="flex justify-center items-center gap-2">
          <span><Droplet /></span>
          <p class="text-sm">Humidity: {{ day.day.avghumidity }}%</p>
        </div>
      </div>
    </div>
  </section>
</template>
