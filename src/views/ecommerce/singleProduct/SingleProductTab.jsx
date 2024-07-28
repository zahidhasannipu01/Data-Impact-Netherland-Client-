import React, { useState } from "react";
import SingleProductDescription from "./SingleProductDescription";
import SingleProductSpecification from "./SingleProductSpecification";
import SingleProductReviews from "./SingleProductReviews";

const SingleProductTab = ({ SingleProductData }) => {
	const [Toggle, setToggle] = useState(1);

	const updateToggle = (id) => {
		setToggle(id);
	};
	console.log(Toggle);
	return (
		<div>
			<div className='flex gap-4'>
				<div
					onClick={() => updateToggle(1)}
					className='w-auto h-10 bg-primary font-semibold text-white hover:bg-secondary flex justify-center items-center p-2 rounded-sm'>
					<p>Descriptions</p>
				</div>
				<div
					onClick={() => updateToggle(2)}
					className='w-auto h-10 bg-primary font-semibold text-white hover:bg-secondary flex justify-center items-center p-2 rounded-sm'>
					<p>Specifications</p>
				</div>
				<div
					onClick={() => updateToggle(3)}
					className='w-auto h-10 bg-primary font-semibold text-white hover:bg-secondary flex justify-center items-center p-2 rounded-sm'>
					<p>Reviews</p>
				</div>
			</div>
			{Toggle === 1 && (
				<SingleProductDescription SingleProductData={SingleProductData} />
			)}
			{Toggle === 2 && <SingleProductSpecification />}
			{Toggle === 3 && <SingleProductReviews />}
		</div>
	);
};

export default SingleProductTab;
