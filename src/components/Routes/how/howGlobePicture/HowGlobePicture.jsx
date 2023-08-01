import React, { useContext } from 'react'
import "./HowGlobePicture.scss"
import trans from '../../../Translate'
import { Context } from '../../../Context'

function HowGlobePicture() {
	const {lang, setLang} = useContext(Context)
	return (
		<div className='how-globe__picture'>
			<div className="how-globe__picture--container">
				<h2>{trans[lang].howAccording} <mark>{trans[lang].howAccording53} </mark>  {trans[lang].howOrganizations}  <mark>{trans[lang].howOutsource} </mark>  {trans[lang].howSourceDeloitte} </h2>
			</div>
		</div>
	)
}

export default HowGlobePicture