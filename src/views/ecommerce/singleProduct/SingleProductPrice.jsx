import React from "react";

const SingleProductPrice = ({ SingleProductData }) => {
	return (
		<div className='mt-4 flex items-center gap-3'>
			<div className='px-3 py-1 bg-hover text-lg font-semibold rounded-full'>
				<p>Price: €{SingleProductData.price}.00</p>
			</div>
			{SingleProductData.discounted_price !== null && (
				<div className='px-3 py-1 bg-hover text-sm font-semibold rounded-full line-through text-gray-500'>
					<p>
						Discount: €
						{SingleProductData.price - SingleProductData.discounted_price ||
							0.0}
						.00
					</p>
				</div>
			)}
			{SingleProductData.quantity !== 0 ? (
				<div className='px-3 py-1 bg-green-500/25 text-green-600 mx-20 text-md font-semibold rounded-full'>
					<p>In Stock: {SingleProductData.quantity}</p>
				</div>
			) : (
				<div className='px-3 py-1 bg-red-500/25 text-green-600 mx-20 text-md font-semibold rounded-full'>
					<p>Out Of Stock</p>
				</div>
			)}
		</div>
	);
};

export default SingleProductPrice;
