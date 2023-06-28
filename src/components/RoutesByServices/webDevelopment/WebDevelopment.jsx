import React from 'react'
import SoftwarePicture from '../softwareDevelopment/softwarePicture/SoftwarePicture'
import SoftwareTextBox1 from '../softwareDevelopment/softwareTextBox1/SoftwareTextBox1'
import SoftwareTextBox2 from '../softwareDevelopment/softwareTextBox2/SoftwareTextBox2'
import SoftwareVideo from '../softwareDevelopment/softwareVideo/SoftwareVideo'
import SoftwareLastPicture from '../softwareDevelopment/softwareLastPicture/SoftwareLastPicture'
import webDevelopmentVideo from "../../../videos/webDevelopmentVideo.mp4"

function WebDevelopment() {
	return (
		<div className='Web Development'>

			<SoftwarePicture
				title={"Software Development"}
			/>

			<SoftwareTextBox1
				titleH3={"Your website is the digital face of your business, and at Tissen, we specialize in crafting impactful and custom web solutions."}
				textP={"Our skilled team of web developers combines technical expertise with creative flair to deliver websites that captivate audiences and drive results. Whether you need a sleek and professional corporate website, a dynamic e-commerce platform, or a cutting-edge web application, we have the experience and capabilities to bring your vision to life. We follow industry best practices and the latest web standards to ensure your website is responsive, user-friendly, and optimized for performance across devices. From front-end development using modern frameworks to back-end programming and content management system integration, we leverage our expertise to build websites that enhance your brand, engage your users, and achieve your business objectives."}
				titleH2={"Slow-loading websites lead to a 7% loss in conversions per second - Google"}
			/>

			<SoftwareTextBox2
				text={"Web development is a core service offered by our IT outsourcing company. It refers to the process of creating and maintaining websites, encompassing various aspects such as web design, front-end development, back-end programming, and content management. "}
			/>

			<SoftwareVideo
				videoSRC={webDevelopmentVideo}
				titleH3={"At our IT outsourcing company, web development is at the heart of what we do. Here are five key points that define our approach to web development:"}
				text1={"Customized Solutions: We create tailored websites that align with clients' unique needs and objectives, ensuring a personalized online presence."}
				text2={"Responsive Design: Our websites adapt seamlessly to different devices and screen sizes, providing consistent and engaging user experiences."}
				text3={"Scalable Architecture: We build websites with scalability in mind, allowing for easy expansion and integration of new features as businesses grow."}
				text4={"User-Friendly CMS: We provide intuitive content management systems, enabling clients to update and maintain website content effortlessly."}
				text5={"Ongoing Support: We offer comprehensive support and maintenance services to ensure secure, up-to-date, and optimized websites for long-term success."}
			/>

			<SoftwareLastPicture
				titleH3={"Get your Web Development Project estimate now"}
			/>

		</div>
	)
}

export default WebDevelopment