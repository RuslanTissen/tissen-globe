import React, { useContext } from 'react'
import techVideo from "../../videos/GCPVideo.mp4"
import pic1 from "../../images/GCP1smallImage.png"
import pic2 from "../../images/GCP2smallImage.png"
import pic3 from "../../images/GCP3smallImage.png"
import pic4 from "../../images/GCP4smallImage.png"
import chart from "../../images/GCPLastBlockBigImg.png"
import logo from "../../images/GCPLogo.png"
import ModelTechPicture from './modelsForTech/modelTechPicture/ModelTechPicture'
import ModelVideoTech from './modelsForTech/modelVideoTech/ModelVideoTech'
import ModelTechPicture2 from './modelsForTech/modelTechPicture2/ModelTechPicture2'
import ModelLastBlock from './modelsForTech/modelLastBlock/ModelLastBlock'
import trans from '../Translate'
import { Context } from '../Context'

function GCP() {
	const {lang} = useContext(Context)

	return (
		<div>

			<ModelTechPicture
				title={`${trans[lang].GCPTitle}`}
			/>

			<ModelVideoTech
				h3Text={`${trans[lang].GCPText1}`}
				videoSRC={techVideo}
				contact={`${trans[lang].TechContact}`}
			/>

			<ModelTechPicture2
				pic1={pic1}
				pic2={pic2}
				pic3={pic3}
				pic4={pic4}
				text1={`${trans[lang].GCPSmallText1}`}
				text2={`${trans[lang].GCPSmallText2}`}
				text3={`${trans[lang].GCPSmallText3}`}
				text4={`${trans[lang].GCPSmallText4}`}
			/>

			<ModelLastBlock
				h3Text={`${trans[lang].GCPText2}`}
				chart={chart}
				logo={logo}
			/>

		</div>
	)
}

export default GCP