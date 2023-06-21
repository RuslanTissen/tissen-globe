import React from 'react'
import "./AboutText.scss"
// import aboutText1 from "../../../../images/aboutText1.jpg"
// import aboutText2 from "../../../../images/aboutText2.jpg"

function AboutText() {
	return (
		<div className='aboutText'>
			<div className="aboutText__container">
				<h2 className='title__picture__include'>Our mission</h2>
				<div className="aboutText__container__boxes1 aboutText__container__boxes">
					<p>Our mission at Tissen is to empower businesses by harnessing the transformative power of technology. We strive to deliver quality IT solutions that drive success, whether through innovative software development, efficient IT infrastructure management or strong data security measures. By adhering to industry best practices, utilizing the latest technologies and working closely with our clients, we gain a deep understanding of their goals and challenges. This enables us to deliver tailor-made solutions that move your business forward.</p>
					{/* <img src={aboutText1} alt="" /> */}
					<div className="aboutImagebox"></div>
				</div>
				<div className="aboutText__container__boxes2 aboutText__container__boxes">
					{/* <img src={aboutText2} alt="" /> */}
					<div className="aboutImagebox"></div>
					<p>Tissen is a leading IT outsourcing company headquartered in Argentina serving clients worldwide. With our team of highly skilled professionals and industry experts, we focus on delivering superior outsourcing solutions to meet our clients' unique business needs. We distinguish ourselves through an unwavering commitment to excellence, transparent communication and building lasting partnerships based on trust, reliability and mutual growth.</p>
				</div>
			</div>
		</div>
	)
}

export default AboutText