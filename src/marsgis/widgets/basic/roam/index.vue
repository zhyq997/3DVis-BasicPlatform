<template>
  <mars-dialog :visible="true" right="10" top="60" bottom="40" width="330" title="视角书签">
    <div class="f-mb f-tac">
      <a-space-compact style="width: 100%">
        <mars-input v-model:value="formState.input" placeholder="输入名称"></mars-input>
        <mars-button @click="butAddTxtName">新增路线</mars-button>
      </a-space-compact>
    </div>
    <div class="bookmarkView">
      <div
        class="bookmarkView-conponent"
        v-bind:class="formState.found ? 'addNewImg' : 'noFound'"
        :key="value.name"
        v-for="(value, index) in formState.imgObject"
      >
        <img class="markImg" :src="value.img" @click="flytoView(value)" v-show="formState.found" />
        <p>{{ value.name }}</p>
        <a-tooltip placement="bottom">
          <template #title>
            <span>删除</span>
          </template>
          <mars-icon icon="delete" class="deleteImg" color="var(--mars-text-color)" @click="btnDeleteTxtName(index)" v-show="formState.found" />
        </a-tooltip>
        <a-tooltip placement="bottom">
          <template #title>
            <span>开始漫游</span>
          </template>
          <PlayCircleOutlined v-show="formState.found" class="flyImg" />
        </a-tooltip>
      </div>
    </div>
  </mars-dialog>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue"
import * as mapWork from "./map.js"
import { $message } from "@mars/components/mars-ui/index"
import useLifecycle from "@mars/common/uses/use-lifecycle"
import { PlayCircleOutlined } from "@ant-design/icons-vue"

// 启用map.ts生命周期
useLifecycle(mapWork)

const formState = reactive({
  input: "",
  found: false,
  imgObject: [{ name: "没有匹配的值", img: "", center: "", graphics: {} }]
})

onMounted(() => {
  getLocalStorage()
})

// 读取历史记录
function getLocalStorage() {
  try {
    const data = JSON.parse(localStorage.getItem("bookmark"))
    if (data && data.length > 0) {
      console.log("历史数据", data)
      for (let i = 0; i < data.length; i++) {
        const item = data[i]
        // 删除未匹配项
        if (formState.imgObject[0].img === "") {
          formState.imgObject.splice(0, 1)
          formState.found = true
        }
        formState.imgObject.push(item)
      }
    }
  } catch (err) {}
}

// 添加视角书签
const butAddTxtName = () => {
  const name = formState.input
  const imgObject = formState.imgObject

  if (!name) {
    $message("请输入名称")
    return
  }

  // 删除未匹配项
  if (imgObject[0].img === "") {
    formState.imgObject.splice(0, 1)
    formState.found = true
  }

  // 不能使用相同名称
  if (formState.imgObject.some((item) => item.name === name)) {
    $message(name + " 已存在，请更换名称!")
    return
  }
  $message("请绘制飞行轨迹!")
  mapWork.graphicLayer.clear()
  mapWork.drawPolyline().then(function (graphic) {
    console.log("绘制矢量对象完成", graphic)
    mapWork.butAddTxtName(name)
  })

  // 动态的获取index

  // UI处理
  formState.input = ""
}

// 触发事件
mapWork.eventTarget.on("addImgObject", (event: any) => {
  formState.imgObject.push(event.item)
  // 记录到历史
  localStorage.setItem("bookmark", JSON.stringify(formState.imgObject))
})

// 视角操作
const flytoView = (val: any) => {
  mapWork.flytoView(val.center)
  mapWork.graphicLayer.clear()
  mapWork.graphicLayer.addGraphic(val.graphics)
}

const btnDeleteTxtName = (index: number) => {
  formState.imgObject.splice(index, 1)

  mapWork.graphicLayer.clear()

  if (formState.imgObject.length === 0) {
    formState.imgObject = [{ name: "没有匹配的值", img: "", center: "", graphics: {} }]
    formState.found = false
    localStorage.removeItem("bookmark")
    return
  }
  // 记录到历史
  localStorage.setItem("bookmark", JSON.stringify(formState.imgObject))
}
</script>
<style scoped lang="less">
.infoview {
  height: 91%;
}
.bookmarkView {
  width: 100%;
  height: calc(100% - 53px);
  border: 1px solid white;
  border-radius: 5px;
  overflow-y: auto;
  overflow-x: hidden;
}

.bookmarkView .addNewImg:hover {
  background-color: rgba(0, 138, 255, 0.5);
}
.bookmarkView-conponent :hover {
  background-color: rgba(0, 138, 255, 0);
}

.noFound {
  border: none;
  padding-bottom: 15px;
  border-bottom: 0.5px solid white;
  width: 100%;
  padding-left: 30%;
}

.markImg {
  height: 160px;
  width: 100%;
  z-index: 0;
  margin-bottom: 15px;
  cursor: pointer;
}

.addNewImg {
  position: relative;
  border: 1px solid white;
  margin-top: 22px;
  border: 1px solid rgba(0, 138, 255, 0.5);
  padding: 2px 5px;
  background-color: rgba(0, 136, 255, 0.76);
}

.markImg :hover {
  background-color: red;
}

.addNewImg p:after {
  content: "";
  width: calc(100% + 20px);
  height: 1px;
  background-color: white;
  position: absolute;
  bottom: -11px;
  left: -11px;
}
.addNewImg p {
  color: var(--mars-text-color);
  font-weight: 700;
}

.addNewImg p :hover {
  display: inline-block;
  width: 160px;
  white-space: normal;
  word-wrap: break-word;
}

.deleteImg {
  width: 14px;
  height: 14px;
  border: none;
  position: absolute;
  top: 176px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
  cursor: pointer;
}
.flyImg {
  width: 14px;
  height: 14px;
  border: none;
  position: absolute;
  top: 176px;
  right: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
  cursor: pointer;
}
</style>
