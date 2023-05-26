import React from 'react'
import "./Footer.scss"
import { NavLink } from 'react-router-dom'
// import { TfiFacebook } from 'react-icons/tfi'
// import { BsTwitter } from 'react-icons/bs'
// import { BsInstagram } from 'react-icons/bs'
import { FaLinkedinIn, FaTelegram ,FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'

const scrollToTop = () => {
	window.scrollTo(0, 0)
}

function Footer() {
	return (
		<div className='footer'>
			<ul className="footer__container__1">
				<li onClick={scrollToTop}><NavLink to="*">Tissen</NavLink> </li>
			</ul>

			<ul className="footer__container__2">
				<li>Discover</li>
				<li><NavLink>Products</NavLink></li>
				<li><NavLink>Services</NavLink></li>
				<li><NavLink>Support</NavLink></li>
			</ul>

			<ul className="footer__container__3">
				<li>About</li>
				<li><NavLink>Career</NavLink></li>
				<li><NavLink>Business Partners</NavLink></li>
				<li><NavLink>Latest news</NavLink></li>
				<li><NavLink>Blogs</NavLink></li>
				<li><NavLink>About Tissen</NavLink></li>
			</ul>
			<ul className="footer__container__4">
				<li><a><FaFacebookF /></a></li>
				<li><a><FaTwitter /></a></li>
				<li><a><FaLinkedinIn /></a></li>
				<li><a><FaTelegram /></a></li>
				<li><a><FaInstagram /></a></li>
				
			</ul>
		</div>
	)
}

export default Footer