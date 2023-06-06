import React from 'react'
import "./Statement.scss"
import statement from "../../images/statement.jpg"

function Statement() {
	return (
		<div className="statement">
			<div className="statement__container">
				<div className="statement__container__img"><img src={statement}/></div>
				<div className="statement__container__text">
					<p>IT outsourcing is advantageous because it offers cost savings, access to specialized skills, focus on core competencies, scalability, enhanced service levels, and risk mitigation.</p>
				</div>
			</div>
		</div>
	)
}

export default Statement