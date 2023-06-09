import React from 'react'
import "./Points.scss"

function Points(props) {
	let { textTitle } = props
	return (
		<div className="service__image__container">
			<h2>{textTitle}</h2>
		</div>
	)
}

export default Points