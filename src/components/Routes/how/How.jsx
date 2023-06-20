import React, { useContext } from 'react'
import "./How.scss"
import { Context } from '../../Context'
import HowPicture from './howPicture/HowPicture.jsx'
import HowSteps from './howSteps/HowSteps'
import HowGlobePicture from './howGlobePicture/HowGlobePicture.jsx'

function How() {
	const { lang, setLang } = useContext(Context)

	const scrollToTheTop = () => {
		window.scroll(0, 0)
	}

	return (
		<div className='how'>
			<HowPicture />

			<HowSteps
				contactButton={"Know us"}
			/>

			<HowGlobePicture/>

		</div>
	)
}

export default How
