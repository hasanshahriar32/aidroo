import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function OptionSelect({ className, label = "", options = [] }) {
  return (
    <Select className={` ${className}`}>
      <SelectTrigger
        className={` min-w-32   dark:bg-gray-800 h-10   ${className}`}
      >
        <SelectValue placeholder={label} className="text-sm  " />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="text-xs"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
