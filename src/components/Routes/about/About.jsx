import React from 'react'
import "./About"
import "./About.scss"
import { BsFillBoxFill } from 'react-icons/bs'
import AboutPicture from './aboutPicture/AboutPicture'
import AboutText from './aboutText/AboutText'
import AboutVision from './aboutVision/AboutVision'


function About() {
	return (
		<div className='about' >

			<AboutPicture />

			<AboutText />

			<AboutVision />

		</div>
	)
}

export default About


