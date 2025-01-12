<script setup lang="ts">
import Logo from "@/components/Logo.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <main
      class="flex-grow flex flex-col justify-start items-center gap-4 max-w-[1100px] mx-auto"
    >
      <Logo />
    </main>
    <Footer />
  </div>
</template>
