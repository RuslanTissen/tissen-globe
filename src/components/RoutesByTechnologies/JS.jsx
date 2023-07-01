import React from 'react'
import ModelTechPicture from './modelsForTech/modelTechPicture/ModelTechPicture.jsx'
import ModelVideoTech from './modelsForTech/modelVideoTech/ModelVideoTech.jsx'
import techVideo from "../../videos/techVideo.mp4"
import ModelTechPicture2 from './modelsForTech/modelTechPicture2/ModelTechPicture2.jsx'
import pic1 from "../../images/techPicture2Small1.png"
import pic2 from "../../images/techPicture2Small2.png"
import pic3 from "../../images/techPicture2Small3.png"
import pic4 from "../../images/techPicture2Small4.png"

function JS() {
	return (
		<div>

			<ModelTechPicture
				title={"Javascript"}
			/>

			<ModelVideoTech
				videoSRC={techVideo}
				contact={"get more information"}
			/>

			<ModelTechPicture2
				pic1={pic1}
				pic2={pic2}
				pic3={pic3}
				pic4={pic4}
				text1={"Object-oriented: JavaScript supports object-oriented programming (OOP) principles, allowing developers to create and work with objects, classes, and inheritance."}
				text2={"Rich ecosystem: JavaScript has a vast ecosystem of libraries, frameworks, and tools that extend its capabilities and simplify development. Popular frameworks include React.js, AngularJS, and Vue.js."}
				text3={"Versatility: JavaScript is a versatile language that can be used for a wide range of applications, including web development, mobile app development, game development, server-side scripting, and more."}
				text4={"Client-side scripting: JavaScript code runs on the client-side (in the user's web browser) and can interact with the Document Object Model (DOM) to manipulate webpage elements, handle user events, and dynamically update the content of web pages."}
			/>


		</div>
	)
}

export default JS