import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DynamicTwoColumnDescriptionSection from './DynamicTwoColumnDescriptionSection';
import DynamicTwoColumnSection from './DynamicTwoColumnSection';

const Cosmopolitan = () => {
	useEffect(() => {
		// Reset scroll position to the top when the component mounts
		window.scrollTo(0, 0);
	}, []);
	// Define paths for the Schedule Now links
	const contactPath = '/contact';

	return (
		<div className="bg-gradient-to-b from-white to-custom-blue  p-6 min-h-screen">
			<div className="container mx-auto">
				{/* Summary Section */}
				{/* Summary Section */}
				<div className="text-center mb-8 p-4">
					<h1 className="text-6xl mb-6">
						<span className="text-black font-bold">Premium </span>
						<span className="text-custom-blue font-bold">
							Cosmopolitan Detailing
						</span>
					</h1>
					<p className=" leading-7">
						At Cosmopolitan Detailing, we redefine automotive excellence with
						our premium Exterior Detailing Service, designed to restore your
						vehicle’s showroom-worthy brilliance. Our expert detailers employ
						cutting-edge techniques to eliminate swirl marks, scratches, and
						environmental contaminants, while our ceramic coatings and
						protective sealants ensure long-lasting, hydrophobic shine. From
						precision paint correction to wheel rejuvenation and trim
						restoration, every inch of your vehicle receives meticulous
						attention—transforming dull, weathered surfaces into a flawless,
						head-turning finish. Trust Cosmopolitan Detailing to elevate your
						car’s curb appeal with uncompromising craftsmanship and results that
						speak for themselves.
					</p>
				</div>

				{/* Our Packages Title and Arrow */}
				<h2 className="text-3xl text-custom-blue  text-center font-bold mb-4">
					Our Packages
				</h2>
				<DownArrow />

				{/* Packages Section */}
				<div className="grid grid-cols-1 gap-8">
					{/* Entry Level Package */}
					<PackageSection
						imagePath="/images/Paint Correction Stage 1.jpg"
						alt="Entry Level Package"
						title="Package"
						description="With our entry-level package, we execute a meticulous single-step paint correction procedure utilizing a gentle compound. This method effectively eliminates a majority of minor scratches and swirl marks from your vehicle's paint surface. Not only does this meticulous process restore your car's original luster, but it also revitalizes the overall appearance of your vehicle's paint finish. To further safeguard the newly corrected surface, we apply a high-quality sealant at the end of the process. This sealant not only enhances the gloss and depth of the paint but also provides lasting protection against environmental elements, ensuring a longer-lasting, showroom-quality finish for your vehicle."
						coupeSedanPrice="$400"
						oversizePrice="Additional cost starting at $150 and up."
						to={contactPath}
					/>
				</div>
			</div>
		</div>
	);
};

const DownArrow = () => (
	<div className="text-center text-custom-blue  mb-4">
		<svg
			className="w-8 h-8 mx-auto animate-bounce"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M19 14l-7 7m0 0l-7-7m7 7V3"
			></path>
		</svg>
	</div>
);

const PackageSection = ({
	imagePath,
	alt,
	title,
	description,
	coupeSedanPrice,
	oversizePrice,
	to,
}) => (
	<div className="bg-white p-6 rounded-xl shadow-xl">
		<img
			src={imagePath}
			alt={alt}
			className="w-full h-52 object-cover mb-4 rounded-xl"
		/>
		<h2 className="flex items-center text-2xl font-semibold mb-4">
			{title === 'Entry Level Package' && (
				<img
					src="/icons/car.svg"
					alt="Car Icon"
					className="w-10 h-10 p-1 bg-custom-blue rounded-full mr-2"
				/>
			)}
			{title === 'Premium Package' && (
				<img
					src="/icons/car.svg"
					alt="Car Side Icon"
					className="w-10 h-10 p-1 bg-custom-blue rounded-full mr-2"
				/>
			)}
			{title}
		</h2>
		{/* Dynamic Two-Column Section */}
		<p className="text-gray-700 mb-4">{description}</p>
		{/* <div className="mb-4">
			<ul className="list-disc list-inside text-custom-blue">
				<li className="text-lg font-semibold mb-2">
					Coupes & Sedans: {coupeSedanPrice}
				</li>
				<li className="text-lg font-semibold mb-2">
					SUV & Oversize: {oversizePrice}
				</li>
			</ul>
		</div> */}
		<DynamicTwoColumnSection {...sectionWash} />
    <DynamicTwoColumnSection {...sectionInterior} />
    <DynamicTwoColumnSection {...sectionExterior} />
		<DynamicTwoColumnDescriptionSection {...paragraphData} />
		{/* Schedule Now Button */}
		<LearnMoreButton to={to} />
	</div>
);

// Constant for the Schedule Now button
const LearnMoreButton = ({ to }) => (
	<Link
		to={to}
		className="mt-4 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-custom-blue rounded-full shadow-md group"
	>
		<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-custom-blue group-hover:translate-x-0 ease">
			<svg
				className="w-6 h-6"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M14 5l7 7m0 0l-7 7m7-7H3"
				></path>
			</svg>
		</span>
		<span className="absolute flex items-center justify-center w-full h-full text-custom-blue transition-all duration-300 transform group-hover:translate-x-full ease">
			Schedule Now
		</span>
		<span className="relative invisible">Schedule Now</span>
	</Link>
);

const paragraphData = {
	leftSection: {
		title: 'Top Star',
		paragraph:
			'Premium emulsion for deep pore cleaning and refreshing of plastic and rubber parts such as consoles, interior trim, seals, etc. Top Star gives the surface a persistent semi-gloss natural shine and protects it from new contaminants and ultraviolet radiation for a long time. Special active ingredients give the plastic elasticity, have an antistatic effect and give it a new attractive appearance. It has a fresh aroma. Approved by Daimler.',
		image: '/images/topstar.png',
	},
	rightSection: {
		title: 'ProtectLeatherCare',
		paragraph:
			'Premium emulsion for the care of all leather parts. Creates a colour-refreshing sleek result and intensifies the incomparable smell of leather. Provides all types of leather with the necessary care and a pleasantly soft feel.',
		image: '/images/premiumleathercare.png',
	},
};


const sectionWash = {
	title: 'Includes Premium Car Wash:',
	leftSection: {
		items: [
      'Hand Wash',
      'Clay Wash'
		],
	},
	rightSection: {
		title: 'Top Star',
		description:
			'Premium emulsion for deep pore cleaning and refreshing of plastic and rubber parts such as consoles, interior trim, seals, etc. Top Star gives the surface a persistent semi-gloss natural shine and protects it from new contaminants and ultraviolet radiation for a long time. Special active ingredients give the plastic elasticity, have an antistatic effect and give it a new attractive appearance. It has a fresh aroma. Approved by Daimler.',
		items: [
      'Clean Wheels',
      'Clean Jambs'
		],
	},
};

const sectionExterior = {
	title: 'Includes Exterior Detailing:',
	leftSection: {
		items: [
			'Paint Decontamination iron Remover',
      'Synthetic Sealant for Gloss Finish and Hydrophobicity',
			'Clay Bar exterior paint surfaces to remove impurities',
			'Polishing',
		],
	},
	rightSection: {
		title: 'Top Star',
		description:
			'Premium emulsion for deep pore cleaning and refreshing of plastic and rubber parts such as consoles, interior trim, seals, etc. Top Star gives the surface a persistent semi-gloss natural shine and protects it from new contaminants and ultraviolet radiation for a long time. Special active ingredients give the plastic elasticity, have an antistatic effect and give it a new attractive appearance. It has a fresh aroma. Approved by Daimler.',
		items: [
      'Removes all swirl marks and light scratches',
			'Waxing Premium carnauba',
			'Tire Dressing',
		],
	},
};

const sectionInterior = {
	title: 'Includes Interior Detailing:',
	leftSection: {
		items: [
			'Hand Wash',
			'Cleaning Wheels Vacuuming',
			'Cleaning Seats',
			'Cleaning Plastics',
			'Cleaning Consoles',
			'Cleaning Windows',
			'Fresh Up Fragrance',
			'Cleaning Leather & plastics',
		],
	},
	rightSection: {
		title: 'Top Star',
		description:
			'Premium emulsion for deep pore cleaning and refreshing of plastic and rubber parts such as consoles, interior trim, seals, etc. Top Star gives the surface a persistent semi-gloss natural shine and protects it from new contaminants and ultraviolet radiation for a long time. Special active ingredients give the plastic elasticity, have an antistatic effect and give it a new attractive appearance. It has a fresh aroma. Approved by Daimler.',
		items: [
			'Cleaning Interior trim',
			'Cleaning Floor',
			'Cleaning Floor mats',
			'Cleaning Ceiling',
			'Cleaning Trunk',
			'Care for Leather',
			'Cleaning and Detailing the whole inside of the car',
		],
	},
};

export default Cosmopolitan;
