import React from 'react'
import "./LetsContact.scss"
import { NavLink } from 'react-router-dom';


const scrollToTheTop = () => {
	window.scroll(0, 0)
}

function LetsContact(props) {
let {contactTitle, contactButton} = props

	return (
		<div className="contact__image__container">
			<div className="image__box">
				<h2>{contactTitle}</h2>
				<NavLink to="/contact" onClick={scrollToTheTop}>{contactButton}</NavLink>
			</div>
		</div>
	)
}
export default LetsContact
