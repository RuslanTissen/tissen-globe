import React from 'react'
import "./Points.scss"

function Points(props) {
	let { textTitle, textP } = props
	return (
		<div className="points">
			<div className="points__image-container">
				<h2>{textTitle}</h2>
			</div>
		</div>
	)
}

export default Points