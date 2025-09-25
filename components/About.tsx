import React from "react";

const About = () => {
   return (
      <div className="aboute flex flex-col gap-4 mt-4">
         <div className="title-container">
            <h2 className="text-xl font-bold">ABOUT</h2>
         </div>
         <div className="content-container">
            <p className="text-sm text-secondary-foreground">
               23 years old developer from Turkey, specializing in Mobile and
               SaaS development. Passionate about modern mobile and web
               technologies and AI integration.
            </p>
         </div>
      </div>
   );
};

export default About;
