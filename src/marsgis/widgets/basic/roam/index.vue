<template>
  <mars-dialog :visible="true" right="10" top="60" bottom="40" width="330" title="飞行漫游">
    <div v-show="!isShow">
      <div class="f-mb f-tac">
        <a-space-compact style="width: 100%">
          <mars-input v-model:value="formState.input" placeholder="输入名称"></mars-input>
          <mars-button @click="addTxtName">新增路线</mars-button>
        </a-space-compact>
      </div>
      <div class="bookmarkView">
        <div
          class="bookmarkView-conponent"
          v-bind:class="formState.found ? 'addNewImg' : 'noFound'"
          :key="value.name"
          v-for="(value, index) in formState.imgObject"
        >
          <img
            class="markImg"
            :src="value.img"
            @click="flytoView(value, index, true)"
            v-show="formState.found"
          />
          <p>{{ value.name }}</p>
          <a-tooltip placement="bottom">
            <template #title>
              <span>删除</span>
            </template>
            <mars-icon
              icon="delete"
              class="deleteImg"
              color="var(--mars-text-color)"
              @click="btnDeleteTxtName(index)"
              v-show="formState.found"
            />
          </a-tooltip>
          <a-tooltip placement="bottom" v-if="!value.isStart && formState.found">
            <template #title>
              <span>开始漫游</span>
            </template>
            <!-- <PlayCircleOutlined v-show="formState.found" class="flyImg" @click="startRoam(value)" /> -->
            <icon class="flyImg" @click="startRoam(value, index)">
              <template #component>
                <svg
                  t="1729750931011"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="6252"
                  width="14"
                  height="14"
                >
                  <path
                    d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024z m3.008-92.992a416 416 0 1 0 0-832 416 416 0 0 0 0 832zM383.232 287.616l384 224.896-384 223.104v-448z"
                    fill="#2c2c2c"
                    p-id="6253"
                  ></path>
                </svg>
              </template>
            </icon>
          </a-tooltip>
          <a-tooltip placement="bottom" v-if="value.isStart && formState.found">
            <template #title>
              <span>结束漫游</span>
            </template>
            <icon class="flyImg" @click="stopRoam(index)">
              <template #component>
                <svg
                  t="1729750966037"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="7355"
                  width="14"
                  height="14"
                >
                  <path
                    d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024z m3.008-92.992a416 416 0 1 0 0-832 416 416 0 0 0 0 832zM320 320h384v384H320V320z"
                    fill="#262626"
                    p-id="7356"
                  ></path>
                </svg>
              </template>
            </icon>
          </a-tooltip>
          <a-tooltip placement="bottom" v-if="formState.found">
            <template #title>
              <span>修改参数</span>
            </template>
            <icon class="editImg" @click="editOptions(index, value)">
              <template #component>
                <svg
                  t="1729819714307"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4267"
                  width="14"
                  height="14"
                >
                  <path
                    d="M855.04 994.304H174.08c-78.848 0-143.36-64.512-143.36-143.36v-680.96c0-78.848 64.512-143.36 143.36-143.36h578.56c22.528 0 40.96 18.432 40.96 40.96s-18.432 40.96-40.96 40.96H174.08c-33.792 0-61.44 27.648-61.44 61.44v680.96c0 33.792 27.648 61.44 61.44 61.44h680.96c33.792 0 61.44-27.648 61.44-61.44v-450.56c0-22.528 18.432-40.96 40.96-40.96s40.96 18.432 40.96 40.96v450.56c0 78.848-64 143.36-143.36 143.36z"
                    fill="#2c2c2c"
                    p-id="4268"
                  ></path>
                  <path
                    d="M378.368 757.76c-10.24 0-20.992-4.096-29.184-11.776-15.872-15.872-15.872-41.984 0-57.856L928.768 108.544c15.872-15.872 41.984-15.872 57.856 0 15.872 15.872 15.872 41.984 0 57.856L407.552 745.984c-8.192 7.68-18.432 11.776-29.184 11.776z"
                    fill="#2c2c2c"
                    p-id="4269"
                  ></path>
                </svg>
              </template>
            </icon>
          </a-tooltip>
        </div>
      </div>
      <a-modal v-model:open="showModal" title="保存确认" @ok="handleOk">
        <h1 style="display: flex; justify-content: center">是否保存编辑？？？</h1>
      </a-modal>
    </div>
    <div v-if="isShow">
      <div class="title-vertical">线路名称：{{ currentName }}</div>
      <div class="">
        <div class="title-vertical_line">飞行漫游属性</div>
        <mars-gui :options="options()" @change="gui1Change" :labelCol="9"></mars-gui>
      </div>
      <div>
        <div class="title-vertical_line">坐标编辑</div>
        <div v-for="(item, index) in currentPositions" class="poi-div">
          <div class="position-title">第{{ index + 1 }}个点</div>
          <mars-gui :options="positionOptions(item)" @change="gui1Change" :labelCol="9"></mars-gui>
        </div>
      </div>
      <mars-button @click="goBack">返回</mars-button>
    </div>
  </mars-dialog>
</template>

<script setup lang="ts">
  import { onMounted, reactive, onUnmounted, ref } from 'vue';
  import * as mapWork from './map.js';
  import { $alert, $message, $showLoading, $hideLoading } from '@mars/components/mars-ui/index';
  import * as mars3d from 'mars3d';
  import useLifecycle from '@mars/common/uses/use-lifecycle';
  import Icon from '@ant-design/icons-vue';
  import type { GuiItem } from '@mars/components/mars-ui/mars-gui';

  // 启用map.ts生命周期
  useLifecycle(mapWork);

  interface roamOptions {
    interpolation: boolean;
    clockLoop: boolean;
    speed: number;
    model: {
      url: string;
    };
    surfaceHeight: boolean; //是否开启贴地
    camera: {
      type: string;
      radius: number;
      followedX: number;
    };
  }

  const defaultRoamOptions = <roamOptions>{
    interpolation: false,
    speed: 200,
    clockLoop: true,
    surfaceHeight: true,
    model: { url: '' },
    camera: {
      type: 'gs',
      radius: 500,
      followedX: 500,
    },
  };

  let currentName = '';
  let currentIndex = -1;
  let currentRoamOptions = ref(<roamOptions>{});
  let currentPositions = ref([]);
  const showModal = ref<boolean>(false);
  const isShow = ref(false);
  const options = () => {
    return <GuiItem[]>[
      {
        type: 'number',
        field: 'speed',
        label: '速度',
        step: 1,
        min: 1,
        max: 200,
        value: currentRoamOptions.value.speed,
        change(data) {
          // $message("你输入了：" + data)
          currentRoamOptions.value.speed = data;
          updataRoamOptions();
          console.log(data);
        },
      },
      {
        type: 'switch',
        field: 'interpolation',
        label: '是否弧形插值',
        value: currentRoamOptions.value.interpolation,
        change(data) {
          currentRoamOptions.value.interpolation = data;
          updataRoamOptions();
          console.log(data);
        },
      },
      {
        type: 'switch',
        field: 'clockLoop',
        label: '是否循环漫游',
        value: currentRoamOptions.value.clockLoop,
        change(data) {
          currentRoamOptions.value.clockLoop = data;
          updataRoamOptions();
          console.log(data);
        },
      },
      {
        type: 'switch',
        field: 'surfaceHeight',
        label: '是否贴地漫游',
        value: currentRoamOptions.value.surfaceHeight,
        change(data) {
          currentRoamOptions.value.surfaceHeight = data;
          updataRoamOptions();
          console.log(data);
        },
      },
      {
        type: 'select',
        field: 'model',
        label: '模型选择',
        value: currentRoamOptions.value.model?.url || 'none',
        data: [
          {
            label: '无',
            value: 'none',
          },
          {
            label: '汽车',
            value: 'https://data.mars3d.cn/gltf/mars/qiche.gltf',
          },
          {
            label: '飞机',
            value: 'https://data.mars3d.cn/gltf/mars/feiji.glb',
          },
          {
            label: '战斗机',
            value: 'https://data.mars3d.cn/gltf/mars/zhanji.gltf',
          },
          {
            label: '行人',
            value: 'https://data.mars3d.cn/gltf/mars/man/running.glb',
          },
        ],
        change(data) {
          updateModel(data);
        },
      },
      // {
      //   type: 'select',
      //   field: 'camera',
      //   label: '视角选择',
      //   value: currentRoamOptions.value.camera?.type || '',
      //   data: [
      //     {
      //       label: '无',
      //       value: '',
      //     },
      //     {
      //       label: '跟随视角',
      //       value: 'gs',
      //     },
      //     {
      //       label: '锁定第一是视角',
      //       value: 'dy',
      //     },
      //     {
      //       label: '锁定上帝视角',
      //       value: 'sd',
      //     },
      //   ],
      //   change(data) {
      //     // updateModel(data);
      //     currentRoamOptions.value.camera.type = data;
      //     updataRoamOptions();
      //     console.log(data);
      //   },
      // },
      // {
      //   type: 'number',
      //   field: 'radius',
      //   label: '视角高度',
      //   step: 1,
      //   min: 1,
      //   max: 10000,
      //   value: currentRoamOptions.value.camera.radius,
      //   change(data) {
      //     // $message("你输入了：" + data)
      //     currentRoamOptions.value.camera.radius = data;
      //     updataRoamOptions();
      //     console.log(data);
      //   },
      // },
      // {
      //   type: 'number',
      //   field: 'followedX',
      //   label: '视角距离',
      //   step: 1,
      //   min: 1,
      //   max: 10000,
      //   value: currentRoamOptions.value.camera.followedX,
      //   change(data) {
      //     // $message("你输入了：" + data)
      //     currentRoamOptions.value.camera.followedX = data;
      //     updataRoamOptions();
      //     console.log(data);
      //   },
      // },
    ];
  };
  const positionOptions = (positions) => {
    const data = [
      {
        type: 'number',
        field: 'lng',
        label: '经度',
        step: 1,
        min: 0,
        max: 360,
        value: positions[0],
        change(data) {
          $message('你输入了：' + data);
          // currentRoamOptions.value.speed = data;
          // updataRoamOptions();
          // console.log(data);
        },
      },
      {
        type: 'number',
        field: 'lat',
        label: '纬度',
        step: 1,
        min: 0,
        max: 180,
        value: positions[1],
        change(data) {
          $message('你输入了：' + data);
          // currentRoamOptions.value.speed = data;
          // updataRoamOptions();
          // console.log(data);
        },
      },
      {
        type: 'number',
        field: 'alt',
        label: '高度',
        step: 1,
        min: 1,
        max: 1000,
        value: positions[2],
        change(data) {
          $message('你输入了：' + data);
          // currentRoamOptions.value.speed = data;
          // updataRoamOptions();
          // console.log(data);
        },
      },
    ];
    return <GuiItem[]>data;
  };

  function gui1Change(data) {
    console.log(data); // data为该gui对象包含的所有数据
  }

  const formState = reactive({
    input: '',
    found: false,
    imgObject: [
      {
        name: '没有匹配的值',
        img: '',
        center: '',
        graphics: {},
        isStart: false,
        isPause: false,
        roamOptions: <roamOptions>{
          interpolation: false,
          speed: 200,
          clockLoop: true,
          surfaceHeight: true,
          model: { url: 'none' },
        },
      },
    ],
  });

  function udpateState(index) {
    formState.imgObject.map((item) => {
      item.isStart = false;
      item.isPause = false;
    });
    if (index === -1) {
      return;
    }
    setTimeout(() => {
      formState.imgObject[index].isStart = mapWork.fixedRoute.isStart;
      formState.imgObject[index].isPause = mapWork.fixedRoute.isPause;
    }, 100);
  }

  onMounted(() => {
    getLocalStorage();
    // 修改了矢量数据
    mapWork.graphicLayer.on([mars3d.EventType.editStop], function (e) {
      console.log('修改完成', e);
      showModal.value = true;
    });
    mapWork.graphicLayer.on(
      [
        mars3d.EventType.editMovePoint,
        mars3d.EventType.editAddPoint,
        mars3d.EventType.editRemovePoint,
      ],
      function (e) {
        console.log('edit事件', e);
        currentPositions.value = e.graphic.toJSON().positions;
      },
    );
  });

  const handleOk = (e: MouseEvent) => {
    mapWork.editTxtName(currentName, currentRoamOptions.value);
    console.log(mapWork.graphic.toJSON());
    currentPositions.value = mapWork.graphic.toJSON().positions;
    showModal.value = false;
  };

  onUnmounted(() => {
    formState.imgObject.map((item) => {
      item.isStart = false;
      item.isPause = false;
    });
  });

  // 读取历史记录
  function getLocalStorage() {
    try {
      const data = JSON.parse(localStorage.getItem('roamLists'));
      if (data && data.length > 0) {
        console.log('历史数据', data);
        for (let i = 0; i < data.length; i++) {
          const item = data[i];
          // 删除未匹配项
          if (formState.imgObject[0].img === '') {
            formState.imgObject.splice(0, 1);
            formState.found = true;
          }
          formState.imgObject.push(item);
        }
      }
    } catch (err) {}
  }

  // 添加飞行路线
  const addTxtName = () => {
    const name = formState.input;
    const imgObject = formState.imgObject;

    if (!name) {
      $message('请输入名称');
      return;
    }

    // 删除未匹配项
    if (imgObject[0].img === '') {
      formState.imgObject.splice(0, 1);
      formState.found = true;
    }

    // 不能使用相同名称
    if (formState.imgObject.some((item) => item.name === name)) {
      $message(name + ' 已存在，请更换名称!');
      return;
    }
    $message('请绘制飞行轨迹!');
    mapWork.graphicLayer.clear();
    mapWork.drawPolyline().then(function (graphic) {
      console.log('绘制矢量对象完成', graphic);
      // 深拷贝
      const newRoamOptions = JSON.parse(JSON.stringify(defaultRoamOptions));
      mapWork.addTxtName(name, newRoamOptions);
    });

    // 动态的获取index

    // UI处理
    formState.input = '';
  };

  // 触发添加路线事件
  mapWork.eventTarget.on('addImgObject', (event: any) => {
    formState.imgObject.push(event.item);
    // 记录到历史
    localStorage.setItem('roamLists', JSON.stringify(formState.imgObject));
  });
  // 触发修改路线事件
  mapWork.eventTarget.on('editImgObject', (event: any) => {
    formState.imgObject[currentIndex] = event.item;
    // 记录到历史
    localStorage.setItem('roamLists', JSON.stringify(formState.imgObject));
  });

  // 视角操作
  const flytoView = (val: any, index: number, isfly: boolean) => {
    currentIndex = index;
    currentName = val.name;
    currentRoamOptions.value = val.roamOptions;
    mapWork.stopRoam();
    udpateState(-1);
    if (isfly) mapWork.flytoView(val.center);
    mapWork.graphicLayer.clear();
    mapWork.graphicLayer.addGraphic(val.graphics);
  };

  // const startRoam = (val: any, index: number) => {
  //   mapWork.stopRoam()
  //   mapWork.startRoam(val.graphics.positions)
  //   udpateState(index)
  // }

  /**
   * 开始漫游
   *
   * @param val 路线数据
   * @param index 路线索引
   */
  const startRoam = async (val: any, index: number) => {
    flytoView(val, index, false);
    try {
      $showLoading();
      await mapWork.startRoam(val.graphics.positions, val.roamOptions, val.name); // 等待 startRoam 完成
      $hideLoading();
      udpateState(index); // 然后运行 udpateState
    } catch (error) {
      console.error('Error starting roam:', error);
    }
  };

  /**
   * 停止漫游
   *
   * @param index 路线索引
   */
  const stopRoam = (index: number) => {
    mapWork.stopRoam();
    udpateState(index);
  };

  /**
   * 删除对象
   *
   * @param index 要删除路线对象的索引
   */
  const btnDeleteTxtName = (index: number) => {
    formState.imgObject.splice(index, 1);

    mapWork.graphicLayer.clear();

    if (formState.imgObject.length === 0) {
      formState.imgObject = [
        {
          name: '没有匹配的值',
          img: '',
          center: '',
          graphics: {},
          isStart: false,
          isPause: false,
          roamOptions: {
            interpolation: false,
            speed: 200,
            clockLoop: true,
            surfaceHeight: true,
            model: {
              url: '',
            },
            camera: {
              type: 'gs',
              radius: 50,
              followedX: 50,
            },
          },
        },
      ];
      formState.found = false;
      localStorage.removeItem('roamLists');
      return;
    }
    // 记录到历史
    localStorage.setItem('roamLists', JSON.stringify(formState.imgObject));
  };

  /**
   * 修改选项
   *
   * @param index 当前项的索引
   * @param name 当前项的名称
   */
  const editOptions = (index: number, val: any) => {
    currentName = val.name;
    currentIndex = index;
    currentPositions.value = val.graphics.positions;
    console.log('修改选项', val.graphics.positions);

    currentRoamOptions.value = formState.imgObject[index].roamOptions;
    isShow.value = true;
  };

  /**
   * 返回操作
   *
   * 将isShow的值设置为false，通常用于关闭弹窗或返回上一页
   */
  const goBack = () => {
    isShow.value = false;
  };

  const updataRoamOptions = () => {
    // 记录到历史
    localStorage.setItem('roamLists', JSON.stringify(formState.imgObject));
  };

  // 动态更新 fixedRoute 的 model 属性
  const updateModel = (url: string) => {
    // mapWork.updateModel(url)
    // 如果选择的是“无”
    if (url === 'none') {
      delete currentRoamOptions.value.model; // 删除 model 属性
    } else {
      currentRoamOptions.value.model = {
        url,
      };
    }
    updataRoamOptions();

    // 如果需要重新启动漫游
    // fixedRoute.start();
  };
</script>
<style scoped lang="less">
  .poi-div + .poi-div {
    margin-top: 10px;
  }
  .position-title {
    padding-left: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 14px;
  }

  .position-title:before {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    background-color: #3385ff;
    position: relative;
    left: -10px;
    top: 12px;
    border-radius: 50%;
  }

  .title-vertical {
    padding-bottom: 10px;
    font-family: 思源黑体;
    font-size: 16px;
    font-weight: bold;
    color: black;
    position: relative;
  }

  .title-vertical_line {
    padding-left: 12px;
    padding-bottom: 10px;
    font-family: 思源黑体;
    font-size: 17px;
    font-weight: bold;
    color: black;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 2px;
      left: 0;
      width: 4px;
      height: 19px;
      border-radius: 2px;
      background-color: var(--mars-primary-color);
    }
  }

  .infoview {
    height: 91%;
  }
  .bookmarkView {
    width: 100%;
    height: calc(100% - 53px);
    border: 1px solid white;
    border-radius: 5px;
    overflow-y: hidden;
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

  .addNewImg + .addNewImg {
    margin-top: 22px;
  }

  .addNewImg {
    position: relative;
    border: 1px solid white;
    // margin-top: 22px;
    border: 1px solid rgba(0, 138, 255, 0.5);
    padding: 2px 5px;
    background-color: rgba(0, 136, 255, 0.76);
  }

  .markImg :hover {
    background-color: red;
  }

  .addNewImg p:after {
    content: '';
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
  .editImg {
    width: 14px;
    height: 14px;
    border: none;
    position: absolute;
    top: 176px;
    right: 70px;
    background-color: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
    cursor: pointer;
  }
</style>
