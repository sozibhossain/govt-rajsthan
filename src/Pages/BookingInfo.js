import React from "react";
import SelectComp from "../Components/Booking Info/SelectComp";
import SecondNav from "../Components/Shared/SecondNav";
import {bannerImg} from "../Pages/home/Home2";
const BookingInfo = () => {
	return (
		<div className="min-h-screen bg-[#F0EBEB]">
			<div className="relative ">
				<SecondNav />
				<div className="container mx-auto w-full absolute inset-x-0 top-5">
					<div className="relative w-full">
						<img src={bannerImg} className="h-14 w-20 object-cover absolute top-0 right-0 rounded-md border border-gray-500" alt="" />
					</div>
				</div>
			</div>
			<div className=" pb-16">
				<SelectComp />
			</div>
		</div>
	);
};

export default BookingInfo;
