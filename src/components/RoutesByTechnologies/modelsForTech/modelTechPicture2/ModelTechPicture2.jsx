import React from 'react'
import "./ModelTechPicture2.scss"
import { FourBlocksWithPic } from '../../../../styledComponents/fourBlocksWithCentralPic'

function ModelTechPicture2(props) {
	let { pic1, pic2, pic3, pic4, text1, text2, text3, text4 } = props

	return (
		<FourBlocksWithPic className='modelTechPicture2'>
			<section className="modelTechPicture2__container">
				<div className="modelTechPicture2__container__blocks">
					<div className="modelTechPicture2__container__blocks_img_box">
						<img src={pic1} alt="" />
					</div>
					<p> {text1}</p>
				</div>
				<div className="modelTechPicture2__container__blocks">
					<div className="modelTechPicture2__container__blocks_img_box">
						<img src={pic2} alt="" />
					</div>
					<p>{text2}</p>
				</div>
				<div className="modelTechPicture2__container__blocks">
					<div className="modelTechPicture2__container__blocks_img_box">
						<img src={pic3} alt="" />
					</div>
					<p>{text3}</p>
				</div>
				<div className="modelTechPicture2__container__blocks">
					<div className="modelTechPicture2__container__blocks_img_box">
						<img src={pic4} alt="" />
					</div>
					<p>{text4}</p>
				</div>
			</section>
		</FourBlocksWithPic>
	)
}

export default ModelTechPicture2