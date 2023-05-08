<template>
  <div class="content">
    <BorderBox1>
      <!-- <ScrollBoard :config="config" style="width: 1200px; height: 350px" /> -->
    </BorderBox1>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { BorderBox1 } from "@dataview/datav-vue3";
import * as echarts from "echarts";

const config = ref({
  header: ["列1", "列2", "列3"],
  data: [
    ["行1列1", "行1列2", "行1列3"],
    ["行2列1", "行2列2", "行2列3"],
    ["行3列1", "行3列2", "行3列3"],
    ["行4列1", "行4列2", "行4列3"],
    ["行5列1", "行5列2", "行5列3"],
    ["行6列1", "行6列2", "行6列3"],
    ["行7列1", "行7列2", "行7列3"],
    ["行8列1", "行8列2", "行8列3"],
    ["行9列1", "行9列2", "行9列3"],
    ["行10列1", "行10列2", "行10列3"],
  ],
});

onMounted(() => {
  const chartDom = document.getElementById("box3") as HTMLElement;
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
  left: 0;

  width: 1290px;
  height: 400px;
}
</style>
