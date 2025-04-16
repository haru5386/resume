'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CVData } from "../types";
import { cn } from "@/lib/utils";

interface CVProps {
  data: CVData;
}

export function CV({ data }: CVProps) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Header Section */}
      <div className="flex items-center gap-6 mb-8">
        <Avatar className="w-24 h-24">
          <AvatarImage src={data.avatar} alt={data.name} />
          <AvatarFallback>{data.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
          <p className="text-xl text-gray-600">{data.title}</p>
          <div className="mt-2 text-gray-500">
            <p>{data.location.city}, {data.location.country}</p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>联系方式</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <p><span className="font-semibold">邮箱:</span> {data.contact.email}</p>
            <p><span className="font-semibold">电话:</span> {data.contact.phone}</p>
            {data.contact.website && <p><span className="font-semibold">网站:</span> {data.contact.website}</p>}
            {data.contact.github && <p><span className="font-semibold">GitHub:</span> {data.contact.github}</p>}
            {data.contact.linkedin && <p><span className="font-semibold">LinkedIn:</span> {data.contact.linkedin}</p>}
          </div>
        </CardContent>
      </Card>

      {/* Profile */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>个人简介</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">{data.profile}</p>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>技术技能</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {data.skills.map((skill, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-2">{skill.category}</h3>
                <ul className="list-disc list-inside">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Work Experience */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>工作经历</CardTitle>
        </CardHeader>
        <CardContent>
          {data.workExperience.map((exp, index) => (
            <div key={index} className={cn("mb-4", index !== data.workExperience.length - 1 && "pb-4 border-b")}>
              <h3 className="font-semibold text-lg">{exp.position}</h3>
              <p className="text-gray-600">{exp.company} | {exp.period}</p>
              <ul className="list-disc list-inside mt-2">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-gray-700">{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Education */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>教育背景</CardTitle>
        </CardHeader>
        <CardContent>
          {data.education.map((edu, index) => (
            <div key={index} className={cn("mb-4", index !== data.education.length - 1 && "pb-4 border-b")}>
              <h3 className="font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution} | {edu.period}</p>
              {edu.description && <p className="text-gray-700 mt-2">{edu.description}</p>}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Languages */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>语言能力</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {data.languages.map((lang, index) => (
              <div key={index}>
                <span className="font-semibold">{lang.name}:</span> {lang.level}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Portfolio */}
      <Card>
        <CardHeader>
          <CardTitle>项目作品</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {data.portfolio.map((project, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-gray-700 mt-2">{project.description}</p>
                <div className="mt-2">
                  <span className="font-semibold">技术栈:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-gray-100 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mt-2 block">
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