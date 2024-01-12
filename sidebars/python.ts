import type { SidebarItemConfig } from '@docusaurus/plugin-content-docs';

export const pythonSidebarItems: SidebarItemConfig[] = [
  {
    type: 'category',
    collapsed: true,
    label: 'Primeiros passos',
    items: [
      'linguagens/python/index',
      'linguagens/python/estruturando-o-projeto',
      'linguagens/python/configuracoes-iniciais'
    ]
  },
  {
    type: 'category',
    collapsed: true,
    label: 'Construindo o bot',
    items: [
      'linguagens/python/definindo-o-bot',
      'linguagens/python/utilizando-eventos',
    ]
  },
]