import React from 'react'
import ModelTechPicture from './modelsForTech/modelTechPicture/ModelTechPicture.jsx'
import ModelVideoTech from './modelsForTech/modelVideoTech/ModelVideoTech.jsx'
import techVideo from "../../videos/techVideo.mp4"

function JS() {
	return (
		<div>

			<ModelTechPicture 
			title={"Javascript"}
			/>

			<ModelVideoTech
			videoSRC={techVideo}
			/>


		</div>
	)
}

export default JS