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
				
				<div className="lamp__container__animation__box">
					<img src={gif} alt="" />
				</div>

				<q>{trans[lang].carreersStrongerTogether}</q>

			</div>
		</div>
	)
}

export default Lamp