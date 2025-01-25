import { Slide } from 'react-slideshow-image';
import './styles.css';
import 'react-slideshow-image/dist/styles.css';
import SlideDisplay from './Slide';

const slideImages = [
	{
		title: 'Only brand new wipes are use',
		text: 'High-quality car care components are used KochChemie® ExcellenceForExperts. KCx',
		imageSrc: '/images/towel.png',
	},
	{
		title: 'Nano Technology & Premium Mobile Service',
		text: 'High-quality car care components are used KochChemie® ExcellenceForExperts. KCx',
		imageSrc: '/images/bottles.png',
	},
	{
		title: 'Gentle Snow Foam',
		text: 'High-quality car care components are used KochChemie® ExcellenceForExperts. KCx',
		imageSrc: '/images/car.png',
	},
	{
		title: 'pH 7,5 Neutral',
		text: 'Due to its neutral pH composition, it does not cause corrosion on waxed or sealed surfaces',
		imageSrc: '/images/bottle.png',
	},
];

const Slideshow = () => {
	return (
		<div className="w-2/3 mx-auto">
			<Slide
				autoplay={true}
				duration={3000}
			>
				{slideImages.map((slide, index) => (
					<SlideDisplay
						key={index}
						title={slide.title}
						text={slide.text}
						imageSrc={slide.imageSrc}
					/>
				))}
			</Slide>
		</div>
	);
};

export default Slideshow;
