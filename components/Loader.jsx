import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from './Loader.json'; // Use your downloaded Lottie file

const Loader = () => (
	<div style={{ textAlign: 'center', marginTop: '20vh' }}>
		<Player
			autoplay
			loop
			src={animationData}
			style={{ height: '200px', width: '200px' }}
		/>
		<p>Loading Euclase...</p>
	</div>
);

export default Loader;
