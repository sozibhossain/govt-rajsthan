import React from "react";
import BottomTable from "./BottomTable";
import SecondTopTable from "./SecondTopTable";
import TopTable from "./TopTable";

const ConfirmationSlip = () => {
  return (
    <div className="mt-2">
      <p className="py-[10px] bg-[#C2E1E5] text-center text-[14px] rounded-md">
        Booking Confirmation Slip
      </p>
      {/* ------ top table ------ */}
      <div className="whitespace-nowrap">
        <TopTable />
      </div>
      {/* -------- 2nd top table ----- */}
      <div>
        <SecondTopTable />
      </div>
      {/* ------- terms and condition -------- */}
      <div className="mt-2  w-[782px] -ml-[30px]">
        <img
          className="w-full block"
          src="terms.png"
          alt=""
        />
      </div>
      {/* ----- bottom table ------ */}
      <BottomTable />
      {/* ------- bottom buttons ------- */}
      <div className="flex justify-center gap-[80px] mt-4">
        <button className=" py-2 rounded-md px-5 bg-[#3C5071] text-white font-[600]">
          Download Ticket
        </button>
        <button className=" py-2 rounded-md px-5 bg-[#3C5071] text-white font-[600]">
          Book Ticket Again
        </button>
      </div>
    </div>
  );
};

export default ConfirmationSlip;
