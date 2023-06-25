import React, { useContext } from 'react'
import "./Choose.scss"
import chosse1 from "../../../../images/choose1.jpg"
import chosse2 from "../../../../images/choose2.jpg"
import chosse3 from "../../../../images/choose3.jpg"
import chosse4 from "../../../../images/choose4.jpg"
import chosse5 from "../../../../images/choose5.jpg"
import trans from '../../../Translate'
import { Context } from '../../../Context'

function Choose() {
	const {lang, setLang} = useContext(Context)
	return (
		<div className='choose'>
			<div className="choose__container">
				<h2>{trans[lang].carreersWhyChooseUsTitle}</h2>
				<div className="choose__boxes">
					<div className="choose__boxes__img"><img src={chosse1} alt="" /></div>
					<div className="choose__boxes__text">
						<h4>{trans[lang].carreersDiverseProjectsTitle}</h4>
						<p>{trans[lang].carreersDiverseProjectsText}</p>
					</div>
				</div>
				<div className="choose__boxes">
					<div className="choose__boxes__img"><img src={chosse2} alt="" /></div>
					<div className="choose__boxes__text">
						<h4>{trans[lang].carreersCompetitiveCompensationTitle}</h4>
						<p>{trans[lang].carreersCompetitiveCompensationText}</p>
					</div>
				</div>
				<div className="choose__boxes">
					<div className="choose__boxes__img"><img src={chosse3} alt="" /></div>
					<div className="choose__boxes__text">
						<h4>{trans[lang].carreersWorkLifeBalanceTitle}</h4>
						<p>{trans[lang].carreersWorkLifeBalanceText}</p>
					</div>
				</div>
				<div className="choose__boxes">
					<div className="choose__boxes__img"><img src={chosse4} alt="" /></div>
					<div className="choose__boxes__text">
						<h4>{trans[lang].carreersCollaborativeEnvironmentTitle}</h4>
						<p>{trans[lang].carreersCollaborativeEnvironmentText}</p>
					</div>
				</div>
				<div className="choose__boxes">
					<div className="choose__boxes__img"><img src={chosse5} alt="" /></div>
					<div className="choose__boxes__text">
						<h4>{trans[lang].carreersContinuousLearningTitle}</h4>
						<p>{trans[lang].carreersContinuousLearningText}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Choose