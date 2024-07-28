"use client";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/bootstrap.css";

export default function PhoneNumberInput({ onlyCountries }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(false);

  const handleChange = (value) => {
    setPhoneNumber(value);
    const regex = /^\+\d{1,3}-\d{1,10}$/;
    setValid(regex.test(value));
  };
  return (
    <div className="flex flex-col ">
      <PhoneInput
        type="text"
        value={phoneNumber}
        onChange={handleChange}
        placeholder="Input Number"
        onlyCountries={onlyCountries}
        country={"us"}
        inputProps={{ required: true }}
      />
      {valid && <p>Phone is not valid </p>}
    </div>
  );
}
