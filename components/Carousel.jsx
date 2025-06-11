import React, { useState, useEffect } from 'react';
import '../src/style.css';

// import img1 from '../img/9.png';
// import img2 from '../img/7A.png';
// import img3 from '../img/4.png';
// import './Carousel.css';
import img1 from '../src/img/marble image (4).png';
import img2 from '../src/img/granite image.png';
import img3 from '../src/img/stone.png';


function Carousel() {
	const [activeIndex, setActiveIndex] = useState(0);
	const lastIndex = 2; // Since there are 3 items

	useEffect(() => {
		const autoPlay = setInterval(() => {
			setActiveIndex((prevIndex) =>
				prevIndex === lastIndex ? 0 : prevIndex + 1
			);
		}, 500000);

		return () => clearInterval(autoPlay);
	}, [lastIndex]);

	const nextSlide = () =>
		setActiveIndex(activeIndex === lastIndex ? 0 : activeIndex + 1);
	const prevSlide = () =>
		setActiveIndex(activeIndex === 0 ? lastIndex : activeIndex - 1);

	return (
		<section className='carousel'>
			<div className='list'>
				<div className={`item ${activeIndex === 0 ? 'active' : ''}`}>
					<figure>
						<img src={img1} alt='Epoxy' />
					</figure>
					<div className='content'>
						<p className='category'></p>
						<h2>
							MARBLE
						</h2>
						<p className='description'>
							Granite is a durable, natural stone known for its strength, beauty, and resistance to heat and scratches. Ideal for countertops, flooring, and wall cladding, it adds timeless elegance to any space with its unique patterns and rich color variations.
						</p>
					</div>
				</div>
				<div className={`item ${activeIndex === 1 ? 'active' : ''}`}>
					<figure>
						<img src={img2} alt='Mechanical Supplies' />
					</figure>
					<div className='content'>
						{/* <p className='category'>
							Engineering <br />
							Component
						</p> */}
						<h2>
							VALVES
							<br />& PUMP
						</h2>
						<p className='description'>
							The engineering goods industry produces machinery, tools, and
							equipment for sectors like construction and manufacturing. It
							emphasizes precision and innovation to boost productivity and
							efficiency. Key areas include industrial machinery and automotive
							components.
						</p>
					</div>
				</div>
				<div className={`item ${activeIndex === 2 ? 'active' : ''}`}>
					<figure>
						<img src={img3} alt='Ferro Alloys' />
					</figure>
					<div className='content'>
						{/* <p className='category'>Alloys</p> */}
						<h2>
							FERRO
							<br /> SILICON
						</h2>
						<p className='description'>
							The ferro alloys industry produces alloys of iron combined with
							elements like manganese and chromium, essential for enhancing
							steel properties. These alloys play a crucial role in steelmaking,
							improving strength, durability, and corrosion resistance.
						</p>
					</div>
				</div>
			</div>
			<div className='arrows'>
				<button id='prev' onClick={prevSlide}>
					<i className='fa-solid fa-chevron-left'></i>
				</button>
				<button id='next' onClick={nextSlide}>
					<i className='fa-solid fa-chevron-right'></i>
				</button>
			</div>
			<div className='indicators'>
				<div className='number'>{`0${activeIndex + 1}`}</div>
				<ul>
					<li
						className={activeIndex === 0 ? 'active' : ''}
						onClick={() => setActiveIndex(0)}
					></li>
					<li
						className={activeIndex === 1 ? 'active' : ''}
						onClick={() => setActiveIndex(1)}
					></li>
					<li
						className={activeIndex === 2 ? 'active' : ''}
						onClick={() => setActiveIndex(2)}
					></li>
				</ul>
			</div>
		</section>
	);
}

export default Carousel;
