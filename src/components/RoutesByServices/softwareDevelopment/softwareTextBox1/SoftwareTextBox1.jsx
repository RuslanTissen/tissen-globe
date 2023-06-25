import React from 'react'
import "./SoftwareTextBox1.scss"
import { ContainerDiv } from '../../../../styledComponents/Container.styled'

function SoftwareTextBox1() {
  return (
	 <div className='softwareTextBox1'>
			<ContainerDiv className='softwareTextBox1__container'>
				<div className="softwareTextBox1__container__box">
					<h3 className="softwareTextBox1__container__box__title text__include">At Tissen, we specialize in creating tailor-made software solutions that align with your unique business needs.</h3>
					<p className='text__include'>Our experienced team of software developers will work closely with you to understand your requirements and deliver high-quality, scalable, and secure software applications. Whether you need a web application, mobile app, or desktop software, we leverage the latest technologies and agile development methodologies to bring your vision to life.</p>
				</div>
				<div className="softwareTextBox1__container__box">
					<h2 className='title__include'>As of 2021, there were over 26 million software developers worldwide - Evans Data Corporation</h2>
				</div>
			</ContainerDiv>
	 </div>
  )
}

export default SoftwareTextBox1