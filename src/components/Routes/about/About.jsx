import React from 'react'
import "./About"
import "./About.scss"
import { BiChevronRight } from "react-icons/bi"


function About() {
	return (
		<div className='about' >

			<div className="about__image__container__1">
				<p>The base/foundation supports the entire structure.</p>

			</div>

			<div className="about__text__container__1">
				<h3>About Us:</h3>
				<p>Tissen is a leading IT outsourcing company headquartered in Argentina serving clients worldwide. With our team of highly skilled professionals and industry experts, we focus on delivering superior outsourcing solutions to meet our clients' unique business needs. We distinguish ourselves through an unwavering commitment to excellence, transparent communication and building lasting partnerships based on trust, reliability and mutual growth.</p>
				{/* <ul>
					<li><BiChevronRight/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae.</li>
					<li><BiChevronRight/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae.</li>
					<li><BiChevronRight/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae.</li>
					<li><BiChevronRight/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae.</li>
				</ul> */}

				{/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam porro omnis, id quod perferendis eos.</p>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam porro omnis, id quod perferendis eos.</p>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam porro omnis, id quod perferendis eos.</p> */}

			</div>

			<div className="about__image__container__2">
			</div>

			<div className="about__text__container__2">
				<h2>"As Henry Ford we believe that everyone should play his unique role in a company."</h2>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam porro omnis, id quod perferendis eos.</p>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam porro omnis, id quod perferendis eos.</p>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam porro omnis, id quod perferendis eos.</p>

			</div>

		</div>
	)
}

export default About