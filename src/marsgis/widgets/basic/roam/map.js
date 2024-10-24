import * as mars3d from "mars3d"
import { $alert, $message, $showLoading, $hideLoading } from "@mars/components/mars-ui/index"

export let map // mars3d.Map三维地图对象
export let graphicLayer // 矢量图层对象
export let graphic
export let fixedRoute
// 需要覆盖config.json中地图属性参数（当前示例框架中自动处理合并）
export const mapOptions = {
  scene: {
    center: { lat: 31.628661, lng: 117.251952, alt: 46390, heading: 2, pitch: -68 }
  }
}

export const eventTarget = new mars3d.BaseClass()

/**
 * 初始化地图业务，生命周期钩子函数（必须）
 * 框架在地图初始化完成后自动调用该函数
 * @param {mars3d.Map} mapInstance 地图对象
 * @returns {void} 无
 */
export function onMounted(mapInstance) {
  map = mapInstance // 记录map

  graphicLayer = new mars3d.layer.GraphicLayer({
    // isRestorePositions: true,
    hasEdit: true,
    isAutoEditing: false // 绘制完成后是否自动激活编辑
    // drawAddEventType: false,
    // drawEndEventType: mars3d.EventType.rightClick,
    // drawDelEventType: mars3d.EventType.middleClick
  })
  map.addLayer(graphicLayer)
}

/**
 * 释放当前地图业务的生命周期函数
 * @returns {void} 无
 */
export function onUnmounted() {
  map = null
}

// 添加书签
export function butAddTxtName(name) {
  // 动态的获取index
  const item = {
    name,
    center: map.getCameraView(),
    graphics: graphic.toJSON()
  }

  map
    .expImage({
      download: false,
      width: 300
    })
    .then((result) => {
      item.img = result.image
      eventTarget.fire("addImgObject", { item })
    })
}

// 飞向视角
export function flytoView(center) {
  map.setCameraView(center, { duration: 1 })
}

export async function drawPolyline() {
  graphic = await graphicLayer.startDraw({
    type: "polyline",
    style: {
      color: "#ffff00",
      width: 3,
      clampToGround: true
    }
  })
  return graphic
  // console.log("完成了draw标绘", graphic)
}

export function startRoam(positions) {
  return new Promise((resolve, reject) => {
    try {
      fixedRoute = new mars3d.graphic.FixedRoute({
        name: "空中漫游",
        speed: 150,
        positions,
        clockLoop: true,
        interpolation: false,
        camera: {
          type: "gs",
          pitch: -30,
          radius: 500
        },
        model: {
          url: "//data.mars3d.cn/gltf/mars/jingche/jingche.gltf",
          heading: 90,
          mergeOrientation: true,
          minimumPixelSize: 50
        },
        polyline: {
          color: "#fff",
          width: 3
        }
      })

      graphicLayer.addGraphic(fixedRoute)

      // 开始漫游
      fixedRoute
        .autoSurfaceHeight({ exact: true })
        .then(() => {
          fixedRoute.start() // 启动漫游
          resolve() // 漫游开始后解析 Promise
        })
        .catch(reject) // 处理计算贴地的错误
    } catch (error) {
      reject(error) // 捕获任何其他错误
    }
  })
}

export function stopRoam() {
  if (!fixedRoute) {
    return
  }
  fixedRoute.stop()
  graphicLayer.removeGraphic(fixedRoute, true)
  // 开始漫游
}
