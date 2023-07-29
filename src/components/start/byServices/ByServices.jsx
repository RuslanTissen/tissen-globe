import React, { useContext } from 'react'
import "./ByServices.scss"
import offer1 from "../../../images/offer1.png"
import offer2 from "../../../images/offer2.png"
import offer3 from "../../../images/offer3.png"
import offer4 from "../../../images/offer4.png"
import offer5 from "../../../images/offer5.png"
import offer6 from "../../../images/offer6.png"
import trans from '../../Translate'
import { Context } from '../../Context'
import { NavLink } from 'react-router-dom'

function Steps() {
	const { lang, setLang } = useContext(Context)

	const scrollToTheTop = () => {
		window.scroll(0, 0)
	}

	return (
		<div className='steps__main'>

			<div className="steps__main--container">
				<div className="steps__main--container--title-box">
					<h2 className='title__picture--include'>{trans[lang].byServices}</h2>
				</div>

				<NavLink to="/SoftwareDevelopment" onClick={scrollToTheTop} className="steps__main--container--boxes">
					<img src={offer1} alt='Ups, image is lost'/>
					<p className='text__include'>{trans[lang].softwareDevelopment}</p>
				</NavLink>
				<NavLink to="/E_Commerce" onClick={scrollToTheTop} className="steps__main--container--boxes">
					<img src={offer2} alt='Ups, image is lost'/>
					<p className='text__include'>{trans[lang].e_commerceDevelopment}</p>
				</NavLink>
				<NavLink to="/CloudHosting" onClick={scrollToTheTop} className="steps__main--container--boxes">
					<img src={offer3} alt='Ups, image is lost'/>
					<p className='text__include'>{trans[lang].cloudHosting}</p>
				</NavLink>
				<NavLink to="/WebDevelopment" onClick={scrollToTheTop} className="steps__main--container--boxes">
					<img src={offer4} alt='Ups, image is lost'/>
					<p className='text__include'>{trans[lang].desarrolloWeb}</p>
				</NavLink>
				<NavLink to="/MobileDevelopment" onClick={scrollToTheTop} className="steps__main--container--boxes">
					<img src={offer5} alt='Ups, image is lost'/>
					<p className='text__include'>{trans[lang].desarrolloMobile}</p>
				</NavLink>
				<NavLink to="UX_UI" onClick={scrollToTheTop} className="steps__main--container--boxes">
					<img src={offer6} alt='Ups, image is lost'/>
					<p className='text__include'>UX/UI</p>
				</NavLink>
			</div>

		</div>
	)
}

export default Steps



{/* <div className="steps__container__2">
	<h3>Business requirements.</h3>
	<div className="circle__container">
		<div className="circule"><MdOutlineBusinessCenter /></div>
	</div>
	<p>Our outsourcing company specializes in delivering comprehensive solutions that perfectly align with the specific business requirements of our clients, ensuring optimal efficiency and success.</p>				</div> */}
