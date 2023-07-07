import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import logo from "../../images/logo.png"
import { BsLinkedin } from "react-icons/bs"
import trans from '../Translate.js';
import { Context } from '../Context'

import "./Footer.scss"

function Footer() {
	const { lang } = useContext(Context)

	const scrollToTheTop = () => {
		window.scroll(0, 0)
	}

	return (
		<div className='footer'>
			<div className="footer__container">
				<div className="footer__container__section__1">
					<div className="footer__container__section__1__column">
						<h2>{trans[lang].footerServices}</h2>
						<NavLink to="SoftwareDevelopment" onClick={scrollToTheTop}>{trans[lang].footerSoftware}</NavLink>
						<NavLink to="E_Commerce" onClick={scrollToTheTop}>{trans[lang].e_commerceDevelopment}</NavLink>
						<NavLink to="CloudHosting" onClick={scrollToTheTop}>{trans[lang].footerCloud} </NavLink>
						<NavLink to="WebDevelopment" onClick={scrollToTheTop}>{trans[lang].footerWeb}</NavLink>
						<NavLink to="MobileDevelopment" onClick={scrollToTheTop}>{trans[lang].footerMobile}</NavLink>
						<NavLink to="UX_UI" onClick={scrollToTheTop}>UX/UI</NavLink>
					</div>
					<div className="footer__container__section__1__column">
						<h2>{trans[lang].footerTechnologies}</h2>
						<NavLink to="Angular" onClick={scrollToTheTop}>Angular</NavLink>
						<NavLink to="Vue" onClick={scrollToTheTop}>Vue.js</NavLink>
						<NavLink to="React_Native" onClick={scrollToTheTop}>React Native</NavLink>
						<NavLink to="JS" onClick={scrollToTheTop}>JavaScript</NavLink>
						<NavLink to="AWS" onClick={scrollToTheTop}>AWS</NavLink>
						<NavLink to="Microsoft_Azure" onClick={scrollToTheTop}>Microsoft Azure</NavLink>
						<NavLink to="Figma" onClick={scrollToTheTop}>Figma</NavLink>
						<NavLink to="Python" onClick={scrollToTheTop}>Python</NavLink>
						<NavLink to="MUI" onClick={scrollToTheTop}>Material-UI</NavLink>
						<NavLink to="Swift" onClick={scrollToTheTop}>Swift</NavLink>
						<NavLink to="MySQL" onClick={scrollToTheTop}>MySQL</NavLink>
						<NavLink to="#" onClick={scrollToTheTop}>Tableau</NavLink>
					</div>
					<div className="footer__container__section__1__column">
						<h2>{trans[lang].footerCompany}</h2>
						<NavLink to="services" onClick={scrollToTheTop}>{trans[lang].services}</NavLink>
						<NavLink to="How" onClick={scrollToTheTop}>{trans[lang].how}</NavLink>
						<NavLink to="Careers" onClick={scrollToTheTop}>{trans[lang].footerCarrers}</NavLink>
						<NavLink to='About' onClick={scrollToTheTop}>{trans[lang].footerAbout}</NavLink>
						<NavLink to="Contact" onClick={scrollToTheTop}>{trans[lang].footerContact}</NavLink>
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