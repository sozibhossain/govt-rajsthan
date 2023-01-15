import React from "react";
import SecondNav from "../Components/Shared/SecondNav";
import FirstGroup from "../Components/View Mapped/FirstGroup";
import MappedSite from "../Components/View Mapped/MappedSite";
import SecondGroup from "../Components/View Mapped/SecondGroup";
import TableSection from "../Components/View Mapped/TableSection";
import ThirdGroup from "../Components/View Mapped/ThirdGroup";

const ViewMapped = () => {
  return (
    <div className="min-h-screen bg-[#F0EBEB] ">
      <SecondNav />
      <div className="flex flex-col gap-[24px] container mx-auto pt-10 pb-16 px-6">
        {/* ------- first group ------- */}
        <FirstGroup />
        {/* ------- second group --------- */}
        <SecondGroup />
        {/* -------- third group ------ */}
        <ThirdGroup />
        {/* ------- mapped site -------- */}
        <MappedSite />
        {/* table section  */}
        <TableSection />
      </div>
    </div>
  );
};

export default ViewMapped;
