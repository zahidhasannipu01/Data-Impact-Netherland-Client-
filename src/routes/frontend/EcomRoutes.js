import EcomLayout from "../../layout/ecommerce/EcomLayout";
import EcomLogin from "../../views/ecommerce/auth/EcomLogin";
import Home from "../../views/ecommerce/home/Home";
import SingleProduct from "../../views/ecommerce/singleProduct/SingleProduct";

const EcomRoutes = {
	path: "/",
	element: <EcomLayout />,
	children: [
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/product/:id/:product_name",
			element: <SingleProduct />,
		},
		{
			path: "/login",
			element: <EcomLogin />,
		},
	],
};

export default EcomRoutes;
