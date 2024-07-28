import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Banner from "../../../../../assets/ecommerce/banner/banner-1.jpg";
import Banner2 from "../../../../../assets/ecommerce/banner/banner.jpg";
import { Autoplay } from "swiper/modules";

const Hero = () => {
	return (
		<div className=' flex flex-wrap md:flex-wrap lg:flex-nowrap 2xl:flex-nowrap gap-3 items-center overflow-hidden'>
			<div className=' h-[170px] md:w-auto md:h-[280px]  lg:w-[810px] lg:h-[280px]  2xl:w-[810px] 2xl:h-[376.72px] overflow-hidden rounded-lg md:rounded-2xl'>
				<Swiper
					autoplay={{
						delay: 3000,
					}}
					modules={[Autoplay]}
					className='mySwiper '>
					<SwiperSlide className='w-full h-full'>
						<img
							className='w-full h-full object-cover'
							src={Banner}
							alt='Banner 1'
						/>
					</SwiperSlide>
					<SwiperSlide className='w-full h-full'>
						<img
							className='w-full h-full object-cover'
							src={Banner2}
							alt='Banner 2'
						/>
					</SwiperSlide>
				</Swiper>
			</div>
			<div className='flex md:flex lg:flex-col 2xl:flex-col gap-1 lg:gap-3 2xl:gap-3'>
				<div>
					<Swiper className='mySwiper w-auto h-[80px] lg:w-auto lg:h-[135px] 2xl:w-[460px] 2xl:h-[180px]  md:w-[342px] md:h-[120px] overflow-hidden rounded-lg md:rounded-2xl'>
						<SwiperSlide className='w-full h-full'>
							<img
								className='w-full h-full object-cover'
								src={Banner}
								alt='Banner 1'
							/>
						</SwiperSlide>
					</Swiper>
				</div>
				<div>
					<Swiper className='mySwiper w-auto h-[80px] lg:w-auto lg:h-[135px] 2xl:w-[460px] 2xl:h-[180px] md:w-[342px] md:h-[120px] overflow-hidden rounded-lg md:rounded-2xl'>
						<SwiperSlide className='w-full h-full'>
							<img
								className='w-full h-full object-cover'
								src={Banner}
								alt='Banner 1'
							/>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default Hero;
