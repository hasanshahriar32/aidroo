"use client";

import { Country } from "country-state-city";
import { useState } from "react";
import OptionSelect from "../OptionSelect/OptionSelect";

export default function AllCountries() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const countries = Country.getAllCountries().map((country) => ({
    label: country.name,
    value: country.isoCode,
  }));

  const states = selectedCountry
    ? State.getStatesOfCountry(selectedCountry.value).map((state) => ({
        label: state.name,
        value: state.isoCode,
      }))
    : [];

  //   const cities = selectedState
  //     ? City.getCitiesOfState(selectedCountry.value, selectedState.value).map(
  //         (city) => ({
  //           label: city.name,
  //           value: city.name,
  //         })
  //       )
  //     : [];
  //   const handleCountryChange = (country) => {
  //     setSelectedCountry(country);
  //     setSelectedState(null);
  //     setSelectedCity(null);
  //   };

  //   const handleStateChange = (state) => {
  //     setSelectedState(state);
  //     setSelectedCity(null);
  //   };

  return (
    <>
      <OptionSelect
        options={countries}
        value={selectedCountry}
        onChange={setSelectedCountry}
        placeholder="Select Country"
        label="Country"
      />
    </>
  );
}
