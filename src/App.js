import Header from './components/header/Header.jsx';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import Main from './main/Main.jsx';
// import About from './components/Routes/about/About';
// import { useEffect } from 'react';
// import Services from './components/Routes/services/Services.jsx';
import Footer from './components/footer/Footer';
import "./App.scss"

function App() {

	return (
		<div className="App">

			<Header />

			<Main />

			<Footer />

		</div>
	);
}

export default App;


	{/* <Routes>
				<Route path='main'>
					<Route index element={<Main />} />
					<Route path='about' element={<About />} />
					<Route path='services' element={<Services />} />
				</Route>
			</Routes> */}
