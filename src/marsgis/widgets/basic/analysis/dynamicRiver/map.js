import * as mars3d from "mars3d"

export let map // mars3d.Map三维地图对象
export let graphicLayer // 图层

/**
 * 初始化地图业务，生命周期钩子函数（必须）
 * 框架在地图初始化完成后自动调用该函数
 * @param {mars3d.Map} mapInstance 地图对象
 * @returns {void} 无
 */

export function onMounted(mapInstance) {
  map = mapInstance // 记录map
  // 创建矢量数据图层
  graphicLayer = new mars3d.layer.GraphicLayer()
  map.addLayer(graphicLayer)

  // 在layer上绑定监听事件
  graphicLayer.on(mars3d.EventType.click, function (event) {
    console.log("监听layer，单击了矢量对象", event)
  })

  bindLayerPopup() // 在图层上绑定popup,对所有加到这个图层的矢量数据都生效
  bindLayerContextMenu() // 在图层绑定右键菜单,对所有加到这个图层的矢量数据都生效

  // 加一些演示数据
  // addDemoGraphic1()
}

/**
 * 释放当前地图业务的生命周期函数
 * @returns {void} 无
 */
export function onUnmounted() {
  map = null
  clear()
}

let dynamicRiver
const url = `data/河流水面.json`
// const url = `config/中心线带高程点.json`

// 立体围墙扩散效果, 面状
export function addDemoGraphic1() {
  mars3d.Util.fetchJson({ url: url }).then((result) => {
    let lines = []
    result.features.forEach((element) => {
      const h = element.attributes.RASTERVALU
      const x = element.geometry.x
      const y = element.geometry.y
      lines.push([x, y, h])
    })

    dynamicRiver = new mars3d.graphic.DynamicRiver({
      positions: lines,
      style: {
        image: "./img/textures/poly-rivers.png",
        width: 35,
        speed: 10,
        height: 60
      }
    })

    graphicLayer.addGraphic(dynamicRiver)
  })
}

let riverTimeout = null
let stop = false
export function addDemoGraphic2() {
  stop = false
  graphicLayer.clear()
  graphicLayer.enabledEvent = false
  mars3d.Util.fetchJson({ url: url }).then((result) => {
    const lines = []
    result.features.forEach((element) => {
      const h = element.attributes.RASTERVALU
      const x = element.geometry.x
      const y = element.geometry.y
      lines.push([x, y, h])
    })
    // 分割 lines 数组为 100 份
    const chunkSize = Math.ceil(lines.length / 50)
    const lineChunks = []
    for (let i = 0; i < lines.length; i += chunkSize) {
      lineChunks.push(lines.slice(i, i + chunkSize))
    }

    // 将 lines 数据按每三个为一份进行分割
    // const chunkSize = 3
    // const lineChunks = []
    // for (let i = 0; i < lines.length; i += chunkSize) {
    //   lineChunks.push(lines.slice(i, i + chunkSize))
    // }

    let index = 0
    const rivers = [] // 存储每个动态河流对象
    function loadNextChunk() {
      if (stop) {
        return
      }
      if (index >= lineChunks.length) return
      const chunk = lineChunks[index]
      // const width = 2 * Math.pow(1.119, index) // 从2逐渐增加到接近500
      // const width = 3 + 497 * Math.pow(index / 99, 3) // 从3加速到500
      const width = 5 + 600 * Math.sin((index / 50) * (Math.PI / 2)) // 从3加速到500
      const offsetHeight = 2 + 10 * Math.sin((index / 50) * (Math.PI / 2)) // 从0递增到10，缓和变化
      // const maxOffsetHeight = offsetHeight + 20 //
      console.log(`加载下一块:${index},width:${width},offsetHeight${offsetHeight}`)

      const dynamicRiver = new mars3d.graphic.DynamicRiver({
        positions: chunk,
        style: {
          image: "./img/textures/poly-rivers.png",
          width: width,
          speed: 10,
          height: offsetHeight
        }
        // flyTo: index === 0 // 仅在第一次加载时飞到位置
      })

      graphicLayer.addGraphic(dynamicRiver)
      // rivers.push({ river: dynamicRiver, maxOffsetHeight: maxOffsetHeight, currentOffsetHeight: offsetHeight })
      index++

      addSlowHeight(dynamicRiver, offsetHeight, 120)

      // 设置延迟加载下一块
      riverTimeout = setTimeout(loadNextChunk, 500) // 每100毫秒加载下一块，可以根据需要调整时间间隔
    }

    function updateOffsetHeight() {
      rivers.forEach((riverData) => {
        if (riverData.currentOffsetHeight < riverData.maxOffsetHeight) {
          riverData.river.currentOffsetHeight += 1
          // riverData.river.height = riverData.river.currentOffsetHeight
          addSlowHeight(riverData.river, riverData.maxOffsetHeight, 50)
        }
      })
    }

    // 开始加载第一个块
    loadNextChunk()

    // 每秒更新已加载块的 offsetHeight
    // updateOffsetHeight()
  })
}

let colorRamp
export function addDemoGraphic3() {
  colorRamp = new mars3d.ColorRamp({
    steps: [0, 30],
    colors: ["rgb(33, 113, 181)", "rgb(8, 48, 107)"]
  })
  graphicLayer.clear()
  graphicLayer.enabledEvent = false
  mars3d.Util.fetchJson({ url: url }).then(async (result) => {
    const lines = []
    result.features.forEach((element) => {
      const h = element.attributes.RASTERVALU
      const x = element.geometry.x
      const y = element.geometry.y
      lines.push([x, y, h])
    })
    const chunkSize = 3
    const lineChunks = []
    for (let i = 0; i < lines.length; i += chunkSize) {
      lineChunks.push(lines.slice(i, i + chunkSize))
    }

    let index = 0
    const rivers = [] // 存储每个动态河流对象
    let instances = []
    function loadNextChunk() {
      lineChunks.forEach((lineChunk) => {
        // 计算每组的平均高度
        const averageHeight = lineChunk.reduce((acc, val) => acc + val[2], 0) / lineChunk.length

        instances.push({
          positions: lineChunk,
          style: {
            color: colorRamp.getColor(averageHeight)
          },
          attr: { depth: averageHeight }
        })
      })
    }
    loadNextChunk()
    console.log("开始渲染")
    const floods = []
    const graphic = new mars3d.graphic.PolygonCombine({
      instances: instances, // 高亮时的样式
      popup: `深度:{depth}米`
    })

    graphicLayer.addGraphic(graphic)

    await graphic.readyPromise

    // 避免闪烁 + 占用内存 综合考虑，保留过渡的graphic
    if (floods.length > 3) {
      const a = floods.shift()
      a.remove()
    }
    floods.push(graphic)

    function updateOffsetHeight() {
      rivers.forEach((riverData) => {
        if (riverData.currentOffsetHeight < riverData.maxOffsetHeight) {
          riverData.river.currentOffsetHeight += 1
          // riverData.river.height = riverData.river.currentOffsetHeight
          addSlowHeight(riverData.river, riverData.maxOffsetHeight, 50)
        }
      })
    }
  })
}

export function addRiver() {}

// 生成演示数据(测试数据量)
export function addRandomGraphicByCount(count) {
  graphicLayer.clear()
  graphicLayer.enabledEvent = false // 关闭事件，大数据addGraphic时影响加载时间

  const bbox = [116.984788, 31.625909, 117.484068, 32.021504]
  const result = mars3d.PolyUtil.getGridPoints(bbox, count, 30)
  console.log("生成的测试网格坐标", result)

  for (let j = 0; j < result.points.length; ++j) {
    const position = result.points[j]
    const index = j + 1

    const pt1 = mars3d.PointUtil.getPositionByDirectionAndLen(position, 225, result.radius)
    const pt2 = mars3d.PointUtil.getPositionByDirectionAndLen(position, 315, result.radius)

    const graphic = new mars3d.graphic.DynamicRiver({
      positions: [pt1, position, pt2],
      style: {
        image: "./img/textures/poly-rivers.png",
        width: 280,
        height: 30,
        speed: 10
      },
      attr: { index }
    })
    graphicLayer.addGraphic(graphic)
  }

  graphicLayer.enabledEvent = true // 恢复事件
  return result.points.length
}

// 开始绘制
export function startDrawGraphic() {
  graphicLayer.startDraw({
    type: "dynamicRiver",
    style: {
      image: "./img/textures/poly-rivers.png",
      width: 280,
      height: 30,
      speed: 10
    }
  })
}

export function getGraphic(graphicId) {
  dynamicRiver = graphicLayer.getGraphicById(graphicId)
  return dynamicRiver
}

// 宽发生改变
export function widthChange(value) {
  if (dynamicRiver) {
    dynamicRiver.width = value
  }
}

// 高发生改变
export function heightChange(value) {
  if (dynamicRiver) {
    dynamicRiver.height = value
  }
}

// 速度发生改变
export function speedChange(value) {
  if (dynamicRiver) {
    dynamicRiver.speed = value
  }
}

let onOff = true
// 升高30米动画
export function addSlowHeight(layer, height, time) {
  if (!layer) {
    return
  }
  if (!onOff) {
    globalMsg("上次操作未完成")
    return
  }
  layer.setOffsetHeight(height, time) // 5秒内抬高30米
  // throttle()
}
export function addHeight() {
  if (!dynamicRiver) {
    return
  }
  if (!onOff) {
    globalMsg("上次操作未完成")
    return
  }
  dynamicRiver.setOffsetHeight(30, 5) // 5秒内抬高30米
  throttle()
}

// 下降30米动画
export function lowerHeight() {
  if (!dynamicRiver) {
    return
  }
  if (!onOff) {
    globalMsg("上次操作未完成")
    return
  }
  dynamicRiver.setOffsetHeight(-30, 5) // 5秒内降低30米
  throttle()
}

function throttle() {
  setTimeout(() => {
    onOff = true
  }, 2000)

  onOff = false
}

// 清除
export function clear() {
  graphicLayer.clear()
  riverTimeout = null
  stop = true
}

// 在图层绑定Popup弹窗
export function bindLayerPopup() {
  graphicLayer.bindPopup(function (event) {
    const attr = event.graphic.attr || {}
    attr["类型"] = event.graphic.type
    attr["来源"] = "我是layer上绑定的Popup"
    attr["备注"] = "我支持鼠标交互"

    return mars3d.Util.getTemplateHtml({ title: "矢量图层", template: "all", attr })
  })
}

// 绑定右键菜单
export function bindLayerContextMenu() {
  graphicLayer.bindContextMenu([
    {
      text: "删除对象",
      icon: "fa fa-trash-o",
      show: (event) => {
        const graphic = event.graphic
        if (!graphic || graphic.isDestroy) {
          return false
        } else {
          return true
        }
      },
      callback: (e) => {
        const graphic = e.graphic
        if (!graphic) {
          return
        }
        const parent = graphic.parent // 右击是编辑点时
        graphicLayer.removeGraphic(graphic)
        if (parent) {
          graphicLayer.removeGraphic(parent)
        }
      }
    },
    {
      text: "抬深",
      show: (event) => {
        const graphic = event.graphic
        if (!graphic || graphic.isDestroy) {
          return false
        } else {
          return true
        }
      },
      callback: (e) => {
        // if (!dynamicRiver) {
        //   return
        // }
        // if (!onOff) {
        //   globalMsg("上次操作未完成")
        //   return
        // }
        // dynamicRiver.setOffsetHeight(30, 5) // 5秒内抬高30米
        // throttle()
        addSlowHeight(1, 0)
      }
    }
  ])
}
