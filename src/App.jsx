// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Contactpage from './pages/Contactpage';
import Productpage from './pages/Productpage';
import Aboutpage from './pages/Aboutpage';

function App() {
	return (
		<BrowserRouter
			future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
		>
			<div className='App'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/contact' element={<Contactpage />} />
					<Route path='/product' element={<Productpage />} />
					<Route path='/about' element={<Aboutpage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
