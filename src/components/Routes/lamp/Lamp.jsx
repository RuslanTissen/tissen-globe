import React from 'react'
import "./Lamp.scss"
import gif from "../../../images/gif-career.gif"

function Lamp() {


	return (
		<div className='lamp'>
			<div className="lamp__container">
				
				<div className="lamp__container__animation__box">
					<img src={gif} alt="" />
				</div>

				<q>Stronger Together, Achieving Greatness as One Team.</q>

			</div>
		</div>
	)
}

export default Lamp