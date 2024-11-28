import React from "react";

const Button = ({ children, className }) => {
  return (
    <div
      className={`px-4 py-3 bg-[#044139] rounded-lg hover:bg-green-500 hover:text-gray-700 cursor-pointer hover:scale-105 duration-500 ${className}`}
    >
      {children}
    </div>
  );
};

export default Button;
