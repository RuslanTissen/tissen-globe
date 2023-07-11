import React, { useContext } from 'react'
import { Context } from '../Context'
import trans from '../Translate'
import techVideo from "../../videos/MySQLVideo.mp4"
import pic1 from "../../images/MySQL1smallImage.png"
import pic2 from "../../images/MySQL2smallImage.png"
import pic3 from "../../images/MySQL3smallImage.png"
import pic4 from "../../images/MySQL4smallImage.png"
import chart from "../../images/MySQLChart.png"
import ModelTechPicture from './modelsForTech/modelTechPicture/ModelTechPicture'
import ModelVideoTech from './modelsForTech/modelVideoTech/ModelVideoTech'
import ModelTechPicture2 from './modelsForTech/modelTechPicture2/ModelTechPicture2'
import ModelLastBlock from './modelsForTech/modelLastBlock/ModelLastBlock'
import { SiMysql } from 'react-icons/si'

function MySQL() {
	const { lang } = useContext(Context)

  return (
	 <div>
		
		<ModelTechPicture
				title={`${trans[lang].MySQLTitle}`}
			/>

			<ModelVideoTech
				h3Text={`${trans[lang].MySQLText1}`}
				videoSRC={techVideo}
				contact={`${trans[lang].TechContact}`}
			/>

			<ModelTechPicture2
				pic1={pic1}
				pic2={pic2}
				pic3={pic3}
				pic4={pic4}
				text1={`${trans[lang].MySQLSmallText1}`}
				text2={`${trans[lang].MySQLSmallText2}`}
				text3={`${trans[lang].MySQLSmallText3}`}
				text4={`${trans[lang].MySQLSmallText4}`}
			/>

			<ModelLastBlock
				h3Text={`${trans[lang].MySQLText2}`}
				chart={chart}
				logo={<SiMysql />}
			/>

	 </div>
  )
}

export default MySQL