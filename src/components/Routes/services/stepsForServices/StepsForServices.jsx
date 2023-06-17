import React, { useContext } from 'react'
import "./StepsForServices.scss"
import offer1 from "../../../../images/offer1.jpg"
import offer2 from "../../../../images/offer2.jpg"
import offer3 from "../../../../images/offer3.jpg"
import offer4 from "../../../../images/offer4.jpg"
import offer5 from "../../../../images/offer5.jpg"
import offer6 from "../../../../images/offer6.jpg"
import trans from '../../../Translate'
import { Context } from '../../../Context'

function StepsForServices() {
	const { lang, setLang } = useContext(Context)
	return (
		<div className='steps'>

			<div className="steps__container">
				<h2>{trans[lang].byServices}</h2>

				<div className="steps__container__1 steps__boxes">
					<img src={offer1} />
					<p>{trans[lang].softwareDevelopment}</p>
				</div>
				<div className="steps__container__2 steps__boxes">
					<img src={offer2} />
					<p>{trans[lang].seguridadInformatica}</p>
				</div>
				<div className="steps__container__3 steps__boxes">
					<img src={offer3} />
					<p>{trans[lang].cloudHosting}</p>
				</div>
				<div className="steps__container__4 steps__boxes">
					<img src={offer4} />
					<p>{trans[lang].desarrolloWeb}</p>
				</div>
				<div className="steps__container__5 steps__boxes">
					<img src={offer5} />
					<p>{trans[lang].desarrolloMobile}</p>
				</div>
				<div className="steps__container__6 steps__boxes">
					<img src={offer6} />
					<p>UX/UI</p>
				</div>


				{/* <div className="steps__container__2">
					<h3>Business requirements.</h3>
					<div className="circle__container">
						<div className="circule"><MdOutlineBusinessCenter /></div>
					</div>
					<p>Our outsourcing company specializes in delivering comprehensive solutions that perfectly align with the specific business requirements of our clients, ensuring optimal efficiency and success.</p>				</div> */}
			</div>

		</div>
	)
}

export default StepsForServices