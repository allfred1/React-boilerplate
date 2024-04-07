import React from "react";
import ReactDOM from "react-dom/client";
import route from "./router/config.jsx";
import { RouterProvider } from "react-router-dom";
import "@styles/project.scss";


ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={route} />
	</React.StrictMode>
);
