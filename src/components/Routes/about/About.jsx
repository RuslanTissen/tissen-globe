import React from 'react'
import "./About"
import "./About.scss"
import { BsFillBoxFill } from 'react-icons/bs'
import AboutPicture from './aboutPicture/AboutPicture'
import AboutText from './aboutText/AboutText'


function About() {
	return (
		<div className='about' >

			<AboutPicture />

			<AboutText />

		</div>
	)
}

export default About


