import React from "react";

const layout = ({ children }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="hidden lg:block "></div>
        <div className="col-span-3 mx-4 lg:mx-0">{children}</div>
      </div>
      
    </div>
  );
};

export default layout;
