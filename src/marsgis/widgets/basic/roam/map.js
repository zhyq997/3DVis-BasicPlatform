import * as mars3d from 'mars3d';
import { $alert, $message, $showLoading, $hideLoading } from '@mars/components/mars-ui/index';

export let map; // mars3d.Map三维地图对象
export let graphicLayer; // 矢量图层对象
export let graphic;
export let fixedRoute;
// 需要覆盖config.json中地图属性参数（当前示例框架中自动处理合并）
export const mapOptions = {
  scene: {
    center: { lat: 31.628661, lng: 117.251952, alt: 46390, heading: 2, pitch: -68 },
  },
};

export const eventTarget = new mars3d.BaseClass();

/**
 * 初始化地图业务，生命周期钩子函数（必须）
 * 框架在地图初始化完成后自动调用该函数
 * @param {mars3d.Map} mapInstance 地图对象
 * @returns {void} 无
 */
export function onMounted(mapInstance) {
  map = mapInstance; // 记录map

  graphicLayer = new mars3d.layer.GraphicLayer({
    // isRestorePositions: true,
    hasEdit: true,
    isAutoEditing: false, // 绘制完成后是否自动激活编辑
    // drawAddEventType: false,
    // drawEndEventType: mars3d.EventType.rightClick,
    // drawDelEventType: mars3d.EventType.middleClick
  });
  map.addLayer(graphicLayer);
  graphicLayer.on(mars3d.EventType.editStop, function (e) {
    graphic = e.graphic;
    console.log('停止编辑', e);
  });
}

/**
 * 释放当前地图业务的生命周期函数
 * @returns {void} 无
 */
export function onUnmounted() {
  clearAll();
  map = null;
}

export function clearAll() {
  stopRoam();
  graphicLayer.clear();
  fixedRoute = null;
  graphic = null;
  graphicLayer = null;
}

// 添加飞行漫游
export function addTxtName(name, roamOptions) {
  // 动态的获取index
  const item = {
    name,
    center: map.getCameraView(),
    graphics: graphic?.toJSON(),
    roamOptions,
  };

  map
    .expImage({
      download: false,
      width: 300,
    })
    .then((result) => {
      item.img = result.image;
      eventTarget.fire('addImgObject', { item });
    });
}

// 修改飞行漫游
export function editTxtName(name, roamOptions) {
  // 动态的获取index
  const item = {
    name,
    center: map.getCameraView(),
    graphics: graphic?.toJSON(),
    roamOptions,
  };

  map
    .expImage({
      download: false,
      width: 300,
    })
    .then((result) => {
      item.img = result.image;
      eventTarget.fire('editImgObject', { item });
    });
}

// 飞向视角
export function flytoView(center) {
  map.setCameraView(center, { duration: 1 });
}

export async function drawPolyline() {
  graphic = await graphicLayer.startDraw({
    type: 'polyline',
    style: {
      color: '#ffff00',
      width: 3,
      clampToGround: true,
    },
  });
  return graphic;
  // console.log("完成了draw标绘", graphic)
}

export function startRoam(positions, roamOptions, name) {
  return new Promise((resolve, reject) => {
    fixedRoute = new mars3d.graphic.FixedRoute({
      name: name,
      speed: roamOptions.speed,
      positions,
      clockLoop: roamOptions.clockLoop,
      interpolation: roamOptions.interpolation,
      camera: {
        type: roamOptions.camera.type,
        followedX: roamOptions.camera.followedX,
        radius: roamOptions.camera.radius,
      },
    });
    if (roamOptions.model) {
      fixedRoute.model = roamOptions.model;
    }
    // 绑定popup
    bindPopup(fixedRoute, name);
    graphicLayer.addGraphic(fixedRoute);
    if (roamOptions.surfaceHeight) {
      try {
        // 开始漫游
        fixedRoute
          .autoSurfaceHeight({ exact: true })
          .then(() => {
            fixedRoute.start(); // 启动漫游
            fixedRoute.openPopup(); // 显示popup
            resolve(); // 漫游开始后解析 Promise
          })
          .catch(reject); // 处理计算贴地的错误
      } catch (error) {
        reject(error); // 捕获任何其他错误
      }
    } else {
      fixedRoute.start(); // 启动漫游
      fixedRoute.openPopup(); // 显示popup
    }
  });
}

export function stopRoam() {
  if (!fixedRoute) {
    return;
  }
  fixedRoute.stop();
  graphicLayer.removeGraphic(fixedRoute, false);
  // 开始漫游
}

export function updataGraphic(editGraphic) {
  if (editGraphic) {
    graphic = editGraphic;
  } else {
    console.log('请先绘制路线');
  }
}

function bindPopup(fixedRoute, name) {
  fixedRoute.bindPopup(
    `<div style="width: 200px">
      <div>线路名称：<span>${name}</span></div>
      <div>总 距 离：<span id="lblAllLen"> </span></div>
      <div>总 时 间：<span id="lblAllTime"> </span></div>
      <div>开始时间：<span id="lblStartTime"> </span></div>
      <div>剩余时间：<span id="lblRemainTime"> </span></div>
      <div>剩余距离：<span id="lblRemainLen"> </span></div>
    </div>`,
    { closeOnClick: false },
  );

  // 刷新局部DOM,不影响popup面板的其他控件操作
  fixedRoute.on(mars3d.EventType.popupRender, function (event) {
    const container = event.container; // popup对应的DOM

    const params = fixedRoute?.info;
    if (!params) {
      return;
    }

    const lblAllLen = container.querySelector('#lblAllLen');
    if (lblAllLen) {
      lblAllLen.innerHTML = mars3d.MeasureUtil.formatDistance(params.distance_all);
    }

    const lblAllTime = container.querySelector('#lblAllTime');
    if (lblAllTime) {
      lblAllTime.innerHTML = mars3d.Util.formatTime(params.second_all / map.clock.multiplier);
    }

    const lblStartTime = container.querySelector('#lblStartTime');
    if (lblStartTime) {
      lblStartTime.innerHTML = mars3d.Util.formatDate(
        Cesium.JulianDate.toDate(fixedRoute.startTime),
        'yyyy-M-d HH:mm:ss',
      );
    }

    const lblRemainTime = container.querySelector('#lblRemainTime');
    if (lblRemainTime) {
      lblRemainTime.innerHTML = mars3d.Util.formatTime(
        (params.second_all - params.second) / map.clock.multiplier,
      );
    }

    const lblRemainLen = container.querySelector('#lblRemainLen');
    if (lblRemainLen) {
      lblRemainLen.innerHTML =
        mars3d.MeasureUtil.formatDistance(params.distance_all - params.distance) || '完成';
    }
  });
}
