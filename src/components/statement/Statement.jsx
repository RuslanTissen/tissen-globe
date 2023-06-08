import React, { useContext } from 'react'
import "./Statement.scss"
import statement from "../../images/statement.jpg"
import trans from '../Translate.js';
import { Context } from '../Context';


function Statement() {
	const { lang, setLang } = useContext(Context)

	return (
		<div className="statement">
			<div className="statement__container">
				<div className="statement__container__img"><img src={statement} /></div>
				<div className="statement__container__text">
					<p>{trans[lang].IT_Outsourcing}</p>
				</div>
			</div>
		</div>
	)
}

export default Statement