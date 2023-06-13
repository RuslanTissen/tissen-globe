import React from 'react'
import "./Introduction.scss"
import trans from '../Translate'
import { Context } from '../Context'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom';

function Introduction() {
	const { lang, setLang } = useContext(Context)

	const scrollToTheTop = () => {
		window.scroll(0, 0)
	}

	return (
		<div className='introdiuction'>
			<div className="introdiuction__box__1">
				<div className="introdiuction__box__1__title__container">
					<h1>Global IT <br /> Outsourcing</h1>
					{/* <h1></h1> */}
					{/* <h1>Company</h1> */}
				</div>
				<div className="introdiuction__box__1__button__container">
					{/* <button>{trans[lang].estimate}</button> */}
					<NavLink to="Contact" onClick={scrollToTheTop}>{trans[lang].estimate}</NavLink>
				</div>
			</div>

			<div className="introdiuction__box__2">
				{/* <div className="introdiuction__benefits__container">	</div> */}
				<ul className="introdiuction__contact__container">
					<li>{trans[lang].save1}<mark>{trans[lang].save2} </mark> {trans[lang].save3}</li>
					<li>{trans[lang].project1} <mark>{trans[lang].project2}</mark> {trans[lang].project3}</li>
					<li>{trans[lang].technologies1} <mark>{trans[lang].technologies2}</mark> </li>
				</ul>
			</div>
		</div>
	)
}

export default Introduction