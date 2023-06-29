import React from 'react'
import "./ModelTextBox2.scss"
import { ContainerDiv } from '../../../../styledComponents/ContainerDiv.styled'

function SoftwareTextBox2(props) {
	let { text } = props

	return (
		<div className='softwareTextBox2'>
			<ContainerDiv className='softwareTextBox2__container'>
				<h2 className='title__midle__include'>{text} </h2>
			</ContainerDiv>
		</div>
	)
}

export default SoftwareTextBox2