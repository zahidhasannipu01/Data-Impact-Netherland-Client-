import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LaptopImg from "../../../../../assets/ecommerce/product/a.jpg";
import LaptopImg2 from "../../../../../assets/ecommerce/product/2.webp";
import { FaRegHeart } from "react-icons/fa6";
import { MdEuro } from "react-icons/md";
import { LuGitCompare } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ProductLoader from "./ProductLoader";
import { Link } from "react-router-dom";

const sanitizeProductName = (name) => {
	return name
		.toLowerCase() // Convert to lowercase
		.replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
		.replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
};

const ProductCard = ({ ProductData }) => {
	const shorterProductTitile = (text, maxLength) => {
		if (text.length <= maxLength) {
			return text;
		}
		return text.substring(0, maxLength) + "...";
	};

	return (
		<div className='flex gap-3 md:gap-5 lg:gap-4 2xl:gap-4 items-center flex-wrap'>
			{ProductData.length === 0 ? (
				<>
					<ProductLoader />
				</>
			) : (
				<>
					{ProductData?.slice(35, 47).map((items) => {
						const ProductTitle = shorterProductTitile(items.product_name, 35);
						return (
							<div
								key={items.id}
								className='relative scale-100 hover:scale-105 duration-300  lg:w-[208.5px] 2xl:w-[200px] md:w-[212px] w-[180px] h-auto border rounded-xl overflow-hidden bg-white'>
								<div className='absolute top-2 right-2 z-[999] w-6 h-6 flex justify-center items-center text-lg bg-white  drop-shadow-lg cursor-pointer duration-300 hover:bg-secondary hover:text-white p-[0.3rem] text-gray-400 rounded-full '>
									<FaRegHeart />
								</div>
								<Swiper modules={[Autoplay]} autoplay={{ delay: 5000 }}>
									{items.product_images.map((image, index) => (
										<SwiperSlide key={index}>
											<div className=' w-full h-[150px] overflow-hidden'>
												<LazyLoadImage
													src={image.image_url}
													alt={`Product Image ${index + 1}`}
													effect='blur'
												/>
											</div>
										</SwiperSlide>
									))}
								</Swiper>

								<div className='flex justify-between items-center mx-2 mt-3'>
									<div className='flex justify-center items-center text-xl font-semibold text-primary'>
										<div className='mt-1 mb-0'>
											<MdEuro />
										</div>
										<p>{items.price}</p>
										{items.discounted_price !== null && (
											<div className='mx-2 text-gray-400 text-sm flex items-center line-through'>
												<MdEuro />
												<p>{items.discounted_price}</p>
											</div>
										)}
									</div>
									<div className='w-6 h-6 flex justify-center items-center text-lg  bg-hover  drop-shadow-sm cursor-pointer duration-300 hover:bg-primary hover:text-white p-[0.3rem] text-primary rounded-full'>
										<LuGitCompare />
									</div>
								</div>
								<Link
									to={`/product/${items.id}/${sanitizeProductName(
										items.product_name
									)}`}>
									<div className='mt-3 p-[0.3rem] text-center'>
										<p className='text-md font-semibold'>{ProductTitle}</p>
									</div>
								</Link>
								<div className='mt-3 mb-2 px-[0.5rem] flex justify-between items-center'>
									<div className='flex justify-center items-center gap-[0.1rem] px-2 rounded-full text-xs bg-primary text-white'>
										<div>
											<FaStar />
										</div>
										<div>
											<p>4.8</p>
										</div>
									</div>
									<div className='w-6 h-6 flex justify-center items-center text-lg  bg-primary  drop-shadow-sm cursor-pointer duration-300 hover:bg-hover text-white hover:text-primary p-[0.3rem]  rounded-full'>
										<FaCartPlus />
									</div>
								</div>
							</div>
						);
					})}
				</>
			)}
		</div>
	);
};

export default ProductCard;
