import React from "react";
import EcomHeader from "../../components/ecommerce/header/EcomHeader";
import EcomFooter from "../../components/ecommerce/footer/EcomFooter";
import { Outlet } from "react-router";

const EcomLayout = () => {
	return (
		<div className='w-screen h-screen flex flex-col'>
			<EcomHeader />
			<div className='flex-1'>
				<Outlet />
			</div>
			<EcomFooter />
		</div>
	);
};

export default EcomLayout;
