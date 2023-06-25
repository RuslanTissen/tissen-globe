import React from 'react'
import "./SoftwareDevelopment.scss"
import styled from 'styled-components'
import SoftwarePicture from './softwarePicture/SoftwarePicture'
import SoftwareTextBox1 from './softwareTextBox1/SoftwareTextBox1'
// import { ContainerDiv } from '../../../styledComponents/Container.styled'

function SoftwareDevelopment() {
	return (
		<div className='softwareDevelopment'>
			<SoftwarePicture />

			<SoftwareTextBox1 />

		</div>
	)
}

export default SoftwareDevelopment