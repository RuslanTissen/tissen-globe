import React from 'react'
import {Routes,Route} from "react-router-dom"
import "./Main.scss"
import Bloks from '../components/bloks/Bloks';
import Introduction from '../components/introduction/Introduction.jsx';
import Moto from '../components/moto/Moto.jsx';
import Technology from '../components/technology/Technology.jsx';



function Main() {
	return (
		<main>
			<Introduction />

			<Moto />

			<Bloks />

			<hr></hr>

			<Technology />
		</main>
	)
}

export default Main