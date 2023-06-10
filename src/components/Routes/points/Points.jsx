import React from 'react'
import "./Points.scss"

function Points(props) {
	let { textTitle, textP } = props
	return (
		<div className="service__image__container">
			<h2>{textTitle}</h2>

			<p>{textP}</p>
		</div>
	)
}

export default Points