"use client";
import OptionSelect from "@/components/OptionSelect/OptionSelect";
import ResponsiveImage from "@/components/ResponsiveImage/ResponsiveImage";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { businessOur, options } from "@/constant";
import profileImage from "@/public/images/profile.jpg";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

export default function Schedule() {
  const [openStatus, setOpenStatus] = useState(
    businessOur.reduce((acc, our) => {
      acc[our.day] = our.open;
      return acc;
    }, {})
  );

  const handleChange = (day) => {
    setOpenStatus((prevState) => ({
      ...prevState,
      [day]: !prevState[day],
    }));
  };

  return (
    <div className="border rounded-lg p-10 space-y-6">
      <div className="p-8 border rounded-lg">
        <div className="flex gap-4 h-32">
          <div className="dark:ring-offset-slate-700 rounded w-32 shrink-0 overflow-hidden">
            <ResponsiveImage
              src={profileImage}
              alt="profile image"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="w-32 h-32 border-2 border-dashed rounded-lg place-content-center">
            <label
              htmlFor="uploadFile1"
              className="font-semibold text-base rounded p-1 flex flex-col items-center justify-center cursor-pointer mx-auto font-[sans-serif]"
            >
              <CiCirclePlus className="text-6xl text-primary_color" />
              <input type="file" id="uploadFile1" className="hidden" />
            </label>
          </div>
        </div>
      </div>
      <div className="border-2 rounded-md p-8">
        {businessOur.map((our) => (
          <div
            key={our.day}
            className="flex   justify-between px-4 h-14 items-center"
          >
            <div className="  flex  items-center gap-32">
              <h1 className="w-14">{our.day}</h1>
              <div className="flex items-center space-x-2 w-10">
                <Switch
                  id={our.day}
                  checked={openStatus[our.day]}
                  onCheckedChange={() => handleChange(our.day)}
                />
                <Label htmlFor={our.day}>
                  {openStatus[our.day] ? "Open" : "Closed"}
                </Label>
              </div>
            </div>
            <div>
              {openStatus[our.day] ? (
                <div className="flex gap-8">
                  <OptionSelect label="srikanto" options={options} />
                  <OptionSelect label="srikanto" options={options} />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
