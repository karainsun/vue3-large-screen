<template>
  <div class="content">
    <BorderBox1>
      <div id="box5" style="width: 95%; height: 95%"></div>
    </BorderBox1>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { BorderBox1 } from "@dataview/datav-vue3";
import * as echarts from "echarts";

onMounted(() => {
  const chartDom = document.getElementById("box5") as HTMLElement;
  const myChart = echarts.init(chartDom);
  const option = {
    legend: {
      data: ["产品A", "产品B"],
      textStyle: {
        color: "#fff",
      },
    },
    radar: {
      indicator: [
        { name: "生产", max: 50000 },
        { name: "销量", max: 50000 },
        { name: "退货", max: 50000 },
        { name: "次品", max: 50000 },
        { name: "合格", max: 50000 },
      ],
    },
    series: [
      {
        name: "产品",
        type: "radar",
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000],
            name: "产品A",
          },
          {
            value: [5000, 14000, 28000, 26000, 42000],
            name: "产品B",
          },
        ],
      },
    ],
  };
  option && myChart.setOption(option);
});
</script>

<style scoped>
.content {
  position: absolute;
  bottom: 10px;
  right: 0;
  width: 630px;
  height: 400px;
}
</style>
