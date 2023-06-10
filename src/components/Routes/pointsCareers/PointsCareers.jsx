import React from 'react'
import "./PointsCareers.scss"

function PointsCareers(props) {
	let { textTitle, textP } = props
	return (
		<div className="pointsCareers__image__container">
			<h2>{textTitle}</h2>

			<p>{textP}</p>
		</div>
	)
}

export default PointsCareers