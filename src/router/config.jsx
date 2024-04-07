import { createBrowserRouter } from "react-router-dom";
import Root from "@page/Home/page.jsx"
import RouteError from './RouteError/Parking';
const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <RouteError />
	}
]);

export default router;
