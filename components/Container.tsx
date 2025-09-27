import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="container mx-auto w-full max-w-[1200px] xl:px-0 md:px-6  px-4 flex-1 flex  h-full lg:py-16">
         {children}
      </div>
   );
};

export default Container;
