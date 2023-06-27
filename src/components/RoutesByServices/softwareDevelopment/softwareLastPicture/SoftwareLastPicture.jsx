import React from 'react'
import "./SoftwareLastPicture.scss"
import { Button } from '@mui/material'
import { ContainerDiv } from '../../../../styledComponents/Container.styled'


function SoftwareLastPicture() {
	return (
		<div className='softwareLastPicture'>
			<ContainerDiv className="softwareLastPicture__container">
				<h3 className='title__include'>Get your Software Development Project estimate now</h3>
				<Button>Lets Meet</Button>
			</ContainerDiv>
		</div>
	)
}

export default SoftwareLastPicture