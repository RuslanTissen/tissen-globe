import React from 'react'
import SoftwarePicture from '../softwareDevelopment/softwarePicture/SoftwarePicture'
import SoftwareTextBox1 from '../softwareDevelopment/softwareTextBox1/SoftwareTextBox1'
import SoftwareTextBox2 from '../softwareDevelopment/softwareTextBox2/SoftwareTextBox2'
import SoftwareVideo from '../softwareDevelopment/softwareVideo/SoftwareVideo'
import securityVideo from "../../../videos/securetyVideo.mp4"
import SoftwareLastPicture from '../softwareDevelopment/softwareLastPicture/SoftwareLastPicture'

function NetworkSecurity() {
	return (
		<div className='networkSecurity'>

			<SoftwarePicture
				title={"Network Security"}
			/>

			<SoftwareTextBox1
				titleH3={"Protecting your valuable digital assets from cyber threats is crucial in today's interconnected world. "}
				textP={"At Tissen, we offer comprehensive network security services to safeguard your organization's infrastructure and data. Our expert team employs industry-leading practices and cutting-edge technologies to provide robust and proactive network security solutions. From vulnerability assessments and penetration testing to implementing firewalls, intrusion detection systems, and secure remote access, we prioritize the confidentiality, integrity, and availability of your network resources. With our tailored security strategies and continuous monitoring, you can rest assured knowing that your network is fortified against unauthorized access, malware attacks, and data breaches."}
				titleH2={"Phishing attacks account for 80% of reported security incidents -  Proofpoint"}
			/>

			<SoftwareTextBox2
				text={"As an IT outsourcing company, network security is a critical aspect of our services. Network security refers to the practices and technologies employed to safeguard computer networks from unauthorized access, data breaches, and other potential threats. "}
			/>

			<SoftwareVideo
				videoSRC={securityVideo}
				titleH3={"At our IT outsourcing company, network security is a top priority. We understand that a strong network security foundation is crucial for businesses to operate safely in today's digital landscape. Here are five key points that highlight our approach to network security:"}
				text1={"Threat Prevention: We implement robust measures to detect and prevent unauthorized access, malware, and other potential threats to network infrastructure."}
				text2={"Data Encryption: We employ strong encryption methods to protect sensitive data in transit and at rest, ensuring confidentiality and data integrity."}
				text3={"Access Control: We enforce strict access controls and authentication mechanisms to ensure that only authorized individuals can access network resources."}
				text4={"Monitoring and Detection: We continuously monitor network traffic, logs, and security events to detect and respond to any suspicious activities or anomalies promptly."}
				text5={"Regular Updates and Patching: We maintain network security by keeping systems up-to-date with the latest security patches, firmware updates, and vulnerability fixes."}
			/>

			<SoftwareLastPicture
				titleH3={"Get your Network Security Project estimate now"}
			/>

		</div>
	)
}

export default NetworkSecurity