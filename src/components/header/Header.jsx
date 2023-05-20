import React, { useState, useContext } from 'react'
import "./Header.scss"
import { RxHamburgerMenu } from 'react-icons/rx';
import { FiChevronRight } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';
import { Context } from '../Context.js';
import trans from '../Translate';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import About from '../about/About.jsx';


function Header() {
	const [show, setShow] = useState(false)
	const [active, setActive] = useState(true)
	const { lang, setLang } = useContext(Context)

	function myFunction() {
		setActive(!active)
		setShow(!show)
	}

	return (
		<div className='header'>
			<ul className="header__logo--container">
				<li className='logo-box'><span>Tissen</span> </li>
				<li className='hamburger-box' onClick={() => myFunction()} >
					{active ? <RxHamburgerMenu /> : < RxCross1 />}
				</li>
			</ul>
			{show && <ul className="humburgerMenu__container">
				<li>Get Work</li>
				<li className='second-li'>Hire Help</li>
				<li className='li-after-second'>API</li>
				<li className='li-after-second'>About</li>
				<li className='li-after-second'>Help</li>
				<li className='li-after-second'>Build</li>
				<li className='li-after-second'>Contact</li>
				<li className='li-after-second sprachen'>
					<button className="button-esp" value="es" onClick={(e) => setLang(e.target.value)}>ESP</button>
					<p>/</p>
					<button className="button-eng" value="en" onClick={(e) => setLang(e.target.value)}> ENG</button>
					<p>/</p>
					<button className="button-ger" value="gr" onClick={(e) => setLang(e.target.value)}>GER</button>
				</li>
			</ul>}



			<div className='header__big-container'>
				<ul className='first-ul'>
					<li className='li1 lis'><NavLink to="main">Tissen</NavLink> </li>
					<li className='li2 lis'><p>Get Work <FiChevronRight /></p> </li>
					<li className='li3 lis'><p>Team Help <FiChevronRight /></p>  </li>
					<li className='sprachen'>
						<button className="button-esp" value="es" onClick={(e) => setLang(e.target.value)}>ESP</button>
						<p>/</p>
						<button className="button-eng" value="en" onClick={(e) => setLang(e.target.value)}> ENG</button>
						<p>/</p>
						<button className="button-ger" value="gr" onClick={(e) => setLang(e.target.value)}>GER</button>
					</li>
				</ul>
				<ul className='second-ul'>
					<li className='li4 lix'><p>Login <FiChevronRight /> </p> </li>
					<li className='li5  lix'><NavLink to='about'>About</NavLink> </li>
					<li className='li6 short-li lix'><p>Help</p> </li>
					<li className='li7 short-li lix'><p>Build</p> </li>
					<li className='li8 short-li lix'><p>Contact</p> </li>
				</ul>
			</div>

			<Routes>
				<Route path="about" element={<About />} />
			</Routes>
		</div>
	)
}

export default Header