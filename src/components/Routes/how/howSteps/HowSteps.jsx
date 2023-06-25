import React, { useContext } from 'react'
import "./HowSteps.scss"
import howIcons1 from "../../../../images/howIcons1.jpg"
import howIcons2 from "../../../../images/howIcons2.jpg"
import howIcons3 from "../../../../images/howIcons3.jpg"
import howIcons4 from "../../../../images/howIcons4.jpg"
import howIcons5 from "../../../../images/howIcons5.jpg"
import howIcons6 from "../../../../images/howIcons6.jpg"
import howIcons7 from "../../../../images/howIcons7.jpg"
import howIcons8 from "../../../../images/howIcons8.jpg"
import { NavLink } from 'react-router-dom';
import trans from '../../../Translate'
import { Context } from '../../../Context'


function HowSteps(props) {
	let { contactButton } = props

	const { lang, setLang } = useContext(Context)

	const scrollToTheTop = () => {
		window.scroll(0, 0)
	}
	return (
		<div className='howSteps'>
			<div className="howSteps__coontainer">
				<h2 className='title__picture__include'>{trans[lang].howStepsTitle}</h2>
				<div className="howSteps__coontainer__boxes">
					<img src={howIcons1} />
					<div className="howSteps__coontainer__boxes__text__containers">
						<h3 className='text__include'>{trans[lang].howRequirementsGatheringTitle}</h3>
						<p className='text__include'>{trans[lang].howRequirementsGatheringText}</p>
					</div>
				</div>
				<div className="howSteps__coontainer__boxes">
					<img src={howIcons2} />
					<div className="howSteps__coontainer__boxes__text__containers">
						<h3 className='text__include'>{trans[lang].howSystemDesignTitle}</h3>
						<p className='text__include'>{trans[lang].howSystemDesignText}					</p>
					</div>
				</div>
				<div className="howSteps__coontainer__boxes">
					<img src={howIcons3} />
					<div className="howSteps__coontainer__boxes__text__containers">
						<h3 className='text__include'>{trans[lang].howDevelopmentTitle}</h3>
						<p className='text__include'>	{trans[lang].howDevelopmentText}</p>
					</div>
				</div>
				<div className="howSteps__coontainer__boxes">
					<img src={howIcons4} />
					<div className="howSteps__coontainer__boxes__text__containers">
						<h3 className='text__include'>{trans[lang].howTestingTitle}</h3>
						<p className='text__include'>{trans[lang].howTestingText}			</p>
					</div>
				</div>
				<div className="howSteps__coontainer__boxes">
					<img src={howIcons5} />
					<div className="howSteps__coontainer__boxes__text__containers">
						<h3 className='text__include'>{trans[lang].howDeploymentTitle}</h3>
						<p className='text__include'>{trans[lang].howDeploymentText}	</p>
					</div>
				</div>
				<div className="howSteps__coontainer__boxes">
					<img src={howIcons6} />
					<div className="howSteps__coontainer__boxes__text__containers">
						<h3 className='text__include'>{trans[lang].howMaintenanceSupportTitle}</h3>
						<p className='text__include'>{trans[lang].howMaintenanceSupportText}</p>
					</div>
				</div>
				<div className="howSteps__coontainer__boxes">
					<img src={howIcons7} />
					<div className="howSteps__coontainer__boxes__text__containers">
						<h3 className='text__include'>{trans[lang].howDocumentationTitle}</h3>
						<p className='text__include'>{trans[lang].howDocumentationText}	</p>
					</div>
				</div>
				<div className="howSteps__coontainer__boxes">
					<img src={howIcons8} />
					<div className="howSteps__coontainer__boxes__text__containers">
						<h3 className='text__include'>{trans[lang].howContinuousImprovementTitle}</h3>
						<p className='text__include'>{trans[lang].howContinuousImprovementText}</p>
					</div>
				</div>
				<NavLink to="/Contact" onClick={scrollToTheTop}>{contactButton}</NavLink>
			</div>
		</div>
	)
}

export default HowSteps