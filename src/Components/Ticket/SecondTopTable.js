import React from "react";

const SecondTopTable = () => {
  return (
		<div className="mt-2 rounded-md overflow-hidden border-l-2 border-r-2 border-t-2 border-gray-400">
			<table className=" bg-[#D9D9D980]  w-full">
				<tr className="bg-[#5d9dd880] capitalize text-white border-b-2 border-gray-400">
					<td className="text-sm text-center p-3 border-r-2 border-gray-400">Visit Date</td>
					<td className="text-sm text-center p-3 border-r-2 border-gray-400">Visitor Type</td>
					<td className="text-sm text-center p-3 border-r-2 border-gray-400">no. of touristes</td>
					<td className="text-sm text-center p-3 border-r-2 border-gray-400">contact info</td>
					<td className="text-sm text-center p-3 border-r-2 border-gray-400">ticket amt</td>
					<td className="text-sm text-center p-3 border-r-2 border-gray-400">GST 18%</td>
					<td className="text-sm text-center p-3 ">total amt.</td>
				</tr>
				<tr className="bg-[#D9D9D980] border-b-2 border-gray-400 text-black">
					<td className="text-sm text-center p-3 border-r-2 border-gray-400">02/01/2023</td>
					<td className="text-sm text-center p-3 border-r-2 border-gray-400">indian citizen</td>
					<td className="text-sm text-center p-3 border-r-2 border-gray-400">03</td>
					<td className="text-sm text-center p-3 border-r-2 border-gray-400">98xxxxxxxx</td>
					<td className="text-sm text-center p-3 border-r-2 border-gray-400">300</td>
					<td className="text-sm text-center p-3 border-r-2 border-gray-400">54</td>
					<td className="text-sm text-center p-3 ">354</td>
				</tr>
			</table>
		</div>
  );
};

export default SecondTopTable;
