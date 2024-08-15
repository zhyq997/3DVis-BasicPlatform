<template>
  <mars-dialog right="10" top="60" width="360">
    <graphic-layer-state drawLabel1="椎形" drawLabel2="圆形" :defaultCount="10" :interaction="false" />
  </mars-dialog>
</template>

<script lang="ts" setup>

import { ref } from "vue"
import GraphicLayerState from "./graphic-layer-state.vue"
import * as mapWork from "./map.js"

</script>
<style scoped lang="less"></style>
