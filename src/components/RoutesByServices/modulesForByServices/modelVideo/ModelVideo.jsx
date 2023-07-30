import React from 'react'
import "./ModelVideo.scss"
import { ContainerDiv } from '../../../../styledComponents/ContainerDiv.styled'
import ReactPlayer from 'react-player'

function SoftwareVideo(props) {
	let { videoSRC, titleH3, text1, text2, text3, text4, text5 } = props

	return (
		<div className='softwareVideo'>
			<ContainerDiv className="softwareVideo__container">
				<ReactPlayer
					url={videoSRC}
					controls={true}
					width="100%"
					height="100%"
				/>
				<h3 className='h3__mixin--bold'>{titleH3}</h3>
				<ol>
					<li className='regular_text_mixin'>{text1} </li>
					<li className='regular_text_mixin'>{text2} </li>
					<li className='regular_text_mixin'>{text3}</li>
					<li className='regular_text_mixin'>{text4}</li>
					<li className='regular_text_mixin'>{text5}</li>
				</ol>
			</ContainerDiv>
		</div >
	)
}

export default SoftwareVideo