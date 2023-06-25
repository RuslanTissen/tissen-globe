import React, { useContext } from 'react'
import "./HowDecisions.scss"
import trans from '../../../Translate'
import { Context } from '../../../Context'

function HowDecisions() {
	const {lang, setLang} = useContext(Context)
  return (
	 <div className='howDecisions'>
		<div className="howDecisions__container">
			<h2>{trans[lang].howThePrimaryText}<mark>{trans[lang].howCostReduction}</mark>{trans[lang].how64}<mark>{trans[lang].howAccessing}</mark> {trans[lang].how51}<mark>{trans[lang].howImproving}</mark> {trans[lang].how46and}<mark> {trans[lang].howEnhancing}</mark> {trans[lang].how34Source}</h2>
		</div>
	 </div>
  )
}

export default HowDecisions