/**
 * index页面的widget配置
 * @copyright 火星科技 mars3d.cn
 * @author 火星渣渣灰 2022-02-19
 */
import { defineAsyncComponent, markRaw } from "vue"
import { WidgetState } from "@mars/common/store/widget"
import { StoreOptions } from "vuex"

const store: StoreOptions<WidgetState> = {
  state: {
    widgets: [
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/graphic-editor/index.vue"))),
        name: "graphic-editor"
        // meta: {
        //   props: {
        //     position: {
        //       left: 50,
        //       top: 10,
        //       bottom: 50
        //     }
        //   }
        // }
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/query-poi/index.vue"))),
        name: "query-poi",
        autoDisable: true
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/toolbar/index.vue"))),
        name: "toolbar",
        autoDisable: true
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/manage-basemap/index.vue"))),
        name: "manage-basemap",
        group: "manage"
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/manage-layers/index.vue"))),
        name: "manage-layers",
        group: "manage",
        disableOther: ["roamLine"]
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/manage-layers/layer-tree.vue"))),
        name: "layer-tree"
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/manage-layers/layer-picture-heatmap.vue"))),
        name: "layer-picture-heatmap"
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/manage-layers/layer-picture-guihua.vue"))),
        name: "layer-picture-guihua"
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/location-point/index.vue"))),
        name: "location-point",
        group: "tools"
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/expImage/index.vue"))),
        name: "expImage",
        group: "tools"
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/bookmark/index.vue"))),
        name: "bookmark",
        group: "tools"
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/draw/index.vue"))),
        name: "draw",
        group: "tools"
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/mapSplit/index.vue"))),
        name: "mapSplit",
        group: "tools"
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/compare/index.vue"))),
        name: "compare",
        group: "tools"
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/analysis/visibility/index.vue"))),
        name: "visibility",
        group: "analysis"
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/analysis/floodByMaterial/index.vue"))),
        name: "floodByMaterial",
        group: "analysis"
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/analysis/dynamicRiver/index.vue"))),
        name: "dynamicRiver",
        group: "analysis"
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/analysis/measure/index.vue"))),
        name: "measure",
        group: "analysis"
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/analysis/measure-volume/index.vue"))),
        name: "measure-volume",
        group: "analysis"
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/analysis/sightline-terrain/index.vue"))),
        name: "sightline-terrain",
        group: "analysis"
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/analysis/sightline/index.vue"))),
        name: "sightline",
        group: "analysis"
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/analysis/shadows/index.vue"))),
        name: "shadows",
        group: "analysis"
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/analysis/terrainClip/index.vue"))),
        name: "terrainClip",
        group: "analysis"
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/analysis/underground/index.vue"))),
        name: "underground",
        group: "analysis"
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/analysis/slope/index.vue"))),
        name: "slope",
        group: "analysis"
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/analysis/modelPlanClip/index.vue"))),
        name: "modelPlanClip",
        group: "analysis"
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/analysis/tilesetFlat/index.vue"))),
        name: "tilesetFlat",
        group: "analysis"
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/analysis/limitHeight/index.vue"))),
        name: "limitHeight",
        group: "analysis"
      }
    ],
    openAtStart: ["query-poi", "toolbar"]
  }
}

export default store
