import EcomLayout from "../../layout/ecommerce/EcomLayout";
import Home from "../../views/ecommerce/home/Home";

const EcomRoutes = {
	path: "/",
	element: <EcomLayout />,
	children: [
		{
			path: "/",
			element: <Home />,
		},
	],
};

export default EcomRoutes;
