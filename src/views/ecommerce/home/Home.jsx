import React from "react";
import Container from "../../../utils/ecommerce/EcomContainer";
import Hero from "./components/hero/Hero";
import Brand from "./components/brand/Brand";
import Feature from "./components/feature/Feature";
import Products from "./components/products/Products";

const Home = () => {
	return (
		<div className=''>
			<Container>
				<Hero />
				<Brand />
				<Feature />
				<Products />
			</Container>
		</div>
	);
};

export default Home;
