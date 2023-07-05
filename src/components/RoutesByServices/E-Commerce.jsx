import React, { useContext } from 'react'
import ModelPicture from './modulesForByServices/modelPicture/ModelPicture'
import ModelTextBox1 from './modulesForByServices/modelTextBox1/ModelTextBox1'
import ModelTextBox2 from './modulesForByServices/modelTextBox2/ModelTextBox2'
import ModelVideo from './modulesForByServices/modelVideo/ModelVideo'
import securityVideo from "../../videos/securetyVideo.mp4"
import ModelLastPicture from './modulesForByServices/modelLastPicture/ModelLastPicture'
import trans from '../Translate.js'
import { Context } from '../Context'

function E_Commerce() {
	const {lang} = useContext(Context)

	return (
		<div className='networkSecurity'>

			<ModelPicture
				title={`${trans[lang].networkSecurityTitle}`}
			/>

			<ModelTextBox1
				titleH3={`${trans[lang].networkSecurityBoldTitle}`}
				textP={`${trans[lang].networkSecurityText}`}
				titleH2={`${trans[lang].networkSecurity80}`}
			/>

			<ModelTextBox2
				text={`${trans[lang].networkSecurityBlackBoxText}`}
			/>

			<ModelVideo
				videoSRC={securityVideo}
				titleH3={`${trans[lang].networkSecurityVideoTitle}`}
				text1={`${trans[lang].networkSecurityText1}`}
				text2={`${trans[lang].networkSecurityText2}`}
				text3={`${trans[lang].networkSecurityText3}`}
				text4={`${trans[lang].networkSecurityText4}`}
				text5={`${trans[lang].networkSecurityText5}`}
			/>

			<ModelLastPicture
				titleH3={`${trans[lang].networkSecurityLastStatement}`}
				contact={`${trans[lang].networkSecurityContact}`}
			/>

		</div>
	)
}

export default E_Commerce