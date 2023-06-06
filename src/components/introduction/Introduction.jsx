import React from 'react'
import "./Introduction.scss"

function Introduction() {
	return (
		<div className='introdiuction'>
			<div className="introdiuction__box__1">
				<div className="introdiuction__box__1__title__container">
					<h1>Global IT</h1>
					<h1>Outsourcing</h1>
					<h1>Company</h1>
				</div>
				<div className="introdiuction__box__1__button__container">
					<button>Estimate your project</button>
				</div>
			</div>

			<div className="introdiuction__box__2">
				{/* <div className="introdiuction__benefits__container">	</div> */}
				<ul className="introdiuction__contact__container">
					<li>Save up to <mark>30%</mark> of your costs</li>
					<li>Project starts in <mark>14</mark> days guarantee</li>
					<li>Get the best <mark>technologies</mark> </li>
				</ul>
			</div>
		</div>
	)
}

export default Introduction