// LearnMoreButton.jsx
import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

function Button({ text, href }) {
	// Accepting text and href as props
	return (
		<div className='learn-more'>
			<Link to={href} className='learn-more-button'>
				{text}
			</Link>
		</div>
	);
}

export default Button;
