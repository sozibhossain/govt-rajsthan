import React from "react";
import {AiOutlineSearch} from "react-icons/ai";
import {BiBarChart} from "react-icons/bi";
import {FaUserPlus} from "react-icons/fa";
import {HiOutlineShoppingBag} from "react-icons/hi";
import {Link} from "react-router-dom";
import Navbar from "../../Components/Shared/NavBar";
import Cards from "./Cards";
export const bannerImg = "top-banner.png";
const Home2 = () => {
	const cards = [
		{id: 1, num: 150, title: "Total Visitors", icon: HiOutlineShoppingBag, path: "", bgColor: "bg-cyan-500", footerColor: "bg-cyan-600"},
		{id: 2, num: 144, title: "Total Bookings", icon: BiBarChart, path: "", bgColor: "bg-green-500", footerColor: "bg-green-600"},
		{id: 3, num: "430k", title: "Total Revenue", icon: FaUserPlus, path: "", bgColor: "bg-yellow-500", footerColor: "bg-yellow-600"},
	];
	return (
		<div className="px-6 pt-2">
			<div
				style={{backgroundImage: `url(${bannerImg})`}}
				className="h-96 mb-8 overflow-hidden bg-cover bg-no-repeat rounded-xl  max-w-7xl mx-auto  bg-center w-full "
			>
				<Navbar />
				<div className="h-full flex items-center justify-center ">
					<div className="w-80 rounded-lg overflow-hidden  mb-12 relative ">
						<input
							type="text"
							className="px-3 pr-8 outline-none rounded-md h-10 border border-gray-200 w-full"
							placeholder="Search here..."
						/>
						<span className="bg-gray-300 flex items-center justify-center absolute right-0 w-10  text-xl text-gray-600 inset-y-0">
							<AiOutlineSearch className="" />
						</span>
					</div>
				</div>
			</div>
			<div className="max-w-5xl mx-auto  min-h-[400px]  text-center">
				<div className="flex items-center justify-center gap-8 mb-12">
					<Cards data={cards[0]} />
					<Cards data={cards[1]} />
					<Cards data={cards[2]} />
				</div>
				<Link to="/booking-ticket" className="bg-[#314668] px-16 text-lg text-[#FFC107] mt-10 w-4/6 mx-auto py-4 rounded-lg">
					Book Ticket
				</Link>
			</div>
		</div>
	);
};

export default Home2;
