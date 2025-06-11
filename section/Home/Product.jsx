import React, { useEffect } from 'react';
import './Product.css';
import Button from '../../components/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Product = () => {
	const products = [
		{
			title: 'TAILORED SOLUTIONS',
			description:
				'Beyond convenience and speed, Euclase stands out for its commitment to tailored excellence. We go beyond standard solutions, actively engaging with our clients to understand their unique needs. This personalized approach allows us to craft solutions that not only meet but exceed expectations. Choose Euclase for a partnership that prioritizes your convenience, offers swift responses, and delivers tailored excellence for your industrial success',
		},
		{
			title: 'RAPID RESPONSE',
			description:
				'One of our key strengths is our fast response time. We understand the importance of timely solutions in the dynamic industrial landscape. Our commitment is reflected in our response time, ideally within 24 hours. This ensures that you receive the information and support you need promptly, allowing you to make informed decisions and keep your projects on track.',
		},

		{
			title: 'QUALITY UNSURPASSED',
			description:
				'At Euclase, we are dedicated to providing products of the highest quality in the ferro alloys, Epoxy Resin and mechanical supplies sector. Our commitment to excellence ensures that each product meets stringent industry standards, offering unmatched reliability and performance. With a focus on precision, innovation, and customer satisfaction, we guarantee superior quality that you can depend on for all your industrial needs.',
		},
	];

	// Initialize AOS
	useEffect(() => {
		AOS.init({ duration: 800 });
	}, []);

	return (
		<div className='products-section'>
			<div className='intro-text' data-aos='fade-up'>
				<h2> How We Make a Difference</h2>
				<p className='p-intro'>
					At Euclase we prioritize your convenience, making us the ideal choice
					for your industrial needs. Our dedicated team is committed to
					understanding and processing new requests, ensuring that your unique
					requirements are met with precision. This personalized approach allows
					for a seamless collaboration, guaranteeing that your projects receive
					the attention and expertise they deserve.
				</p>
			</div>

			<div className='products-container'>
				{products.map((product, index) => (
					<div key={index} className='product-card' data-aos='zoom-in'>
						<h3 className='product-title'>{product.title}</h3>
						<p className='product-description'>{product.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Product;
