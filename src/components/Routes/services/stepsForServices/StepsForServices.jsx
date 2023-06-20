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
			<div className="steps__container__boxes">
					{/* <div className="steps__container__boxes__count"></div> */}
					<div className="steps__container__boxes__text">
						<h2 className='title__super__include'>Tissen Working Process</h2>
						{/* <p></p> */}
					</div>
				</div>
				<div className="steps__container__boxes">
					<div className="steps__container__boxes__count"><span>1</span></div>
					<div className="steps__container__boxes__text">
						<h3 className='title__midle__include'>Requirements Gathering</h3>
						<p className='text__include'>Gathering and analyzing the project requirements, understanding the objectives, and defining the scope of the project.</p>
					</div>
				</div>
				<div className="steps__container__boxes">
					<div className="steps__container__boxes__count"><span>2</span></div>
					<div className="steps__container__boxes__text">
						<h3 className='title__midle__include'>System Design</h3>
						<p className='text__include'>Creating a detailed system design that outlines the architecture, components, and functionalities of the IT solution.</p>
					</div>
				</div>
				<div className="steps__container__boxes">
					<div className="steps__container__boxes__count"><span>3</span></div>
					<div className="steps__container__boxes__text">
						<h3 className='title__midle__include'>Development</h3>
						<p className='text__include'>Writing the code and implementing the system design, using the chosen programming languages, frameworks, and tools.</p>
					</div>
				</div>
				<div className="steps__container__boxes">
					<div className="steps__container__boxes__count"><span>4</span></div>
					<div className="steps__container__boxes__text">
						<h3 className='title__midle__include'>Testing</h3>
						<p className='text__include'>Conducting various testing activities, such as unit testing, integration testing, and system testing, to identify and fix any bugs or issues.</p>
					</div>
				</div>
				<div className="steps__container__boxes">
					<div className="steps__container__boxes__count"><span>5</span></div>
					<div className="steps__container__boxes__text">
						<h3 className='title__midle__include'>Deployment</h3>
						<p className='text__include'>Deploying the developed software or system to the production environment or making it available to users.</p>
					</div>
				</div>
				<div className="steps__container__boxes">
					<div className="steps__container__boxes__count"><span>6</span></div>
					<div className="steps__container__boxes__text">
						<h3 className='title__midle__include'>Maintenance and Support</h3>
						<p className='text__include'>Providing ongoing maintenance and support for the developed IT solution, including bug fixes, updates, and user assistance.</p>
					</div>
				</div>
				<div className="steps__container__boxes">
					<div className="steps__container__boxes__count"><span>7</span></div>
					<div className="steps__container__boxes__text">
						<h3 className='title__midle__include'>Documentation</h3>
						<p className='text__include'>Documenting the system, code, and user manuals to ensure proper understanding, maintenance, and future enhancements.</p>
					</div>
				</div>
				<div className="steps__container__boxes">
					<div className="steps__container__boxes__count"><span>8</span></div>
					<div className="steps__container__boxes__text">
						<h3 className='title__midle__include'>Continuous Improvement</h3>
						<p className='text__include'>Continuously monitoring and evaluating the IT solution's performance, gathering feedback, and making improvements to enhance its functionality and efficiency.</p>
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