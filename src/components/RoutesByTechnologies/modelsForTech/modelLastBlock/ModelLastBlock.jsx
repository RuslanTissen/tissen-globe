import React from 'react'
import { One_TwoImagesContainer } from '../../../../styledComponents/One_TwoImagesContainer'
// import "./ModelLastBlock.scss"

function ModelLastBlock(props) {
	let { h3Text, chart, logo } = props
	return (
		<One_TwoImagesContainer className='modelLastBlock'>
			<div className="modelLastBlock__container">
				<h3>{h3Text}</h3>

				<div className="modelLastBlock__container__chart_box">
					<img className='chartTechnologies' src={chart} alt="" />
				</div>

				<div className="modelLastBlock__container__logo_box">
					<img className='logoTechnologies' src={logo} alt="" />
				</div>
			</div>

		</One_TwoImagesContainer>
	)
}

export default ModelLastBlock