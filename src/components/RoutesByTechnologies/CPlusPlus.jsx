import React, { useContext } from 'react'
import { Context } from '../Context'
import trans from '../Translate'
import techVideo from "../../videos/FigmaVideo.mp4"
import pic1 from "../../images/CPlusPlus1smallImage.png"
import pic2 from "../../images/CPlusPlus2smallImage.png"
import pic3 from "../../images/CPlusPlus3smallImage.png"
import pic4 from "../../images/CPlusPlus4smallImage.png"
import chart from "../../images/CPlusPlusChart.png"
import ModelTechPicture from './modelsForTech/modelTechPicture/ModelTechPicture'
import ModelVideoTech from './modelsForTech/modelVideoTech/ModelVideoTech'
import ModelTechPicture2 from './modelsForTech/modelTechPicture2/ModelTechPicture2'
import ModelLastBlock from './modelsForTech/modelLastBlock/ModelLastBlock'
import { SiCplusplus } from 'react-icons/si'

function CPlusPlus() {
	const { lang } = useContext(Context)

	return (
		<div>

			<ModelTechPicture
				title={`${trans[lang].CPlusPlusTitle}`}
			/>

			<ModelVideoTech
				h3Text={`${trans[lang].CPlusPlusText1}`}
				videoSRC={techVideo}
				contact={`${trans[lang].TechContact}`}
			/>

			<ModelTechPicture2
				pic1={pic1}
				pic2={pic2}
				pic3={pic3}
				pic4={pic4}
				text1={`${trans[lang].CPlusPlusSmallText1}`}
				text2={`${trans[lang].CPlusPlusSmallText2}`}
				text3={`${trans[lang].CPlusPlusSmallText3}`}
				text4={`${trans[lang].CPlusPlusSmallText4}`}
			/>

			<ModelLastBlock
				h3Text={`${trans[lang].CPlusPlusText2}`}
				chart={chart}
				logo={<SiCplusplus />}
			/>

		</div>
	)
}

export default CPlusPlus