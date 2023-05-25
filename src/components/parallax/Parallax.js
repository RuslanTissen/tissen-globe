import React from 'react'
import "./Parallax.scss"
import { Parallax } from 'react-parallax';
import office1 from "../../images/office1.jpg"

const Par = () => (
	<Parallax className='image' bgImage={office1} strength={800}>
		<Parallax className='image' bgImage={office1} strength={700}>
			<div className='content'>
				<span className='img-txt'>Go in office</span>
			</div>
		</Parallax>
	</Parallax>

);



export default Par









// function Par() {
//   return (
// 	<div>

// 	</div>
//   )
// }