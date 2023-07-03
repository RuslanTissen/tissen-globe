import React from 'react'

function ModelLastBlock(props) {
	let { h3Text, chart, logo } = props
	return (
		<div className='modelLastBlock'>
			<div className="modelLastBlock__container">
				<h3>{h3Text}</h3>

				<div className="modelLastBlock__container__chart_box">
					<img className='chartTechnologies' src={chart} alt="" />
				</div>

				<div className="modelLastBlock__container__logo_box">
					<img className='logoTechnologies' src={logo} alt="" />
				</div>
			</div>

		</div>
	)
}

export default ModelLastBlock