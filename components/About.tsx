import React from "react";

const About = () => {
   return (
      <div className="aboute flex flex-col gap-4 mt-4">
         <div className="title-container">
            <h2 className="text-xl font-bold">ABOUT</h2>
         </div>
         <div className="content-container">
            <p className="text-sm text-secondary-foreground">
               25-year-old software engineer from Turkey with a versatile background spanning enterprise backend, modern web frontend, and mobile development. Currently focusing all my energy on backend engineering, deep-diving into concurrency, clean architecture, and performance optimization.
            </p>
         </div>
      </div>
   );
};

export default About;
