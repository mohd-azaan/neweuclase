import containerImage from './img-indust/Dock_Bg.png';
import './Dockimage.css';

function Dockimage() {
	return (
		<div className='card-container'>
			<img src={containerImage} alt='Container' className='card-image' />
			<div className='card-text-overlay'>
				<h2>Facing challenges in global sourcing? </h2>
				<h2>
					Euclase is here to streamline the process and guide you to Excellence.
				</h2>
			</div>
		</div>
	);
}

export default Dockimage;
