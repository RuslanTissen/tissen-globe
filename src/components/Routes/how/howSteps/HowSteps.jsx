import React, { useContext } from 'react'
import "./HowSteps.scss"
import howIcons1 from "../../../../images/Steps-req.png"
import howIcons2 from "../../../../images/Steps-sys.png"
import howIcons3 from "../../../../images/Steps-dev.png"
import howIcons4 from "../../../../images/Steps-test.png"
import howIcons5 from "../../../../images/Steps-dep.png"
import howIcons6 from "../../../../images/Steps-main.png"
import howIcons7 from "../../../../images/Steps-doc.png"
import howIcons8 from "../../../../images/Steps-cont.png"
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
		<div className='how-steps'>
			<div className="how-steps__coontainer">
				<h2 className='title__picture--include'>{trans[lang].howStepsTitle}</h2>
				<div className="how-steps__coontainer--boxes">
					<img src={howIcons1} alt='Ups, image is lost' />
					<div className="how-steps__coontainer--boxes--text-containers">
						<h3 className='text__include'>{trans[lang].howRequirementsGatheringTitle}</h3>
						<p className='text__include'>{trans[lang].howRequirementsGatheringText}</p>
					</div>
				</div>
				<div className="how-steps__coontainer--boxes">
					<img src={howIcons2} alt='Ups, image is lost' />
					<div className="how-steps__coontainer--boxes--text-containers">
						<h3 className='text__include'>{trans[lang].howSystemDesignTitle}</h3>
						<p className='text__include'>{trans[lang].howSystemDesignText}					</p>
					</div>
				</div>
				<div className="how-steps__coontainer--boxes">
					<img src={howIcons3} alt='Ups, image is lost' />
					<div className="how-steps__coontainer--boxes--text-containers">
						<h3 className='text__include'>{trans[lang].howDevelopmentTitle}</h3>
						<p className='text__include'>	{trans[lang].howDevelopmentText}</p>
					</div>
				</div>
				<div className="how-steps__coontainer--boxes">
					<img src={howIcons4} alt='Ups, image is lost' />
					<div className="how-steps__coontainer--boxes--text-containers">
						<h3 className='text__include'>{trans[lang].howTestingTitle}</h3>
						<p className='text__include'>{trans[lang].howTestingText}			</p>
					</div>
				</div>
				<div className="how-steps__coontainer--boxes">
					<img src={howIcons5} alt='Ups, image is lost' />
					<div className="how-steps__coontainer--boxes--text-containers">
						<h3 className='text__include'>{trans[lang].howDeploymentTitle}</h3>
						<p className='text__include'>{trans[lang].howDeploymentText}	</p>
					</div>
				</div>
				<div className="how-steps__coontainer--boxes">
					<img src={howIcons6} alt='Ups, image is lost' />
					<div className="how-steps__coontainer--boxes--text-containers">
						<h3 className='text__include'>{trans[lang].howMaintenanceSupportTitle}</h3>
						<p className='text__include'>{trans[lang].howMaintenanceSupportText}</p>
					</div>
				</div>
				<div className="how-steps__coontainer--boxes">
					<img src={howIcons7} alt='Ups, image is lost' />
					<div className="how-steps__coontainer--boxes--text-containers">
						<h3 className='text__include'>{trans[lang].howDocumentationTitle}</h3>
						<p className='text__include'>{trans[lang].howDocumentationText}	</p>
					</div>
				</div>
				<div className="how-steps__coontainer--boxes">
					<img src={howIcons8} alt='Ups, image is lost' />
					<div className="how-steps__coontainer--boxes--text-containers">
						<h3 className='text__include'>{trans[lang].howContinuousImprovementTitle}</h3>
						<p className='text__include'>{trans[lang].howContinuousImprovementText}</p>
					</div>
				</div>
				<div className="how-steps__coontainer--link-box">
					<NavLink to="/Contact" onClick={scrollToTheTop}>{contactButton}</NavLink>
				</div>
			</div>
		</div>
	)
}

export default HowSteps