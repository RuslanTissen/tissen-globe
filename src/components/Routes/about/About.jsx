import React from 'react'
import "./About"
import "./About.scss"
import { BsFillBoxFill } from 'react-icons/bs'


function About() {
	return (
		<div className='about' >

			<div className="about__image__container__1">
				<p>The base/foundation supports the entire structure.</p>

			</div>

			<div className="about__text__container__1">
				<h3>About Us:</h3>
				<div className="icon"><BsFillBoxFill /></div>
				<p>Tissen is a leading IT outsourcing company headquartered in Argentina serving clients worldwide. With our team of highly skilled professionals and industry experts, we focus on delivering superior outsourcing solutions to meet our clients' unique business needs. We distinguish ourselves through an unwavering commitment to excellence, transparent communication and building lasting partnerships based on trust, reliability and mutual growth.</p>
			</div>

			<div className="about__image__container__2">
			</div>

			<div className="about__text__container__2">
				<h3>Our mission:</h3>
				<div className="icon"><BsFillBoxFill /></div>
				<p>Our mission at Tissen is to empower businesses by harnessing the transformative power of technology. We strive to deliver quality IT solutions that drive success, whether through innovative software development, efficient IT infrastructure management or strong data security measures. By adhering to industry best practices, utilizing the latest technologies and working closely with our clients, we gain a deep understanding of their goals and challenges. This enables us to deliver tailor-made solutions that move your business forward.</p>
			</div>

			<div className="about__image__container__3">
			</div>

			<div className="about__text__container__2">
				<h3>Our vision:</h3>
				<div className="icon"><BsFillBoxFill /></div>
				<p>Our vision is to be the first choice for companies looking for a reliable and competent IT outsourcing partner. We strive to be recognized for our expertise, unwavering reliability and unwavering commitment to customer satisfaction. With a diverse portfolio of successful projects across multiple industries, we strive to position ourselves as trusted advisors helping companies realize their full potential through technology. Through our unwavering commitment and utilizing Argentina's exceptional talent pool, we aim to consistently deliver exceptional results, giving our clients a competitive advantage in their markets.</p>
			</div>

		</div>
	)
}

export default About


{/* <h2>"As Henry Ford we believe that everyone should play his unique role in a company."</h2> */ }
