import * as mars3d from "mars3d"
import { defHttp } from '@/utils/http/axios';

export function player(map: mars3d.Map): void {
  map.getLayersByAttr("摄像头管理", "pid").map(e => {
    e.on(mars3d.EventType.popupOpen, function (event) {
      var videoObject = {
        init: function (id: string, src: string) {
          var self = this;
          this.src = src;
          this.id = id;
          this.flvPlayer = flvjs.createPlayer({ type: 'flv', url: src, isLive: true }, { isLive: true, enableStashBuffer: false, enableWorker: true, stashInitialSize: 128, videoStateMonitorInterval: 1000, decreaseDurationStep: 1, enableDurationMonitor: true, enableVideoFrozenMonitor: true });
          this.flvPlayer.attachMediaElement(document.getElementById(id));
          this.flvPlayer.load();
          this.flvPlayer.play();
          this.reLoad = function () {
            self.flvPlayer.unload();
            self.flvPlayer.destroy();
            window.v = videoObject.init(self.id, self.src);
          }
          return this;
        }
      }
      var src = event.layer.options.url
      if (src) {
        if (window.v) {
          window.v.flvPlayer.unload();
          window.v.flvPlayer.destroy();
        }
        window.v = videoObject.init("videoFLV", import.meta.env.VITE_GLOB_API_URL + "/live/" + window.btoa(src) + "/live.flv");
      }
    });
    e.on(mars3d.EventType.popupClose, async function (event) {
      var src = event.layer.options.url

      const queryForm = {
        url: window.btoa(src),
      }

      const result = await defHttp.get({
        url: "/api/video/stop",
        params: queryForm,
      });

      const container = event.container // popup对应的DOM

      let videoElement = container.querySelector('#videoFLV');

      // let videoElement = document.getElementById("myVideo") as HTMLVideoElement | null;
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
        console.error("Video element not found.");
      }
    })
  })
}
