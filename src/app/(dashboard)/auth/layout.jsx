import Image from "next/image";

const layout = ({ children }) => {
  return (
    <div className="container mx-auto px-4">
      {children}
    </div>
  );
};

export default layout;
