import React from 'react'
import "./SoftwareVideo.scss"
import { ContainerDiv } from '../../../../styledComponents/Container.styled'
import softwareVideo from "../../../../videos/softwareVideo.mp4"
import ReactPlayer from 'react-player'
import { Card } from 'react-bootstrap'

function SoftwareVideo() {
	return (
		<div className='softwareVideo'>
			<ContainerDiv className="softwareVideo__container">
				<ReactPlayer
					url={softwareVideo}
					controls={true}
					width="100%"
					height="100%"
				/>
				<Card.Title>Software development is the art and science of transforming ideas into functional software systems. It involves a collaborative effort between software developers, project managers, and stakeholders to bring concepts to life. Here are five key points that highlight the essence of software development:</Card.Title>
				<Card.Text>
					<ol>
						<li>Requirements Analysis: Understanding and documenting the needs and expectations of the software system to be developed, ensuring alignment with business goals and user requirements.</li>
						<li>Design and Architecture: Creating a blueprint that outlines the structure, components, and interactions of the software, considering factors such as scalability, security, and maintainability.</li>
						<li>Coding and Implementation: Writing the code using programming languages, frameworks, and tools, following best practices and industry standards to build the desired functionality.</li>
						<li>Testing and Quality Assurance: Conducting various testing activities, such as unit testing, integration testing, and user acceptance testing, to ensure the software performs as intended, is free from defects, and meets quality standards.</li>
						<li>Maintenance and Continuous Improvement: Providing ongoing support, bug fixes, and updates to keep the software operational and aligned with changing requirements. Continuously enhancing the software through feedback, user engagement, and technological advancements.</li>
					</ol>
				</Card.Text>
			</ContainerDiv>
		</div >
	)
}

export default SoftwareVideo