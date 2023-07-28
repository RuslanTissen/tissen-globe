import React, { useContext } from 'react'
import "./HowAdvantages.scss"
import howAdvant1 from "../../../../images/howAdvant1.jpg"
import howAdvant2 from "../../../../images/howAdvant2.jpg"
import howAdvant3 from "../../../../images/howAdvant3.jpg"
import howAdvant4 from "../../../../images/howAdvant4.jpg"
import howAdvant5 from "../../../../images/howAdvant5.jpg"
import howAdvant6 from "../../../../images/howAdvant6.jpg"
import trans from '../../../Translate'
import { Context } from '../../../Context'

function HowAdvantages() {
	const { lang, setLang } = useContext(Context)
	return (
		<div className='howAdvantages'>
			<div className="howAdvantages__container">
				<h2 className='title__picture--include'>{trans[lang].howAdvantagesTitle}</h2>
				<div className="howAdvantages__container__boxes">
					<img src={howAdvant1} alt='Ups, image is lost'/>
					<h3>{trans[lang].howCostSavingsTitle}</h3>
					<p>{trans[lang].howCostSavingsText}</p>
				</div>
				<div className="howAdvantages__container__boxes">
					<img src={howAdvant2} alt='Ups, image is lost'/>
					<h3>{trans[lang].howCoreBusinessTitle}</h3>
					<p> {trans[lang].howCoreBusinessText}				</p>
				</div>
				<div className="howAdvantages__container__boxes">
					<img src={howAdvant3} alt='Ups, image is lost'/>
					<h3>{trans[lang].howRiskManagementTitle}</h3>
					<p>	 {trans[lang].howRiskManagementText}</p>
				</div>
				<div className="howAdvantages__container__boxes">
					<img src={howAdvant6} alt='Ups, image is lost'/>
					<h3>{trans[lang].howServiceLevelsTitle}</h3>
					<p> {trans[lang].howServiceLevelsText}	</p>
				</div>
				<div className="howAdvantages__container__boxes">
					<img src={howAdvant5} alt='Ups, image is lost'/>
					<h3>{trans[lang].howScalabilityFlexibilityTitle}</h3>
					<p>	{trans[lang].howScalabilityFlexibilityText}</p>
				</div>
				<div className="howAdvantages__container__boxes">
					<img src={howAdvant4} alt='Ups, image is lost'/>
					<h3>{trans[lang].howSpecializedSkillsTitle}</h3>
					<p> {trans[lang].howSpecializedSkillsText}			</p>
				</div>
			</div>
		</div>
	)
}

export default HowAdvantages