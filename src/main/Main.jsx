import React from 'react'
import { Routes, Route, Outlet } from "react-router-dom"
import "./Main.scss"
// import Bloks from '../components/bloks/Bloks';
// import Introduction from '../components/introduction/Introduction.jsx';
// import Moto from '../components/moto/Moto.jsx';
// import Technology from '../components/technology/Technology.jsx';
// import Inside from '../components/inside/Inside.jsx';
import Start from '../start/Start'
import About from '../components/Routes/about/About'
import Contact from '../components/Routes/contact/Contact'

function Main() {
	return (
		<main>
			<Routes>
				<Route path='*' element={<Start />} />
				<Route path='about' element={<About />} />
				<Route path='contact' element={<Contact />} />
				{/* <Route path='help' element={<Help />} /> */}
			</Routes>

			{/* <Outlet />  */}

		</main>
	)
}

export default Main





{/* <Introduction />

<Moto />

<Bloks />

<hr></hr>

<Technology />

<Inside /> */}
