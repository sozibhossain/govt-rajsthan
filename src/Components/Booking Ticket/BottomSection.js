import React from "react";
import {useNavigate} from "react-router-dom";
import {ButtonMd} from "../Shared/Constant";

const BottomSection = () => {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col lg:flex-row justify-between whitespace-nowrap mt-10">
			{/* ------ left side ------- */}
			<div className=" w-full xl:w-7/12">
				<h1 className="text-3xl font-semibold tracking-wide">Fill Contact Information:</h1>
				<div className="w-[100%] mt-[42px] flex flex-col lg:flex-row justify-between items-center gap-[1rem] lg:gap-0">
					<ButtonMd text="Mobile No" />
					<ButtonMd text="Email No" />
				</div>
				<div className="mt-[32px]">
					<input className="w-full h-20 border text-[#1E1E1E0] bg-white shadow-lg rounded-[10px]" type="text" />
				</div>
			</div>
			{/* ------- right side -------- */}
			<div className="flex flex-col items-end justify-between pt-20 w-full">
				<div className="bg-white text-xl text-[#1E1E1E80] shadow-lg  flex items-center px-4 py-2 gap-10 rounded-lg">
					<p className=" ">
						Total Visitors: <span className="text-black">3</span>
					</p>
					<p className="h-full bg-black w-0.5 rounded-full"></p>
					<p className="">
						Total Amount: <span className="text-black">120</span>
					</p>
				</div>
				<div className="inline-block" onClick={() => navigate("/confirmation")}>
					<ButtonMd text={"SUBMIT"} />
				</div>
			</div>
		</div>
	);
};

export default BottomSection;
