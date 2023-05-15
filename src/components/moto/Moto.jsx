import React from 'react'
import "./Moto.scss"
import {BsPersonWorkspace} from 'react-icons/bs'

function Moto() {
  return (
	 <div className='moto'>
		<div className="moto__first-container">
			<p>How Tissen Works</p>
		</div>
		<div className="moto__second-container">
			<div className="icon"><BsPersonWorkspace/></div>
		</div>
		<div className="moto__third-container">
			<p>Tissen is a company that connects businesses to on-demand labor and individuals to immediate work in real-time. It’s a two-way street that works for everyone. For a better way to work—and a better way to live.</p>
		</div>
	 </div>
  )
}

export default Moto