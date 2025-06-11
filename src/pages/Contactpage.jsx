import React, { useState, useEffect } from 'react';
import Contact from '../../components/Contact';
import Header from '../../components/Header';
import Map from '../../components/Map';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader'; // Import the Loader component

function Contactpage() {
	const [loading, setLoading] = useState(false);

	// Simulate loading process
	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 200); // Adjust timeout as needed
		return () => clearTimeout(timer);
	}, []);

	return (
		<div>
			<Header />
			{loading ? (
				<Loader /> // Show loader while loading
			) : (
				<>
					<Contact />
					<Map />
					<Footer />
				</>
			)}
		</div>
	);
}

export default Contactpage;
