import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="container mx-auto w-full max-w-[1200px] lg:px-0 px-4 flex-1 flex  h-full lg:py-16">
         {children}
      </div>
   );
};

export default Container;
