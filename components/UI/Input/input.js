import React from "react";

const Input = ({ className, type, name, placeholder, value, onChange }) => {
  return (
    <input
      className={`bg-neutral-100 text-black h-10 w-full outline-none focus:border-b-4 border-teal-600 pl-4 ${className}`}
      required={true}
      type={type || "text"}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
