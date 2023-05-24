import React from 'react'
import "./Start.scss"
import Bloks from '../components/bloks/Bloks';
import Introduction from '../components/introduction/Introduction.jsx';
import Moto from '../components/moto/Moto.jsx';
import Technology from '../components/technology/Technology.jsx';
import Inside from '../components/inside/Inside.jsx';


function Start() {
  return (
	 <div>
		<Introduction />

			<Moto />

			<Bloks />

			<hr></hr>

			<Technology />

			<Inside />
	 </div>
  )
}

export default Start