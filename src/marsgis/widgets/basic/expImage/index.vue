<template>
  <mars-dialog title="场景出图" width="340" top="60" :min-width="340">
    <mars-button class="btn" @click="showMapImg">查看场景出图(弹窗)</mars-button>
    <mars-button class="btn" @click="downLoad">下载场景出图</mars-button>
    <mars-button class="btn_div" @click="downLoadDiv">下载场景出图(含DIV部分)</mars-button>
    <img class="f-mt" :src="imges" v-if="showScreenShot" style="width: 100%; height: 100%" />
    <!-- <a-modal v-model:visible="showImg" left="100" right="100" top="50" bottom="60" title="场景出图" @ok="downLoad">
      <template #footer>
        <a-button key="取消" @click="handleCancel">取消</a-button>
        <a-button key="下载" type="primary" @click="downLoad">下载场景出图</a-button>
      </template>
<img :src="imges" style="width: 100%; height: 100%" />
</a-modal> -->
    <mars-dialog left="100" right="100" top="50" bottom="60" title="场景出图" v-model:visible="showImg">
      <img :src="imges" style="width: 100%; height: 100%" />
    </mars-dialog>
  </mars-dialog>

  <!-- <mars-dialog left="100" right="100" top="50" bottom="60" title="场景出图" v-model:visible="showImg">
    <img :src="imges" style="width: 100%; height: 100%" />
  </mars-dialog> -->
</template>

<script setup lang="ts">
import { ref } from "vue"
import * as mapWork from "./map.js"
import useLifecycle from "@mars/common/uses/use-lifecycle"
import { tryOnUnmounted } from "@vueuse/core"

// 启用map.ts生命周期
useLifecycle(mapWork)
const showImg = ref<boolean>(false)
const showScreenShot = ref<boolean>(false)

const imges = ref()

const showMapImg = () => {
  mapWork.showMapImg().then((image) => {
    imges.value = image
    showImg.value = true
  })
}

const downLoad = () => {
  mapWork.downLoad()
}
const handleCancel = () => {
  showImg.value = false
}
const downLoad2 = () => {
  mapWork.downLoad2()
}

const downLoadDiv = () => {
  mapWork.downLoadDiv()
}

// 截图
const screenShots = () => {
  showScreenShot.value = true
  mapWork.showMapImg({ width: 200, height: 200 }).then((image) => {
    imges.value = image
  })
}
</script>
<style scoped lang="less">
.btn {
  width: 145px;
  margin-bottom: 10px;

  &:nth-child(odd) {
    margin-right: 10px;
  }
}

.btn_div {
  width: 300px;
}
</style>
