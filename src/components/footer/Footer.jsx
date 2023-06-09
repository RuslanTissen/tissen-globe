import React, { useContext } from 'react'
import "./Footer.scss"
import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import logo from "../../images/logo.png"
import {BsLinkedin} from "react-icons/bs"
import trans from '../Translate.js';
import { Context } from '../Context'

const scrollToTheTop = () => {
	window.scrollTo(0, 0)
}

function Footer() {
	const { lang, setLang } = useContext(Context)

	return (
		<div className='footer'>
			<div className="footer__container">
				<div className="footer__container__section__1">
					<div className="footer__container__section__1__column">
						<h2>{trans[lang].footerServices}</h2>
						<p>{trans[lang].footerSoftware}</p>
						<p>{trans[lang].footerSecurity}</p>
						<p>{trans[lang].footerCloud} </p>
						<p>{trans[lang].footerWeb}</p>
						<p>{trans[lang].footerMobile}</p>
						<p>UX/UI</p>
					</div>
					<div className="footer__container__section__1__column">
						<h2>{trans[lang].footerTechnologies}</h2>
						<p>JS</p>
						<p>HTML</p>
						<p>CSS/SCSS</p>
						<p>Python</p>
						<p>Ruby</p>
						<p>PHP</p>
						<p>Node.js</p>
						<p>C++</p>
						<p>SQL</p>
						<p>Oracle</p>
						<p>GO</p>
						<p>React Native</p>
					</div>
					<div className="footer__container__section__1__column">
						<h2>{trans[lang].footerCompany}</h2>
						<div><NavLink to="services" onClick={scrollToTheTop}>{trans[lang].services}</NavLink></div>
						<div><NavLink to="#" onClick={scrollToTheTop}>{trans[lang].footerHow}</NavLink></div>
						<div><NavLink to="#" onClick={scrollToTheTop}>{trans[lang].footerCarrers}</NavLink></div>
						<div><NavLink to='about' onClick={scrollToTheTop}>{trans[lang].footerAbout}</NavLink></div>
						<div><NavLink to="contact" onClick={scrollToTheTop}>{trans[lang].footerContact}</NavLink></div>
					</div>
				</div>

				<div className="footer__container__section__2">
					<div className="footer__container__section__2__logos">
					<NavLink to="*" onClick={scrollToTheTop}><img src={logo} /></NavLink> 
					<a><FaInstagram /></a>
					<a><FaTwitter /></a>
					<a><FaFacebookF /></a>
					<a><BsLinkedin /></a>
					</div>
					<div className="footer__container__section__2__email">
						<h3>{trans[lang].footerEmail}</h3>
						<a href="mailto:rthyssen73@gmail.com">info@tissen.com</a>
					</div>
					<div className="footer__container__section__2__phone">
						<h3>{trans[lang].footerPhone}</h3>
						<p>AR (+54) 11-6601-4163 </p>
						<p>DE (+49) 176-8315-7254 </p>
					</div>
				</div>

			</div>









		</div>
	)
}

export default Footer



{/* <ul className="footer__container__1">
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
				
			</ul> */}