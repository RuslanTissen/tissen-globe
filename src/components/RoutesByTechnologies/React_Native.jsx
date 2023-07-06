import React, { useContext } from 'react'
import { Context } from '../Context'
import trans from '../Translate'
import { TbBrandReactNative } from 'react-icons/tb'
import techVideo from "../../videos/React_NativeVideo.mp4"
import pic1 from "../../images/React_Native1smallImage.png"
import pic2 from "../../images/React_Native2smallImage.png"
import pic3 from "../../images/React_Native3smallImage.png"
import pic4 from "../../images/React_Native4smallImage.png"
import chart from "../../images/React_NativeChart.png"
import ModelTechPicture from './modelsForTech/modelTechPicture/ModelTechPicture'
import ModelVideoTech from './modelsForTech/modelVideoTech/ModelVideoTech'
import ModelTechPicture2 from './modelsForTech/modelTechPicture2/ModelTechPicture2'
import ModelLastBlock from './modelsForTech/modelLastBlock/ModelLastBlock'

function React_Native() {
	const { lang } = useContext(Context)

  return (
	 <div>
		
		<ModelTechPicture
				title={`${trans[lang].React_NativeTitle}`}
			/>

			<ModelVideoTech
				h3Text={`${trans[lang].React_NativeText1}`}
				videoSRC={techVideo}
				contact={`${trans[lang].TechContact}`}
			/>

			<ModelTechPicture2
				pic1={pic1}
				pic2={pic2}
				pic3={pic3}
				pic4={pic4}
				text1={`${trans[lang].React_NativeSmallText1}`}
				text2={`${trans[lang].React_NativeSmallText2}`}
				text3={`${trans[lang].React_NativeSmallText3}`}
				text4={`${trans[lang].React_NativeSmallText4}`}
			/>

			<ModelLastBlock
				h3Text={`${trans[lang].React_NativeText2}`}
				chart={chart}
				logo={<TbBrandReactNative />}
			/>

	 </div>
  )
}

export default React_Native