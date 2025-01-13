<script setup lang="ts">
import Logo from "@/components/Logo.vue";
import Footer from "@/components/Footer.vue";
import Search from "@/components/Search.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen max-w-[600px] mx-auto">
    <main
      class="flex-grow flex flex-col justify-start items-center gap-4 bg-gray-100"
    >
      <Logo />
      <Search />
      <Footer />
    </main>
  </div>
</template>
