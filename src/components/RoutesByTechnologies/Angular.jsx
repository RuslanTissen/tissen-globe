import React, { useContext } from 'react'
import techVideo from "../../videos/AngularVideo.mp4"
import pic1 from "../../images/Angular1smallImage.png"
import pic2 from "../../images/Angular2smallImage.png"
import pic3 from "../../images/Angular3smallImage.png"
import pic4 from "../../images/Angular4smallImage.png"
import chart from "../../images/AngularChart.png"
import ModelTechPicture from './modelsForTech/modelTechPicture/ModelTechPicture'
import ModelVideoTech from './modelsForTech/modelVideoTech/ModelVideoTech'
import ModelTechPicture2 from './modelsForTech/modelTechPicture2/ModelTechPicture2'
import ModelLastBlock from './modelsForTech/modelLastBlock/ModelLastBlock'
import { TbBrandAngular } from 'react-icons/tb'
import { Context } from '../Context'
import trans from '../Translate'

function Angular() {
	const { lang } = useContext(Context)

	return (
		<div>

			<ModelTechPicture
				title={`${trans[lang].AngularTitle}`}
			/>

			<ModelVideoTech
				h3Text={`${trans[lang].AngularText1}`}
				videoSRC={techVideo}
				contact={`${trans[lang].TechContact}`}
			/>

			<ModelTechPicture2
				pic1={pic1}
				pic2={pic2}
				pic3={pic3}
				pic4={pic4}
				text1={`${trans[lang].AngularSmallText1}`}
				text2={`${trans[lang].AngularSmallText2}`}
				text3={`${trans[lang].AngularSmallText3}`}
				text4={`${trans[lang].AngularSmallText4}`}
			/>

			<ModelLastBlock
				h3Text={`${trans[lang].AngularText2}`}
				chart={chart}
				logo={<TbBrandAngular />}
			/>

		</div>
	)
}

export default Angular