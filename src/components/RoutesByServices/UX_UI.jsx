import React, { useContext } from 'react'
import ModelPicture from './modulesForByServices/modelPicture/ModelPicture'
import ModelTextBox1 from './modulesForByServices/modelTextBox1/ModelTextBox1'
import ModelTextBox2 from './modulesForByServices/modelTextBox2/ModelTextBox2'
import ModelVideo from './modulesForByServices/modelVideo/ModelVideo'
import ModelLastPicture from './modulesForByServices/modelLastPicture/ModelLastPicture'
import ux_uiVideo from "../../videos/ux_uiVideo.mp4"
import trans from '../Translate.js'
import { Context } from '../Context'

function UX_UI() {
	const { lang } = useContext(Context)

	return (
		<div className='ux_ui'>

			<ModelPicture
				title={`${trans[lang].uxUiTitle}`}
			/>

			<ModelTextBox1
				titleH3={`${trans[lang].uxUiBoldTitle}`}
				textP={`${trans[lang].uxUiText}`}
				titleH2={`${trans[lang].uxUiDigits}`}
			/>

			<ModelTextBox2
				text={`${trans[lang].uxUiBlackBoxText}`}
			/>

			<ModelVideo
				videoSRC={ux_uiVideo}
				titleH3={`${trans[lang].uxUiVideoTitle}`}
				text1={`${trans[lang].uxUiText1}`}
				text2={`${trans[lang].uxUiText2}`}
				text3={`${trans[lang].uxUiText3}`}
				text4={`${trans[lang].uxUiText4}`}
				text5={`${trans[lang].uxUiText5}`}
			/>

			<ModelLastPicture
				titleH3={`${trans[lang].uxUiLastStatement}`}
				contact={`${trans[lang].uxUiContact}`}
			/>

		</div>
	)
}

export default UX_UI