import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css'; // Import the CSS file

const Map = () => {
	const bhatkalPosition = [13.997762, 74.540466];

	return (
		<div className='map-container'>
			<MapContainer
				center={bhatkalPosition}
				zoom={10} // Set the zoom level to your location
				style={{ height: '100%', width: '100%' }}
				scrollWheelZoom={false} // Disable zooming with the mouse scroll
				dragging={false} // Disable map dragging
				touchZoom={false} // Disable zoom on touch devices
				doubleClickZoom={false} // Disable zooming by double-clicking
			>
				<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
				<Marker position={bhatkalPosition}>
					<Popup>Euclase Company Location - Bhatkal</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default Map;
