import React from 'react'
import "./PointsCareers.scss"

function PointsCareers(props) {
	let { textTitle, textP } = props
	return (
		<div className="points-careers__image-container">
			<h2>{textTitle}</h2>

			<p>{textP}</p>
		</div>
	)
}

export default PointsCareers