import React from 'react'
import SoftwarePicture from '../softwareDevelopment/softwarePicture/SoftwarePicture'
import SoftwareTextBox1 from '../softwareDevelopment/softwareTextBox1/SoftwareTextBox1'
import SoftwareTextBox2 from '../softwareDevelopment/softwareTextBox2/SoftwareTextBox2'
import SoftwareVideo from '../softwareDevelopment/softwareVideo/SoftwareVideo'
import cloudHostingVideo from "../../../videos/cloudHostingVideo.mp4"
import SoftwareLastPicture from '../softwareDevelopment/softwareLastPicture/SoftwareLastPicture'

function CloudHosting() {
	return (
		<div className='cloudHosting'>

			<SoftwarePicture
				title={"Cloud Hosting"}
			/>

			<SoftwareTextBox1
				titleH3={"Unlock the power of cloud computing with our reliable and scalable cloud hosting solutions."}
				textP={"At Tissen, we offer robust cloud infrastructure and management services to help businesses optimize their operations and enhance their digital capabilities. With our cloud hosting services, you can benefit from flexible resource allocation, high availability, and seamless scalability to meet your evolving needs. Our expert team will assist you in migrating your applications and data to the cloud, ensuring a smooth transition and minimal disruption. Whether you require public, private, or hybrid cloud environments, we leverage industry-leading cloud platforms and advanced security measures to provide a secure and performance-driven hosting solution. Experience the agility, cost-efficiency, and reliability of cloud hosting with Tissen."}
				titleH2={"Organizations can achieve 30% to 70% cost savings by moving to the cloud - Forbes"}
			/>

			<SoftwareTextBox2
				text={"Cloud hosting is a service offered by our IT outsourcing company that provides businesses with a flexible and scalable infrastructure for hosting their applications, websites, and data on the cloud."}
			/>

			<SoftwareVideo
				videoSRC={cloudHostingVideo}
				titleH3={"At our IT outsourcing company, we specialize in providing cloud hosting services that empower businesses to harness the full potential of cloud computing. Here are five key points that define our approach to cloud hosting:"}
				text1={"Scalability: Cloud hosting allows businesses to scale resources up or down based on demand, ensuring flexibility and cost optimization."}
				text2={"High Availability: Cloud hosting provides a highly available infrastructure, minimizing downtime and ensuring uninterrupted access to applications and data."}
				text3={"Enhanced Security: Cloud hosting incorporates advanced security measures, including encryption and intrusion detection, to protect against unauthorized access and data breaches."}
				text4={"Cost Efficiency: Cloud hosting eliminates upfront hardware investments and offers a pay-as-you-go model, optimizing IT spending and resource allocation."}
				text5={"Managed Services and Support: Our cloud hosting services include managed services and dedicated support, handling server management, monitoring, backups, and performance optimization."}
			/>

			<SoftwareLastPicture
				titleH3={"Get your Cloud Hosting Project estimate now"}
			/>



		</div>
	)
}

export default CloudHosting