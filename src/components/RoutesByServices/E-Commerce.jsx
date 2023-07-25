import React, { useContext } from 'react'
import ModelPicture from './modulesForByServices/modelPicture/ModelPicture'
import ModelTextBox1 from './modulesForByServices/modelTextBox1/ModelTextBox1'
import ModelTextBox2 from './modulesForByServices/modelTextBox2/ModelTextBox2'
import ModelVideo from './modulesForByServices/modelVideo/ModelVideo'
import EComerceVideo from "../../videos/EComerceVideo.mp4"
import ModelLastPicture from './modulesForByServices/modelLastPicture/ModelLastPicture'
import trans from '../Translate.js'
import { Context } from '../Context'

function E_Commerce() {
	const {lang} = useContext(Context)

	return (
		<div className='networkSecurity'>

			<ModelPicture
				title={`${trans[lang].networkEComerceTitle}`}
			/>

			<ModelTextBox1
				titleH3={`${trans[lang].networkEComerceBoldTitle}`}
				textP={`${trans[lang].networkEComerceText}`}
				titleH2={`${trans[lang].networkEComerce80}`}
			/>

			<ModelTextBox2
				text={`${trans[lang].networkEComerceBlackBoxText}`}
			/>

			<ModelVideo
				videoSRC={EComerceVideo}
				titleH3={`${trans[lang].networkEComerceVideoTitle}`}
				text1={`${trans[lang].networkEComerceText1}`}
				text2={`${trans[lang].networkEComerceText2}`}
				text3={`${trans[lang].networkEComerceText3}`}
				text4={`${trans[lang].networkEComerceText4}`}
				text5={`${trans[lang].networkEComerceText5}`}
			/>

			<ModelLastPicture
				titleH3={`${trans[lang].networkEComerceLastStatement}`}
				contact={`${trans[lang].networkEComerceContact}`}
			/>

		</div>
	)
}

export default E_Commerce