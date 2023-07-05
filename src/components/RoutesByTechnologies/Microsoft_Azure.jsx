import React, { useContext } from 'react'
import techVideo from "../../videos/MicrosoftVideo.mp4"
import pic1 from "../../images/Microsoft1smallImage.png"
import pic2 from "../../images/Microsoft2smallImage.png"
import pic3 from "../../images/Microsoft3smallImage.png"
import pic4 from "../../images/Microsoft4smallImage.png"
import chart from "../../images/MicrosoftChart.png"
import ModelTechPicture from './modelsForTech/modelTechPicture/ModelTechPicture'
import ModelVideoTech from './modelsForTech/modelVideoTech/ModelVideoTech'
import ModelTechPicture2 from './modelsForTech/modelTechPicture2/ModelTechPicture2'
import ModelLastBlock from './modelsForTech/modelLastBlock/ModelLastBlock'
import trans from '../Translate'
import { Context } from '../Context'
import { SiMicrosoftazure } from "react-icons/si"

function Microsoft_Azure() {
	const { lang } = useContext(Context)

	return (
		<div>

			<ModelTechPicture
				title={`${trans[lang].Microsoft_AzureTitle}`}
			/>

			<ModelVideoTech
				h3Text={`${trans[lang].Microsoft_AzureText1}`}
				videoSRC={techVideo}
				contact={`${trans[lang].TechContact}`}
			/>

			<ModelTechPicture2
				pic1={pic1}
				pic2={pic2}
				pic3={pic3}
				pic4={pic4}
				text1={`${trans[lang].Microsoft_AzureSmallText1}`}
				text2={`${trans[lang].Microsoft_AzureSmallText2}`}
				text3={`${trans[lang].Microsoft_AzureSmallText3}`}
				text4={`${trans[lang].Microsoft_AzureSmallText4}`}
			/>

			<ModelLastBlock
				h3Text={`${trans[lang].Microsoft_AzureText2}`}
				chart={chart}
				logo={<SiMicrosoftazure />}
			/>

		</div>
	)
}

export default Microsoft_Azure