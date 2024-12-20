import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<div className="min-h-screen bg-neutral font-lato">
			<Navbar />
			<Outlet />
		</div>
	);
};

export default MainLayout;
