import React, { useContext } from 'react'
import "./Moto.scss"
import trans from '../../Translate'
import { Context } from '../../Context'

function Moto() {
	const { lang, setLang } = useContext(Context)

	return (
		<div className='moto'>
			<div className="moto__container">
				<div className="moto__first__container">
					<p>{trans[lang].tissenWay}</p>
				</div>

				<div type='1' className="moto__second__container">
					<ol>
						<li>{trans[lang].innovativeSolutions1}<mark>{trans[lang].innovativeSolutions2}</mark></li>
						<li><mark>{trans[lang].personalizedApproach1}</mark> {trans[lang].personalizedApproach2}</li>
						<li>{trans[lang].successfulImplementations1}<mark> {trans[lang].successfulImplementations2}</mark></li>
						<li><mark> {trans[lang].comprehensivePortfolio1}</mark>{trans[lang].comprehensivePortfolio2}</li>
						<li>{trans[lang].customerRelationships1}<mark> {trans[lang].customerRelationships2}</mark></li>
					</ol>
				</div>

				{/* <div className="moto__third__container">
				</div> */}

			</div>
		</div>
	)
}

export default Moto
{/* <div className="icon"><BsFillBoxFill/></div> */ }
{/* <p>Tissen is a company that connects businesses to on-demand labor and individuals to immediate work in real-time. It’s a two-way street that works for everyone. For a better way to work—and a better way to live.</p> */ }