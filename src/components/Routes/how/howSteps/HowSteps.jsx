import React from 'react'
import "./HowSteps.scss"
import howIcons1 from "../../../../images/howIcons1.jpg"
import howIcons2 from "../../../../images/howIcons2.jpg"
import howIcons3 from "../../../../images/howIcons3.jpg"
import howIcons4 from "../../../../images/howIcons4.jpg"
import howIcons5 from "../../../../images/howIcons5.jpg"
import howIcons6 from "../../../../images/howIcons6.jpg"
import howIcons7 from "../../../../images/howIcons7.jpg"
import howIcons8 from "../../../../images/howIcons8.jpg"
import { NavLink } from 'react-router-dom';


function HowSteps(props) {
	let { contactButton } = props

	const scrollToTheTop = () => {
		window.scroll(0, 0)
	}
	return (
		<div className='howSteps'>
			<div className="howSteps__coontainer">
				<h2 className='title__picture__include'>Steps</h2>
				<div className="howSteps__coontainer__boxes">
					<img src={howIcons1} />
					<div className="howSteps__coontainer__boxes__text__containers">
						<h3 className='text__include'>Requirements Gathering</h3>
						<p className='text__include'>Gathering and analyzing the project requirements, understanding the objectives, and defining the scope of the project.						</p>
					</div>
				</div>
				<div className="howSteps__coontainer__boxes">
					<img src={howIcons2} />
					<div className="howSteps__coontainer__boxes__text__containers">
						<h3 className='text__include'>System Design</h3>
						<p className='text__include'>Creating a detailed system design that outlines the architecture, components, and functionalities of the IT solution.						</p>
					</div>
				</div>
				<div className="howSteps__coontainer__boxes">
					<img src={howIcons3} />
					<div className="howSteps__coontainer__boxes__text__containers">
						<h3 className='text__include'>Development</h3>
						<p className='text__include'>	Writing the code and implementing the system design, using the chosen programming languages, frameworks, and tools.</p>
					</div>
				</div>
				<div className="howSteps__coontainer__boxes">
					<img src={howIcons4} />
					<div className="howSteps__coontainer__boxes__text__containers">
						<h3 className='text__include'>Testing</h3>
						<p className='text__include'>Conducting various testing activities, such as unit testing, integration testing, and system testing, to identify and fix any bugs or issues.					</p>
					</div>
				</div>
				<div className="howSteps__coontainer__boxes">
					<img src={howIcons5} />
					<div className="howSteps__coontainer__boxes__text__containers">
						<h3 className='text__include'>Deployment</h3>
						<p className='text__include'>Deploying the developed software or system to the production environment or making it available to users.	</p>
					</div>
				</div>
				<div className="howSteps__coontainer__boxes">
					<img src={howIcons6} />
					<div className="howSteps__coontainer__boxes__text__containers">
						<h3 className='text__include'>Maintenance and Support</h3>
						<p className='text__include'>Providing ongoing maintenance and support for the developed IT solution, including bug fixes, updates, and user assistance.		</p>
					</div>
				</div>
				<div className="howSteps__coontainer__boxes">
					<img src={howIcons7} />
					<div className="howSteps__coontainer__boxes__text__containers">
						<h3 className='text__include'>Documentation</h3>
						<p className='text__include'>Documenting the system, code, and user manuals to ensure proper understanding, maintenance, and future enhancements.		</p>
					</div>
				</div>
				<div className="howSteps__coontainer__boxes">
					<img src={howIcons8} />
					<div className="howSteps__coontainer__boxes__text__containers">
						<h3 className='text__include'>Continuous Improvement</h3>
						<p className='text__include'>Continuously monitoring and evaluating the IT solution's performance, gathering feedback, and making improvements to enhance its functionality and efficiency.	</p>
					</div>
				</div>
				<NavLink to="/Contact" onClick={scrollToTheTop}>{contactButton}</NavLink>
			</div>
		</div>
	)
}

export default HowSteps