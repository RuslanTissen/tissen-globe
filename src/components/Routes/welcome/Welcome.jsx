import React from 'react'
import "./Welcome.scss"

function Welcome() {
  return (
	 <div className='welcome'>
		<div className="welcome__container">
			<h2>What we welcome</h2>
			<div className="welcome__container__boxes">
				<h3>Expertise</h3>
				<p>We value strong technical skills in areas like software development, cybersecurity, cloud computing, and more. Show us your expertise and ability to deliver high-quality results.</p>
			</div>
			<div className="welcome__container__boxes">
				<h3>Problem-Solving</h3>
				<p>We seek individuals who excel at analyzing and solving complex problems. Your critical thinking and innovative solutions will be highly valued.</p>
			</div>
			<div className="welcome__container__boxes">
				<h3>Team Player</h3>
				<p>Collaboration is key. We want team players who contribute ideas and work seamlessly with colleagues and clients to achieve common goals.</p>
			</div>
			<div className="welcome__container__boxes">
				<h3>Adaptability</h3>
				<p>The IT industry evolves rapidly, so we need professionals who embrace change and eagerly learn new technologies.</p>
			</div>
			<div className="welcome__container__boxes">
				<h3>Strong Communication</h3>
				<p> Effective communication is vital. We value clear articulation, active listening, and the ability to communicate technical concepts to diverse audiences.</p>
			</div>
			<div className="welcome__container__boxes">
				<h3>Client Focus</h3>
				<p>Our clients' satisfaction is paramount. We seek individuals who understand their needs and are committed to delivering exceptional experiences.</p>
			</div>
			<div className="welcome__container__boxes">
				<h3>Drive for Excellence</h3>
				<p>We strive for excellence. If you have a strong work ethic, attention to detail, and a desire to continuously improve, you'll be a great fit.</p>
			</div>
			<div className="welcome__container__boxes">
				<h3>Entrepreneurial Mindset</h3>
				<p>We value proactive individuals with an entrepreneurial mindset. If you're resourceful, take ownership, and drive business growth, join our team. Embrace challenges and make a significant impact on our success.</p>
			</div>
		</div>
		
	 </div>
  )
}

export default Welcome