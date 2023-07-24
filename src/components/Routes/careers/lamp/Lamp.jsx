import React, { useContext } from 'react'
import "./Lamp.scss"
import gif from "../../../../images/gif-career.gif"
import trans from '../../../Translate'
import { Context } from '../../../Context'

function Lamp() {
const {lang} = useContext(Context)

	return (
		<div className='lamp'>
			<div className="lamp__container">
				
				<div className="lamp__container--animation-box">
					<img src={gif} alt="lamp image" />
				</div>

				<q>{trans[lang].carreersStrongerTogether}</q>

			</div>
		</div>
	)
}

export default Lamp