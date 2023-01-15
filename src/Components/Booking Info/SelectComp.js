import React from "react";
import FifthGroup from "./FifthGroup";
import FirstGroup from "./FirstGroup";
import FourthGroup from "./FourthGroup";
import SecondGroup from "./SecondGroup";
import SsoId from "./SsoId";
import ThirdGroup from "./ThirdGroup";
import TimingSection from "./TimingSection";

const SelectComp = () => {
	return (
		<div className="">
			<div className="  bg-white">
				<div className="container px-6 mx-auto  space-y-5 pt-10 pb-14">
					{/* ------- first group ------ */}
					<FirstGroup />
					{/* ------ second group ------- */}
					<SecondGroup />
					{/* -------- third group -------  */}
					<ThirdGroup />
				</div>
			</div>
			<div className="bg-[#F0EBEB]">
				<div className="container mx-auto px-6 space-y-5">
					{/* ------- ssoid group ------- */}
					<SsoId />
					{/* ----- fourth group ------ */}
					<FourthGroup />
					{/* ------- fifth group ------- */}
					<FifthGroup />
					{/* ------- timing section -------- */}
					<TimingSection />
				</div>
			</div>
		</div>
	);
};

export default SelectComp;
