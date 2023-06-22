import React from 'react'
import "./AboutWorking.scss"

function AboutWorking() {
  return (
	 <div className='aboutWorking'>
		<div className="aboutWorking__container">
		<h2 className='title__picture__include'>Tissen Working Staff</h2>
				<div className="aboutWorking__container__boxes1 aboutWorking__container__boxes">
					<div className="aboutWorkingbox"></div>
					<p>With our IT outsourcing services, you can reduce costs significantly while gaining access to a team of skilled professionals who stay ahead of the latest trends and best practices. We provide round-the-clock support, ensuring your systems run smoothly and addressing issues before they impact your operations.</p>
				</div>
				<div className="aboutWorking__container__boxes2 aboutWorking__container__boxes">
					<p>Our flexible and scalable services adapt to your evolving needs, and we prioritize security and compliance, safeguarding your data and meeting industry standards. By partnering with us, you can focus on your core business objectives while we handle your IT needs.</p>
					<div className="aboutWorkingbox"></div>
				</div>
		</div>
	 </div>
  )
}

export default AboutWorking