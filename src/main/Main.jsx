import React from 'react'
import { Routes, Route, Outlet } from "react-router-dom"
import "./Main.scss"
import Start from '../components/start/Start'
import About from '../components/Routes/about/About'
import Contact from '../components/Routes/contact/Contact'
import Services from '../components/Routes/services/Services'
import Careers from '../components/Routes/careers/Careers'
import How from '../components/Routes/how/How'
import SoftwareDevelopment from '../components/RoutesByServices/softwareDevelopment/SoftwareDevelopment'
import NetworkSecurity from '../components/RoutesByServices/networkSecurity/NetworkSecurity'

function Main() {
	return (
		<main>
			<Routes>
				<Route path="*" element={<Start />} />
				<Route path="Services" element={<Services />} />
				<Route path="How" element={<How />} />
				<Route path="Careers" element={<Careers />} />
				<Route path="About" element={<About />} />
				<Route path="Contact" element={<Contact />} />
				<Route path='SoftwareDevelopment' element={<SoftwareDevelopment />} />
				<Route path='NetworkSecurity' element={<NetworkSecurity />} />
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
