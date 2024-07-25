import React from "react";
import { GoGitCompare } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

const EcomSideIcons = () => {
	return (
		<div className='flex gap-3 md:gap-1'>
			<div className='flex gap-1 items-center duration-200 hover:bg-hover px-2 py-1 rounded-md'>
				<div className='p-2 relative bg-primary text-lg text-white rounded-full duration-200 cursor-pointer hover:bg-secondary'>
					<GoGitCompare />
					<span className='absolute w-5 h-5 -top-2 left-5 bg-secondary text-sm flex justify-center items-center rounded-full'>
						2
					</span>
				</div>
				<div className='block md:hidden lg:hidden xl:block'>
					<p>Compare</p>
				</div>
			</div>
			<div className='flex gap-3 items-center duration-200 px-2 py-1 rounded-md cursor-pointer'>
				<div className='p-2 relative bg-primary text-lg text-white rounded-full duration-200 cursor-pointer'>
					<IoCartOutline />

					<span className='absolute w-5 h-5 -top-2 left-5 bg-secondary text-sm flex justify-center items-center rounded-full'>
						2
					</span>
				</div>
				<div className='block md:hidden lg:hidden xl:block bg-hover px-3 py-1 rounded-md font-semibold'>
					<p>€2590</p>
				</div>
			</div>
			<div className='flex gap-1 items-center duration-200 hover:bg-hover px-2 py-1 rounded-md cursor-pointer'>
				<div className='p-2 bg-primary text-lg text-white rounded-full duration-200  hover:bg-secondary'>
					<FaRegUserCircle />
				</div>
				<div className='block md:hidden lg:hidden xl:block'>
					<p>Login/Signup</p>
				</div>
			</div>
		</div>
	);
};

export default EcomSideIcons;
