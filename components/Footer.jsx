// Footer.jsx
import React from 'react';
import './Footer.css'; // Ensure your CSS file is linked
import { NavLink } from 'react-router-dom';

function Footer() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'// Smooth scrolling effect
		});
	};

	return (
		<footer className='footer'>
			<div className='footer-top'>
				<h2 className='brand-name'>Euclase</h2>
				<div className='social-icons'>
					<a
						href='https://instagram.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fab fa-instagram'></i>
					</a>
					<a
						href='mailto:your-email@example.com' // Replace with your Gmail link
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fas fa-envelope'></i>{' '}
					</a>
					<a
						href='https://www.linkedin.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fab fa-linkedin-in'></i>
					</a>
				</div>
			</div>
			<div className='footer-nav'>
				<NavLink to='/' onClick={scrollToTop}>
					Home
				</NavLink>
				<NavLink to='/product' onClick={scrollToTop}>
					Product
				</NavLink>
				<NavLink to='/about' onClick={scrollToTop}>
					About
				</NavLink>
				<NavLink to='/contact' onClick={scrollToTop}>
					Contact
				</NavLink>
			</div>
			<div className='footer-bottom'>
				<p>&copy; 2024 All rights reserved | Powered by Euclase</p>
			</div>
		</footer>
	);
}

export default Footer;
