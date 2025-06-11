import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import About from '../../section/about/About';
import Loader from '../../components/Loader'; // Import the Loader component

function Aboutpage() {
	const [loading, setLoading] = useState(false);

	// Simulate an actual loading process (e.g., fetching data)
	useEffect(() => {
		// Simulating data fetching or initialization
		const fetchData = async () => {
			try {
				// Simulate fetching data or doing some initialization
				// For example, you can replace this with an actual API call.
				await new Promise((resolve) => setTimeout(resolve, 200)); // Simulated delay
			} catch (error) {
				console.error('Error during data loading:', error);
			} finally {
				setLoading(false); // Set loading to false once done
			}
		};
		fetchData();
	}, []);

	return (
		<div>
			<Header />
			{loading ? (
				<Loader /> // Show loader while the page is actually loading
			) : (
				<About /> // Show the content once loading is complete
			)}
		</div>
	);
}

export default Aboutpage;
