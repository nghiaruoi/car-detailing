import React from 'react';

function SlideDisplay({ title, text, imageSrc }) {
	return (
		<div className="each-fade mx-4 md:mx-20 flex flex-col md:flex-row items-start">
			<div className="w-full md:w-2/3 text-left">
				<h1 className="text-2xl md:text-6xl font-bold text-slate-500 text-left">
					<strong>{title}</strong>
				</h1>
				<div className="mt-4 md:mt-8 text-left">
					<p className="text-sm md:text-lg text-left">
						<strong>{text}</strong>
					</p>
				</div>
			</div>
			<div className="w-full md:w-1/3 mt-4 md:mt-0">
				<img
					src={imageSrc}
					alt={title}
					className="w-full h-auto"
				/>
			</div>
		</div>
	);
}

export default SlideDisplay;
