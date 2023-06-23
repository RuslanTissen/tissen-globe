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

// function rotate(element) {
// 	element.classList.toggle("rotate")
// }

// document.querySelectorAll("span").forEach(span => {
// 	span.addEventListener("click", event => {
// 		rotate(span)
// 		// event.target.style.background= "red"
// 		console.log("Check")
// 	})
// })
function StepsForServices() {
	const { lang } = useContext(Context)

	return (
		<div className='steps'>
			<div className="steps__container">
				<h2 className='title__picture__include'>{trans[lang].servicesWorkingProcessTitle}</h2>
				<div className="steps__container__boxes">
					<div className="steps__container__boxes__count"><span className='animation__span'>1</span></div>
					<div className="steps__container__boxes__text">
						<h3 className='title__midle__include'>{trans[lang].servicesRequermentsTitle}</h3>
						<p className='text__include'>{trans[lang].servicesRequermentsText}</p>
					</div>
				</div>
				<div className="steps__container__boxes">
					<div className="steps__container__boxes__count"><span className='animation__span'>2</span></div>
					<div className="steps__container__boxes__text">
						<h3 className='title__midle__include'>{trans[lang].servicesSystemDesignTitle}</h3>
						<p className='text__include'>{trans[lang].servicesSystemDesignText}</p>
					</div>
				</div>
				<div className="steps__container__boxes">
					<div className="steps__container__boxes__count"><span className='animation__span'>3</span></div>
					<div className="steps__container__boxes__text">
						<h3 className='title__midle__include'>{trans[lang].servicesDevelopmentTitle}</h3>
						<p className='text__include'>{trans[lang].servicesDevelopmentText}</p>
					</div>
				</div>
				<div className="steps__container__boxes">
					<div className="steps__container__boxes__count"><span className='animation__span'>4</span></div>
					<div className="steps__container__boxes__text">
						<h3 className='title__midle__include'>{trans[lang].servicesTestingTitle}</h3>
						<p className='text__include'>{trans[lang].servicesTestingText}</p>
					</div>
				</div>
				<div className="steps__container__boxes">
					<div className="steps__container__boxes__count"><span className='animation__span'>5</span></div>
					<div className="steps__container__boxes__text">
						<h3 className='title__midle__include'>{trans[lang].servicesDeploymentTitle}</h3>
						<p className='text__include'>{trans[lang].servicesDeploymentText}</p>
					</div>
				</div>
				<div className="steps__container__boxes">
					<div className="steps__container__boxes__count"><span className='animation__span'>6</span></div>
					<div className="steps__container__boxes__text">
						<h3 className='title__midle__include'>{trans[lang].servicesMaintenenceTitle}</h3>
						<p className='text__include'>{trans[lang].servicesMaintenenceText}</p>
					</div>
				</div>
				<div className="steps__container__boxes">
					<div className="steps__container__boxes__count"><span className='animation__span'> 7</span></div>
					<div className="steps__container__boxes__text">
						<h3 className='title__midle__include'>{trans[lang].servicesDocumentationTitle}</h3>
						<p className='text__include'>{trans[lang].servicesDocumentationText}</p>
					</div>
				</div>
				<div className="steps__container__boxes">
					<div className="steps__container__boxes__count"><span className='animation__span'>8</span></div>
					<div className="steps__container__boxes__text">
						<h3 className='title__midle__include'>{trans[lang].servicesContinuousTitle}</h3>
						<p className='text__include'>{trans[lang].servicesContinuousText}</p>
					</div>
				</div>


			</div>





		</div>

	)
}

export default StepsForServices






{/* <h2>{trans[lang].byServices}</h2>

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
				</div> */}


{/* <div className="steps__container__2">
					<h3>Business requirements.</h3>
					<div className="circle__container">
						<div className="circule"><MdOutlineBusinessCenter /></div>
					</div>
					<p>Our outsourcing company specializes in delivering comprehensive solutions that perfectly align with the specific business requirements of our clients, ensuring optimal efficiency and success.</p>				</div> */}