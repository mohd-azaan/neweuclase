import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Product from '../../section/product/Product';
import Loader from '../../components/Loader'; // Import the Loader component

function Productpage() {
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
					<Product />
					<Footer />
				</>
			)}
		</div>
	);
}

export default Productpage;
