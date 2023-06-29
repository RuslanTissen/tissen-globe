import React, { useContext } from 'react'
import ModelPicture from './modulesForByServices/modelPicture/ModelPicture'
import ModelTextBox1 from './modulesForByServices/modelTextBox1/ModelTextBox1'
import ModelTextBox2 from './modulesForByServices/modelTextBox2/ModelTextBox2'
import ModelVideo from './modulesForByServices/modelVideo/ModelVideo'
import cloudHostingVideo from "../../videos/cloudHostingVideo.mp4"
import ModelLastPicture from './modulesForByServices/modelLastPicture/ModelLastPicture'
import trans from '../Translate.js'
import { Context } from '../Context'

function CloudHosting() {
	const {lang} = useContext(Context)
	return (
		<div className='cloudHosting'>

			<ModelPicture
				title={`${trans[lang].cloudHostingTitle}`}
			/>

			<ModelTextBox1
				titleH3={`${trans[lang].cloudHostingBoldTitle}`}
				textP={`${trans[lang].cloudHostingText}`}
				titleH2={`${trans[lang].cloudHosting80}`}
			/>

			<ModelTextBox2
				text={`${trans[lang].cloudHostingBlackBoxText}`}
			/>

			<ModelVideo
				videoSRC={cloudHostingVideo}
				titleH3={`${trans[lang].cloudHostingVideoTitle}`}
				text1={`${trans[lang].cloudHostingText1}`}
				text2={`${trans[lang].cloudHostingText2}`}
				text3={`${trans[lang].cloudHostingText3}`}
				text4={`${trans[lang].cloudHostingText4}`}
				text5={`${trans[lang].cloudHostingText5}`}
			/>

			<ModelLastPicture
				titleH3={`${trans[lang].cloudHostingLastStatement}`}
				contact={`${trans[lang].cloudHostingContact}`}
			/>

		</div>
	)
}

export default CloudHosting