import React from 'react'
import "./SoftwareDevelopment.scss"
import styled from 'styled-components'
import SoftwarePicture from './softwarePicture/SoftwarePicture'
import SoftwareTextBox1 from './softwareTextBox1/SoftwareTextBox1'
import SoftwareTextBox2 from './softwareTextBox2/SoftwareTextBox2'
import SoftwareVideo from './softwareVideo/SoftwareVideo'
// import { ContainerDiv } from '../../../styledComponents/Container.styled'

function SoftwareDevelopment() {
	return (
		<div className='softwareDevelopment'>
			<SoftwarePicture />

			<SoftwareTextBox1 />

			<SoftwareTextBox2 />

			<SoftwareVideo />

		</div>
	)
}

export default SoftwareDevelopment