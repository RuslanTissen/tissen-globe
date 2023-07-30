import React, { useContext } from 'react'
import "./StepsForServices.scss"
import trans from '../../../Translate'
import { Context } from '../../../Context'

function StepsForServices() {
	const { lang } = useContext(Context)

	return (
		<div className='steps'>
			<div className="steps__container">
				<h2 className='title__picture--include'>{trans[lang].servicesWorkingProcessTitle}</h2>
				<div className="steps__container--boxes">
					<div className="steps__container--boxes-count"><span className='animation__span'>1</span></div>
					<div className="steps__container--boxes-text">
						<h3 className='h3__mixin--bold'>{trans[lang].servicesRequermentsTitle}</h3>
						<p className='regular-text__mixin '>{trans[lang].servicesRequermentsText}</p>
					</div>
				</div>
				<div className="steps__container--boxes">
					<div className="steps__container--boxes-count"><span className='animation__span'>2</span></div>
					<div className="steps__container--boxes-text">
						<h3 className='h3__mixin--bold'>{trans[lang].servicesSystemDesignTitle}</h3>
						<p className='regular-text__mixin'>{trans[lang].servicesSystemDesignText}</p>
					</div>
				</div>
				<div className="steps__container--boxes">
					<div className="steps__container--boxes-count"><span className='animation__span'>3</span></div>
					<div className="steps__container--boxes-text">
						<h3 className='h3__mixin--bold'>{trans[lang].servicesDevelopmentTitle}</h3>
						<p className='regular-text__mixin'>{trans[lang].servicesDevelopmentText}</p>
					</div>
				</div>
				<div className="steps__container--boxes">
					<div className="steps__container--boxes-count"><span className='animation__span'>4</span></div>
					<div className="steps__container--boxes-text">
						<h3 className='h3__mixin--bold'>{trans[lang].servicesTestingTitle}</h3>
						<p className='regular-text__mixin'>{trans[lang].servicesTestingText}</p>
					</div>
				</div>
				<div className="steps__container--boxes">
					<div className="steps__container--boxes-count"><span className='animation__span'>5</span></div>
					<div className="steps__container--boxes-text">
						<h3 className='h3__mixin--bold'>{trans[lang].servicesDeploymentTitle}</h3>
						<p className='regular-text__mixin'>{trans[lang].servicesDeploymentText}</p>
					</div>
				</div>
				<div className="steps__container--boxes">
					<div className="steps__container--boxes-count"><span className='animation__span'>6</span></div>
					<div className="steps__container--boxes-text">
						<h3 className='h3__mixin--bold'>{trans[lang].servicesMaintenenceTitle}</h3>
						<p className='regular-text__mixin'>{trans[lang].servicesMaintenenceText}</p>
					</div>
				</div>
				<div className="steps__container--boxes">
					<div className="steps__container--boxes-count"><span className='animation__span'> 7</span></div>
					<div className="steps__container--boxes-text">
						<h3 className='h3__mixin--bold'>{trans[lang].servicesDocumentationTitle}</h3>
						<p className='regular-text__mixin'>{trans[lang].servicesDocumentationText}</p>
					</div>
				</div>
				<div className="steps__container--boxes">
					<div className="steps__container--boxes-count"><span className='animation__span'>8</span></div>
					<div className="steps__container--boxes-text">
						<h3 className='h3__mixin--bold'>{trans[lang].servicesContinuousTitle}</h3>
						<p className='regular-text__mixin'>{trans[lang].servicesContinuousText}</p>
					</div>
				</div>


			</div>





		</div>

	)
}

export default StepsForServices