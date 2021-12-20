import Footer from "./components/Footer";
import Login from "./pages/Login";

import { Routes, Route, useLocation } from 'react-router-dom'
import Home from "./pages/Home";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";

function App() {

	const location = useLocation();

	useEffect(() => {
		console.log(location);
	}, [location])

	return (
		<div className="w-screen h-screen bg-blue-50 flex overflow-y-scroll"> {/* remove bg */}

			{location.pathname !== "/" && <Sidebar/>}

			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/home" element={<Home />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
