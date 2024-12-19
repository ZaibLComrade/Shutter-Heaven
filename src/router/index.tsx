import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout/>,
		children: [
			{
				path: "/",
				element: <div>This is a child element</div>
			}
		]
	}
])

export default router;
