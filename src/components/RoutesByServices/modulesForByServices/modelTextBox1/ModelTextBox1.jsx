import React from 'react'
import "./ModelTextBox1.scss"
import { ContainerDiv } from '../../../../styledComponents/ContainerDiv.styled'

function SoftwareTextBox1(props) {
	let { titleH3, textP, titleH2 } = props

	return (
		<div className='softwareTextBox1'>
			<ContainerDiv className='softwareTextBox1__container'>
				<div className="softwareTextBox1__container__box">
					<h3 className="softwareTextBox1__container__box__title text__include">{titleH3}</h3>
					<p className='text__include'>{textP}</p>
				</div>
				<div className="softwareTextBox1__container__box">
					<h2 className='title__include'>{titleH2}</h2>
				</div>
			</ContainerDiv>
		</div>
	)
}

export default SoftwareTextBox1