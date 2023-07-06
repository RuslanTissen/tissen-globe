import React, { useContext } from 'react'
import { Context } from '../Context'
import trans from '../Translate'
import techVideo from "../../videos/PythonVideo.mp4"
import pic1 from "../../images/Python1smallImage.png"
import pic2 from "../../images/Python2smallImage.png"
import pic3 from "../../images/Python3smallImage.png"
import pic4 from "../../images/Python4smallImage.png"
import chart from "../../images/PythonChart.png"
import ModelTechPicture from './modelsForTech/modelTechPicture/ModelTechPicture'
import ModelVideoTech from './modelsForTech/modelVideoTech/ModelVideoTech'
import ModelTechPicture2 from './modelsForTech/modelTechPicture2/ModelTechPicture2'
import ModelLastBlock from './modelsForTech/modelLastBlock/ModelLastBlock'
import { FaPython } from 'react-icons/fa'

function Python() {
	const { lang } = useContext(Context)

  return (
	 <div>
		
		<ModelTechPicture
				title={`${trans[lang].PythonTitle}`}
			/>

			<ModelVideoTech
				h3Text={`${trans[lang].PythonText1}`}
				videoSRC={techVideo}
				contact={`${trans[lang].TechContact}`}
			/>

			<ModelTechPicture2
				pic1={pic1}
				pic2={pic2}
				pic3={pic3}
				pic4={pic4}
				text1={`${trans[lang].PythonSmallText1}`}
				text2={`${trans[lang].PythonSmallText2}`}
				text3={`${trans[lang].PythonSmallText3}`}
				text4={`${trans[lang].PythonSmallText4}`}
			/>

			<ModelLastBlock
				h3Text={`${trans[lang].PythonText2}`}
				chart={chart}
				logo={<FaPython />}
			/>

	 </div>
  )
}

export default Python