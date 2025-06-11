import React from 'react';
import './ProductDetails.css';
import image1 from './products.jpg';

const ProductDetails = () => {
	return (
		<section className='product-details' aria-labelledby='product-details-title'>
			{/* Text content section */}
			<article className='product-details-text'>
				<h1 id='product-details-title'>
					Optimized & Industry-Ready Solutions for Complex Needs
				</h1>
				<h2>High-Quality, Reliable, and Innovative Tools</h2>
				<p>
					<b>Euclase</b>, an ISO 9001-certified company, delivers premium solutions in marble, granite, and ferro alloys—crafted to meet the diverse demands of modern industries. Our high-quality materials and precision-engineered products are designed to enhance performance, durability, and aesthetic value across construction, infrastructure, and manufacturing sectors.
				</p>
				<p>
					Whether it's elevating architectural design with natural stone or optimizing metallurgical processes with advanced ferro alloys, {' '}
					<b>Euclase</b> empowers your business with reliable, industry-driven innovations built for excellence in today’s fast-paced world.
				</p>
			</article>

			{/* Image section */}
			<figure className='product-details-images'>
				<img
					src={image1}
					alt='High-quality tools and solutions for industry needs'
					className='product-image'
				/>
				<figcaption>Empowering industries with innovative solutions</figcaption>
			</figure>
		</section>
	);
};

export default ProductDetails;
