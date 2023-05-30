import React, { useState, useContext, useEffect, useRef } from 'react'
import "./Header.scss"
import { RxHamburgerMenu } from 'react-icons/rx';
import { FiChevronRight } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';
import { Context } from '../Context.js';
import trans from '../Translate';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
// import About from '../Routes/about/About.jsx';
// import Services from '../Routes/services/Services.jsx';
// import Help from "../../components/Routes/help/Help.jsx"


function Header() {
	const [show, setShow] = useState(false)
	const [active, setActive] = useState(true)
	const { lang, setLang } = useContext(Context)

	function myFunction() {
		setActive(!active)
		setShow(!show)
	}

	let menuRef = useRef()

	useEffect(() => {
		let handler = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setShow(false)
				setActive(true)
			}
		}
		document.addEventListener("mousedown", handler)
	})

	const scrollToTheTop = () => {
		window.scroll(0, 0)
	}	

	return (
		<div className='header' id='header'>
			<ul className="header__logo--container" ref={menuRef}>
				<li className='logo-box'><NavLink to="*" onClick={scrollToTheTop}>Tissen</NavLink> </li>
				<li className='hamburger-box' onClick={() => myFunction()} >
					{active ? <RxHamburgerMenu /> : < RxCross1 />}
				</li>
				{show && <ul className="humburgerMenu__container" onClick={() => myFunction()}>
					<li className='first-li humburgerMenu__container--link'><NavLink>What</NavLink> </li>
					<li className='second-li humburgerMenu__container--link'><NavLink>How</NavLink> </li>
					<li className='li-after-second humburgerMenu__container--link'><NavLink>Contact</NavLink> </li>
					{/* <li className='li-after-second humburgerMenu__container--link'><NavLink>API</NavLink> </li> */}
					<li className='li-after-second humburgerMenu__container--link'><NavLink to='about'>About</NavLink></li>
					{/* <li className='li-after-second humburgerMenu__container--link'><NavLink to="help">Help</NavLink> </li> */}
					<li className='li-after-second humburgerMenu__container--link'><NavLink>Career</NavLink> </li>
					<li className='li-after-second sprachen humburgerMenu__container--link'>
						<button className="button-esp" value="es" onClick={(e) => setLang(e.target.value)}>ES</button>
						<p>/</p>
						<button className="button-eng" value="en" onClick={(e) => setLang(e.target.value)}> EN</button>
						<p>/</p>
						<button className="button-ger" value="gr" onClick={(e) => setLang(e.target.value)}>DE</button>
					</li>
				</ul>}
			</ul>

			<div className='header__big-container'>
				<div className="first__ul__container">
					<ul className='first-ul'>
						<li className='li1 lis'><NavLink to="main">Tissen</NavLink> </li>
						<li className='li2 lis'><NavLink>What <FiChevronRight /></NavLink></li>
						<li className='li3 lis'><NavLink>How<FiChevronRight /></NavLink></li>
						<li className='li4 lis'><NavLink>Contact</NavLink> </li>
					</ul>
				</div>
				<div className="second__ul__container">
					<ul className='second-ul'>
						<li className='li5  lix'><NavLink to='about'>About</NavLink> </li>
						<li className='li6  lix'><NavLink to="#">Career</NavLink> </li>
						{/* <li className='li6 short-li lix'><NavLink to="help">Help</NavLink> </li> */}
						{/* <li className='li4 lix'><p>Login <FiChevronRight /> </p> </li> */}
						<li className='sprachen'>
							<button className="button-esp" value="es" onClick={(e) => setLang(e.target.value)}>ES</button>
							{/* <p>/</p> */}
							<button className="button-eng" value="en" onClick={(e) => setLang(e.target.value)}> EN</button>
							{/* <p>/</p> */}
							<button className="button-ger" value="gr" onClick={(e) => setLang(e.target.value)}>DE</button>
						</li>
					</ul>
				</div>
			</div>

		</div>
	)
}

export default Header