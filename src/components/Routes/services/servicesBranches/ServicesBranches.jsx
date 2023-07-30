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
import { NavLink } from 'react-router-dom'

function ServicesBranches() {
	const { lang } = useContext(Context)

	const scrollToTheTop = () => {
		window.scroll(0, 0)
	}

	return (
		<div className='services__branches'>
			<div className="services__branches--coontainer">
				<NavLink to="/SoftwareDevelopment" onClick={scrollToTheTop} className="services__branches--coontainer-boxes">
					<img src={card1} alt='Ups, image is lost' />
					<h3 className='title__include'>{trans[lang].servicesSoftwareDevelopmentTitle}</h3>
					<p className='text__include'>{trans[lang].servicesSoftwareDevelopmentText}</p>
				</NavLink>
				<NavLink  to="/WebDevelopment" onClick={scrollToTheTop}  className="services__branches--coontainer-boxes">
					<img src={card2} alt='Ups, image is lost' />
					<h3 className='title__include'>{trans[lang].servicesWebDevelpomentTitle}</h3>
					<p className='text__include'>{trans[lang].servicesWebDevelpomentText}</p>
				</NavLink>
				<NavLink to="/MobileDevelopment" onClick={scrollToTheTop} className="services__branches--coontainer-boxes">
					<img src={card3} alt='Ups, image is lost' />
					<h3 className='title__include'>{trans[lang].servicesMobileDevelopmentTitle}</h3>
					<p className='text__include'>	{trans[lang].servicesMobileDevelopmentText}</p>
				</NavLink>
				<NavLink to="/E_Commerce" onClick={scrollToTheTop}  className="services__branches--coontainer-boxes">
					<img src={card4} alt='Ups, image is lost' />
					<h3 className='title__include'>{trans[lang].servicesECommerceTitle}</h3>
					<p className='text__include'>{trans[lang].servicesECommerceText}	</p>
				</NavLink>
				<NavLink to="/CloudHosting" onClick={scrollToTheTop}  className="services__branches--coontainer-boxes">
					<img src={card5} alt='Ups, image is lost' />
					<h3 className='title__include'>{trans[lang].servicesCloudHostingTitle}</h3>
					<p className='text__include'>{trans[lang].servicesCloudHostingText}</p>
				</NavLink>
				<NavLink to="/UX_UI" onClick={scrollToTheTop} className="services__branches--coontainer-boxes">
					<img src={card6} alt='Ups, image is lost' />
					<h3 className='title__include'>{trans[lang].servicesUXTitle}</h3>
					<p className='text__include'>{trans[lang].servicesUXText}	</p>
				</NavLink>

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