import React from 'react'
import "./HowAdvantages.scss"
import howAdvant1 from "../../../../images/howAdvant1.jpg"
import howAdvant2 from "../../../../images/howAdvant2.jpg"
import howAdvant3 from "../../../../images/howAdvant3.jpg"
import howAdvant4 from "../../../../images/howAdvant4.jpg"
import howAdvant5 from "../../../../images/howAdvant5.jpg"
import howAdvant6 from "../../../../images/howAdvant6.jpg"

function HowAdvantages() {
	return (
		<div className='howAdvantages'>
			<div className="howAdvantages__container">
				<h2 className='title__picture__include'>Advantages</h2>
				<div className="howAdvantages__container__boxes">
					<img src={howAdvant1} />
					<h3 className='title__include'>Cost Savings</h3>
					<p className='text__include'> We  lead to significant cost savings for businesses. It eliminates the need for hiring and training in-house IT staff, investing in infrastructure, and maintaining technology resources. Outsourcing providers often offer flexible pricing models that allow businesses to pay for services as needed.	</p>
				</div>
				<div className="howAdvantages__container__boxes">
					<img src={howAdvant2} />
					<h3 className='title__include'>Core Business</h3>
					<p className='text__include'>Outsourcing IT tasks allows businesses to focus on their core competencies and strategic objectives. By delegating IT responsibilities to external experts, companies can allocate more time and resources to activities that directly contribute to their growth and competitive advantage.						</p>
				</div>
				<div className="howAdvantages__container__boxes">
					<img src={howAdvant3} />
					<h3 className='title__include'>Risk Management</h3>
					<p className='text__include'>	We help mitigate risks associated with technology investments and management. Outsourcing providers typically have robust security measures, disaster recovery plans, and compliance frameworks in place, reducing the risk of data breaches, system failures, or regulatory non-compliance.</p>
				</div>
				<div className="howAdvantages__container__boxes">
					<img src={howAdvant4} />
					<h3 className='title__include'>Specialized Skills and Expertise</h3>
					<p className='text__include'> Tissen provides access to a pool of highly skilled professionals with specialized expertise. Outsourcing providers often have teams of professionals experienced in various technologies and industry best practices. This allows businesses to leverage the knowledge and skills of experts without the need for internal training or recruitment.			</p>
				</div>
				<div className="howAdvantages__container__boxes">
					<img src={howAdvant5} />
					<h3 className='title__include'>Scalability and Flexibility</h3>
					<p className='text__include'>Working with us provides scalability and flexibility to meet changing business needs. Businesses can easily scale up or down their IT resources based on demand, without the need for extensive infrastructure investments or long-term commitments.	</p>
				</div>
				<div className="howAdvantages__container__boxes">
					<img src={howAdvant6} />
					<h3 className='title__include'>Service Levels</h3>
					<p className='text__include'>Outsourcing IT services often comes with defined service level agreements (SLAs) that guarantee a certain level of performance and responsiveness. Providers focus on meeting or exceeding these SLAs, ensuring efficient and reliable IT operations for the business.	</p>
				</div>
			</div>
		</div>
	)
}

export default HowAdvantages