import { CVData } from "../../types";

export const sampleData: CVData = {
  name: "张三",
  title: "高级前端工程师",
  avatar: "/avatar.jpg",
  contact: {
    email: "zhangsan@example.com",
    phone: "+86 123 4567 8901",
    website: "https://zhangsan.dev",
    github: "github.com/zhangsan",
    linkedin: "linkedin.com/in/zhangsan"
  },
  location: {
    city: "北京",
    country: "中国"
  },
  profile: "拥有5年以上的前端开发经验，专注于构建现代化的Web应用。擅长React、TypeScript和Node.js，对性能优化和用户体验有深入理解。热衷于学习新技术，善于团队协作，具有良好的沟通能力。",
  skills: [
    {
      category: "前端技术",
      items: [
        "React & Next.js",
        "TypeScript",
        "HTML5 & CSS3",
        "Tailwind CSS",
        "Redux & Zustand"
      ]
    },
    {
      category: "后端技术",
      items: [
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "RESTful API"
      ]
    },
    {
      category: "开发工具",
      items: [
        "Git & GitHub",
        "VS Code",
        "Docker",
        "Jest & React Testing Library",
        "Webpack & Vite"
      ]
    }
  ],
  workExperience: [
    {
      company: "科技公司A",
      position: "高级前端工程师",
      period: "2020 - 至今",
      description: [
        "负责公司核心产品的前端架构设计和开发",
        "优化应用性能，提升用户体验",
        "引入TypeScript和自动化测试，提高代码质量",
        "指导团队成员，推动技术革新"
      ]
    },
    {
      company: "互联网公司B",
      position: "前端工程师",
      period: "2018 - 2020",
      description: [
        "开发并维护多个React应用",
        "实现响应式设计和移动端适配",
        "优化页面加载速度和性能",
        "参与代码审查和技术分享"
      ]
    }
  ],
  education: [
    {
      institution: "某大学",
      degree: "计算机科学与技术 学士",
      period: "2014 - 2018",
      description: "主修课程：数据结构、算法、计算机网络、数据库系统"
    }
  ],
  languages: [
    {
      name: "中文",
      level: "母语"
    },
    {
      name: "英语",
      level: "流利"
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