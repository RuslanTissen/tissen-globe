import React, { useContext } from 'react'
import "./Statement.scss"
import statement from "../../../images/statement.jpg"
import trans from '../../Translate';
import { Context } from '../../Context';


function Statement() {
	const { lang, setLang } = useContext(Context)

	return (
		<div className="statement">
			<div className="statement__container">
				<div className="statement__container--img"><img src={statement} alt='Ups, image is lost' /></div>
				<div className="statement__container--text">
					<p>{trans[lang].IT_Outsourcing}</p>
				</div>
			</div>
		</div>
	)
}

export default Statement