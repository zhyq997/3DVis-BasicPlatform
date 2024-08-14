import type { AppRouteModule } from '@/router/types';

import { getParentLayout, LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';
import { RoleEnum } from '@/enums/roleEnum';

const charts: AppRouteModule = {
  path: '/charts',
  name: 'Charts',
  component: LAYOUT,
  redirect: '/charts/echarts/map',
  meta: {
    orderNo: 500,
    icon: 'ion:bar-chart-outline',
    title: t('routes.demo.charts.charts'),
  },
  children: [
    {
      path: 'marsgis',
      name: 'Marsgis',
      meta: {
        title: '三维地图',
      },
      component: () => import('/@/marsgis/views/index.vue'),
    },
    {
      path: 'baiduMap',
      name: 'BaiduMap',
      meta: {
        title: t('routes.demo.charts.baiduMap'),
    roles: [RoleEnum.TEST],
  },
      component: () => import('@/views/demo/charts/map/Baidu.vue'),
    },
    {
      path: 'aMap',
      name: 'AMap',
      meta: {
        title: t('routes.demo.charts.aMap'),
    roles: [RoleEnum.TEST],
  },
      component: () => import('@/views/demo/charts/map/Gaode.vue'),
    },
    {
      path: 'googleMap',
      name: 'GoogleMap',
      meta: {
        title: t('routes.demo.charts.googleMap'),
    roles: [RoleEnum.TEST],
  },
      component: () => import('@/views/demo/charts/map/Google.vue'),
    },

    {
      path: 'echarts',
      name: 'Echarts',
      component: getParentLayout('Echarts'),
      meta: {
        title: 'Echarts',
    roles: [RoleEnum.TEST],
  },
      redirect: '/charts/echarts/map',
      children: [
        {
          path: 'map',
          name: 'Map',
          component: () => import('@/views/demo/charts/Map.vue'),
          meta: {
            title: t('routes.demo.charts.map'),
            roles: [RoleEnum.TEST],
          },
        },
        {
          path: 'line',
          name: 'Line',
          component: () => import('@/views/demo/charts/Line.vue'),
          meta: {
            title: t('routes.demo.charts.line'),
            roles: [RoleEnum.TEST],
          },
        },
        {
          path: 'pie',
          name: 'Pie',
          component: () => import('@/views/demo/charts/Pie.vue'),
          meta: {
            title: t('routes.demo.charts.pie'),
            roles: [RoleEnum.TEST],
          },
        },
      ],
    },
  ],
};

export default charts;
