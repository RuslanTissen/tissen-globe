import React from 'react'
import "./Careers.scss"
import PointsCareers from '../pointsCareers/PointsCareers.jsx'
import LetsContactCareers from '../letsContactCareers/LetsContactCareers.jsx'
import Choose from '../choose/Choose.jsx'
import Welcome from '../welcome/Welcome'

function Careers() {
	return (
		<div>

			<PointsCareers
				textTitle={"Join Our Team"}
				textP={"Passionate about technology and looking for exciting career opportunities? At Tissen, we're a leading IT outsourcing company offering a range of rewarding roles. Join our team of experts dedicated to solving complex business challenges with talent and innovation."}
			/>

			<Choose />

			<Welcome/>

			<LetsContactCareers
				contactTitle={"Do you have something else to contribute?"}
				contactButton={"Lets talk"}
			/>



		</div>
	)
}

export default Careers