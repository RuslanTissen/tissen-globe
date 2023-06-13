import React from 'react'
import "./ServicesBranches.scss"
import Card from 'react-bootstrap/Card';
import card1 from "../../../images/services-card1.png"
import card2 from "../../../images/services-card2.png"
import card3 from "../../../images/services-card3.png"
import card4 from "../../../images/services-card4.png"
import card5 from "../../../images/services-card5.png"
import card6 from "../../../images/services-card6.png"

function ServicesBranches() {
	return (
		<div className='services__branches'>
			<div className="services__branches__coontainer">
				<Card className="services__branches__coontainer__boxes">
					<Card.Img src={card1} />
					<Card.Body>
						<Card.Title>Software Development</Card.Title>
						<Card.Text>Transform your ideas into reality with our custom software development services. Our expert developers will create tailored solutions that align with your business goals, delivering high-quality code and seamless user experiences.						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="services__branches__coontainer__boxes">
					<Card.Img  src={card2}/>
					<Card.Body>
						<Card.Title>Network Security</Card.Title>
						<Card.Text>Ensure the safety of your data and network infrastructure with our comprehensive network security services. We offer risk assessments, intrusion detection, firewall implementation, and ongoing monitoring to protect your valuable information from potential threats.						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="services__branches__coontainer__boxes">
					<Card.Img  src={card3}/>
					<Card.Body>
						<Card.Title>Web Development</Card.Title>
						<Card.Text>Create a captivating web presence with our web development services. We design and develop visually appealing and functional websites that reflect your brand identity and drive conversions.						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="services__branches__coontainer__boxes">
					<Card.Img  src={card4}/>
					<Card.Body>
						<Card.Title>Cloud Hosting</Card.Title>
						<Card.Text>Experience the benefits of flexible and reliable cloud hosting. Our experts will guide you through a seamless migration process, optimizing performance and reducing the burden of managing physical servers.						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="services__branches__coontainer__boxes">
					<Card.Img  src={card5}/>
					<Card.Body>
						<Card.Title>Mobile Development</Card.Title>
						<Card.Text>Reach your target audience on their preferred devices with our mobile development services. We specialize in building intuitive and feature-rich mobile applications for both iOS and Android platforms.		</Card.Text>
					</Card.Body>
				</Card>
				<Card className="services__branches__coontainer__boxes">
					<Card.Img src={card6}/>
					<Card.Body>
						<Card.Title>UX/UI</Card.Title>
						<Card.Text>Deliver exceptional user experiences with our UX/UI design services. Our designers combine aesthetics, usability, and functionality to create interfaces that engage users and drive customer satisfaction.		</Card.Text>
					</Card.Body>
				</Card>




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
			</div>

		</div>
	)
}

export default ServicesBranches