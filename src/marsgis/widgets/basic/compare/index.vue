<template>
  <mars-dialog
    :visible="true"
    right="10"
    top="60"
    customClass="compare-pannel"
    title="双屏对比"
    width="330"
  >
    <a-space :size="20">
      <mars-button @click="createMap">
        <mars-icon icon="split" :size="20"></mars-icon>
        创建控件
      </mars-button>
      <mars-button @click="destroyMap">
        <mars-icon icon="delete-five" :size="20"></mars-icon>
        销毁控件
      </mars-button>
    </a-space>
  </mars-dialog>
</template>

<script lang="ts" setup>
  import * as mapWork from './map.js';
  import useLifecycle from '@mars/common/uses/use-lifecycle';

  // 启用map.ts生命周期
  useLifecycle(mapWork);
  // 创建地图
  const createMap = () => {
    mapWork.createControl();
  };
  // 销毁地图
  const destroyMap = () => {
    mapWork.destroyControl();
  };
</script>

<style lang="less">
  .compare-pannel {
    background: transparent !important;
    backdrop-filter: none !important;

    .mars-dialog__content {
      background-color: transparent !important;
    }

    .mars-button {
      width: 120px;
      height: 46px;
    }
  }
</style>
