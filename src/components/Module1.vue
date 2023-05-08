<template>
  <div class="content">
    <BorderBox1>
      <div id="box1" style="width: 590px; height: 500px"></div>
    </BorderBox1>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { BorderBox1 } from "@dataview/datav-vue3";
import * as echarts from "echarts";

onMounted(() => {
  const chartDom = document.getElementById("box1") as HTMLElement;
  const chart = echarts.init(chartDom);
  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
      textStyle: {
        color: "#fff",
      },
    },
    series: [
      {
        name: "城市",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 0,
        },
        label: {
          show: false,
          position: "center",
          textStyle: {
            color: "#fff",
          },
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "40",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 2700, name: "北京" },
          { value: 2500, name: "上海" },
          { value: 2000, name: "广州" },
          { value: 1700, name: "深圳" },
          { value: 1500, name: "重庆" },
        ],
      },
    ],
  };

  chart.setOption(option);
});
</script>

<style scoped>
.content {
  position: absolute;
  left: 0;
  top: 100px;
  width: 640px;
  height: 560px;
}
</style>
