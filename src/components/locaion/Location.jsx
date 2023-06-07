import React from 'react'
import "./Location.scss"
import north_america from "../../images/north_america.jpg"
import europa from "../../images/europa.jpg"
import south_america from "../../images/south_america.jpg"

function Location() {
	return (
		<div className="location">
			<div className="location__container">
				<h2>Where Are We</h2>
				<div className="location__container__boxes">
					<img src={south_america} />
					<p>Tissen IT company provides technology services and solutions, specializing in software development and IT consulting. They employ skilled professionals and offer outsourcing services globally, contributing to the growth of the IT industry in South America.</p>
					<h5>South America</h5>
				</div>
				<div className="location__container__boxes">
					<img src={north_america} />
					<p>A German IT company providing assistance in the USA specializes in delivering a wide range of IT services and solutions tailored to meet the specific needs of American businesses. With their technical expertise, innovative approach, and cross-cultural understanding, they help optimize IT operations</p>
					<h5>North America</h5>
				</div>
				<div className="location__container__boxes">
					<img src={europa} />
					<p>We are a German IT outsourcing company in Europe that provides businesses with cost-effective and efficient IT services and solutions. Leveraging our clients technical expertise and specialized skills, we help businesses optimize their IT operations while allowing them to concentrate on their core competencies.</p>
					<h5>Europe</h5>
				</div>
			</div>
		</div>
	)
}

export default Location