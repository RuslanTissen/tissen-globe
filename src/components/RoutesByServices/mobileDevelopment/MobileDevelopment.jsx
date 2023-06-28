import React from 'react'
import SoftwarePicture from '../softwareDevelopment/softwarePicture/SoftwarePicture'
import SoftwareTextBox1 from '../softwareDevelopment/softwareTextBox1/SoftwareTextBox1'
import SoftwareTextBox2 from '../softwareDevelopment/softwareTextBox2/SoftwareTextBox2'
import SoftwareVideo from '../softwareDevelopment/softwareVideo/SoftwareVideo'
import SoftwareLastPicture from '../softwareDevelopment/softwareLastPicture/SoftwareLastPicture'
import mobileDevelopmentVideo from "../../../videos/mobileDevelopmentVideo.mp4"

function MobileDevelopment() {
	return (
		<div className='mobileDevelopment'>

			<SoftwarePicture
				title={"Mobile Development"}
			/>

			<SoftwareTextBox1
				titleH3={"In today's mobile-first world, having a powerful and engaging mobile presence is essential for businesses to reach their target audience effectively."}
				textP={"At Tissen, we specialize in mobile app development, delivering innovative and user-centric solutions for iOS and Android platforms. Our experienced team of mobile developers is skilled in creating intuitive and feature-rich applications that seamlessly integrate with the latest mobile technologies and devices. From ideation and concept development to design, coding, and testing, we follow industry best practices and agile methodologies to ensure timely delivery of high-quality apps. Whether you need a consumer-facing app, enterprise solution, or cross-platform development, we harness the power of mobile technology to bring your ideas to life and provide users with exceptional mobile experiences."}
				titleH2={"As of 2021, there were over 3.8 million apps available on the Google Play Store and 2.2 million apps on the Apple App Store - Statista"}
			/>

			<SoftwareTextBox2
				text={"Mobile development is a specialized service offered by our IT outsourcing company, focusing on the creation of mobile applications for various platforms such as iOS and Android."}
			/>

			<SoftwareVideo
				videoSRC={mobileDevelopmentVideo}
				titleH3={"At our IT outsourcing company, we excel in mobile development services, delivering innovative and high-performance mobile applications. Here are five key points that define our approach to mobile development:"}
				text1={"Cross-Platform Compatibility: We create mobile applications that work seamlessly across multiple platforms, reaching a broader audience and minimizing development costs."}
				text2={"User-Centric Design: Our mobile apps prioritize intuitive interfaces and engaging user experiences, based on thorough user research and testing."}
				text3={"Performance Optimization: We optimize mobile app performance, ensuring fast loading times, responsiveness, and efficient resource utilization."}
				text4={"Integration and Backend Support: Our mobile apps seamlessly integrate with existing systems, databases, and APIs, providing secure data transfer and real-time synchronization."}
				text5={"Continuous Maintenance and Updates: We offer ongoing support, including bug fixes, performance enhancements, and compatibility updates to keep mobile apps up-to-date and optimized."}
			/>

			<SoftwareLastPicture
				titleH3={"Get your Mobile Development Project estimate now"}
			/>

		</div>
	)
}

export default MobileDevelopment