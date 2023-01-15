import React from "react";
import NoOfSeats from "./NoOfSeats";
import PaidAmount from "./PaidAmount";
import VisitorType from "./VisitorType";

const TopSection = () => {
	return (
		<div className="flex flex-col xl:flex-row items-start justify-between gap-[70px] whitespace-nowrap">
			{/* -------- select date side ---------- */}
			<div className="w-full lg:w-fit flex flex-col lg:flex-row items-center gap-[35px]">
				<label className="text-3xl font-semibold tracking-wide" htmlFor="selectDate">
					Select Date
				</label>
				<input className="h-11 border rounded-lg shadow-lg p-3 w-64" type="date" name="selectDate" id="selectDate" />
			</div>
			{/* ------ select side -------- */}
			<div className="w-full flex flex-col lg:flex-row justify-between items-start gap-[1.5rem]">
				{/* -------- visitor type ------- */}
				<div className=" ">
					<h1 className="text-[24px] font-[500] ">Visitor Type :</h1>
					<VisitorType />
				</div>
				{/* -------- no. of tourists ------- */}
				<div>
					<h1 className="text-[24px] font-[500]">No. Of Tourists :</h1>
					<NoOfSeats />
				</div>
				{/* -------- paid amount ------- */}
				<div>
					<h1 className="text-[24px] font-[500]">Paid Amount</h1>
					<PaidAmount />
				</div>
			</div>
		</div>
	);
};

export default TopSection;
