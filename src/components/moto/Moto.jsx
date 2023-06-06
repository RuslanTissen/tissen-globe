import React from 'react'
import "./Moto.scss"
// import {BsFillBoxFill} from 'react-icons/bs'

function Moto() {
	return (
		<div className='moto'>
			<div className="moto__container">
				<div className="moto__first__container">
					<p>Tissen Way</p>
				</div>

				<div type='1' className="moto__second__container">
					<ol>
						<li>Expertise and <mark>cutting-edge</mark>  solutions.</li>
						<li><mark>Customized</mark> approach tailored to specific needs.</li>
						<li>Proven track record of<mark>successful implementations.</mark></li>
						<li>Comprehensive service portfolio for<mark>diverse technology</mark> needs.</li>
						<li>Customer-centric focus and strong client<mark>relationships.</mark></li>
					</ol>
				</div>

				{/* <div className="moto__third__container">
				</div> */}

			</div>
		</div>
	)
}

export default Moto
{/* <div className="icon"><BsFillBoxFill/></div> */ }
{/* <p>Tissen is a company that connects businesses to on-demand labor and individuals to immediate work in real-time. It’s a two-way street that works for everyone. For a better way to work—and a better way to live.</p> */ }