import React, { useContext } from 'react'
import "./Services.scss"
// import Technologies from '../../technologies/Technologies'
import StepsForServices from './stepsForServices/StepsForServices'
import trans from '../../Translate'
import { Context } from '../../Context'
import Points from '../points/Points'
// import { NavLink } from 'react-router-dom';
import LetsContact from './letsContact/LetsContact'
import ServicesBranches from './servicesBranches/ServicesBranches'

function Services() {
	const { lang } = useContext(Context)

	return (
		<div className='service'>

			<Points
				textTitle={trans[lang].servicesRouter}
			/>

			<ServicesBranches />

			<StepsForServices />

			<LetsContact
				contactTitle={`${trans[lang].servicesExcellenceInServiceTitle}`}
				contactButton={`${trans[lang].servicesLetsMeet}`}
			/>

		</div>
	)
}

export default Services