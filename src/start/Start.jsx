import React from 'react'
import "./Start.scss"
import Introduction from '../components/introduction/Introduction.jsx';
import Moto from '../components/moto/Moto.jsx';
import Steps from '../components/steps/Steps.jsx';
import Technologies from '../components/technologies/Technologies';
import Statement from '../components/statement/Statement';

function Start() {
	return (
		<div>
			<Introduction />

			<Moto />

			<Steps />

			<Technologies />

			<Statement/>

		</div>
	)
}

export default Start


