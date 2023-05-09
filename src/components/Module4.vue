<template>
  <div class="content">
    <BorderBox1>
      <Decoration1 />
    </BorderBox1>
  </div>
</template>

<script lang="ts" setup>
import { BorderBox1, Decoration1 } from "@dataview/datav-vue3";
</script>

<style scoped>
.content {
  position: absolute;
  bottom: 10px;
  left: 0;

  width: 1290px;
  height: 400px;
}
</style>
