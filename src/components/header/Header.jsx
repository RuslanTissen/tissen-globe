import React, { useState, useContext, useEffect, useRef } from 'react'
import "./Header.scss"
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross1 } from 'react-icons/rx';
import { Context } from '../Context.js';
import trans from '../Translate.js';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import logo from "../../images/logo.png"
import { BsGlobe } from "react-icons/bs"

function Header() {
	const [show, setShow] = useState(false)
	const [active, setActive] = useState(true)
	const { lang, setLang } = useContext(Context)
	const [showLanguages, setShowLanguages] = useState(false)
	const [activeLanguages, setActiveLanguages] = useState(true)

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

	function languagesFunction() {
		setShowLanguages(!showLanguages)
		setActiveLanguages(!activeLanguages)
	}
	let languageRef = useRef()
	useEffect(() => {
		let handler = (e) => {
			if (!languageRef.current.contains(e.target)) {
				setShowLanguages(false)
				setActiveLanguages(true)
			}
		}
		document.addEventListener("mousedown", handler)
	})

	return (
		<div className='header' id='header'>
			<ul className="header__logo--container" ref={menuRef}>
				<li className='logo-box'><NavLink to="*" onClick={scrollToTheTop}><img src={logo} />ISSEN</NavLink> </li>
				<li className='hamburger-box' onClick={() => myFunction()} >
					{active ? <RxHamburgerMenu /> : < RxCross1 />}
				</li>
				{show && <ul className="humburger-menu__container" onClick={() => myFunction()}>
					<li className='first-li humburger-menu__container--link'><NavLink to="Services" onClick={scrollToTheTop}>{trans[lang].services}</NavLink> </li>
					<li className='second-li humburger-menu__container--link'><NavLink to="How" onClick={scrollToTheTop}>{trans[lang].how}</NavLink> </li>
					<li className='li__career humburger-menu__container--link'><NavLink to="Careers" onClick={scrollToTheTop}>{trans[lang].carreers}</NavLink> </li>
					<li className='li__about humburger-menu__container--link'><NavLink to='About' onClick={scrollToTheTop}>{trans[lang].about}</NavLink></li>
					<li className='li__contact humburger-menu__container--link'><NavLink to="Contact" onClick={scrollToTheTop}>{trans[lang].contact}</NavLink> </li>
					<li className='li__burger sprachen humburger-menu__container--link'>
						<button className="button-esp" value="es" onClick={(e) => setLang(e.target.value)}>ES</button>
						<button className="button-eng" value="en" onClick={(e) => setLang(e.target.value)}>EN</button>
						<button className="button-ger" value="gr" onClick={(e) => setLang(e.target.value)}>DE</button>
					</li>
				</ul>}
			</ul>

			<div className='header__big-container' >
				<div className="ul__container">
					<ul className='first-ul'>
						<li className='li1'><NavLink to="*" onClick={scrollToTheTop}><img src={logo} />ISSEN</NavLink> </li>
						<li className='li2 lis'><NavLink to="Services" onClick={scrollToTheTop}>{trans[lang].services}</NavLink></li>
						<li className='li3 lis'><NavLink to="How" onClick={scrollToTheTop}>{trans[lang].how}</NavLink></li>
						<li className='li5 lis'><NavLink to="Careers" onClick={scrollToTheTop}>{trans[lang].carreers}</NavLink> </li>
						<li className='li4 lis'><NavLink to='About' onClick={scrollToTheTop}>{trans[lang].about}</NavLink> </li>
						<li className='li6 '><NavLink to="Contact" onClick={scrollToTheTop}>{trans[lang].contact}</NavLink> </li>
						<li className="dropdown" ref={languageRef} data-dropdown onClick={() => languagesFunction()}>
							<button className='link' data-dropdown-button><BsGlobe /></button>
							{showLanguages && <div className='dropdown-menu'>
								<button className="button-esp" value="es" onClick={(e) => setLang(e.target.value)}>ES</button>
								<button className="button-eng" value="en" onClick={(e) => setLang(e.target.value)}>EN</button>
								<button className="button-ger" value="gr" onClick={(e) => setLang(e.target.value)}>DE</button>
							</div>}
						</li>

					</ul>
				</div>
			</div>
		</div>
	)
}

export default Header