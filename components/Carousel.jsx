import React, { useState, useEffect } from 'react';
import '../src/style.css'
// Mock images - replace with your actual imports
import img1 from '../section/Home/img-indust/1.svg';
import img2 from '../section/Home/img-indust/2.svg';
import img3 from '../section/Home/img-indust/ferro-silicon-casting.svg';

function Carousel() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [windowSize, setWindowSize] = useState({
		width: typeof window !== 'undefined' ? window.innerWidth : 1200,
		height: typeof window !== 'undefined' ? window.innerHeight : 800
	});
	const lastIndex = 2;

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight
			});
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		const autoPlay = setInterval(() => {
			setActiveIndex((prevIndex) =>
				prevIndex === lastIndex ? 0 : prevIndex + 1
			);
		}, 6000);

		return () => clearInterval(autoPlay);
	}, [lastIndex]);

	const nextSlide = () => {
		setActiveIndex(prev => prev === lastIndex ? 0 : prev + 1);
	};

	const prevSlide = () => {
		setActiveIndex(prev => prev === 0 ? lastIndex : prev - 1);
	};

	const slides = [
		{
			image: img1,
			alt: 'Marble',
			category: 'NATURAL STONE',
			title: 'MARBLE',
			description: 'Timeless elegance meets natural beauty. Our premium marble collection offers unparalleled sophistication with unique veining patterns, perfect for luxurious interiors, countertops, and architectural masterpieces that demand distinction.',
			features: ['Heat Resistant', 'Luxury Finish', 'Unique Patterns']
		},
		{
			image: img2,
			alt: 'Granite',
			category: 'NATURAL STONE',
			title: 'GRANITE',
			description: 'Strength meets beauty in our premium granite collection. Known for exceptional durability, heat resistance, and stunning natural patterns, granite delivers unmatched performance for countertops, flooring, and architectural applications.',
			features: ['Scratch Resistant', 'Durable', 'Low Maintenance']
		},
		{
			image: img3,
			alt: 'Ferro Silicon',
			category: 'METALLURGY',
			title: 'FERRO\nSILICON',
			description: 'Essential alloys for modern steelmaking. Our ferro silicon products enhance steel strength, durability, and corrosion resistance, playing a crucial role in metallurgical processes across diverse industrial applications.',
			features: ['High Purity', 'Steel Enhancement', 'Corrosion Resistant']
		}
	];

	const isMobile = windowSize.width < 768;
	const isTablet = windowSize.width >= 768 && windowSize.width < 1024;

	return (
		<div className="carousel-container">
			<div className="carousel-inner">
				<div className="slides-container">
					{slides.map((slide, index) => (
						<div
							key={index}
							className={`slide ${activeIndex === index ? 'active' : ''}`}
							data-index={index}
						>
							{/* Full Width Background Image */}
							<div className="image-section">
								<img
									src={slide.image}
									alt={slide.alt}
									className="slide-image"
								/>
							</div>

							{/* Content Overlay with Gradient */}
							<div className="content-overlay" />

							{/* Content Section */}
							<div className="content-section">
								<div className={`content-inner ${activeIndex === index ? 'active' : ''}`}>
									<div className="content-grid">
										<div className="content-left">

											<h1 className={`title ${activeIndex === index ? 'active' : ''}`}>
												{slide.title}
											</h1>
											<span className={`category ${activeIndex === index ? 'active' : ''}`}>
												{slide.category}
											</span>

											<p className={`description ${activeIndex === index ? 'active' : ''}`}>
												{slide.description}
											</p>

											<div className={`features-container ${activeIndex === index ? 'active' : ''}`}>
												{slide.features.map((feature, idx) => (
													<span
														key={idx}
														className="feature-tag"
													>
														{feature}
													</span>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Navigation Arrows - Hidden on Mobile */}
				{!isMobile && (
					<div className="navigation-arrows">
						<button
							onClick={prevSlide}
							className="arrow-button prev"
							aria-label="Previous slide"
						>
							‹
						</button>

						<button
							onClick={nextSlide}
							className="arrow-button next"
							aria-label="Next slide"
						>
							›
						</button>
					</div>
				)}

				{/* Indicators */}
				<div className="indicators">
					<div className="slide-count">
						<span className="current-slide">
							{(activeIndex + 1).toString().padStart(2, '0')}
						</span>
						<span className="total-slides">
							/ {(slides.length).toString().padStart(2, '0')}
						</span>
					</div>

					<div className="dots-container">
						{slides.map((_, index) => (
							<button
								key={index}
								onClick={() => setActiveIndex(index)}
								className={`dot ${activeIndex === index ? 'active' : ''}`}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
			);
		}
export default Carousel;