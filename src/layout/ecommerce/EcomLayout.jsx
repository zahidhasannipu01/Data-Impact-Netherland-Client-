import React from "react";
import EcomFooter from "../../components/ecommerce/footer/EcomFooter";
import { Outlet } from "react-router";
import EcomHeader from "../../components/ecommerce/header/largeScreen/EcomHeader";
import BottomMenu from "../../components/ecommerce/bottomMenu/BottomMenu";

const EcomLayout = () => {
	return (
		<div className='w-full h-full flex flex-col relative '>
			<div className='w-full fixed top-0 z-[999] bg-white'>
				<EcomHeader />
			</div>
			<div className='flex-1 mt-16 2xl:mt-36 lg:mt-[7.8rem] md:mt-28'>
				<Outlet />
			</div>

			<EcomFooter />

			<div className='fixed flex-1 bottom-0 block md:hidden z-50'>
				<BottomMenu />
			</div>
		</div>
	);
};

export default EcomLayout;
