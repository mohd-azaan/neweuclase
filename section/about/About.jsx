import React from 'react';
import './About.css'; // Ensure the styles are applied
import euclaseLogo from '../../src/img/logo1.png'; // Adjust the path as needed
// import Vision from './vision';
import Footer from '../../components/Footer';
import AboutUs from './Vision'

function About() {
	return (
		<>
			<div className='about-header'>
				<div className='about-header-text'>ABOUT US</div>
			</div>
			<AboutUs />
			<Footer />
		</>
	);
}

export default About;
