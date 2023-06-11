import React from 'react'
import "./Choose.scss"
import chosse1 from "../../../images/choose1.jpg"
import chosse2 from "../../../images/choose2.jpg"
import chosse3 from "../../../images/choose3.jpg"
import chosse4 from "../../../images/choose4.jpg"
import chosse5 from "../../../images/choose5.jpg"

function Choose() {
	return (
		<div className='choose'>
			<div className="choose__container">
				<h2>Why Choose Us?</h2>
				<div className="choose__boxes">
					<div className="choose__boxes__img"><img src={chosse1} alt="" /></div>
					<div className="choose__boxes__text">
						<h4>Diverse Projects</h4>
						<p>Work on a variety of projects across industries, from cutting-edge software solutions to large-scale infrastructure deployments. Enhance your skills and expertise with diverse challenges.</p>
					</div>
				</div>
				<div className="choose__boxes">
					<div className="choose__boxes__img"><img src={chosse2} alt="" /></div>
					<div className="choose__boxes__text">
						<h4>Competitive Compensation</h4>
						<p>Enjoy competitive salaries and comprehensive benefits as recognition for your hard work and dedication.</p>
					</div>
				</div>
				<div className="choose__boxes">
					<div className="choose__boxes__img"><img src={chosse3} alt="" /></div>
					<div className="choose__boxes__text">
						<h4>Work-Life Balance</h4>
						<p>We offer flexible schedules and remote work options, ensuring a healthy work-life balance.</p>
					</div>
				</div>
				<div className="choose__boxes">
					<div className="choose__boxes__img"><img src={chosse4} alt="" /></div>
					<div className="choose__boxes__text">
						<h4>Collaborative Environment</h4>
						<p>Join talented professionals who value teamwork, knowledge-sharing, and an inclusive work culture that fosters creativity and innovation.</p>
					</div>
				</div>
				<div className="choose__boxes">
					<div className="choose__boxes__img"><img src={chosse5} alt="" /></div>
					<div className="choose__boxes__text">
						<h4>Continuous Learning</h4>
						<p>Access training programs, certifications, and industry conferences to stay updated with the latest trends and technologies. We invest in your development.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Choose