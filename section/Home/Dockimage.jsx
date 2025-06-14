import containerImage from './img-indust/truck image.jpg';
import './Dockimage.css';

function Dockimage() {
	return (
		<div className='card-container'>
			<img src={containerImage} alt='Container' className='card-image' />
			<div className='card-text-overlay'>
				<h2>Facing challenges in global sourcing?</h2>
				<p>Euclase is here to streamline the process and guide you to Excellence.</p>
			</div>
		</div>
	);
}

export default Dockimage;