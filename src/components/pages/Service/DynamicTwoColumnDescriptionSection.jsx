import React from 'react';

const DynamicTwoColumnDescriptionSection = ({ leftSection, rightSection }) => {
	return (
		<div className="columns">
			{/* Left Section (Includes) */}
			<div className="includes">
				<section>
					<h2 className="text-3xl font-bold text-gray-800 uppercase tracking-wide mb-4">
						{leftSection.title}
					</h2>
					{/* Replace list with two paragraphs */}
					<p>{leftSection.paragraph}</p>
				</section>
				{/* Image at the bottom of the left column */}
				<div className="mt-auto pt-6">
					<img
						src={leftSection.image} // Pass the image URL as a prop
						alt="Left Section"
						className="w-64 h-auto"
					/>
				</div>
			</div>

			{/* Right Section (Top Star) */}
			<div className="top-star flex flex-col h-full">
				<section className="flex-grow">
					<h2 className="text-3xl font-bold text-gray-800 uppercase tracking-wide mb-4">
						{rightSection.title}
					</h2>
					<p>{rightSection.paragraph}</p>
				</section>
				<div className="mt-auto pt-6">
					{' '}
					{/* Changed to self-start for left alignment */}
					<img
						src={rightSection.image}
						alt="Right Section"
						className="w-64 h-auto"
					/>
				</div>
			</div>
		</div>
	);
};

export default DynamicTwoColumnDescriptionSection;
