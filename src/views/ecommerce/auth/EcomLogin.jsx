import React, { useState } from "react";
import Container from "../../../utils/ecommerce/EcomContainer";
import LoginBanner from "../../../assets/ecommerce/banner/img.jpg";
import Logo from "../../../assets/ecommerce/logo/official_logo.jpg";
import { MdEmail, MdLock, MdPassword } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { BsGoogle } from "react-icons/bs";
const EcomLogin = () => {
	const [ShowPassword, setShowPassword] = useState(false);
	return (
		<Container>
			<div className='grid grid-flow-col items-center grid-cols-2'>
				<div className='flex justify-end items-center'>
					<div className='w-[450px] h-[550px] bg-slate-300 rounded-3xl overflow-hidden'>
						<img
							src={LoginBanner}
							className='w-full h-full object-fill'
							alt=''
						/>
					</div>
				</div>
				<div className='flex justify-center items-center flex-col'>
					<div>
						<img className='w-auto h-[40px]' src={Logo} alt='' />
					</div>
					<div className='text-center mt-8'>
						<p className='text-2xl font-bold'>Welcome Back!</p>
						<p className='text-md font-semibold text-slate-400'>
							Data Impact - Netherland
						</p>
					</div>
					<div className='mt-10 mb-5'>
						<div className='border mt-5 flex items-center rounded-md'>
							<div className='p-3 text-2xl text-slate-400'>
								<MdEmail />
							</div>
							<div>
								<input
									type='text'
									className='w-[350px] p-3 focus:outline-none'
									placeholder='Email Address'
								/>
							</div>
						</div>
					</div>
					<div>
						<div className='border flex items-center rounded-md'>
							<div className='p-3 text-2xl text-slate-400'>
								<MdLock />
							</div>
							<div>
								<input
									type={ShowPassword ? "password" : "text"}
									className='w-[300px] p-3 focus:outline-none'
									placeholder='Password'
								/>
							</div>
							<div
								onClick={() => setShowPassword(!ShowPassword)}
								className='p-3 text-2xl text-slate-400'>
								{ShowPassword ? <IoMdEye /> : <MdPassword />}
							</div>
						</div>
						<div className='mt-1 flex justify-end items-end text-xs hover:font-semibold hover:text-secondary cursor-pointer duration-500'>
							<p>Forget Password ?</p>
						</div>
					</div>
					<div className='w-[350px] h-[40px] mt-10 rounded-lg hover:bg-primary duration-300 active:bg-secondary flex justify-center items-center bg-secondary cursor-pointer'>
						<div className='text-md font-semibold text-white'>
							<p>Login</p>
						</div>
					</div>
					<div className='w-[350px] h-auto mt-6'>
						<hr />
						<p className='text-center p-3  rounded-full relative -top-3 text-slate-400 -right-[165px] bg-white flex justify-center items-center w-4 h-4'>
							Or
						</p>
					</div>
					<div className='flex gap-3 items-center justify-center mb-2'>
						<div className='w-[150px] h-[40px] bg-white shadow-slate-700/20 border rounded-md shadow flex gap-3 items-center px-2 hover:bg-blue-600 hover:text-white scale-100 text-blue-600 hover:scale-105 duration-300 justify-center cursor-pointer'>
							<div className=' '>
								<FaFacebook />
							</div>
							<div className='font-semibold text-sm'>Facebook</div>
						</div>
						<div className='w-[150px] h-[40px] bg-white shadow-slate-700/20 border rounded-md shadow flex gap-3 items-center px-2 hover:bg-rose-600 hover:text-white scale-100 text-rose-600 hover:scale-105 duration-300 justify-center cursor-pointer'>
							<div className=' '>
								<BsGoogle />
							</div>
							<div className='font-semibold text-sm'>Google</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default EcomLogin;
