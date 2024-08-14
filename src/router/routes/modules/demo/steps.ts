import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';
import { RoleEnum } from '@/enums/roleEnum';
const steps: AppRouteModule = {
  path: '/steps',
  name: 'StepsDemo',
  component: LAYOUT,
  redirect: '/steps/index',
  meta: {
    orderNo: 90000,
    hideChildrenInMenu: true,
    icon: 'whh:paintroll',
    title: t('routes.demo.steps.page'),
    roles: [RoleEnum.TEST],
  },
  children: [
    {
      path: 'index',
      name: 'StepsDemoPage',
      component: () => import('@/views/demo/steps/index.vue'),
      meta: {
        title: t('routes.demo.steps.page'),
        icon: 'whh:paintroll',
        hideMenu: true,
      },
    },
  ],
};

export default steps;
