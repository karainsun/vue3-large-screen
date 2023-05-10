<template>
  <div class="container" id="container">
    <Header />
    <Module1 />
    <Module2 />
    <Module3 />
    <Module4 />
    <Module5 />
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import Header from "./components/Header.vue";
import Module1 from "./components/Module1.vue";
import Module2 from "./components/Module2.vue";
import Module3 from "./components/Module3.vue";
import Module4 from "./components/Module4.vue";
import Module5 from "./components/Module5.vue";
import autofit from "../src/utils/autofit";

onMounted(() => {
  autofit.init({
    designHeight: 1080,
    designWidth: 1920,
    renderDom: "#container",
    resize: true,
  });
});
</script>

<style>
.container {
  background-image: url("./assets/screen_bg.png");
}
</style>
