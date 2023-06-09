import React, { useContext } from 'react'
import "./HowWe.scss"
import Points from '../points/Points'
import { Context } from '../../Context'


	function HowWe(props) {
	const { lang, setLang } = useContext(Context)

		return (
			<div className="how">

				<Points
					textTitle={trans[lang].servicesRouter}
				/>



			</div>
		)
	}
import { Context } from '../../Context'

export default HowWe