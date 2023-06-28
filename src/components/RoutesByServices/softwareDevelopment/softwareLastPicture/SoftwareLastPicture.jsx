import React from 'react'
import "./SoftwareLastPicture.scss"
// import { Button } from '@mui/material'
import { ContainerPictureLink } from '../../../../styledComponents/ContainerPictureLink.styled.js'
import { NavLink } from 'react-router-dom';


const scrollToTheTop = () => {
	window.scroll(0, 0)
}

function SoftwareLastPicture(props) {
let{titleH3} =props

	return (
		<div className='softwareLastPicture'>
			<ContainerPictureLink className="softwareLastPicture__container">
				<h3 className='title__include'>{titleH3}</h3>
				<NavLink to="/Contact" onClick={scrollToTheTop}>Lets Meet</NavLink>
			</ContainerPictureLink>
		</div>
	)
}

export default SoftwareLastPicture