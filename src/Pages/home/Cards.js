import React from "react";
import {BsFillArrowRightCircleFill} from "react-icons/bs";

const Cards = ({data}) => {
	return (
		<div className={`${data.bgColor} w-full h-[140px] rounded-md relative text-white`}>
			<div className="flex items-center justify-between  py-2 px-5">
				<div className=" text-left">
					<h1 className="text-[2.5rem] font-bold">{data.num}</h1>
					<p className="text-[14px] font-[500] tracking-wider translate-y-[-70%]">{data.title}</p>
				</div>
				<data.icon className=" text-6xl text-gray-500/40" />
			</div>
			<div className="cursor-pointer absolute bottom-0 w-[100%]">
				<p className={`${data.footerColor} py-[3px] text-center rounded-b-[6px] flex items-center justify-center gap-[.3rem]`}>
					More Info <BsFillArrowRightCircleFill />
				</p>
			</div>
		</div>
	);
};

export default Cards;
