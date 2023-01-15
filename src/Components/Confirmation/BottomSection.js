import {Checkbox} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";
import {ButtonMd} from "../Shared/Constant";

const BottomSection = () => {
	const navigate = useNavigate();

	return (
		<div className="mt-20">
			<div className="text-lg tracking-wide text-gray-900 font-semibold max-w-sm">
				<div className="grid grid-cols-3">
					<p className="col-span-2">(A) Ticket Amt </p>
					<p className="">
						<span className="inline-block w-8">:</span> <span>10.00</span>
					</p>
				</div>
				<div className="grid grid-cols-3">
					<p className="col-span-2">(B) Convenience Fee </p>
					<p className="">
						<span className="inline-block w-8">:</span> <span>100.00</span>
					</p>
				</div>
				<div className="grid grid-cols-3">
					<p className="col-span-2">(C) TGST @ 18% </p>
					<p className="">
						<span className="inline-block w-8">:</span> <span>36.00</span>
					</p>
				</div>
				<div className="grid grid-cols-3 bg-white mt-5 p-2 rounded-lg">
					<p className="col-span-2 text-[#5E5C5C]">Total Pay (Rs.)</p>
					<p className="">
						<span className="inline-block w-8 ml-1">|</span> <span>106/-</span>
					</p>
				</div>
			</div>
			{/* ------------------- */}
			<div className="flex flex-col lg:flex-row justify-between items-center mt-[130px]">
				{/* ----------- checkbox side --------- */}
				<div className="flex items-center">
					<Checkbox defaultChecked color="default" name="termsNCondition" id="termsNCondition" />
					<label className="text-[14px] lg:text-[22px] text-[#30303099]" htmlFor="termsNCondition">
						Agree With Terms And Conditions
					</label>
				</div>
				{/* -------- button side ---------- */}
				<div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[50px] mt-[1rem] lg:mt-0">
					<span onClick={() => navigate("/success")}>
						<ButtonMd text={"PROCCED TO PAY"} />
					</span>
					<span onClick={() => navigate("/success")}>
						<ButtonMd text={"CANCEL"} />
					</span>
				</div>
			</div>
		</div>
	);
};

export default BottomSection;
