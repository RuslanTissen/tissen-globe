import React, { useContext } from 'react'
import ModelPicture from './modulesForByServices/modelPicture/ModelPicture'
import ModelTextBox1 from './modulesForByServices/modelTextBox1/ModelTextBox1'
import ModelTextBox2 from './modulesForByServices/modelTextBox2/ModelTextBox2'
import ModelVideo from './modulesForByServices/modelVideo/ModelVideo'
import ModelLastPicture from './modulesForByServices/modelLastPicture/ModelLastPicture'
import softwareVideo from "../../videos/softwareVideo.mp4"
import trans from '../Translate.js'
import { Context } from '../Context'

function SoftwareDevelopment() {
	const {lang} = useContext(Context)
	return (
		<div className='softwareDevelopment'>

			<ModelPicture
				title={`${trans[lang].softwareDevelopmenTitle}`}
			/>

			<ModelTextBox1
				titleH3={`${trans[lang].softwareDevelopmenBoldTitle}`}
				textP={`${trans[lang].softwareDevelopmenText}`}
				titleH2={`${trans[lang].softwareDevelopmen2021}`}
			/>

			<ModelTextBox2
				text={`${trans[lang].softwareDevelopmenBlackBoxText}`}
			/>

			<ModelVideo
				videoSRC={softwareVideo}
				titleH3={`${trans[lang].softwareDevelopmenVideoTitle}`}
				text1={`${trans[lang].softwareDevelopmenVideoText1}`}
				text2={`${trans[lang].softwareDevelopmenVideoText2}`}
				text3={`${trans[lang].softwareDevelopmenVideoText3}`}
				text4={`${trans[lang].softwareDevelopmenVideoText4}`}
				text5={`${trans[lang].softwareDevelopmenVideoText5}`}
			/>

			<ModelLastPicture
				titleH3={`${trans[lang].softwareDevelopmenLastStatement}`}
				contact={`${trans[lang].softwareDevelopmenContact}`}
			/>

		</div>
	)
}

export default SoftwareDevelopment