import React from 'react'
import "./LetsContactCareers.scss"
import { NavLink } from 'react-router-dom';


const scrollToTheTop = () => {
	window.scroll(0, 0)
}

function LetsContactCareers(props) {
let {contactTitle, contactButton} = props

	return (
		<div className="lets-contact__image--container">
			<div className="lets-contact__image--box">
				<h2>{contactTitle}</h2>
				<NavLink to="/Contact" onClick={scrollToTheTop}>{contactButton}</NavLink>
			</div>
		</div>
	)
}
export default LetsContactCareers
