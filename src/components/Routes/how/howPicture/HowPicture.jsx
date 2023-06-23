import React, { useContext } from 'react'
import "./HowPicture.scss"
import trans from '../../../Translate'
import { Context } from '../../../Context'

function HowPicture() {
	const { lang } = useContext(Context)

	return (
		<div className='howPicture'>
			<div className="howPicture__container">
				<h2 className='title__picture__include'>How we</h2>
			</div>
		</div>
	)
}

export default HowPicture