<script setup lang="ts">
const year = new Date().getFullYear();
import { Mail, Instagram, Linkedin, Github, Twitter } from "lucide-vue-next";
const socialLinks = [
  { id: 1, icon: Github, url: "https://github.com/TahaZoabi", label: "GitHub" },
  {
    id: 2,
    icon: Linkedin,
    url: "https://www.linkedin.com/in/tahazoabi/",
    label: "LinkedIn",
  },
  { id: 3, icon: Mail, url: "mailto:range.dev7@gmail.com.com", label: "Mail" },
  {
    id: 4,
    icon: Instagram,
    url: "https://www.instagram.com/tahaelzoabi/",
    label: "Instagram",
  },
  {
    id: 5,
    icon: Twitter,
    url: "https://x.com/RealRangeDev",
    label: "Twitter",
  },
];
</script>

<template>
  <footer class="flex flex-col items-center justify-center mt-auto">
    <h5 class="text-md sm:text-lg">
      &copy; {{ year }} Taha Zoabi. All Rights Reserved.
    </h5>

    <ul class="flex justify-center items-center gap-3 p-3">
      <li
        v-for="socialMedia in socialLinks"
        :key="socialMedia.id"
        class="text-foreground hover:text-primary transition-colors duration-300"
      >
        <a
          :href="socialMedia.url"
          target="_blank"
          :aria-label="socialMedia.label"
        >
          <component :is="socialMedia.icon" />
        </a>
      </li>
    </ul>
  </footer>
</template>
