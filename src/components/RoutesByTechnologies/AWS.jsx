import React, { useContext } from 'react'
import { Context } from '../Context'
import trans from '../Translate'
import techVideo from "../../videos/AWSVideo.mp4"
import pic1 from "../../images/AWS1smallImage.png"
import pic2 from "../../images/AWS2smallImage.png"
import pic3 from "../../images/AWS3smallImage.png"
import pic4 from "../../images/AWS4smallImage.png"
import chart from "../../images/AWSChart.png"
import ModelTechPicture from './modelsForTech/modelTechPicture/ModelTechPicture'
import ModelVideoTech from './modelsForTech/modelVideoTech/ModelVideoTech'
import ModelTechPicture2 from './modelsForTech/modelTechPicture2/ModelTechPicture2'
import ModelLastBlock from './modelsForTech/modelLastBlock/ModelLastBlock'
import { FaAws } from 'react-icons/fa'

function AWS() {
	const { lang } = useContext(Context)

  return (
	 <div>
			
		<ModelTechPicture
				title={`${trans[lang].AWSTitle}`}
			/>

			<ModelVideoTech
				h3Text={`${trans[lang].AWSText1}`}
				videoSRC={techVideo}
				contact={`${trans[lang].TechContact}`}
			/>

			<ModelTechPicture2
				pic1={pic1}
				pic2={pic2}
				pic3={pic3}
				pic4={pic4}
				text1={`${trans[lang].AWSSmallText1}`}
				text2={`${trans[lang].AWSSmallText2}`}
				text3={`${trans[lang].AWSSmallText3}`}
				text4={`${trans[lang].AWSSmallText4}`}
			/>

			<ModelLastBlock
				h3Text={`${trans[lang].AWSText2}`}
				chart={chart}
				logo={<FaAws />}
			/>


	 </div>
  )
}

export default AWS