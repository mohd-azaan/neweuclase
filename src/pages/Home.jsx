import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Dockimage from '../../section/Home/Dockimage';
// import About from '../../section/Home/About';
import Industries from '../../section/Home/Industries';
import Product from '../../section/Home/Product';
import Loader from '../../components/Loader'; // Import the Loader component

function Home() {
	const [loading, setLoading] = useState(false);

	// Simulate loading process
	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 200); // Adjust timeout as needed
		return () => clearTimeout(timer);
	}, []);

	return (
		<div>
			<Helmet>
				<title>Euclase | Home</title>
				<meta
					name='description'
					content='Welcome to Euclase, your one-stop solution for engineering components, alloys, and chemicals.'
				/>
				<meta
					name='keywords'
					content='engineering, alloys, chemicals, Euclase'
				/>
				<meta name='author' content='Euclase Team' />
				<link rel='canonical' href='https://www.euclase.in/' />
			</Helmet>
			<Header />
			{loading ? (
				<Loader /> // Show loader while loading
			) : (
				<>
					<Carousel />
					<Dockimage />
					{/* <About /> */}
					<Product />
					<Industries />
					<Footer />
				</>
			)}
		</div>
	);
}

export default Home;
