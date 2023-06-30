import React from 'react'
import "./ModelTechPicture.scss"
import { ContainerMainPicture } from '../../../../styledComponents/ContainerMainPicture.styled'

function ModelTechPicture(props) {
	let { title } = props

	return (
		<div className='modelTechPicture'>
			<ContainerMainPicture className='modelTechPicture__container'>
				<h2 className='title__super__include'>{title}</h2>
			</ContainerMainPicture>
		</div>
	)
}

export default ModelTechPicture