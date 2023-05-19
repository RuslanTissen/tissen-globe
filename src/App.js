import './App.css';
import Header from './components/header/Header.jsx';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import Main from './main/Main.jsx';
import About from './components/about/About';
import { useEffect } from 'react';

function App() {

	return (
		<div className="App">

			<Header />

			<Routes>
				<Route path='main'>
					<Route index element={<Main />} />
					{/* <Route path='*'  /> */}
					<Route path='about' element={<About />} />

				</Route>

			</Routes>


		</div>
	);
}

export default App;
