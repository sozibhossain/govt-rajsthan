import {Route, Routes} from "react-router-dom";
import ACCategory from "./Pages/ACCategory";
import BookingInfo from "./Pages/BookingInfo";
import BookingTicket from "./Pages/BookingTicket";
import ConfirmPage from "./Pages/ConfirmPage";
import Home2 from "./Pages/home/Home2";
import PreviewDetails from "./Pages/PreviewDetails";
import Success from "./Pages/Success";
import Ticket from "./Pages/Ticket";
import ViewMapped from "./Pages/ViewMapped";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home2 />} />
				<Route path="/booking-ticket" element={<BookingTicket />} />
				<Route path="/confirmation" element={<ConfirmPage />} />
				<Route path="/success" element={<Success />} />
				<Route path="/ticket" element={<Ticket />} />
				<Route path="/view" element={<ViewMapped />} />
				<Route path="/booking-info" element={<BookingInfo />} />
				<Route path="/account-category" element={<ACCategory />} />
				<Route path="/preview-details" element={<PreviewDetails />} />
			</Routes>
		</div>
	);
}

export default App;
