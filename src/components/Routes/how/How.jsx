import React, { useContext } from 'react'
import "./How.scss"
import { Context } from '../../Context'
import HowPicture from './howPicture/HowPicture.jsx'
import HowSteps from './howSteps/HowSteps'
import HowGlobePicture from './howGlobePicture/HowGlobePicture.jsx'
import HowSkills from './howSkills/HowSkills'
import HowAdvantages from './howAdvantages/HowAdvantages'
import HowDecisions from './howDecisions/HowDecisions'
import trans from '../../Translate'

function How() {
	const { lang } = useContext(Context)

	const scrollToTheTop = () => {
		window.scroll(0, 0)
	}

	return (
		<div className='how'>
			<HowPicture />

			<HowSteps
				contactButton={`${trans[lang].howKnowUs}`}
			/>

			<HowGlobePicture />

			<HowSkills />

			<HowAdvantages />
			
			<HowDecisions/>

		</div>
	)
}

export default How
