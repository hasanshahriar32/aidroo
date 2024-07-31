"use client";
import { Input } from "@/components/ui/input";
import { font14 } from "@/constant";
import { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";

const CustomInput = ({
  type = "text",
  name,
  placeholder = "",
  control,
  icon: Icon,

  className = "",
  options = [],
  label = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {type === "select" ? (
        <select
          className="h-10 w-full border rounded-md focus-visible:outline-none px-2"
          {...control.register(name)}
        >
          <option value="" className={`${font14}`}>
            {label}
          </option>
          {options.map((option) => (
            <option
              key={option?.name || option?.label || option?.title}
              value={option?.name || option?.label || option?.title}
            >
              {option.name}
            </option>
          ))}
        </select>
      ) : (
        <div
          className={`w-full flex items-center border gap-2 h-10 rounded-sm overflow-hidden ${className}`}
        >
          {Icon && (
            <Icon className="text-2xl bg-gray-200 h-10 p-[10px] w-14 rounded-r-sm" />
          )}

          <Input
            type={showPassword ? "text" : type}
            name={name}
            placeholder={placeholder}
            className="bg-white dark:bg-gray-800 border-none focus-visible:ring-0 flex-grow"
            {...control.register(name)}
            required
          />

          {type === "password" && (
            <button
              type="button"
              onClick={handleToggleShowPassword}
              className="p-2"
            >
              {showPassword ? (
                <IoEye className="text-xl text-primary_color " />
              ) : (
                <IoEyeOffSharp className="text-xl text-gray-00 " />
              )}
            </button>
          )}
          {name === "username" && (
            <BsCheckCircleFill className="text-primary_color text-2xl mr-2" />
          )}
        </div>
      )}
    </>
  );
};

export default CustomInput;
