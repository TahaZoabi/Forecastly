<script setup lang="ts">
import WeatherForecast from "@/components/WeatherForecast.vue";
import { defineProps } from "vue";
import type { WeatherData } from "@/lib/weather.ts";
defineProps<{
  place: WeatherData;
}>();
</script>

<template>
  <div v-for="day in place.forecast.forecastday" :key="day.date_epoch">
    <WeatherForecast :day="day" :place="place" />
  </div>
</template>
