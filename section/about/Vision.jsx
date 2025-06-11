import React, { useState } from 'react';
import './vision.css';

function AboutUs() {
	const [activeSection, setActiveSection] = useState('about');

	const renderContent = () => {
		switch (activeSection) {
			case 'about':
				return (
					<div className='section'>
						<h2 className='section-title'>About Us</h2>
						<h1>High Quality Tactical Solutions</h1>
						<h2>Finding A Permanent Solution Is Our Ultimate Goal!</h2>
						<p>
							Established in 2004, FAMCO began with a vision grounded in trust, discipline, and unwavering ethics. Over the years, we’ve earned our place as a reliable leader in the construction materials industry, delivering high-quality epoxy, tiles, cement, granite, and marble. Our consistent commitment to quality and integrity has helped us foster long-standing partnerships across the sector.
						</p>
						<p>
							Building on this legacy, FAMCO proudly introduces Euclase—a global venture expanding our reach into key industrial and international markets. Euclase specializes in international trade in high-grade construction materials such as granite and marble and supply of premium ferro alloys.
						</p>
						<p>
							At Euclase, we uphold the same core values of trust, discipline, and ethical service. Whether supplying robust ferro alloys to industrial clients or exporting top-tier stone materials to global partners, we are committed to excellence, precision, and long-term value. Euclase empowers industries worldwide with materials that drive innovation and foster enduring relationships.
						</p>
					</div>

				);
			case 'vision':
				return (
					<div className='section'>
						<h2 className='section-title'>Our Vision</h2>
						<p className='section-text'>
							At <b>Euclase</b>, our vision is to revolutionize the industry by
							fostering creativity, innovation, and excellence. We aim to create
							sustainable solutions that empower individuals and organizations
							to achieve their goals effectively.
						</p>
					</div>
				);
			case 'mission':
				return (
					<div className='section'>
						<h2 className='section-title'>Our Mission</h2>
						<p className='section-text'>
							Our mission at Euclase is to deliver high-quality solutions that
							meet the needs of our clients and the community. We are committed
							to fostering innovation, ensuring excellence, and promoting
							ethical practices in everything we do.
						</p>
					</div>
				);
			case 'values':
				return (
					<div className='section'>
						<h2 className='section-title'>Our Values</h2>
						<ul className='values-list'>
							<li>Integrity: Upholding the highest ethical standards.</li>
							<li>Care: We take care of each other and address each other’s needs.</li>
							<li>Teamwork: We work towards our collective success as one.</li>

							<li>Innovation: Driving creative solutions to challenges.</li>
							<li>
								Sustainability: Ensuring long-term success for future
								generations.
							</li>
							<li>Excellence: Striving for perfection in all we do.</li>

						</ul>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<section className='about-section'>
			<div className='about-container'>
				{/* Left Navigation */}
				<div className='navigation'>
					<ul className='nav-list'>
						<li
							className={
								activeSection === 'about' ? 'nav-item active' : 'nav-item'
							}
							onClick={() => setActiveSection('about')}
						>
							About
						</li>
						<li
							className={
								activeSection === 'vision' ? 'nav-item active' : 'nav-item'
							}
							onClick={() => setActiveSection('vision')}
						>
							Vision
						</li>
						<li
							className={
								activeSection === 'mission' ? 'nav-item active' : 'nav-item'
							}
							onClick={() => setActiveSection('mission')}
						>
							Mission
						</li>
						<li
							className={
								activeSection === 'values' ? 'nav-item active' : 'nav-item'
							}
							onClick={() => setActiveSection('values')}
						>
							Values
						</li>
					</ul>
				</div>

				{/* Right Content */}
				<div className='content'>{renderContent()}</div>
			</div>
		</section>
	);
}

export default AboutUs;
