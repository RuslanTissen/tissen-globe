import React, { useContext } from 'react'
import "./Location.scss"
import north_america from "../../../images/north_america.jpg"
import europa from "../../../images/europa.jpg"
import south_america from "../../../images/south_america.jpg"
import trans from '../../Translate'
import { Context } from '../../Context'


function Location() {
	const { lang, setLang } = useContext(Context)

	return (
		<div className="location">
			<div className="location__container">
				<h2 className='title__picture--include'>{trans[lang].whereAreWe}</h2>
				<div className="location__container--boxes">
					<img src={south_america} alt='Ups, image is lost'/>
					<p>{trans[lang].theTissen}</p>
					<h5>{trans[lang].southAmerica}</h5>
				</div>
				<div className="location__container--boxes">
					<img src={north_america} alt='Ups, image is lost'/>
					<p>{trans[lang].GermanIT}</p>
					<h5>{trans[lang].northAmerica}</h5>
				</div>
				<div className="location__container--boxes">
					<img src={europa} alt='Ups, image is lost'/>
					<p>{trans[lang].weAre}</p>
					<h5>{trans[lang].europe}</h5>
				</div>
			</div>
		</div>
	)
}

export default Location