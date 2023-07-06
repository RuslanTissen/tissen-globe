import React, { useContext } from 'react'
import { Context } from '../Context'
import trans from '../Translate'
import techVideo from "../../videos/techVideo.mp4"
import pic1 from "../../images/Vue1smallImage.png"
import pic2 from "../../images/Vue2smallImage.png"
import pic3 from "../../images/Vue3smallImage.png"
import pic4 from "../../images/Vue4smallImage.png"
import chart from "../../images/VueChart.png"
import ModelTechPicture from './modelsForTech/modelTechPicture/ModelTechPicture'
import ModelVideoTech from './modelsForTech/modelVideoTech/ModelVideoTech'
import ModelTechPicture2 from './modelsForTech/modelTechPicture2/ModelTechPicture2'
import ModelLastBlock from './modelsForTech/modelLastBlock/ModelLastBlock'
import { TbBrandVue } from 'react-icons/tb' 


function Vue() {
	const { lang } = useContext(Context)

  return (
	 <div>
		
		<ModelTechPicture
				title={`${trans[lang].VueTitle}`}
			/>

			<ModelVideoTech
				h3Text={`${trans[lang].VueText1}`}
				videoSRC={techVideo}
				contact={`${trans[lang].TechContact}`}
			/>

			<ModelTechPicture2
				pic1={pic1}
				pic2={pic2}
				pic3={pic3}
				pic4={pic4}
				text1={`${trans[lang].VueSmallText1}`}
				text2={`${trans[lang].VueSmallText2}`}
				text3={`${trans[lang].VueSmallText3}`}
				text4={`${trans[lang].VueSmallText4}`}
			/>

			<ModelLastBlock
				h3Text={`${trans[lang].VueText2}`}
				chart={chart}
				logo={<TbBrandVue />}
			/>

	 </div>
  )
}

export default Vue