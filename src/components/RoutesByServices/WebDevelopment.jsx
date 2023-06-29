import React, { useContext } from 'react'
import ModelPicture from './modulesForByServices/modelPicture/ModelPicture'
import ModelTextBox1 from './modulesForByServices/modelTextBox1/ModelTextBox1'
import ModelTextBox2 from './modulesForByServices/modelTextBox2/ModelTextBox2'
import ModelVideo from './modulesForByServices/modelVideo/ModelVideo'
import ModelLastPicture from './modulesForByServices/modelLastPicture/ModelLastPicture'
import webDevelopmentVideo from "../../videos/webDevelopmentVideo.mp4"
import trans from '../Translate.js'
import { Context } from '../Context'

function WebDevelopment() {
	const {lang} = useContext(Context)

	return (
		<div className='Web Development'>

			<ModelPicture
				title={`${trans[lang].webDevelopmentTitle}`}
			/>

			<ModelTextBox1
				titleH3={`${trans[lang].webDevelopmentBoldTitle}`}
				textP={`${trans[lang].webDevelopmentText}`}
				titleH2={`${trans[lang].webDevelopmentDigits}`}
			/>

			<ModelTextBox2
				text={`${trans[lang].webDevelopmentBlackBoxText}`}
			/>

			<ModelVideo
				videoSRC={webDevelopmentVideo}
				titleH3={`${trans[lang].webDevelopmentVideoTitle}`}
				text1={`${trans[lang].webDevelopmentText1}`}
				text2={`${trans[lang].webDevelopmentText2}`}
				text3={`${trans[lang].webDevelopmentText3}`}
				text4={`${trans[lang].webDevelopmentText4}`}
				text5={`${trans[lang].webDevelopmentText5}`}
			/>

			<ModelLastPicture
				titleH3={`${trans[lang].webDevelopmentLastStatement}`}
				contact={`${trans[lang].webDevelopmentContact}`}
			/>

		</div>
	)
}

export default WebDevelopment