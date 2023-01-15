import React from "react";

const Table2 = () => {
	return (
		<table className="w-full">
			<thead className="w-full">
				<tr className="w-full text-lg text-[#2E2D2D]">
					<th className="p-3">Sr. no</th>
					<th className="p-3">Visit Date</th>
					<th className="p-3">Visiter Type</th>
					<th className="p-3">No. of Tourists</th>
					<th className="p-3">Contact Information</th>
				</tr>
			</thead>
			<tbody className="bg-white divide-y-2 di">
				<tr className=" text-gray-400 text-center">
					<td className="w-13 border-r-2  p-3">01</td>
					<td className="w-13 border-r-2 p-3">29/12/2011</td>
					<td className="w-13 border-r-2 p-3">Indian Citizen & Indian Student</td>
					<td className="w-13 border-r-2 p-3"> 03</td>
					<td className="w-13 p-3"> +91 98XXXXXXXX</td>
				</tr>
				<tr className=" text-gray-400 text-center">
					<td className="w-13 border-r-2  p-3">01</td>
					<td className="w-13 border-r-2 p-3">29/12/2011</td>
					<td className="w-13 border-r-2 p-3">Indian Citizen & Indian Student</td>
					<td className="w-13 border-r-2 p-3"> 03</td>
					<td className="w-13 p-3"> +91 98XXXXXXXX</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Table2;
