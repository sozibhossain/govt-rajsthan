import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const options = [1, 2, 3, 4];
const TableComp = () => {
	return (
		<div className="w-full overflow-auto bg-white p-4 rounded-xl">
			<TableContainer component={Paper} sx={{backgroundColor: "transparent"}}>
				<Table aria-label="simple table" >
					<TableHead>
						<TableRow sx={{background: "#314668"}}>
							<TableCell sx={{fontSize: "16px", fontWeight: "700", color: "white"}} align="center">
								Nodel Department
							</TableCell>
							<TableCell sx={{fontSize: "16px", fontWeight: "700", color: "white"}} align="center">
								Site Name
							</TableCell>
							<TableCell sx={{fontSize: "16px", fontWeight: "700", color: "white"}} align="center">
								Site Incharge Name
							</TableCell>
							<TableCell sx={{fontSize: "16px", fontWeight: "700", color: "white"}} align="center">
								SSO Id
							</TableCell>
							<TableCell sx={{fontSize: "16px", fontWeight: "700", color: "white"}} align="center">
								Mob No.
							</TableCell>
							<TableCell sx={{fontSize: "16px", fontWeight: "700", color: "white"}} align="center">
								Status
							</TableCell>
							<TableCell sx={{fontSize: "16px", fontWeight: "700", color: "white"}} align="center">
								Modify by
							</TableCell>
							<TableCell sx={{fontSize: "16px", fontWeight: "700", color: "white", borderTopRightRadius: "4px"}} align="center">
								Modify Date
							</TableCell>
							<TableCell
								sx={{fontSize: "16px", fontWeight: "700", color: "white", backgroundColor: "white", borderBottom: 0}}
								align="right"
							></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{options?.map((el) => (
							<TableRow sx={{"&:last-child td, &:last-child th": {border: 0}}}>
								<TableCell
									sx={{
										fontSize: "16px",
										fontWeight: "500",
										color: "#1E1E1E80",
									}}
									component="th"
									scope="row"
									align="center"
								>
									Department Name
								</TableCell>
								<TableCell
									sx={{
										fontSize: "16px",
										fontWeight: "500",
										color: "#1E1E1E80",
									}}
									align="center"
								>
									Hawa Mahal
								</TableCell>
								<TableCell
									sx={{
										fontSize: "16px",
										fontWeight: "500",
										color: "#1E1E1E80",
									}}
									align="center"
								>
									Mr. Anil
								</TableCell>
								<TableCell
									sx={{
										fontSize: "16px",
										fontWeight: "500",
										color: "#1E1E1E80",
									}}
									align="center"
								>
									xyz@gmail.com
								</TableCell>
								<TableCell
									sx={{
										fontSize: "16px",
										fontWeight: "500",
										color: "#1E1E1E80",
									}}
									align="center"
								>
									98xxxxxxxx
								</TableCell>
								<TableCell
									sx={{
										fontSize: "16px",
										fontWeight: "500",
										color: "#1E1E1E80",
									}}
									align="center"
								>
									Active
								</TableCell>
								<TableCell
									sx={{
										fontSize: "16px",
										fontWeight: "500",
										color: "#1E1E1E80",
									}}
									align="center"
								>
									SSO n
								</TableCell>
								<TableCell
									sx={{
										fontSize: "16px",
										fontWeight: "500",
										color: "#1E1E1E80",
										height: "100%",
										borderBottomRightRadius: "4px",
									}}
									align="center"
								>
									31/12/2022
								</TableCell>
								<TableCell
									sx={{
										backgroundColor: "bg-white",
										borderBottom: 0,
									}}
									align="right"
								>
									<div className="flex w-full justify-end gap-x-4">
										<button className="px-3  text-white bg-[#3C5071] rounded-[4px]">View</button>
										<button className="px-3  text-white bg-[#3C5071] rounded-[4px]">Edit</button>
										<div className="flex flex-col gap-[3px] font-[500]">
											<button className="text-xs px-2.5 py-[0.5px] bg-[#139907] text-white rounded-[4px]">Active</button>
											<button className="text-xs px-2.5 py-[0.5px] bg-[#8A070F] text-white rounded-[4px]">Deactive</button>
										</div>
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default TableComp;
