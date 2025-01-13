<script setup lang="ts"></script>

<template>
  <section class="w-full min-h-screen flex justify-center items-center py-6">
    <!-- Container with fixed max width -->
    <div
      class="max-w-[500px] w-full p-6 rounded-lg shadow-xl bg-gradient-to-r from-blue-300 to-purple-500"
    >
      <!-- Title -->
      <h1 class="text-3xl font-semibold text-center text-gray-800 mb-6">
        3-Day Weather Forecast
      </h1>

      <!-- Current Weather Section -->
      <div class="text-center mb-8">
        <h3 class="text-xl font-semibold text-gray-800">New York</h3>
        <p class="text-sm text-gray-600">
          Updated: {{ new Date().toLocaleString() }}
        </p>

        <!-- Weather Icon & Temperature -->
        <div class="flex justify-center items-center my-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Sun.svg/1200px-Sun.svg.png"
            alt="Weather Icon"
            class="w-20 h-20"
          />
          <div class="ml-4">
            <p class="text-4xl font-bold text-gray-800">72°F</p>
            <p class="text-lg text-gray-600">Sunny</p>
          </div>
        </div>
      </div>

      <!-- 3-Day Forecast Table -->
      <div class="grid grid-cols-1 gap-6">
        <!-- Day 1 (Monday) -->
        <div class="text-center p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold text-gray-800">Mon</h3>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Weather-sun.svg/1024px-Weather-sun.svg.png"
            alt="Sunny"
            class="w-12 h-12 mx-auto"
          />
          <p class="text-2xl font-bold text-gray-800">72°F</p>
          <p class="text-sm text-gray-600">Sunny</p>
          <p class="text-sm text-gray-500">Wind: 5 mph</p>
          <p class="text-sm text-gray-500">Humidity: 65%</p>
        </div>

        <!-- Day 2 (Tuesday) -->
        <div class="text-center p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold text-gray-800">Tue</h3>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Weather-sun.svg/1024px-Weather-sun.svg.png"
            alt="Cloudy"
            class="w-12 h-12 mx-auto"
          />
          <p class="text-2xl font-bold text-gray-800">68°F</p>
          <p class="text-sm text-gray-600">Cloudy</p>
          <p class="text-sm text-gray-500">Wind: 6 mph</p>
          <p class="text-sm text-gray-500">Humidity: 60%</p>
        </div>

        <!-- Day 3 (Wednesday) -->
        <div class="text-center p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold text-gray-800">Wed</h3>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Weather-sun.svg/1024px-Weather-sun.svg.png"
            alt="Rainy"
            class="w-12 h-12 mx-auto"
          />
          <p class="text-2xl font-bold text-gray-800">64°F</p>
          <p class="text-sm text-gray-600">Showers</p>
          <p class="text-sm text-gray-500">Wind: 4 mph</p>
          <p class="text-sm text-gray-500">Humidity: 70%</p>
        </div>
      </div>
    </div>
  </section>
</template>
