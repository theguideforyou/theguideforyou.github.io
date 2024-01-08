import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug/',
    component: ComponentCreator('/__docusaurus/debug/', '781'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config/',
    component: ComponentCreator('/__docusaurus/debug/config/', '603'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content/',
    component: ComponentCreator('/__docusaurus/debug/content/', '15a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData/',
    component: ComponentCreator('/__docusaurus/debug/globalData/', '4af'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata/',
    component: ComponentCreator('/__docusaurus/debug/metadata/', '6df'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry/',
    component: ComponentCreator('/__docusaurus/debug/registry/', '3c1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes/',
    component: ComponentCreator('/__docusaurus/debug/routes/', 'afc'),
    exact: true
  },
  {
    path: '/markdown-page/',
    component: ComponentCreator('/markdown-page/', '7ea'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '661'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '7ca'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', 'da7'),
            routes: [
              {
                path: '/docs/iniciando/por-que-programar-bot/',
                component: ComponentCreator('/docs/iniciando/por-que-programar-bot/', '7c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/iniciando/qual-linguagem-escolher/',
                component: ComponentCreator('/docs/iniciando/qual-linguagem-escolher/', '553'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introducao/contribuidor/',
                component: ComponentCreator('/docs/introducao/contribuidor/', 'bfe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introducao/sobre-nos/',
                component: ComponentCreator('/docs/introducao/sobre-nos/', 'ba6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/linguagens/',
                component: ComponentCreator('/docs/linguagens/', 'd51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/linguagens/javascript/',
                component: ComponentCreator('/docs/linguagens/javascript/', '631'),
                exact: true,
                sidebar: "javascriptSidebar"
              },
              {
                path: '/docs/linguagens/python/',
                component: ComponentCreator('/docs/linguagens/python/', 'b38'),
                exact: true,
                sidebar: "pythonSidebar"
              },
              {
                path: '/docs/linguagens/python/configuracao-inicial/',
                component: ComponentCreator('/docs/linguagens/python/configuracao-inicial/', '9e2'),
                exact: true,
                sidebar: "pythonSidebar"
              },
              {
                path: '/docs/linguagens/python/definindo-client/',
                component: ComponentCreator('/docs/linguagens/python/definindo-client/', '123'),
                exact: true,
                sidebar: "pythonSidebar"
              },
              {
                path: '/docs/linguagens/python/definindo-o-bot/',
                component: ComponentCreator('/docs/linguagens/python/definindo-o-bot/', '13a'),
                exact: true,
                sidebar: "pythonSidebar"
              },
              {
                path: '/docs/linguagens/python/estruturando-o-projeto/',
                component: ComponentCreator('/docs/linguagens/python/estruturando-o-projeto/', '017'),
                exact: true,
                sidebar: "pythonSidebar"
              },
              {
                path: '/docs/linguagens/python/utilizando-eventos/',
                component: ComponentCreator('/docs/linguagens/python/utilizando-eventos/', 'e3e'),
                exact: true,
                sidebar: "pythonSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '714'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
