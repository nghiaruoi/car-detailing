import React from "react";


const DynamicTwoColumnSection = ({ title, leftSection, rightSection }) => {
	return (
		<div className="dynamic-section">
			{/* Title on Top */}
			<div className="section-title">
				<h2 className="text-3xl font-bold text-gray-800 uppercase tracking-wide mb-6 pb-2 border-b-4 border-custom-blue">
					{title}
				</h2>
			</div>

			{/* Combined Left and Right Sections */}
			<div className="columns">
				<section className="includes">
					<ul>
						{leftSection.items.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</section>

				<section className="top-star">
					<ul>
						{rightSection.items.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</section>
			</div>
		</div>
	);
};

export default DynamicTwoColumnSection