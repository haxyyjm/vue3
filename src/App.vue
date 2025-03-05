<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const toggleLanguage = () => {
  locale.value = locale.value === "zh-CN" ? "en" : "zh-CN";
};
</script>

<template>
  <div class="container">
    <h1>{{ t("message.hello") }}</h1>
    <p>{{ t("message.welcome") }}</p>
    <button @click="toggleLanguage">切换语言 / Switch Language</button>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #f0f0f0;
}
</style>
