import React from 'react'
import "./About"
import "./About.scss"
import { BsFillBoxFill } from 'react-icons/bs'
import AboutPicture from './aboutPicture/AboutPicture'
import AboutText from './aboutText/AboutText'
import AboutVision from './aboutVision/AboutVision'
import LetsContact from '../services/letsContact/LetsContact'
import AboutWorking from './aboutWorking/AboutWorking'


function About() {
	return (
		<div className='about' >

			<AboutPicture />

			<AboutText />

			<AboutVision />

			<LetsContact
				contactTitle={"Empowering Technology, Supporting Users."}
				contactButton={"Lets meet"}
			/>

			<AboutWorking />

		</div>
	)
}

export default About


