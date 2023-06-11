import React from 'react'
import "./LetsContactCareers.scss"
import { NavLink } from 'react-router-dom';


const scrollToTheTop = () => {
	window.scroll(0, 0)
}

function LetsContactCareers(props) {
let {contactTitle, contactButton} = props

	return (
		<div className="letContact__image__container">
			<div className="letContact__image__box">
				<h2>{contactTitle}</h2>
				<NavLink to="/contact" onClick={scrollToTheTop}>{contactButton}</NavLink>
			</div>
		</div>
	)
}
export default LetsContactCareers
