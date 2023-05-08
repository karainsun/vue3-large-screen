<template>
  <div className="content">
    <BorderBox1>
      <div id="box2" style="width: 95%; height: 95%"></div>
    </BorderBox1>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { BorderBox1 } from "@dataview/datav-vue3";
import * as echarts from "echarts";

onMounted(() => {
  const chartDom = document.getElementById("box2") as HTMLElement;
  const myChart = echarts.init(chartDom);
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
      axisLabel: {
        textStyle: {
          color: "#fff", //坐标值得具体的颜色
        },
      },
    },
    yAxis: {
      type: "category",
      data: ["广州", "上海", "北京", "成都", "天津", "重庆"],
      axisLabel: {
        textStyle: {
          color: "#fff", //坐标值得具体的颜色
        },
      },
    },
    series: [
      {
        name: "2011",
        type: "bar",
        data: [18203, 23489, 29034, 104970, 131744, 630230],
      },
    ],
  };
  option && myChart.setOption(option);
});
</script>

<style scoped>
.content {
  position: absolute;
  left: 650px;
  top: 100px;
  width: 640px;
  height: 560px;
} 
</style>
