import React, { useEffect } from 'react';
import './Industries.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import oilImage from './img-indust/oil-1.jpg';
import alloyImage from './img-indust/metal-factory.jpg';
import automotiveImage from './img-indust/automotive.jpg';
import Button from '../../components/Button';
import constructionImage from './img-indust/construction 2.jpeg'

function Industries() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
			easing: 'ease-out',
		});
	}, []);

	return (
		<div className='industries-section'>
			<div className='intro-text'>
				<h2 data-aos='fade-up'>Industries We Serve!</h2>
				<p data-aos='fade-up' data-aos-delay='300'>
					Explore the industries we are committed to serving with our innovative
					solutions and services.
				</p>
			</div>
			<div className='industries-cards'>
				<div className='industry-card' data-aos='fade-up' data-aos-delay='500'>
					<img src={constructionImage} alt='Chemical Industries' />
					<h3>Construction</h3>
					<p>
						Leading the way in the natural stone industry, we specialize in providing premium-quality granite and marble for diverse applications. From luxurious interiors to robust architectural designs, our stones offer unmatched elegance, strength, and timeless appeal. Trust us to bring innovation, reliability, and excellence to your projects
					</p>
				</div>
				<div className='industry-card' data-aos='fade-up' data-aos-delay='700'>
					<img src={alloyImage} alt='Ferro Alloys' />
					<h3>Metallurgy</h3>
					<p>
						Specializes in providing high-quality ferroalloys essential for
						steelmaking, foundries, and advanced materials. With cutting-edge
						technology and a focus on sustainability, we deliver alloy solutions
						that enhance strength, durability, and performance across
						industries. Empowering modern metallurgy with
						precision and innovation!
					</p>
				</div>
				{/* <div className='industry-card' data-aos='fade-up' data-aos-delay='900'>
					<img src={automotiveImage} alt='Mechanical Supplies' />
					<h3>Mechanical Supplies</h3>
					<p>
						With expertise in the mechanical supplies industry, we deliver
						premium-quality, precision-engineered solutions vital for industrial
						and engineering applications. Our commitment to excellence,
						innovation, efficiency, and reliability ensures our products enhance
						operational performance, durability, and productivity across diverse
						industries.
					</p>
				</div> */}
			</div>
			<div className='learn-more'>
				<Button text='Learn More' href='/product' />
			</div>
		</div>
	);
}

export default Industries;
