import React from "react";

const SingleProductSpecification = () => {
	return (
		<div>
			<table class='table-auto border p-4'>
				<thead className='bg-slate-400'>
					<tr>
						<th className='p-4'>Song</th>
						<th>Artist</th>
						<th>Year</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className='p-4'>
							The Sliding Mr. Bones (Next Stop, Pottersville)
						</td>
						<td>Malcolm Lockyer</td>
						<td>1961</td>
					</tr>
					<tr>
						<td>Witchy Woman</td>
						<td>The Eagles</td>
						<td>1972</td>
					</tr>
					<tr>
						<td>Shining Star</td>
						<td>Earth, Wind, and Fire</td>
						<td>1975</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default SingleProductSpecification;
