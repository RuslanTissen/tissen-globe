import React, { useContext } from 'react'
import { Context } from '../Context'
import trans from '../Translate'
import techVideo from "../../videos/FigmaVideo.mp4"
import pic1 from "../../images/Figma1smallImage.png"
import pic2 from "../../images/Figma2smallImage.png"
import pic3 from "../../images/Figma3smallImage.png"
import pic4 from "../../images/Figma4smallImage.png"
import chart from "../../images/FigmaChart.png"
import ModelTechPicture from './modelsForTech/modelTechPicture/ModelTechPicture'
import ModelVideoTech from './modelsForTech/modelVideoTech/ModelVideoTech'
import ModelTechPicture2 from './modelsForTech/modelTechPicture2/ModelTechPicture2'
import ModelLastBlock from './modelsForTech/modelLastBlock/ModelLastBlock'
import { TbBrandFigma } from 'react-icons/tb'

function Figma() {
	const { lang } = useContext(Context)

  return (
	 <div>
		
		<ModelTechPicture
				title={`${trans[lang].FigmaTitle}`}
			/>

			<ModelVideoTech
				h3Text={`${trans[lang].FigmaText1}`}
				videoSRC={techVideo}
				contact={`${trans[lang].TechContact}`}
			/>

			<ModelTechPicture2
				pic1={pic1}
				pic2={pic2}
				pic3={pic3}
				pic4={pic4}
				text1={`${trans[lang].FigmaSmallText1}`}
				text2={`${trans[lang].FigmaSmallText2}`}
				text3={`${trans[lang].FigmaSmallText3}`}
				text4={`${trans[lang].FigmaSmallText4}`}
			/>

			<ModelLastBlock
				h3Text={`${trans[lang].FigmaText2}`}
				chart={chart}
				logo={<TbBrandFigma />}
			/>

	 </div>
  )
}

export default Figma