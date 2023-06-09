import React, { useContext } from 'react'
import "./Services.scss"
import Technologies from '../../technologies/Technologies'
import StepsForServices from '../stepsForServices/StepsForServices'
import trans from '../../Translate'
import { Context } from '../../Context'
import Points from '../points/Points'

function Services() {
	const { lang, setLang } = useContext(Context)

	return (
		<div className='service'>

			<Points
				textTitle={<h2>{trans[lang].servicesRouter}</h2>}
			/>

			{/* <div className="service__image__container">
			</div> */}

			<Technologies />

			<StepsForServices />

			<div className="service__image2__container">
				<div className="image2__box">
					<h2>Excellence in service, exceeding expectations every time.</h2>

					<button>Lets meet</button>
				</div>
			</div>

		</div>
	)
}

export default Services




// <div className="service__text__container">
// <h2>Good team creates good product.</h2>
// <p className='service__text__container-first-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae quibusdam inventore debitis deserunt cupiditate, voluptatum necessitatibus, veniam quis cumque et velit facilis magnam maiores! Provident at officia nobis eos ea.</p>
// <p className='service__text__container-after-first'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam nobis modi ipsam. Quae, magnam.</p>
// <p className='service__text__container-after-first'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto nostrum, doloremque error dolorem ut magni. Eligendi eaque sunt dolorum velit, assumenda minus. Repellendus earum nesciunt delectus numquam rem illo illum!</p>
// <p className='service__text__container-after-first'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
// <p className='service__text__container-after-first'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, qui a illum aliquam est incidunt sed asperiores, modi doloribus optio ipsum. Illum nesciunt quaerat eos porro nulla? Sunt, suscipit distinctio?</p>
// </div>