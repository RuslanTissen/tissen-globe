import React from 'react'
import "./Start.scss"
import Introduction from '../components/introduction/Introduction.jsx';
import Moto from '../components/moto/Moto.jsx';
import Inside from '../components/inside/Inside.jsx';
import Steps from '../components/steps/Steps.jsx';
import Technologies from '../components/technologies/Technologies';

function Start() {
	return (
		<div>
			<Introduction />

			<Moto />

			<Steps />

			<Technologies />

			<Inside />

		</div>
	)
}

export default Start


