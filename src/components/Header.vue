<template>
  <div class="head">
    <Decoration8 style="width: 300px; height: 70px" />
    <div className="head-title">
      <span>控制台</span>
      <Decoration5 style="width: 500px; height: 90px"></Decoration5>
    </div>
    <Decoration8 :reverse="true" style="width: 300px; height: 70px" />
  </div>
</template>

<script lang="ts" setup>
import { Decoration5, Decoration8 } from "@dataview/datav-vue3";
</script>

<style scoped>
.head {
  width: 100%;
  height: 90px;

  display: flex;

  justify-content: space-between;
  align-items: center;
}
.head-title {
  width: 500px;
  position: relative;
}
.head-title span {
  position: absolute;
  top: 5px;
  width: 100%;
  text-align: center;
  font-size: 34px;
  font-weight: 400;
  color: #fff;
}

</style>
