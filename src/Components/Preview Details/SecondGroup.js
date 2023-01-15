
import React from "react";
const SecondGroup = () => {
  // ------ dropdown state -----
  const [account, setAccount] = React.useState(1);
  const handleChange = (event) => {
    setAccount(event.target.value);
  };

  return (
		<div className="flex flex-row flex-wrap items-center gap-[30px]">
			<div>
				<p className="text-[#00000099] text-2xl font-semibold mb-3 capitalize">City:</p>
				<input
					placeholder="Jaipur"
					className="focus:outline-none p-3 h-12 rounded overflow-hidden border border-gray-400/70 shadow-md w-96"
					type="text"
				/>
			</div>
			<div>
				<p className="text-[#00000099] text-2xl font-semibold mb-3 capitalize">place:</p>
				<input
					placeholder="Hawa Mahal"
					className="focus:outline-none p-3 h-12 rounded overflow-hidden border border-gray-400/70 shadow-md w-96"
					type="text"
				/>
			</div>
			<div>
				<p className="text-[#00000099] text-2xl font-semibold mb-3 capitalize">GIS location:</p>
				<input
					placeholder="26.9239° N, 75.8267° E"
					className="focus:outline-none p-3 h-12 rounded overflow-hidden border border-gray-400/70 shadow-md w-96"
					type="text"
				/>
			</div>
		</div>
  );
};

export default SecondGroup;
