import React from 'react'
import ReactPlayer from 'react-player'
import "./ModelVideoTech.scss"
import { One_TwoBlocksContainer } from '../../../../styledComponents/One+TwoBlocksContainer'

function ModelVideoTech(props) {
	let { videoSRC } = props
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

				<a href="#">get more information</a>

			</div>
		</One_TwoBlocksContainer>
	)
}

export default ModelVideoTech