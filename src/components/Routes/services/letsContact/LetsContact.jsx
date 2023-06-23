import React, { useContext } from 'react'
import "./LetsContact.scss"
import { NavLink } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import trans from '../../../Translate';
import { Context } from '../../../Context';

const scrollToTheTop = () => {
	window.scroll(0, 0)
}

function LetsContact(props) {
let {contactTitle, contactButton} = props
const { lang } = useContext(Context)

	return (
		<div className="contact__image__container">
			<div className="image__box">
				<h2>{contactTitle}</h2>
				<NavLink to="/Contact" onClick={scrollToTheTop}>{contactButton}</NavLink>
			</div>
		</div>
	)
}
export default LetsContact
