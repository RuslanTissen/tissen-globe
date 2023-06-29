import React, { useContext } from 'react'
import SoftwarePicture from './modulesForByServices/modelPicture/ModelPicture'
import SoftwareTextBox1 from './modulesForByServices/modelTextBox1/ModelTextBox1'
import SoftwareTextBox2 from './modulesForByServices/modelTextBox2/ModelTextBox2'
import SoftwareVideo from './modulesForByServices/modelVideo/ModelVideo'
import securityVideo from "../../videos/securetyVideo.mp4"
import SoftwareLastPicture from './modulesForByServices/modelLastPicture/ModelLastPicture'
import trans from '../Translate.js'
import { Context } from '../Context'

function NetworkSecurity() {
	const {lang} = useContext(Context)

	return (
		<div className='networkSecurity'>

			<SoftwarePicture
				title={`${trans[lang].networkSecurityTitle}`}
			/>

			<SoftwareTextBox1
				titleH3={`${trans[lang].networkSecurityBoldTitle}`}
				textP={`${trans[lang].networkSecurityText}`}
				titleH2={`${trans[lang].networkSecurity80}`}
			/>

			<SoftwareTextBox2
				text={`${trans[lang].networkSecurityBlackBoxText}`}
			/>

			<SoftwareVideo
				videoSRC={securityVideo}
				titleH3={`${trans[lang].networkSecurityVideoTitle}`}
				text1={`${trans[lang].networkSecurityText1}`}
				text2={`${trans[lang].networkSecurityText2}`}
				text3={`${trans[lang].networkSecurityText3}`}
				text4={`${trans[lang].networkSecurityText4}`}
				text5={`${trans[lang].networkSecurityText5}`}
			/>

			<SoftwareLastPicture
				titleH3={`${trans[lang].networkSecurityLastStatement}`}
				contact={`${trans[lang].networkSecurityContact}`}
			/>

		</div>
	)
}

export default NetworkSecurity