import React from "react";
import { Badge } from "./ui/badge";

const technologies = [
   {
      title: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind", "HTML", "CSS"],
   },

   {
      title: "Backend",
      items: [
         "Node.js",
         "Express.js",
         "Typescript",
         "MongoDB",
         "PostgreSQL",
         "MySQL",
         "Firebase",
         "Supabase",
         "PHP",
      ],
   },

   {
      title: "Mobile",
      items: ["React Native", "Expo", "Nativewind"],
   },

   {
      title: "Tools",
      items: [
         "Docker",
         "Git",
         "CI/CD",
         "AWS",
         "LLMs",
         "Vercel",
         "Netlify",
         "Figma",
         "Shadcn/UI",
      ],
   },
];

const Technologies = () => {
   return (
      <div className="technologies flex flex-col gap-4 mt-10">
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
