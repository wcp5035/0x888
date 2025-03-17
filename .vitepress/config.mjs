import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
// base: "/docs-demo/" 这个是用来配置单域名多站点的情况的,没这个需求就不用配置
export default defineConfig({
  title: "XMDOG",
  description: "haha",
  srcDir: "docs",
  lastUpdated: true,
  cleanUrls: true,
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/logo.png', width: 24, height: 24 },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'full',
        hourCycle: 'h24'
      }
    },

    // 文章翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
  //启用深色模式
  appearance: 'dark',
    // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',
// 开启图片懒加载
image: {
  lazyLoading: true
},


    // 移动端 - menu
    sidebarMenuLabel: '目录',
    
    nav: [
      { text: '课件学习', link: '/学习资料/币圈经典.md' },
      { text: '订阅计划', link: '/listhome/订阅计划.md' },
      { text: '最新动态', link: '/CHANGELOG.md' },
      { text: '常见问题', link: '/listhome/常见问题解答.md' },
    ],

    sidebar: [
      {
        text: '泄密狗',
        collapsed:true,
        items: [
          { text: '开始探索1', link: '/listhome/start.md'},
          { text: '订阅计划', link: '/listhome/订阅计划' },
          { text: '常见问题', link: '/listhome/常见问题解答' },
          { text: '最新动态', link: '/CHANGELOG.md' },
          { text: '软件定制', link: '/listhome/软件定制.md' } 
        ]
      },{
        text: '频道结构',
        collapsed:true,
        items: [
          { text: '中文交易', link: '/markdown-examples'},
          { text: '宏观分析', link: '/markdown-examples'},
          { text: '空投撸毛', link: '/markdown-examples'},
          { text: '链上全员', link: '/markdown-examples'},
          { text: '实盘交易', link: '/markdown-examples'},
          { text: '数据监控', link: '/markdown-examples'},
          { text: '加密新闻', link: '/markdown-examples'},
          { text: '公告提醒', link: '/markdown-examples'},
          { text: '国外交易', link: '/markdown-examples'},
          { text: '智能总结', link: '/markdown-examples'},
          { text: '数据查询', link: '/api-examples' } 
        ]
      },{
        text: '高比返佣',
        collapsed:true,
        items: [
          { text: '交易返佣', link: '/返佣doc/返佣表单.md'},
          { text: '返佣查询', link: '/api-examples' },
          {
            text: 'KYC变更',
            collapsed:true,
            items: [
              { text: 'Bitget变更返佣', link: '/返佣doc/Bitget变更返佣.md' },
              { text: 'Bybit变更返佣', link: '/返佣doc/Bybit变更返佣.md' },
              { text: 'Gate变更返佣', link: '/返佣doc/Gate变更返佣.md' },
              { text: '币安变更返佣', link: '/返佣doc/币安变更返佣.md' }
            ]
          }
        ]
      },{
        text: '实用工具',
        collapsed:true,
        items: [
          { text: '创建TG机器人', link: '/工具/tgbot.md'},
          { text: 'Clash安装使用', link: '/工具/Clash.md' }
        ]
      },{
        text: '成长导航',
        collapsed:true,
        items: [
          {
            text: '新手入门',
            collapsed:true,
            items: [
              { text: '交易所注册', link: '/新手入门/注册交易所.md' },
              { text: '买币、钱包、链上', link: '/新手入门/买币钱包链上.md' },
              { text: '币圈工具', link: '/新手入门/币圈工具.md' },
              { text: '链上土狗暴赚入门', link: '/新手入门/链上土狗.md' },
              { text: '电报隐私设置指南', link: '/新手入门/电报安全.md' }
            ]
          },
          { text: '什么是区块链', link: '/新手入门/什么是区块链.md' },
          { text: '区块链入门', link: '/新手入门/区块链入门.md' },
          { text: 'web3导航', link: 'https://mct.xyz/nav' },
          { text: '稳定币年化利息', link: '/新手入门/稳定币年化利息.md' },
          { text: '安全出金', link: '/新手入门/安全出金.md' },
          { text: '如何拥有一个低资费的境外手机号', link: '/新手入门/如何拥有一个低资费的境外手机号.md' }
        ]
      },{
        text: '学习资料',
        collapsed:true,
        items: [
          {
            text: '屯比特币',
            collapsed:true,
            items: [
              { text: '四年一个轮回，不光有世界杯，还有比特币', link: '/学习资料/gu-shi-yi' },
              { text: '上一轮熊市', link: '/学习资料/gu-shi-er' },
              { text: '牛市起点的故事', link: '/学习资料/gu-shi-san' },
              { text: '序章', link: '/学习资料/xu-zhang' },
              { text: '第一章 比特币与理想主义', link: '/学习资料/di-yi-zhang' },
              { text: '第二章 下车太早只因愿景太小', link: '/学习资料/di-er-zhang' },
              { text: '第三章 囤比特币：你离财富自由还有多远？', link: '/学习资料/di-san-zhang' },
              { text: '第四章 囤比特币：冲动、孤独、无聊与矛盾', link: '/学习资料/di-si-zhang' },
              { text: '第五章 囤比特币：手握私钥的快感', link: '/学习资料/di-wu-zhang' },
              { text: '第六章 囤比特币：如何管理私钥？', link: '/学习资料/di-liu-zhang' },
              { text: '第七章 囤比特币：基本价格模型', link: '/学习资料/di-qi-zhang' },
              { text: '第八章 囤比特币：寻找合适的购买时机', link: '/学习资料/di-ba-zhang' },
              { text: '第九章 囤比特币：唯有比特币', link: '/学习资料/di-jiu-zhang' },
              { text: '第十章 囤比特币：不要跟着感觉走', link: '/学习资料/di-shi-zhang' },
              { text: '第十一章 囤比特币：币本位思维', link: '/学习资料/di-shi-yi-zhang' },
              { text: '第十二章 囤比特币：心中无币', link: '/学习资料/di-shi-er-zhang' },
              { text: '第十三章 囤比特币：打造强节点', link: '/学习资料/di-shi-san-zhang' },
              { text: '第十四章 囤比特币：运行全节点', link: '/学习资料/di-shi-si-zhang' },
              { text: '第十五章 囤比特币：ahr999 指数', link: '/学习资料/di-shi-wu-zhang' },
              { text: '终章 不忘初心', link: '/学习资料/zhong-zhang' }

            ]
          },
          { text: '币圈经典', link: '/学习资料/币圈经典.md'},
          { text: '币圈圣经', link: '/学习资料/币圈圣经.md' },
          { text: '阅读书籍', link: '/学习资料/阅读书籍.md' },
          { text: '视频课程', link: '/学习资料/视频课程.md' },
          { text: '财经课程', link: '/学习资料/财经课程' },
          { text: '副业学习', link: '/学习资料/副业学习.md' },
          { text: '实用课程', link: '/学习资料/实用课程.md' },
          { text: '公众号付费', link: '/学习资料/公众号付费.md' },
          { text: '提高认知', link: '/学习资料/提高认知.md' },
          { text: '知乎盐选付费', link: '/学习资料/知乎盐选付费.md' },
          { text: '学家实操千倍收益', link: '/学习资料/千倍收益.md' } 
        ]
      },{
        text: 'KOL收录',
        collapsed:true,
        items: [
          { text: '#策略推送', link: '/KOL收录清单/策略推送.md'},
          { text: '#技术分析', link: '/KOL收录清单/技术分析.md' },
          { text: '#空投博主', link: '/KOL收录清单/空投博主.md' },
          { text: '#一级市场', link: '/KOL收录清单/一级市场.md' }
          
        ]
      }
    ],

    socialLinks: [
      { icon: 'x', link: 'https://x.com/a8bot' },
      { icon: 'telegram', link: 'https://t.me/bjs66' },
      {
        icon: {
          svg: '<svg t="1734380387891" class="icon" viewBox="0 0 1138 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4447" width="200" height="200"><path d="M914.432 518.144q27.648 21.504 38.912 51.712t9.216 62.976-14.336 65.536-31.744 59.392q-34.816 48.128-78.848 81.92t-91.136 56.32-94.72 35.328-89.6 18.944-75.264 7.68-51.712 1.536-49.152-2.56-68.096-10.24-78.336-21.504-79.872-36.352-74.24-55.296-59.904-78.848q-16.384-29.696-22.016-63.488t-5.632-86.016q0-22.528 7.68-51.2t27.136-63.488 53.248-75.776 86.016-90.112q51.2-48.128 105.984-85.504t117.248-57.856q28.672-10.24 63.488-11.264t57.344 11.264q10.24 11.264 19.456 23.04t12.288 29.184q3.072 14.336 0.512 27.648t-5.632 26.624-5.12 25.6 2.048 22.528q17.408 2.048 33.792-1.536t31.744-9.216 31.232-11.776 33.28-9.216q27.648-5.12 54.784-4.608t49.152 7.68 36.352 22.016 17.408 38.4q2.048 14.336-2.048 26.624t-8.704 23.04-7.168 22.016 1.536 23.552q3.072 7.168 14.848 13.312t27.136 12.288 32.256 13.312 29.184 16.384zM656.384 836.608q26.624-16.384 53.76-45.056t44.032-64 18.944-75.776-20.48-81.408q-19.456-33.792-47.616-57.344t-62.976-37.376-74.24-19.968-80.384-6.144q-78.848 0-139.776 16.384t-105.472 43.008-72.192 60.416-38.912 68.608q-11.264 33.792-6.656 67.072t20.992 62.976 42.496 53.248 57.856 37.888q58.368 25.6 119.296 32.256t116.224 0.512 100.864-21.504 74.24-33.792zM522.24 513.024q20.48 8.192 38.912 18.432t32.768 27.648q10.24 12.288 17.92 30.72t10.752 39.424 1.536 42.496-9.728 38.912q-8.192 18.432-19.968 37.376t-28.672 35.328-40.448 29.184-57.344 18.944q-61.44 11.264-117.76-11.264t-88.064-74.752q-12.288-39.936-13.312-70.656t16.384-66.56q13.312-27.648 40.448-51.712t62.464-38.912 75.264-17.408 78.848 12.8zM359.424 764.928q37.888 3.072 57.856-18.432t21.504-48.128-15.36-47.616-52.736-16.896q-27.648 3.072-43.008 23.552t-17.408 43.52 9.728 42.496 39.424 21.504zM778.24 6.144q74.752 0 139.776 19.968t113.664 57.856 76.288 92.16 27.648 122.88q0 33.792-16.384 50.688t-35.328 17.408-35.328-14.336-16.384-45.568q0-40.96-22.528-77.824t-59.392-64.512-84.48-43.52-96.768-15.872q-31.744 0-47.104-15.36t-14.336-34.304 18.944-34.304 51.712-15.36zM778.24 169.984q95.232 0 144.384 48.64t49.152 146.944q0 30.72-10.24 43.52t-22.528 11.264-22.528-14.848-10.24-35.84q0-60.416-34.816-96.256t-93.184-35.84q-19.456 0-28.672-10.752t-9.216-23.04 9.728-23.04 28.16-10.752z" p-id="4448"></path></svg>'
        },
        link: '...'},
    ],
    footer: {
      copyright:"Encrypted community@ 2025 泄密狗",
   },

      // 设置搜索框的样式
      search: {
        provider: "local",
        options: {
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              noResultsText: "无法找到相关结果",
              resetButtonTitle: "清除查询条件",
              footer: {
                selectText: "选择",
                navigateText: "切换",
              },
            },
          },
        },
      },
  }
})

