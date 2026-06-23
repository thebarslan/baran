import React from "react";
import { Badge } from "./ui/badge";

const technologies = [
   {
      title: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind", "HTML", "CSS", "Shadcn/UI"],
   },

   {
      title: "Backend",
      items: ["Java", "Spring Boot", "Node.js", "Go", "Express.js", "PHP"],
   },

   {
      title: "Databases & BaaS",
      items: ["PostgreSQL", "MongoDB", "SQLite", "Supabase", "Firebase"],
   },

   {
      title: "Mobile",
      items: ["React Native", "Expo", "Nativewind"],
   },

   {
      title: "Tools & Cloud",
      items: ["Docker", "Kubernetes", "AWS", "Git", "CI/CD", "Vercel", "LLMs"],
   },
];

const Technologies = () => {
   return (
      <div className="technologies flex flex-col gap-4 lg:mt-10 mt-6">
         <div className="title-container">
            <h2 className="text-xl font-bold">TECHNOLOGIES</h2>
         </div>
         <div className="content-container flex flex-col gap-6">
            {technologies.map((technology) => (
               <div
                  className="item-container flex flex-col gap-[6px]"
                  key={technology.title}
               >
                  <div className="item-title-container">
                     <h5 className="text-[13px] text-muted-foreground font-medium">
                        {technology.title}
                     </h5>
                  </div>
                  <div className="item-content-container flex gap-2 flex-wrap px-[1px]">
                     {technology.items.map((item, index) => (
                        <Badge key={index} className="whitespace-nowrap">
                           <p>{item}</p>
                        </Badge>
                     ))}
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Technologies;
