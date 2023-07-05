import React, { useContext } from 'react'
import ModelTechPicture from './modelsForTech/modelTechPicture/ModelTechPicture.jsx'
import ModelVideoTech from './modelsForTech/modelVideoTech/ModelVideoTech.jsx'
import techVideo from "../../videos/techVideo.mp4"
import ModelTechPicture2 from './modelsForTech/modelTechPicture2/ModelTechPicture2.jsx'
import pic1 from "../../images/techPicture2Small1.png"
import pic2 from "../../images/techPicture2Small2.png"
import pic3 from "../../images/techPicture2Small3.png"
import pic4 from "../../images/techPicture2Small4.png"
import ModelLastBlock from './modelsForTech/modelLastBlock/ModelLastBlock.jsx'
import chart from "../../images/jsChart.jpg"
import logo from "../../images/jsLogo.png"
import trans from '../Translate'
import { Context } from '../Context'
import { TbBrandJavascript } from "react-icons/tb"


function JS() {
	const { lang } = useContext(Context)

	return (
		<div>

			<ModelTechPicture
				title={`${trans[lang].JSTitle}`}
			/>

			<ModelVideoTech
				h3Text={`${trans[lang].JSText1}`}
				videoSRC={techVideo}
				contact={`${trans[lang].TechContact}`}
			/>

			<ModelTechPicture2
				pic1={pic1}
				pic2={pic2}
				pic3={pic3}
				pic4={pic4}
				text1={`${trans[lang].JSSmallText1}`}
				text2={`${trans[lang].JSSmallText2}`}
				text3={`${trans[lang].JSSmallText3}`}
				text4={`${trans[lang].JSSmallText4}`}
			/>

			<ModelLastBlock
				h3Text={`${trans[lang].JSText2}`}
				chart={chart}
				logo={<TbBrandJavascript />}
			/>

		</div>
	)
}

export default JS