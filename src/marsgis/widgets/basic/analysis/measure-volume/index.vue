<template>
  <mars-dialog right="10" top="60" width="330" title="方量分析">
    <div class="f-mb height">
      <a-space>
        <span class="mars-pannel-item-label">基准面高(米):</span>
        <mars-input-number
          @change="baseHeight"
          id="inputNumber"
          v-model:value="baseValue"
          step="0.1"
        />
        <mars-button @click="selHeight">点选高度</mars-button>
      </a-space>
    </div>
    <div class="f-mb">
      <a-space>
        <span class="mars-pannel-item-label">围墙底高(米):</span>
        <mars-input-number
          @change="txtMinHeight"
          id="inputNumber"
          v-model:value="bottomValue"
          step="0.1"
        />
      </a-space>
    </div>
    <div class="f-mb">
      <a-space>
        <span class="mars-pannel-item-label">围墙顶高(米):</span>
        <mars-input-number
          @change="txtMaxHeight"
          id="inputNumber"
          v-model:value="topValue"
          step="0.1"
        />
      </a-space>
    </div>
    <div class="f-mb">
      <a-space :size="10">
        <mars-button class="btn" @click="analysisMeasure">绘制分析区域</mars-button>
        <mars-button danger class="btn" @click="clear">清除</mars-button>
      </a-space>
    </div>
    <div class="f-mb">
      <a-checkbox @change="showResult" v-model:checked="checked">显示面内三角网</a-checkbox>
    </div>
    <p class="info">
      提示：单击分析按钮激活绘制分析，对绘制面(墙)内的进行以下计算。<br />
      1. 挖方量: 计算“基准面”到地表之间的凸出部分进行挖掉的体积。<br />
      2. 填方量：计算“基准面”与“墙底部”之间的缺少部分进行填平的体积。
    </p>
  </mars-dialog>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import * as mapWork from './map.js';
  import useLifecycle from '@mars/common/uses/use-lifecycle';

  useLifecycle(mapWork);

  const baseValue = ref<number>();

  const bottomValue = ref<number>();

  const topValue = ref<number>();

  const checked = ref(false);

  // 方量分析
  const analysisMeasure = () => {
    mapWork.analysisMeasure();
  };
  // 清除
  const clear = () => {
    mapWork.clear();
  };

  // 复选框显示结果
  const showResult = () => {
    const isShow = mapWork.showResult(checked.value);
    checked.value = isShow;
  };

  // 基础高度修改
  const baseHeight = () => {
    mapWork.baseHeight(baseValue.value);
  };

  // 修改底高
  const txtMinHeight = () => {
    mapWork.txtMinHeight(bottomValue.value);
  };

  // 修改顶高
  const txtMaxHeight = () => {
    mapWork.txtMaxHeight(topValue.value);
  };

  // 点选高度
  const selHeight = () => {
    mapWork.selHeight();
  };
  mapWork.eventTarget.on('heightVal', function (event: any) {
    showResult();
    baseValue.value = event.baseHeight;
    bottomValue.value = event.minHeight;
    topValue.value = event.maxHeight;
  });
</script>
<style scoped lang="less">
  .mars-pannel-item-label {
    width: 90px;
  }

  .btn {
    width: 146px;
  }

  .info {
    color: rgb(0, 0, 0);
  }

  .height {
    .ant-input-number {
      width: 118px !important;
    }
  }

  .ant-input-number {
    width: 204px !important;
  }
</style>
