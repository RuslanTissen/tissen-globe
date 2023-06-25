import React, { useContext } from 'react'
import "./ServicesBranches.scss"
import card1 from "../../../../images/services-card1.png"
import card2 from "../../../../images/services-card2.png"
import card3 from "../../../../images/services-card3.png"
import card4 from "../../../../images/services-card4.png"
import card5 from "../../../../images/services-card5.png"
import card6 from "../../../../images/services-card6.png"
import trans from '../../../Translate'
import { Context } from '../../../Context'

function ServicesBranches() {
	const { lang, setLang } = useContext(Context)

	return (
		<div className='services__branches'>
			<div className="services__branches__coontainer">
				<div className="services__branches__coontainer__boxes">
					<img src={card1} />
					<h3 className='title__include'>{trans[lang].servicesSoftwareDevelopmentTitle}</h3>
					<p className='text__include'>{trans[lang].servicesSoftwareDevelopmentText}</p>
				</div>
				<div className="services__branches__coontainer__boxes">
					<img src={card2} />
					<h3 className='title__include'>{trans[lang].servicesWebDevelpomentTitle}</h3>
					<p className='text__include'>{trans[lang].servicesWebDevelpomentText}</p>
				</div>
				<div className="services__branches__coontainer__boxes">
					<img src={card3} />
					<h3 className='title__include'>{trans[lang].servicesMobileDevelopmentTitle}</h3>
					<p className='text__include'>	{trans[lang].servicesMobileDevelopmentText}</p>
				</div>
				<div className="services__branches__coontainer__boxes">
					<img src={card4} />
					<h3 className='title__include'>{trans[lang].servicesNetworkSecuretyTitle}</h3>
					<p className='text__include'>{trans[lang].servicesNetworkSecuretyText}	</p>
				</div>
				<div className="services__branches__coontainer__boxes">
					<img src={card5} />
					<h3 className='title__include'>{trans[lang].servicesCloudHostingTitle}</h3>
					<p className='text__include'>{trans[lang].servicesCloudHostingText}</p>
				</div>
				<div className="services__branches__coontainer__boxes">
					<img src={card6} />
					<h3 className='title__include'>{trans[lang].servicesUXTitle}</h3>
					<p className='text__include'>{trans[lang].servicesUXText}	</p>
				</div>

			</div>

		</div>
	)
}

export default ServicesBranches


// 





{/* <div className="services__branches__coontainer__boxes">
					<img src="" alt="" />
					<div className="text__container">
						<h3></h3>
						<p></p>
					</div>
				</div>
				<div className="services__branches__coontainer__boxes">
					<img src="" alt="" />
					<div className="text__container">
						<h3></h3>
						<p></p>
					</div>
				</div>
				<div className="services__branches__coontainer__boxes">
					<img src="" alt="" />
					<div className="text__container">
						<h3></h3>
						<p></p>
					</div>
				</div>
				<div className="services__branches__coontainer__boxes">
					<img src="" alt="" />
					<div className="text__container">
						<h3></h3>
						<p></p>
					</div>
				</div>
				<div className="services__branches__coontainer__boxes">
					<img src="" alt="" />
					<div className="text__container">
						<h3></h3>
						<p></p>
					</div>
				</div> */}