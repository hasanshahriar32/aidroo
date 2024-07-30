"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  IoCheckmarkCircleOutline,
  IoEye,
  IoEyeOffSharp,
} from "react-icons/io5";
const CustomInput = ({
  type = "text",
  placeholder = "Enter text",

  showToggle = true,
  icon: Icon,
  className = "",
  ...props
}) => {
  const [inputValue, setInputValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div
      className={`w-full flex items-center border gap-2 h-10 rounded-sm overflow-hidden ${className}`}
    >
      {Icon && (
        <Icon className="text-2xl bg-gray-200 h-10 p-[10px] w-14 rounded-r-sm" />
      )}
      <Input
        type={inputType}
        placeholder={placeholder}
        className="bg-white dark:bg-gray-800 border-none focus-visible:ring-0 flex-grow  px-2 "
        value={inputValue}
        onChange={handleInputChange}
        {...props}
      />
      {showToggle && type === "password" && (
        <button type="button" onClick={toggleShowPassword} className="p-2">
          {showPassword ? (
            <IoEye className="text-2xl  " />
          ) : (
            <IoEyeOffSharp className="text-xl  " />
          )}
        </button>
      )}
      {showToggle && placeholder === "username" && (
        <button type="button" onClick={toggleShowPassword} className="p-2">
          <IoCheckmarkCircleOutline className="text-2xl  text-primary_color " />
        </button>
      )}
    </div>
  );
};

export default CustomInput;
