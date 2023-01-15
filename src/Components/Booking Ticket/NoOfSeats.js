import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const NoOfSeats = () => {
  // ------ dropdown state -----
  const [account, setAccount] = React.useState(1);

  const handleChange = (event) => {
    setAccount(event.target.value);
  };

  return (
    <div className="flex flex-col gap-[20px] mt-[40px]">
      {/* --------- 50 per persons -------- */}
      <div className="flex items-center gap-[20px]">
        <FormControl
          sx={{ width: 89, height: 33 }}
          className="focus:border-none bg-[white] w-[89px] h-[33px]"
        >
          <Select
            value={account}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            className="w-[89px] h-[33px]"
            defaultValue="1"
          >
            {options?.map((el) => (
              <MenuItem value={el}>{el}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <span className="text-[#30303099]">50 per person</span>
      </div>
      {/* --------- 200 per person -------- */}
      <div className="flex items-center gap-[20px]">
        <FormControl
          sx={{ width: 89, height: 33 }}
          className="focus:border-none bg-[white] w-[89px] h-[33px]"
        >
          <Select
            value={account}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            className="w-[89px] h-[33px]"
            defaultValue="1"
          >
            {options?.map((el) => (
              <MenuItem value={el}>{el}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <span className="text-[#30303099]">200 per person</span>
      </div>
      {/* --------- 20 per person -------- */}
      <div className="flex items-center gap-[20px]">
        <FormControl
          sx={{ width: 89, height: 33 }}
          className="focus:border-none bg-[white] w-[89px] h-[33px]"
        >
          <Select
            value={account}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            className="w-[89px] h-[33px]"
            defaultValue="1"
          >
            {options?.map((el) => (
              <MenuItem value={el}>{el}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <span className="text-[#30303099]">20 per person</span>
      </div>
      {/* --------- 100 per person -------- */}
      <div className="flex items-center gap-[20px]">
        <FormControl
          sx={{ width: 89, height: 33 }}
          className="focus:border-none bg-[white] w-[89px] h-[33px]"
        >
          <Select
            value={account}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            className="w-[89px] h-[33px]"
            defaultValue="1"
          >
            {options?.map((el) => (
              <MenuItem value={el}>{el}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <span className="text-[#30303099]">100 per person</span>
      </div>
    </div>
  );
};

export default NoOfSeats;
