'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CVData } from "../types";
import { cn } from "@/lib/utils";

interface CVProps {
  data: CVData;
}

export function CV({ data }: CVProps) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg page-transition-enter-active">
      {/* Header Section */}
      <div className="flex items-center gap-6 mb-8 hover:transform hover:scale-[1.02] transition-transform duration-200">
        <Avatar className="w-24 h-24 ring-2 ring-primary/20 transition-all duration-200 hover:ring-4 hover:ring-primary/40">
          <AvatarImage src={data.avatar} alt={data.name} />
          <AvatarFallback>{data.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 hover:text-primary transition-colors duration-200">{data.name}</h1>
          <p className="text-xl text-gray-600">{data.title}</p>
          <div className="mt-2 text-gray-500">
            <p>{data.location.city}, {data.location.country}</p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <Card className="mb-6 card hover:transform hover:scale-[1.01] transition-all duration-200">
        <CardHeader>
          <CardTitle>联系方式</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <p><span className="font-semibold">邮箱:</span> <a href={`mailto:${data.contact.email}`} className="hover:text-primary transition-colors">{data.contact.email}</a></p>
            <p><span className="font-semibold">电话:</span> <a href={`tel:${data.contact.phone}`} className="hover:text-primary transition-colors">{data.contact.phone}</a></p>
            {data.contact.website && <p><span className="font-semibold">网站:</span> <a href={data.contact.website} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{data.contact.website}</a></p>}
            {data.contact.github && <p><span className="font-semibold">GitHub:</span> <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{data.contact.github}</a></p>}
            {data.contact.linkedin && <p><span className="font-semibold">LinkedIn:</span> <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{data.contact.linkedin}</a></p>}
          </div>
        </CardContent>
      </Card>

      {/* Profile */}
      <Card className="mb-6 card hover:transform hover:scale-[1.01] transition-all duration-200">
        <CardHeader>
          <CardTitle>个人简介</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">{data.profile}</p>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card className="mb-6 card hover:transform hover:scale-[1.01] transition-all duration-200">
        <CardHeader>
          <CardTitle>技术技能</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {data.skills.map((skill, index) => (
              <div key={index} className="hover:bg-secondary/10 p-2 rounded-lg transition-colors duration-200">
                <h3 className="font-semibold mb-2 text-primary">{skill.category}</h3>
                <ul className="list-disc list-inside">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-gray-700 hover:text-primary transition-colors duration-200">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Work Experience */}
      <Card className="mb-6 card hover:transform hover:scale-[1.01] transition-all duration-200">
        <CardHeader>
          <CardTitle>工作经历</CardTitle>
        </CardHeader>
        <CardContent>
          {data.workExperience.map((exp, index) => (
            <div key={index} className={cn("mb-4 hover:bg-secondary/10 p-2 rounded-lg transition-colors duration-200", index !== data.workExperience.length - 1 && "pb-4 border-b")}>
              <h3 className="font-semibold text-lg text-primary">{exp.position}</h3>
              <p className="text-gray-600">{exp.company} | {exp.period}</p>
              <ul className="list-disc list-inside mt-2">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-gray-700 hover:text-primary transition-colors duration-200">{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Education */}
      <Card className="mb-6 card hover:transform hover:scale-[1.01] transition-all duration-200">
        <CardHeader>
          <CardTitle>教育背景</CardTitle>
        </CardHeader>
        <CardContent>
          {data.education.map((edu, index) => (
            <div key={index} className={cn("mb-4 hover:bg-secondary/10 p-2 rounded-lg transition-colors duration-200", index !== data.education.length - 1 && "pb-4 border-b")}>
              <h3 className="font-semibold text-primary">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution} | {edu.period}</p>
              {edu.description && <p className="text-gray-700 mt-2">{edu.description}</p>}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Languages */}
      <Card className="mb-6 card hover:transform hover:scale-[1.01] transition-all duration-200">
        <CardHeader>
          <CardTitle>语言能力</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {data.languages.map((lang, index) => (
              <div key={index} className="hover:bg-secondary/10 p-2 rounded-lg transition-colors duration-200">
                <span className="font-semibold text-primary">{lang.name}:</span> {lang.level}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Portfolio */}
      <Card className="card hover:transform hover:scale-[1.01] transition-all duration-200">
        <CardHeader>
          <CardTitle>项目作品</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {data.portfolio.map((project, index) => (
              <div key={index} className="border rounded-lg p-4 hover:bg-secondary/10 transition-colors duration-200">
                <h3 className="font-semibold text-lg text-primary">{project.title}</h3>
                <p className="text-gray-700 mt-2">{project.description}</p>
                <div className="mt-2">
                  <span className="font-semibold">技术栈:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-gray-100 px-2 py-1 rounded text-sm hover:bg-primary/10 hover:text-primary transition-all duration-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-primary hover:underline mt-2 block transition-colors duration-200">
                    查看项目
                  </a>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 