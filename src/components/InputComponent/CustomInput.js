"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import PhoneNumberInput from "../PhoneNumberInput/PhoneNumberInput";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const CustomInput2 = ({
  type = "text",
  name,
  placeholder = "",
  control,
  icon: Icon,
  showToggle = false,
  className = "",
  options = [],
  label = "",
  onlyCountries = [],
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className={`w-full flex items-center border gap-2 h-10 rounded-sm overflow-hidden ${className}`}
    >
      {Icon && (
        <Icon className="text-2xl bg-gray-200 h-10 p-[10px] w-14 rounded-r-sm" />
      )}
      {type === "select" ? (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select {...field} onValueChange={field.onChange}>
              <SelectTrigger
                className={`min-w-32 dark:bg-gray-800 h-12 ${className}`}
              >
                <SelectValue placeholder={label} className="text-sm" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {options.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.label}
                      className="text-sm"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      ) : type === "phone" ? (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <PhoneNumberInput
              {...field}
              onlyCountries={onlyCountries}
              placeholder={placeholder}
            />
          )}
        />
      ) : (
        <Input
          type={showToggle && showPassword ? "text" : type}
          name={name}
          placeholder={placeholder}
          className="bg-white dark:bg-gray-800 border-none focus-visible:ring-0 flex-grow"
          {...control.register(name)}
          required
        />
      )}
      {showToggle && type === "password" && (
        <button
          type="button"
          onClick={handleToggleShowPassword}
          className="p-2"
        >
          {showPassword ? (
            <IoEye className="text-2xl shadow-md" />
          ) : (
            <IoEyeOffSharp className="text-2xl shadow-md" />
          )}
        </button>
      )}
    </div>
  );
};

export default CustomInput2;
