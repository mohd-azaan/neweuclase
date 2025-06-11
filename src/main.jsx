import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import '../components/Carousel.css';
// import '../components/Header.css';
// import '../components/Indicators.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>
);
