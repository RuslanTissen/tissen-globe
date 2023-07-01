import React from 'react'
import ReactPlayer from 'react-player'
import "./ModelVideoTech.scss"
import { One_TwoBlocksContainer } from '../../../../styledComponents/One+TwoBlocksContainer'
import { NavLink } from 'react-router-dom'

function ModelVideoTech(props) {
	let { videoSRC, contact } = props

	const scrollToTheTop = () => {
		window.scroll(0, 0)
	}
	
	return (
		<One_TwoBlocksContainer className='modelVideoTech '>
			<div className="modelVideoTech__container">
				<h3>JavaScript is a high-level, interpreted programming language that is primarily used for developing dynamic and interactive web applications. It is often referred to as the language of the web because it enables developers to add functionality and interactivity to websites.</h3>

				<ReactPlayer
					url={videoSRC}
					controls={true}
					width="100%"
					height="100%"
				/>

				<NavLink to="/Contact" onClick={scrollToTheTop}>{contact}</NavLink>

			</div>
		</One_TwoBlocksContainer>
	)
}

export default ModelVideoTech