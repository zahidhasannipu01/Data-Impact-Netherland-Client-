import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import AxiosInstance from "../../../../../axiosInstance";

const Products = () => {
	const [ProductData, setProductData] = useState([]);
	useEffect(() => {
		AxiosInstance.get("/product/eproducts")
			.then((res) => {
				setProductData(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		<div className='mb-5'>
			<ProductCard ProductData={ProductData} />
		</div>
	);
};

export default Products;
