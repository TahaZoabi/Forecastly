<script setup lang="ts">
const currentTime = new Date().toLocaleString("en-US", {
  weekday: "long",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});
</script>

<template>
  <div class="w-full p-6">
    <div
      class="max-w-[500px] w-full mx-auto p-6 bg-white rounded-lg shadow-xl bg-gradient-to-r from-blue-300 to-purple-500"
    >
      <!-- Current Location Time -->
      <div class="flex justify-between items-center text-gray-700 mb-6">
        <span class="text-sm">{{ currentTime }}</span>
      </div>

      <!-- Weather Card Header -->
      <div class="flex items-center justify-between mb-4">
        <div>
          <h2 class="text-3xl font-semibold text-gray-800">New York</h2>
          <p class="text-lg text-gray-600">Partly Cloudy</p>
        </div>
        <!-- Weather Icon -->
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Sun.svg/1200px-Sun.svg.png"
          alt="Weather Icon"
          class="w-16 h-16"
        />
      </div>

      <!-- Temperature & Feels Like -->
      <div class="flex items-center mb-4">
        <span class="text-6xl font-bold text-gray-800">72°F</span>
        <p class="text-lg text-gray-500 ml-4">Feels like 70°F</p>
      </div>

      <!-- Additional Weather Details (Wind, Humidity) -->
      <div class="grid grid-cols-2 gap-4 text-sm text-gray-600">
        <div class="flex items-center">
          <span class="material-icons text-blue-500">Air</span>
          <p class="ml-2">Wind: 5 mph</p>
        </div>
        <div class="flex items-center">
          <span class="material-icons text-blue-500">Water Drop</span>
          <p class="ml-2">Humidity: 65%</p>
        </div>
      </div>
    </div>
  </div>
</template>
