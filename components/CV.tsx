'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CVData } from "../types";
import { ChevronsRight, Mail, Phone, Globe, Github, Linkedin } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
interface CVProps {
  data: CVData;
}

export function CV({ data }: CVProps) {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 shadow-2xl rounded-xl relative cv-container">
      {/* Geometric Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-tr-[120px] -z-10"></div>
      <div className="absolute top-1/3 left-0 w-6 h-24 bg-secondary/30 -z-10"></div>
      <div className="absolute top-2/3 right-0 w-12 h-12 bg-primary/20 rounded-full -z-10"></div>
      
      {/* Header Section with Gradient Background */}
      <div className="relative mb-10 p-8 bg-gradient-to-r from-primary/5 to-secondary/10 rounded-2xl shadow-sm overflow-hidden group">
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/4 transform"></div>
        <div className="absolute bottom-0 left-20 w-20 h-20 bg-secondary/10 rounded-full translate-y-1/2 transform"></div>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
          <Avatar className="w-32 h-32 ring-4 ring-primary/20 shadow-xl transition-all duration-300 hover:ring-6 hover:ring-primary/40 group-hover:scale-105">
            <AvatarImage src={data.avatar} alt={data.name} className="object-cover" />
            <AvatarFallback className="text-2xl bg-gradient-to-br from-primary/80 to-primary/60 text-white">
              {data.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pb-1 transform transition-all duration-300 group-hover:scale-[1.02]">
              {data.name}
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300 mt-1 font-light tracking-wide">{data.title}</p>
            <div className="mt-3 text-gray-500 dark:text-gray-400 flex items-center justify-center md:justify-start gap-x-2">
              <span className="inline-block w-3 h-3 rounded-full bg-primary/60"></span>
              <p>{data.location.city}, {data.location.country}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 两列布局 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 左側欄 */}
        <div className="lg:col-span-1 space-y-6">
          {/* Contact Information */}
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800/95 relative group">
            <div className="absolute h-full w-1.5 bg-primary/60 left-0 top-0 transform origin-bottom transition-all duration-500 group-hover:h-full"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold flex items-center text-primary/90">
                <span className="bg-primary/10 p-2 rounded-full mr-2">
                  <Mail className="w-5 h-5 text-primary" />
                </span>
                聯繫方式
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2 group/item transition-transform duration-200 hover:translate-x-1">
                  <Mail className="w-4 h-4 text-primary/70" />
                  <a href={`mailto:${data.contact.email}`} className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                    {data.contact.email}
                  </a>
                </div>
                
                <div className="flex items-center gap-2 group/item transition-transform duration-200 hover:translate-x-1">
                  <Phone className="w-4 h-4 text-primary/70" />
                  <a href={`tel:${data.contact.phone}`} className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                    {data.contact.phone}
                  </a>
                </div>
                
                {data.contact.website && (
                  <div className="flex items-center gap-2 group/item transition-transform duration-200 hover:translate-x-1">
                    <Globe className="w-4 h-4 text-primary/70" />
                    <a href={data.contact.website} target="_blank" rel="noopener noreferrer" 
                       className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                      {data.contact.website.replace(/(^\w+:|^)\/\//, '')}
                    </a>
                  </div>
                )}
                
                {data.contact.github && (
                  <div className="flex items-center gap-2 group/item transition-transform duration-200 hover:translate-x-1">
                    <Github className="w-4 h-4 text-primary/70" />
                    <a href={data.contact.github} target="_blank" rel="noopener noreferrer" 
                       className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                      {data.contact.github.split('/').pop()}
                    </a>
                  </div>
                )}
                
                {data.contact.linkedin && (
                  <div className="flex items-center gap-2 group/item transition-transform duration-200 hover:translate-x-1">
                    <Linkedin className="w-4 h-4 text-primary/70" />
                    <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" 
                       className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                      LinkedIn
                    </a>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800/95 relative group">
            <div className="absolute h-full w-1.5 bg-secondary/60 left-0 top-0 transform origin-bottom transition-all duration-500 group-hover:h-full"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold flex items-center text-secondary/90">
                <span className="bg-secondary/10 p-2 rounded-full mr-2">
                  <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </span>
                技術技能
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.skills.map((skill, index) => (
                  <div key={index} className="p-3 rounded-lg bg-gradient-to-r from-secondary/5 to-transparent border border-secondary/10 hover:border-secondary/30 transition-all duration-200">
                    <h3 className="font-medium text-secondary mb-2 border-b border-secondary/20 pb-1">{skill.category}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {skill.items.map((item, i) => (
                        <span key={i} className="px-2 py-1 bg-white dark:bg-gray-700/60 text-sm rounded-md shadow-sm border border-secondary/10 hover:bg-secondary/10 hover:text-secondary transition-all duration-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800/95 relative group">
            <div className="absolute h-full w-1.5 bg-accent/60 left-0 top-0 transform origin-bottom transition-all duration-500 group-hover:h-full"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold flex items-center text-accent/90">
                <span className="bg-accent/10 p-2 rounded-lg mr-2">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </span>
                語言能力
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {data.languages.map((lang, index) => (
                  <div key={index} className="relative overflow-hidden">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{lang.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{lang.level}</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-accent/60 to-accent rounded-full transform origin-left transition-all duration-1000 ease-out group-hover:scale-x-105`}
                        style={{ 
                          width: getLevelPercentage(lang.level)
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 右側主要內容 */}
      <Tabs defaultValue="account" className="lg:col-span-2" >
      <TabsList className="grid w-full grid-cols-2 mb-2">
        <TabsTrigger value="account">經歷</TabsTrigger>
        <TabsTrigger value="project">專案成就</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className=" space-y-6">
          {/* Profile */}
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800/95 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[60px] -z-10"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold flex items-center">
                <span className="bg-primary/10 p-2 rounded-full mr-2">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                個人簡介
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px] first-letter:text-2xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left">{data.profile}</p>
            </CardContent>
          </Card>

          {/* Work Experience */}
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800/95 relative">
            <div className="absolute bottom-0 right-8 w-16 h-16 bg-secondary/5 rounded-tl-[40px] -z-10"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold flex items-center">
                <span className="bg-secondary/10 p-2 rounded-full mr-2">
                  <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                工作經歷
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative border-l-2 border-secondary/30 pl-8 py-2 space-y-8 ml-2">
                {data.workExperience.map((exp, index) => (
                  <div key={index} className="relative experience-item group">
                    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-secondary shadow-md"></div>
                    <div className="absolute -left-[33px] top-8 h-full w-0.5 bg-secondary/20 group-last:hidden"></div>
                    
                    <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden group-hover:translate-x-1">
                      <div className="absolute right-0 top-0 h-full w-1 bg-secondary transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></div>
                      
                      <h3 className="font-bold text-xl text-secondary">{exp.position}</h3>
                      <div className="flex items-center text-md text-gray-600 dark:text-gray-400 mt-1 space-x-2">
                        <span>{exp.company}</span>
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                        <span>{exp.period}</span>
                      </div>

                      {exp.description.map((desc,i)=>(
                        <div key={i} className="mt-2 flex gap-2 flex-col">
                          <h4 className="font-bold">{desc.name}</h4>
                          <ul className="flex flex-col gap-1 ml-1">
                          {desc.items.map((item,i)=>(
                            <li key={i} className="flex items-start space-x-2 text-gray-700 dark:text-gray-300 text-md font-500">
                            <ChevronsRight className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                            <span>{item}</span>
                            </li>
                          ))}
                          </ul>
                        </div>

                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800/95 relative">
            <div className="absolute top-1/4 right-0 w-12 h-12 bg-accent/5 rounded-l-full -z-10"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold flex items-center">
                <span className="bg-accent/10 p-2 rounded-full mr-2">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </span>
                教育背景
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.education.map((edu, index) => (
                  <div key={index} className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-accent/30 group relative overflow-hidden">
                    <div className="absolute right-0 top-0 h-full w-1 bg-accent transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h3 className="font-bold text-accent">{edu.degree}</h3>
                      <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">{edu.period}</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mt-1">{edu.institution}</p>
                    
                    {edu.description && (
                      <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

        </div>
        </TabsContent>
        <TabsContent value="project">
        <div className="lg:col-span-2 space-y-6">

          {/* Portfolio */}
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800/95 relative">
            <div className="absolute bottom-0 left-1/4 w-20 h-20 bg-primary/5 rounded-tr-[50px] -z-10"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold flex items-center">
                <span className="bg-primary/10 p-2 rounded-full mr-2">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </span>
                項目作品
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {data.portfolio.map((project, index) => (
                  <div key={index} className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:border-primary/20 relative">
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent"></div>
                    
                    <div className="p-5">
                      <h3 className="font-bold text-lg text-primary group-hover:text-primary">{project.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">{project.description}</p>
                      
                      <div className="mt-3">
                        <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">技術棧:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs hover:bg-primary/10 hover:text-primary transition-all duration-200">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" 
                           className="mt-3 inline-flex items-center text-primary hover:text-primary/90 font-medium text-sm group-hover:underline">
                          查看項目
                          <svg className="w-4 h-4 ml-1 transform transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        </TabsContent>
      </Tabs>
      </div>
    </div>
  );
}

// Helper function to convert language level to percentage
function getLevelPercentage(level: string) {
  const levels:Record<string, string> = {
    '初級': '20%',
    '中級': '40%',
    '進階': '60%',
    '精通': '80%',
    '母語': '100%',
    '入門': '20%',
    '基礎': '40%',
    '熟練': '70%',
    '專業': '90%'
  };
  
  return levels[level] || '50%';
}