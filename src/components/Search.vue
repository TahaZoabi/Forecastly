<script setup lang="ts">
import { Input } from "@/components/ui/input";
import { Search } from "lucide-vue-next";

const date = new Date().toLocaleString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
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
      />
      <span
        class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
      >
        <Search class="size-6 text-muted-foreground" />
      </span>

      <!-- Static Results Dropdown -->
      <div
        class="absolute w-full mt-2 bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto z-10"
      >
        <ul>
          <!--          <li-->
          <!--            class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"-->
          <!--          >-->
          <!--            New York-->
          <!--          </li>-->
        </ul>
      </div>
    </div>
  </div>
</template>
