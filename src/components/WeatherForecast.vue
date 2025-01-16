<script setup lang="ts">
// This will be where you'll later pass the weather data for a single day
const weatherData = {
  city: "New York",
  updated: new Date().toLocaleString(),
  dayName: "Monday", // You can dynamically set this based on the current date
  temperature: "72°F",
  description: "Sunny",
  iconUrl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Sun.svg/1200px-Sun.svg.png",
  wind: "5 mph",
  humidity: "65%",
};
</script>

<template>
  <section class="w-full min-h-screen flex justify-center items-center">
    <!-- Container with fixed max width -->
    <div
      class="max-w-[500px] w-full p-4 rounded-lg shadow-xl bg-gradient-to-r from-blue-300 to-purple-500"
    >
      <!-- Day Name -->
      <h1 class="text-3xl font-semibold text-center text-gray-800 mb-6">
        {{ weatherData.dayName }}
      </h1>

      <!-- Current Weather Section -->
      <div class="text-center mb-8">
        <h3 class="text-xl font-semibold text-gray-800">
          {{ weatherData.city }}
        </h3>
        <p class="text-sm text-gray-600">Updated: {{ weatherData.updated }}</p>

        <!-- Weather Icon & Temperature -->
        <div class="flex justify-center items-center my-4">
          <img
            :src="weatherData.iconUrl"
            alt="Weather Icon"
            class="w-20 h-20"
          />
          <div class="ml-4">
            <p class="text-4xl font-bold text-gray-800">
              {{ weatherData.temperature }}
            </p>
            <p class="text-lg text-gray-600">{{ weatherData.description }}</p>
          </div>
        </div>
      </div>

      <!-- Weather Details -->
      <div class="text-center p-4 bg-gray-100 rounded-lg shadow-md">
        <p class="text-sm text-gray-600">Wind: {{ weatherData.wind }}</p>
        <p class="text-sm text-gray-600">
          Humidity: {{ weatherData.humidity }}
        </p>
      </div>
    </div>
  </section>
</template>
