import React, { useContext } from 'react'
import "./Careers.scss"
import PointsCareers from './pointsCareers/PointsCareers.jsx'
import LetsContactCareers from './letsContactCareers/LetsContactCareers.jsx'
import Choose from './choose/Choose.jsx'
import Welcome from './welcome/Welcome'
import Lamp from './lamp/Lamp'
import trans from '../../Translate'
import { Context } from '../../Context'

function Careers() {
	const {lang} = useContext(Context)
	
	return (
		<div className='careers'>

			<PointsCareers
				textTitle={`${trans[lang].carreersJoinOurTeamTitle}`}
				textP={`${trans[lang].carreersJoinOurTeamText}`}
			/>

			<Choose />

			<Welcome />

			<Lamp />

			<LetsContactCareers
				contactTitle={`${trans[lang].carreersDoYouHave}`}
				contactButton={`${trans[lang].carreersLetsTalk}`}
			/>



		</div>
	)
}

export default Careers