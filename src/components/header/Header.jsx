import React, { useState } from 'react'
import "./Header.scss"
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross1 } from 'react-icons/rx';


function Header() {
	const [show, setShow] = useState(false)
	const [active, setActive] = useState(true)

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
				<li className='li-after-second'>Project Help</li>
				<li className='li-after-second'>Build Team</li>
				<li className='li-after-second'>Contact</li>
			</ul>}



			<div className='header__big-container'>
				<ul className='first-ul'>
					<li className='li1 lis'><span>Tissen</span> </li>
					<li className='li2 lis'>Get Work</li>
					<li className='li3 lis'>Team Help</li>
				</ul>
				<ul className='second-ul'>
					<li className='li4 lix'>Community</li>
					<li className='li5 lix'>About</li>
					<li className='li6 lix'>Project Help</li>
					<li className='li7 lix'>Build Team</li>
					<li className='li8 lix'>Contact</li>
				</ul>
			</div>
		</div>
	)
}

export default Header