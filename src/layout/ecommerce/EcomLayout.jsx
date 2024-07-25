import React from "react";
import EcomFooter from "../../components/ecommerce/footer/EcomFooter";
import { Outlet } from "react-router";
import EcomHeader from "../../components/ecommerce/header/largeScreen/EcomHeader";
import BottomMenu from "../../components/ecommerce/bottomMenu/BottomMenu";

const EcomLayout = () => {
	return (
		<div className='w-screen h-screen flex flex-col overflow-y-scroll'>
			<EcomHeader />
			<div className='flex-1'>
				<Outlet />
			</div>
			<EcomFooter />
			<div className='absolute flex-1 bottom-0 block md:hidden z-50'>
				<BottomMenu />
			</div>
		</div>
	);
};

export default EcomLayout;
