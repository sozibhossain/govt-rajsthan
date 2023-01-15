import React from "react";
import ConfirmationSlip from "../Components/Ticket/ConfirmationSlip";
import TopPart from "../Components/Ticket/TopPart";

const Ticket = () => {
  return (
    <div className=" min-h-screen bg-[#F5F5F5] flex justify-center items-center">
      {/* ------- A4 size -------- */}
      <div className=" bg-white p-2 w-full max-w-3xl">
        {/* Top part  */}
        <TopPart />
        {/* Confirmation Slip  */}
        <ConfirmationSlip />
      </div>
    </div>
  );
};

export default Ticket;
