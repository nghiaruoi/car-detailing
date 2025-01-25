import React from 'react';

function SlideDisplay({ title, text, imageSrc }) {
	return (
		<div className="each-fade mx-4 md:mx-20 flex flex-col md:flex-row">
			<div className="w-full md:w-2/3">
				<h1 className="text-2xl md:text-6xl font-bold text-slate-500">
					<strong>{title}</strong>
				</h1>
				<div className="mt-4 md:mt-8">
					<p className="text-sm md:text-lg">
						<strong>{text}</strong>
					</p>
				</div>
			</div>
			<div className="w-full md:w-1/3 mt-4 md:mt-0">
				<img
					src={imageSrc}
					alt={title}
				/>{' '}
				{/* Add alt text for accessibility */}
			</div>
		</div>
	);
}

export default SlideDisplay;
