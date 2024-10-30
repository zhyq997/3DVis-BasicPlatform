<template>
  <div class="tab-container">
    <div class="tab-buttons">
      <button class="tab-button" data-tab="1">信息表</button>
      <button class="tab-button" data-tab="2">图片</button>
      <button class="tab-button" data-tab="3">视频</button>
    </div>
    <div class="tab-contents">
      <div class="tab-content" data-tab="1">
        <table class="border-collapse" style="border: 1px solid black">
          <tbody v-for="item in props.popupArray">
            <tr>
              <td style="border: 1px solid black; text-align: center">{{ item.name }}</td>
              <td style="border: 1px solid black; text-align: center">{ {{ item.field }} }</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="tab-content" data-tab="2">
        <img src="@/assets/images/city-bg.jpeg" style="width: 100%" alt="示例图片" />
      </div>
      <div class="tab-content" data-tab="3">
        <video
          src="http://data.mars3d.cn/file/video/lukou.mp4"
          id="my-video"
          controls
          style="width: 100%"
        ></video>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onUnmounted } from 'vue';
  import * as mars3d from 'mars3d';

  const props = defineProps<{
    popupArray: Array<any>;
    map: mars3d.Map;
    layer: mars3d.layer.GeoJsonLayer;
  }>();

  const closePopup = () => {
    props.map.graphicLayer.closePopup();
  };

  props.layer.on(mars3d.EventType.popupOpen, function (event) {
    const container = event.container; // popup对应的DOM
    console.log('打开了popup', event);

    const tabButtons = container.querySelectorAll('.tab-button');
    const tabContents = container.querySelectorAll('.tab-content');

    function showTab(tabIndex) {
      let videoElement = document.getElementById('myVideo') as HTMLVideoElement | null;
      if (videoElement) {
        videoElement.pause();
      }
      // 停止视频播放
      tabButtons.forEach((button) => {
        button.classList.remove('active');
      });
      tabContents.forEach((content) => {
        content.classList.remove('active');
      });

      tabButtons[tabIndex].classList.add('active');
      tabContents[tabIndex].classList.add('active');
    }

    tabButtons.forEach((button, index) => {
      button.addEventListener('click', function () {
        showTab(index);
      });
    });

    // Show the first tab by default
    showTab(0);
  });

  function destroyVideo(): void {
    let videoElement = document.getElementById('myVideo') as HTMLVideoElement | null;

    if (videoElement) {
      // 停止视频播放
      videoElement.pause();

      // 清除 src 并释放资源
      videoElement.src = '';
      videoElement.load();

      // 从 DOM 中移除视频元素
      videoElement.remove();

      // 可选：将 videoElement 置为 null
      // (如果你使用的是全局变量或者其他地方引用了这个元素)
      videoElement = null;
    } else {
      console.error('Video element not found.');
    }
  }

  props.layer.on(mars3d.EventType.popupClose, function (event) {
    console.log('关闭了popup', event);
    destroyVideo;
  });
</script>

<style lang="less">
  .mars3d-template-content {
    padding-bottom: 20px;

    div {
      padding-right: 10px;
    }
  }

  .tab-container {
    width: 100%;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
  }

  .tab-buttons {
    display: flex;
    border-bottom: 1px solid #ccc;
  }

  .tab-button {
    flex: 1;
    padding: 10px;
    cursor: pointer;
    background-color: #f1f1f1;
    border: none;
    outline: none;
    transition: background-color 0.3s ease;
  }

  .tab-button:hover {
    background-color: #ddd;
  }

  .tab-button.active {
    background-color: #fff;
    border-bottom: 2px solid #007bff;
  }

  .tab-contents {
    padding: 5px;
    // display: none;
  }

  .tab-content {
    width: 100%;
    height: 100%;
    display: none;
  }

  .tab-content.active {
    display: block;
  }
</style>
