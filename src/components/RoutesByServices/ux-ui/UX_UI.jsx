import React from 'react'
import SoftwarePicture from '../softwareDevelopment/softwarePicture/SoftwarePicture'
import SoftwareTextBox1 from '../softwareDevelopment/softwareTextBox1/SoftwareTextBox1'
import SoftwareTextBox2 from '../softwareDevelopment/softwareTextBox2/SoftwareTextBox2'
import SoftwareVideo from '../softwareDevelopment/softwareVideo/SoftwareVideo'
import SoftwareLastPicture from '../softwareDevelopment/softwareLastPicture/SoftwareLastPicture'
import ux_uiVideo from "../../../videos/ux_uiVideo.mp4"

function UX_UI() {
	return (
		<div className='ux_ui'>


			<SoftwarePicture
				title={"UX/UI"}
			/>

			<SoftwareTextBox1
				titleH3={"At Tissen, we understand the critical role that user experience and user interface play in the success of digital products."}
				textP={"Our dedicated UX/UI design team combines creativity, user-centric design principles, and industry best practices to create intuitive and visually appealing interfaces that captivate users. We believe that a seamless and delightful user experience is the key to user engagement and customer satisfaction. From conducting user research and creating wireframes to crafting pixel-perfect designs and interactive prototypes, we ensure that every step of the design process is focused on delivering exceptional user experiences across various devices and platforms. By collaborating closely with our clients, we transform ideas into intuitive and visually stunning interfaces that elevate your digital products and drive business growth."}
				titleH2={"88% of online consumers are less likely to return to a website after a bad user experience - Econsultancy"}
			/>

			<SoftwareTextBox2
				text={"UX/UI (User Experience/User Interface) is a critical aspect of digital product design and development offered by our IT outsourcing company. It encompasses the strategic planning and implementation of intuitive user experiences and visually appealing interfaces for websites, mobile apps, and other digital platforms."}
			/>

			<SoftwareVideo
				videoSRC={ux_uiVideo}
				titleH3={"At our IT outsourcing company, we specialize in delivering exceptional UX/UI services to enhance the usability and aesthetic appeal of digital products. Here are five key points that define our approach to UX/UI:"}
				text1={"User-Centered Design: We prioritize understanding user needs and behaviors to create intuitive and user-friendly digital experiences."}
				text2={"Information Architecture: We organize content in a logical and intuitive manner, ensuring easy navigation and information retrieval."}
				text3={"Visual Design: Our designs are visually engaging, aligning with brand identity and captivating users."}
				text4={"Interaction Design: We create interactive elements and micro-interactions to enhance user engagement and provide a seamless experience."}
				text5={"Usability Testing and Iteration: We conduct rigorous testing and gather user feedback to continuously improve the UX/UI design."}
			/>

			<SoftwareLastPicture
				titleH3={"Get your UX/UI Project estimate now"}
			/>

		</div>
	)
}

export default UX_UI