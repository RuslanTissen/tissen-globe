import React from 'react'
import "./Start.scss"
import Introduction from '../introduction/Introduction.jsx';
import Moto from './moto/Moto';
import Steps from './steps/Steps';
import Technologies from './technologies/Technologies';
import Statement from './statement/Statement';
import Location from './locaion/Location';

function Start() {
	return (
		<div className='starts'>
			<Introduction />

			<Moto />

			<Steps />

			<Technologies />

			<Statement/>

			<Location/>

		</div>
	)
}

export default Start


