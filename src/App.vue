<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import Search from "@/components/Search.vue";
import WeatherCard from "@/components/WeatherCard.vue";
import { ref } from "vue";
import type { WeatherData } from "@/lib/weather.ts";
import { Button } from "@/components/ui/button";
import WeatherForecast from "@/components/WeatherForecast.vue";

const places = ref<WeatherData[]>([]);

const fahrenheit = ref(false);

const convertTemp = () => {
  fahrenheit.value = !fahrenheit.value;
};
const addPlace = (data: WeatherData) => {
  places.value[0] = data;
};
</script>

<template>
  <div class="flex flex-col min-h-screen max-w-[600px] mx-auto">
    <main
      class="flex-grow flex flex-col justify-start items-center gap-4 bg-gray-100"
    >
      <header class="p-4 w-full">
        <h1 class="font-bold text-4xl text-primary select-none p-2 text-center">
          Forecastly
        </h1>
      </header>
      <Search @place-data="addPlace" />
      <Button @click="convertTemp"
        >Convert To {{ fahrenheit ? "Celsius" : "Fahrenheit" }}</Button
      >
      <div class="w-full" v-for="place in places" :key="place.location.name">
        <WeatherCard :place="place" :fahrenheit="fahrenheit" />
        <h3 class="text-center text-3xl mt-4 font-semibold">
          Three Days Forecast
        </h3>
        <div v-for="day in place.forecast.forecastday" :key="day.date_epoch">
          <WeatherForecast :day="day" :place="place" :fahrenheit="fahrenheit" />
        </div>
      </div>
      <Footer />
    </main>
  </div>
</template>
