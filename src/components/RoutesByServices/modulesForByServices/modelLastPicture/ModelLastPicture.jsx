import React from 'react'
import "./ModelLastPicture.scss"
// import { Button } from '@mui/material'
import { ContainerPictureLink } from '../../../../styledComponents/ContainerPictureLink.styled.js'
import { NavLink } from 'react-router-dom';

function SoftwareLastPicture(props) {
let{titleH3, contact} =props

const scrollToTheTop = () => {
	window.scroll(0, 0)
}

	return (
		<div className='softwareLastPicture'>
			<ContainerPictureLink className="softwareLastPicture__container">
				<h3 className='title__include'>{titleH3}</h3>
				<NavLink to="/Contact" onClick={scrollToTheTop}>{contact}</NavLink>
			</ContainerPictureLink>
		</div>
	)
}

export default SoftwareLastPicture