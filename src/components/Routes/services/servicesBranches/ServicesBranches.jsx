import React from 'react'
import "./ServicesBranches.scss"
// import Card from 'react-bootstrap/Card';
import card1 from "../../../../images/services-card1.png"
import card2 from "../../../../images/services-card2.png"
import card3 from "../../../../images/services-card3.png"
import card4 from "../../../../images/services-card4.png"
import card5 from "../../../../images/services-card5.png"
import card6 from "../../../../images/services-card6.png"

function ServicesBranches() {
	return (
		<div className='services__branches'>
			<div className="services__branches__coontainer">
				<div className="services__branches__coontainer__boxes">
					<img src={card1} />
					<h3 className='title__include'>Software Development</h3>
					<p className='text__include'>Transform your ideas into reality with our custom software development services. Our expert developers will create tailored solutions that align with your business goals, delivering high-quality code and seamless user experiences.						</p>
				</div>
				<div className="services__branches__coontainer__boxes">
					<img src={card2} />
					<h3 className='title__include'>Network Security</h3>
					<p className='text__include'>Ensure the safety of your data and network infrastructure with our comprehensive network security services. We offer risk assessments, intrusion detection, firewall implementation, and ongoing monitoring to protect your valuable information from potential threats.						</p>
				</div>
				<div className="services__branches__coontainer__boxes">
					<img src={card3} />
					<h3 className='title__include'>Web Development</h3>
					<p className='text__include'>Create a captivating web presence with our web development services. We design and develop visually appealing and functional websites that reflect your brand identity and drive conversions.						</p>
				</div>
				<div className="services__branches__coontainer__boxes">
					<img src={card4} />
					<h3 className='title__include'>Cloud Hosting</h3>
					<p className='text__include'>Experience the benefits of flexible and reliable cloud hosting. Our experts will guide you through a seamless migration process, optimizing performance and reducing the burden of managing physical servers.						</p>
				</div>
				<div className="services__branches__coontainer__boxes">
					<img src={card5} />
					<h3 className='title__include'>Mobile Development</h3>
					<p className='text__include'>Reach your target audience on their preferred devices with our mobile development services. We specialize in building intuitive and feature-rich mobile applications for both iOS and Android platforms.		</p>
				</div>
				<div className="services__branches__coontainer__boxes">
					<img src={card6} />
					<h3 className='title__include'>UX/UI</h3>
					<p className='text__include'>Deliver exceptional user experiences with our UX/UI design services. Our designers combine aesthetics, usability, and functionality to create interfaces that engage users and drive customer satisfaction.		</p>
				</div>

			</div>

		</div>
	)
}

export default ServicesBranches





{/* <div className="services__branches__coontainer__boxes">
					<img src="" alt="" />
					<div className="text__container">
						<h3></h3>
						<p></p>
					</div>
				</div>
				<div className="services__branches__coontainer__boxes">
					<img src="" alt="" />
					<div className="text__container">
						<h3></h3>
						<p></p>
					</div>
				</div>
				<div className="services__branches__coontainer__boxes">
					<img src="" alt="" />
					<div className="text__container">
						<h3></h3>
						<p></p>
					</div>
				</div>
				<div className="services__branches__coontainer__boxes">
					<img src="" alt="" />
					<div className="text__container">
						<h3></h3>
						<p></p>
					</div>
				</div>
				<div className="services__branches__coontainer__boxes">
					<img src="" alt="" />
					<div className="text__container">
						<h3></h3>
						<p></p>
					</div>
				</div> */}