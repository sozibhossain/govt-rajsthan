import React from "react";
import TableSection from "../Components/Account Category/TableSection";
import SecondNav from "../Components/Shared/SecondNav";

const ACCategory = () => {
  return (
    <div className="min-h-screen bg-[#F0EBEB] w-[100%]">
      <SecondNav />
      <div className="container mx-auto px-6 pt-10 pb-16">
        <TableSection />
      </div>
    </div>
  );
};

export default ACCategory;
