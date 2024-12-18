---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: '清水哥',
    title: '铭文与符文大师',
    links: [
      { icon: 'youtube', link: '' },
      { icon: 'twitter', link: 'https://twitter.com/chenshuiqing1' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: '日拱一卒-王小楼',
    title: '教程非常详细',
    links: [
      { icon: 'youtube', link: '...' },
      { icon: 'twitter', link: 'https://twitter.com/wang xiaolou' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'P总财富圈',
    title: '撸毛界知名人物',
    links: [
      { icon: 'youtube', link: '...' },
      { icon: 'twitter', link: '...' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: '王老师',
    title: '33DA0联创人',
    links: [
      { icon: 'youtube', link: '...' },
      { icon: 'twitter', link: 'https://twitter.com/@wsdxbz1i' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: '科学家旺仔',
    title: '脚本解放双手',
    links: [
      { icon: 'youtube', link: '...' },
      { icon: 'twitter', link: 'https://twitter.com/howbuybtc' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'NFT先锋队',
    title: '空投/NFT/链上等',
    links: [
      { icon: 'youtube', link: '....' },
      { icon: 'twitter', link: 'https://twitter.com/yleansmith001 ' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      目前已收录的KOL(35位)
    </template>
    <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    size="small"
    :members="members"
  />
</VPTeamPage>