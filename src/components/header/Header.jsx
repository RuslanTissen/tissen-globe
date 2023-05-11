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
				<li className='li-after-second'>About</li>
				<li className='li-after-second'>API</li>
				<li className='li-after-second'>Project Help</li>
				<li className='li-after-second'>Build Team</li>
				<li className='li-after-second'>Contact</li>
			</ul>}

		</div>
	)
}

export default Header