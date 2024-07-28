import EcomLayout from "../../layout/ecommerce/EcomLayout";
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
	],
};

export default EcomRoutes;
