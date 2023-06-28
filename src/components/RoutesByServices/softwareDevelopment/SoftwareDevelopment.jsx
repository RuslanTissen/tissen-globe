import React from 'react'
import styled from 'styled-components'
import SoftwarePicture from './softwarePicture/SoftwarePicture'
import SoftwareTextBox1 from './softwareTextBox1/SoftwareTextBox1'
import SoftwareTextBox2 from './softwareTextBox2/SoftwareTextBox2'
import SoftwareVideo from './softwareVideo/SoftwareVideo'
import SoftwareLastPicture from './softwareLastPicture/SoftwareLastPicture'
// import { ContainerDiv } from '../../../styledComponents/Container.styled'
import softwareVideo from "../../../videos/softwareVideo.mp4"

function SoftwareDevelopment() {
	return (
		<div className='softwareDevelopment'>

			<SoftwarePicture
				title={"Software Development"}
			/>

			<SoftwareTextBox1
				titleH3={"At Tissen, we specialize in creating tailor-made software solutions that align with your unique business needs."}
				textP={"Our experienced team of software developers will work closely with you to understand your requirements and deliver high-quality, scalable, and secure software applications. Whether you need a web application, mobile app, or desktop software, we leverage the latest technologies and agile development methodologies to bring your vision to life."}
				titleH2={"As of 2021, there were over 26 million software developers worldwide - Evans Data Corporation"}
			/>

			<SoftwareTextBox2
				text={"Software development refers to the process of designing, creating, and maintaining computer programs and applications."}
			/>

			<SoftwareVideo
				videoSRC={softwareVideo}
				titleH3={"Software development is the art and science of transforming ideas into functional software systems. It involves a collaborative effort between software developers, project managers, and stakeholders to bring concepts to life. Here are five key points that highlight the essence of software development:"}
				text1={"Requirements Analysis: Understanding and documenting the needs and expectations of the software system to be developed, ensuring alignment with business goals and user requirements."}
				text2={"Design and Architecture: Creating a blueprint that outlines the structure, components, and interactions of the software, considering factors such as scalability, security, and maintainability."}
				text3={"Coding and Implementation: Writing the code using programming languages, frameworks, and tools, following best practices and industry standards to build the desired functionality."}
				text4={"Testing and Quality Assurance: Conducting various testing activities, such as unit testing, integration testing, and user acceptance testing, to ensure the software performs as intended, is free from defects, and meets quality standards."}
				text5={"Maintenance and Continuous Improvement: Providing ongoing support, bug fixes, and updates to keep the software operational and aligned with changing requirements.	Continuously enhancing the software through feedback, user engagement, and technological advancements."}
			/>

			<SoftwareLastPicture
				titleH3={"Get your Software Development Project estimate now"}
			/>

		</div>
	)
}

export default SoftwareDevelopment