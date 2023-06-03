import React from 'react'
import "./Introduction.scss"

function Introduction() {
	return (
		<div className='introdiuction'>
			<div className="introdiuction__title__container">
				<h1>GLOBAL</h1>
				<h1>IT</h1>
				<h1>OUTSOURCING</h1>
				<h1>COMPANY</h1>
			</div>
			<div className="introdiuction__benefits__container">
				<h3><mark>Budget</mark> - save up to 30% of costs</h3>
				<h3><mark>Time</mark>  - start a project after 14 days</h3>
				<h3><mark>Innovation</mark>  - get the best technologes</h3>
			</div>

			<div className="introdiuction__contact__container">
				<button>Estimate yout project now</button>
			</div>

		</div>
	)
}

export default Introduction