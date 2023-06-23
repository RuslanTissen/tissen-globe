import React, { useContext } from 'react'
import "./Steps.scss"
import offer1 from "../../images/offer1.jpg"
import offer2 from "../../images/offer2.jpg"
import offer3 from "../../images/offer3.jpg"
import offer4 from "../../images/offer4.jpg"
import offer5 from "../../images/offer5.jpg"
import offer6 from "../../images/offer6.jpg"
import trans from '../Translate'
import { Context } from '../Context'

function Steps() {
const {lang, setLang} =useContext(Context)

	return (
		<div className='stepsMain'>

			<div className="stepsMain__container">
				<h2 className='title__picture__include'>{trans[lang].byServices}</h2>

				<div className="stepsMain__container__boxes">
					<img src={offer1} />
					<p className='text__include'>{trans[lang].softwareDevelopment}</p>
				</div>
				<div className="stepsMain__container__boxes">
					<img src={offer2}/>
					<p className='text__include'>{trans[lang].seguridadInformatica}</p>
				</div>
				<div className="stepsMain__container__boxes">
					<img src={offer3}/>
					<p className='text__include'>{trans[lang].cloudHosting}</p>
				</div>
				<div className="stepsMain__container__boxes">
					<img src={offer4}/>
					<p className='text__include'>{trans[lang].desarrolloWeb}</p>
				</div>
				<div className="stepsMain__container__boxes">
					<img src={offer5}/>
					<p className='text__include'>{trans[lang].desarrolloMobile}</p>
				</div>
				<div className="stepsMain__container__boxes">
					<img src={offer6}/>
					<p className='text__include'>UX/UI</p>
				</div>
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
