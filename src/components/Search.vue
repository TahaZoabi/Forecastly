<script setup lang="ts">
import { Input } from "@/components/ui/input";
import { Search } from "lucide-vue-next";
import { onMounted, reactive } from "vue";

interface SearchTerm {
  query: string;
  timeout: number | undefined;
  results: Array<{ id: string; name: string }>;
}

const emit = defineEmits(["place-data"]);

const date = new Date().toLocaleString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
});

const searchTerm = reactive<SearchTerm>({
  query: "",
  timeout: undefined,
  results: [],
});

const handleSearch = () => {
  clearTimeout(searchTerm.timeout);
  searchTerm.timeout = setTimeout(async () => {
    if (searchTerm.query !== "") {
      const res = await fetch(
        `https://api.weatherapi.com/v1/search.json?key=ab2d06f29c28457e90b73347251301&q=${searchTerm.query}`,
      );

      searchTerm.results = await res.json();
    } else {
      searchTerm.results = [];
    }
  }, 500);
};

const getWeather = async (id: string) => {
  const res = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=ab2d06f29c28457e90b73347251301&q=id:${id}&days=3&aqi=yes&alerts=no`,
  );
  const data = await res.json();
  emit("place-data", data);
  searchTerm.results = [];
  searchTerm.query = "";
};

// Get the user's current location
const getUserLocation = async () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      // Fetch weather data for the user's location
      const res = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=ab2d06f29c28457e90b73347251301&q=${latitude},${longitude}&days=3&aqi=yes&alerts=no`,
      );
      const data = await res.json();
      emit("place-data", data);
    });
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
};

// Get user location on component mount
onMounted(() => {
  getUserLocation();
});
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-4 p-2 w-full">
    <h3 class="text-lg">{{ date }}</h3>
    <div class="relative w-full max-w-md items-center">
      <Input
        id="search"
        type="text"
        placeholder="Search Cities..."
        class="pl-10"
        v-model="searchTerm.query"
        @input="handleSearch"
      />
      <span
        class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
      >
        <Search class="size-6 text-muted-foreground" />
      </span>

      <!-- Static Results Dropdown -->
      <div
        class="absolute w-full mt-2 bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto z-10"
        v-if="searchTerm.results.length > 0"
      >
        <ul v-for="place in searchTerm.results" :key="place.id">
          <li
            class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            @click="getWeather(place.id)"
          >
            {{ place.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
