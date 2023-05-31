import React from 'react'
import "./Steps.scss"
import req1 from "../../images/requirements1.jpg"
import req2 from "../../images/requirement2.jpg"
import req3 from "../../images/requirements3.jpg"
import { MdOutlineBusinessCenter } from "react-icons/md"
import { TbPigMoney } from "react-icons/tb"
import { GiSandsOfTime } from "react-icons/gi"

function Steps() {
	return (
		<div className='steps'>
			<div className="steps__container">
				<div className="steps__container__1"><img src={req1} alt="" /></div>
				<div className="steps__container__2 steps__container__2__border-top">
					<h3>Business requirements.</h3>
					<div className="circle__container">
						<div className="circule"><MdOutlineBusinessCenter /></div>
					</div>
					<p>Our outsourcing company specializes in delivering comprehensive solutions that perfectly align with the specific business requirements of our clients, ensuring optimal efficiency and success.</p>				</div>
			</div>

			<div className="steps__container">
				<div className="steps__container__1 steps__container__1__revers"><img src={req2} alt="" /></div>
				<div className="steps__container__2  steps__container__2__revers">
					<h3>Budget save.</h3>
					<div className="circle__container">
						<div className="circule"><TbPigMoney /></div>
					</div>
					<p>Partner with our outsourcing company and experience significant budget savings without compromising on quality.</p>
				</div>
			</div>

			<div className="steps__container">
				<div className="steps__container__1"><img src={req3} alt="" /></div>
				<div className="steps__container__2 steps__container__2__border-bottom">
					<h3>Time saving.</h3>
					<div className="circle__container">
						<div className="circule"><GiSandsOfTime /></div>
					</div>
					<p>We offer expedited development services to accelerate your project timeline and deliver high-quality solutions within tight deadlines.</p>
				</div>
			</div>
		</div>
	)
}

export default Steps