import React, { useContext } from 'react'
import { Context } from '../Context'
import trans from '../Translate'
import techVideo from "../../videos/MUIVideo.mp4"
import pic1 from "../../images/MUI1smallImage.png"
import pic2 from "../../images/MUI2smallImage.png"
import pic3 from "../../images/MUI3smallImage.png"
import pic4 from "../../images/MUI4smallImage.png"
import chart from "../../images/MUIChart.png"
import ModelTechPicture from './modelsForTech/modelTechPicture/ModelTechPicture'
import ModelVideoTech from './modelsForTech/modelVideoTech/ModelVideoTech'
import ModelTechPicture2 from './modelsForTech/modelTechPicture2/ModelTechPicture2'
import ModelLastBlock from './modelsForTech/modelLastBlock/ModelLastBlock'
import { SiMui } from 'react-icons/si'

function MUI() {
	const { lang } = useContext(Context)

  return (
	 <div>
		
		<ModelTechPicture
				title={`${trans[lang].MUITitle}`}
			/>

			<ModelVideoTech
				h3Text={`${trans[lang].MUIText1}`}
				videoSRC={techVideo}
				contact={`${trans[lang].TechContact}`}
			/>

			<ModelTechPicture2
				pic1={pic1}
				pic2={pic2}
				pic3={pic3}
				pic4={pic4}
				text1={`${trans[lang].MUISmallText1}`}
				text2={`${trans[lang].MUISmallText2}`}
				text3={`${trans[lang].MUISmallText3}`}
				text4={`${trans[lang].MUISmallText4}`}
			/>

			<ModelLastBlock
				h3Text={`${trans[lang].MUIText2}`}
				chart={chart}
				logo={<SiMui />}
			/>

	 </div>
  )
}

export default MUI