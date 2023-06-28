import React from 'react'
import "./SoftwareLastPicture.scss"
// import { Button } from '@mui/material'
import { ContainerPictureLink } from '../../../../styledComponents/ContainerPictureLink.js'
import { NavLink } from 'react-router-dom';


const scrollToTheTop = () => {
	window.scroll(0, 0)
}

function SoftwareLastPicture() {
	return (
		<div className='softwareLastPicture'>
			<ContainerPictureLink className="softwareLastPicture__container">
				<h3 className='title__include'>Get your Software Development Project estimate now</h3>
				<NavLink to="/Contact" onClick={scrollToTheTop}>Lets Meet</NavLink>
			</ContainerPictureLink>
		</div>
	)
}

export default SoftwareLastPicture