import { Checkbox } from "@mui/material";
import React from "react";

const VisitorType = () => {
  return (
    <div className="flex flex-col gap-3 mt-9">
      {/* -------- Indian Citizen? ------- */}
      <div className="flex items-center">
        <Checkbox
          defaultChecked
          color="default"
          name="indianCitizen"
          id="indianCitizen"
        />
        <label className="text-lg text-[#30303099]" htmlFor="indianCitizen">
          Indian Citizen
        </label>
      </div>
      {/* -------- Foreigner Citizen ------- */}
      <div className="flex items-center">
        <Checkbox
          defaultChecked
          color="default"
          name="foreignerCitizen"
          id="foreignerCitizen"
        />
        <label
          className="text-lg text-[#30303099]"
          htmlFor="foreignerCitizen"
        >
          Foreigner Citizen
        </label>
      </div>
      {/* -------- Indian Student ------- */}
      <div className="flex items-center">
        <Checkbox
          defaultChecked
          color="default"
          name="indianStudent"
          id="indianStudent"
        />
        <label className="text-lg text-[#30303099]" htmlFor="indianStudent">
          Indian Student
        </label>
      </div>
      {/* -------- Foreigner Student ------- */}
      <div className="flex items-center">
        <Checkbox
          defaultChecked
          color="default"
          name="foreignerStudent"
          id="foreignerStudent"
        />
        <label className="text-lg text-[#30303099]" htmlFor="foreignerStudent">
          Foreigner Student
        </label>
      </div>
    </div>
  );
};

export default VisitorType;
