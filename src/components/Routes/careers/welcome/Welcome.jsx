import React, { useContext } from 'react'
import "./Welcome.scss"
import trans from '../../../Translate'
import { Context } from '../../../Context'

function Welcome() {
	const { lang } = useContext(Context)
	return (
		<div className='welcome'>
			<div className="welcome__container">
				<h2>{trans[lang].carreersWhatWeWelcomeTitle}</h2>
				<div className="welcome__container__boxes">
					<h3>{trans[lang].carreersExpertiseTitle}</h3>
					<p>{trans[lang].carreersExpertiseText}</p>
				</div>
				<div className="welcome__container__boxes">
					<h3>{trans[lang].carreersProblemSolvingTitle}</h3>
					<p>{trans[lang].carreersProblemSolvingText}</p>
				</div>
				<div className="welcome__container__boxes">
					<h3>{trans[lang].carreersTeamPlayerTitle}</h3>
					<p>{trans[lang].carreersTeamPlayerText}</p>
				</div>
				<div className="welcome__container__boxes">
					<h3>{trans[lang].carreersAdaptabilityTitle}</h3>
					<p>{trans[lang].carreersAdaptabilityText}</p>
				</div>
				<div className="welcome__container__boxes">
					<h3>{trans[lang].carreersStrongCommunicationTitle} </h3>
					<p> {trans[lang].carreersStrongCommunicationText}</p>
				</div>
				<div className="welcome__container__boxes">
					<h3>{trans[lang].carreersClientFocusTitle}</h3>
					<p>{trans[lang].carreersClientFocusText}</p>
				</div>
				<div className="welcome__container__boxes">
					<h3>{trans[lang].carreersDriveExcellenceTitle}</h3>
					<p>{trans[lang].carreersDriveExcellenceText}</p>
				</div>
				<div className="welcome__container__boxes">
					<h3>{trans[lang].carreersEntrepreneurialMindsetTitle}</h3>
					<p> {trans[lang].carreersEntrepreneurialMindsetText}</p>
				</div>
			</div>

		</div>
	)
}

export default Welcome