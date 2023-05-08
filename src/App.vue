<template>
  <div
    class="container"
    :style="`transform: scale(${size}) translate(-50%,-50%)`"
  >
    <Header />
    <Module1 />
    <Module2 />
    <Module3 />
    <Module4 />
    <Module5 />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Header from "./components/Header.vue";
import Module1 from "./components/Module1.vue";
import Module2 from "./components/Module2.vue";
import Module3 from "./components/Module3.vue";
import Module4 from "./components/Module4.vue";
import Module5 from "./components/Module5.vue";
import { scale } from "../src/utils";

const size = ref(scale());

onMounted(() => {
  window.onresize = () => {
    return (() => {
      size.value = scale();
    })();
  };
});

onUnmounted(() => {
  window.onresize = null
})
</script>

<style>
.container {
  width: 1920px;
  height: 1080px;
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
  top: 50%;
  background-image: url("./assets/screen_bg.png");
}
</style>
