import { CVData } from "../types";

export const sampleData: CVData = {
  name: "林亮怡 Chloe",
  title: "前端工程師",
  avatar: "/avatar.jpg",
  contact: {
    email: "snsn550@gmail.com",
    phone: "0930702456",
    website: "https://blog-omega-gilt-59.vercel.app/",
    github: "https://github.com/haru5386/haru5386",
    linkedin: "https://www.linkedin.com/in/liang-yi-lin/"
  },
  location: {
    city: "新北",
    country: "台灣"
  },
  profile: "具備 3 年前端開發經驗，擅長使用 Vue、Nuxt 與 TypeScript 打造流暢且具互動性的 RWD 網頁。重視使用者體驗，善於將設計轉化為高效實作，提升產品可用性與使用感。樂於鑽研新技術，具備良好團隊協作與跨部門溝通能力，能快速融入團隊並貢獻產出。",
  skills: [
    {
      category: "前端技術",
      items: [
        "Vue3 & Nuxt",
        "Shadcn",
        "TypeScript",
        "Tailwind CSS",
        "React & Next.js",
      ]
    },
    {
      category: "開發工具",
      items: [
        "Git & GitHub",
        "VS Code",
        "Docker",
        "Vitest",
        "Vite"
      ]
    }
  ],
  workExperience: [
    {
      company: "電碼科技有限公司",
      position: "前端工程師",
      period: "2024 - 2025",
      description: [{
        name: '公司入口網站（Vue 3 + Nuxt 3 + UnoCSS）',
        items: ['負責官網主要功能模組設計與開發，從零建立完整技術架構與組件規範',
          '實作 動態 OG Image 產生機制，提升社群分享點擊率（Lighthouse SEO 分數提升 +30 分）',
          '開發 加密與法幣充值功能，串接錢包與金流 API，保障交易流程安全',
          '整合 Google / Telegram OAuth 第三方登入，簡化用戶註冊流程',
          '使用 Nuxt Image 最佳化圖片載入，提升首屏速度與 RWD 響應性',
          '實作 Code Splitting / Lazy Loading，減少首頁 JS 大小約 40%，提升載入效能']
      },{
        name: '後台管理系統（Vue 3 + UnoCSS + Ant Design Vue）',
        items: ['從零搭建公司內部管理系統，涵蓋代理商管理、營運模組、權限管理等',
          '與設計師共同制定 UI 組件風格，建立內部組件庫提升開發一致性',
          '實作富文本編輯器（Tiptap），支援圖片上傳、樣式控制、內嵌連結等功能',
          '使用 KeepAlive 建立多標籤頁功能，支援重新整理、關閉、保留頁面狀態等操作',
        ]
      },
      ]
    },
    {
      company: "王牌數位創意股份有限公司",
      position: "前端工程師",
      period: "2022 - 2024",
      description: [
        {
          name: '交易所網站（Vue 2 → Vue 3 + Nuxt 3 + TypeScript + Tailwind）',
          items: ['主導 Vue 2 → Vue 3 升級與重構，導入 Composition API 與 TypeScript，提升可維護性與類型安全',
            '串接 WebSocket、TradingView API，實作即時現貨交易與 K 線圖功能',
            '開發 C2C 場外交易模組，支援訂單匹配、支付流程、訂單狀態即時更新',
            '串接第三方 KYC 系統，優化註冊與驗證流程，提升轉換率與通過率',
            '自建 UI 元件庫（Vue 3 + Tailwind + Element Plus），加速開發效率並統一介面風格',
            '強化登入與註冊流程的使用者體驗與安全性，減少註冊放棄率',
            '實作 i18n 多語系機制，整合 Google Sheet 實現即時多語更新']
        },{
          name: 'SEO 與數據追蹤',
          items: ['完整導入 SEO 最佳化策略（sitemap、robots.txt、JSON-LD、PWA 等）',
            'Lighthouse SEO 分數提升 30+ 分，顯著提高搜尋能見度與自然流量',
            '整合 GA4 與 GTM，建構轉換追蹤與事件分析模型，協助產品迭代',]
        },{
          name: 'NFT 官網重構（SCSS + Element Plus）',
          items: ['重構 RWD 響應式切版邏輯，優化多裝置體驗與整體設計一致性',
            '配合產品改版，重新調整視覺動線與元件階層',]
        }
      ]
    }
  ],
  education: [
    {
      institution: "國立臺北科技大學",
      degree: "創新設計研究所",
      period: "2017 - 2019",
      description: "工業設計、服務設計、使用者經驗"
    }
  ],
  languages: [
    {
      name: "中文",
      level: "母語"
    },
    {
      name: "英語",
      level: "多益 860"
    },
    {
      name: "日語",
      level: "JLPT N2"
    }
  ],
  portfolio: [
    {
      title: "电商平台",
      description: "一个基于Next.js的全栈电商平台，包含用户认证、商品管理、购物车等功能。",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
      link: "https://github.com/zhangsan/ecommerce"
    },
    {
      title: "任务管理应用",
      description: "使用React和Firebase构建的任务管理应用，支持实时协作和离线功能。",
      technologies: ["React", "Firebase", "Material UI"],
      link: "https://github.com/zhangsan/task-manager"
    }
  ]
}; 