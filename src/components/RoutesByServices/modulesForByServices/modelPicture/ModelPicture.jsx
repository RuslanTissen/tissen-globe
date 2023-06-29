import React from 'react'
import "./ModelPicture.scss"
import { ContainerMainPicture } from '../../../../styledComponents/ContainerMainPicture.styled'

function SoftwarePicture(props) {
		let { title } = props

		return (
			<div className='pointsSoftware'>
				<ContainerMainPicture className="pointsSoftware__container">
					<h2 className='title__super__include'>{title}</h2>
				</ContainerMainPicture>
			</div>
		)
	}

export default SoftwarePicture