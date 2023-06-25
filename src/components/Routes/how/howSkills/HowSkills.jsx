import React, { useContext } from 'react'
import "./HowSkills.scss"
import trans from '../../../Translate'
import { Context } from '../../../Context'

function HowSkills() {
	const {lang, setLang} = useContext(Context)
	return (
		<div className='howSkills'>
			<div className="howSkills__container">
				<div className="howSkills__container__text__box">
					<h2>{trans[lang].howInAddition} <mark>{trans[lang].howCommunication} </mark>  {trans[lang].howAnd}  <mark>{trans[lang].howAdaptability} </mark>  {trans[lang].howAmong} </h2>
				</div>
			</div>
		</div>
	)
}

export default HowSkills