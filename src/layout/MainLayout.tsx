import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<div className="min-h-screen bg-neutral">
			<Navbar />
			<div>Main Layout</div>
			<Outlet />
		</div>
	);
};

export default MainLayout;
