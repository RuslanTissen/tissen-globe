import React from 'react'
import "./Start.scss"
import Introduction from '../components/introduction/Introduction.jsx';
import Moto from '../components/moto/Moto.jsx';
import Technology from '../components/technology/Technology.jsx';
import Inside from '../components/inside/Inside.jsx';
// import Animation from '../components/animation/Animation.jsx';
import Steps from '../components/steps/Steps.jsx';

function Start() {
	return (
		<div>
			<Introduction />

			<Moto />

			<Steps />

			<hr></hr>

			<Technology />

			<Inside />

		</div>
	)
}

export default Start


{/* <Animation /> */ }

{/* <Bloks /> */ }
