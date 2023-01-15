import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";


const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const FirstGroup = () => {
  // ------ dropdown state -----
  const [account, setAccount] = React.useState(1);

  const handleChange = (event) => {
    setAccount(event.target.value);
  };

  return (
		<div className="flex flex-row flex-wrap items-center gap-[30px]">
			<div>
				<p className="text-[#00000099] text-2xl font-semibold mb-3 capitalize">tourist place type:</p>
				<FormControl className="">
					<Select
						value={account}
						onChange={handleChange}
						displayEmpty
						inputProps={{"aria-label": "Without label"}}
						className="w-96 shadow-md h-12 bg-white !text-gray-400"
					>
						{options?.map((el) => (
							<MenuItem value={el}>Select Here</MenuItem>
						))}
					</Select>
				</FormControl>
			</div>
			<div>
				<p className="text-[#00000099] text-2xl font-semibold mb-3 capitalize">nodal department:</p>
				<FormControl className="">
					<Select
						value={account}
						onChange={handleChange}
						displayEmpty
						inputProps={{"aria-label": "Without label"}}
						className="w-96 shadow-md h-12 bg-white !text-gray-400"
					>
						{options?.map((el) => (
							<MenuItem value={el}>Select Here</MenuItem>
						))}
					</Select>
				</FormControl>
			</div>
			<div>
				<p className="text-[#00000099] text-2xl font-semibold mb-3 capitalize">Address:</p>
				<input placeholder="Type Here" className="focus:outline-none p-3 h-12 rounded overflow-hidden border border-gray-400/70 shadow-md w-96" type="text" />
			</div>
		</div>
  );
};

export default FirstGroup;
