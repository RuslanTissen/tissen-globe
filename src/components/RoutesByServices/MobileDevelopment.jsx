import React, { useContext } from 'react'
import ModelPicture from './modulesForByServices/modelPicture/ModelPicture'
import ModelTextBox1 from './modulesForByServices/modelTextBox1/ModelTextBox1'
import ModelTextBox2 from './modulesForByServices/modelTextBox2/ModelTextBox2'
import ModelVideo from './modulesForByServices/modelVideo/ModelVideo'
import ModelLastPicture from './modulesForByServices/modelLastPicture/ModelLastPicture'
import mobileDevelopmentVideo from "../../videos/mobileDevelopmentVideo.mp4"
import trans from '../Translate.js'
import { Context } from '../Context'


function MobileDevelopment() {
	const { lang } = useContext(Context)

	return (
		<div className='mobileDevelopment'>

			<ModelPicture
				title={`${trans[lang].mobileDevelopmentTitle}`}
			/>

			<ModelTextBox1
				titleH3={`${trans[lang].mobileDevelopmentBoldTitle}`}
				textP={`${trans[lang].mobileDevelopmentText}`}
				titleH2={`${trans[lang].mobileDevelopmentDigits}`}
			/>

			<ModelTextBox2
				text={`${trans[lang].mobileDevelopmentBlackBoxText}`}
			/>

			<ModelVideo
				videoSRC={mobileDevelopmentVideo}
				titleH3={`${trans[lang].mobileDevelopmentVideoTitle}`}
				text1={`${trans[lang].mobileDevelopmentText1}`}
				text2={`${trans[lang].mobileDevelopmentText2}`}
				text3={`${trans[lang].mobileDevelopmentText3}`}
				text4={`${trans[lang].mobileDevelopmentText4}`}
				text5={`${trans[lang].mobileDevelopmentText5}`}
			/>

			<ModelLastPicture
				titleH3={`${trans[lang].mobileDevelopmentLastStatement}`}
				contact={`${trans[lang].mobileDevelopmentContact}`}
			/>

		</div>
	)
}

export default MobileDevelopment